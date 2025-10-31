<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
    system: (p: { message: string }) => void;
    ai_delta: (p: { delta: string }) => void;
    ai_message_done: (p: { text: string }) => void;
    session_ended: (p: { reason: string; score: string }) => void;
    error: (p: { message: string }) => void;
}
interface ClientToServerEvents {
    user_message: (p: { text: string }) => void;
}

// optional: ganti dengan import.meta.env.VITE_SOCKET_URL saat dev
const URL = import.meta.env.PROD ? undefined : 'http://localhost:3000';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);

const log = ref<string[]>([]);
const assembling = ref('');
const msg = ref('');

const push = (t: string) => log.value.push(t);

onMounted(() => {
    // HMR guard: pastikan tidak dobel listener saat hot reload
    socket.off();

    socket.on('system', (p) => push(`🔔 ${p.message}`));
    socket.on('ai_delta', (p) => (assembling.value += p.delta));
    socket.on('ai_message_done', (p) => {
        push(`🤖 ${p.text}`);
        assembling.value = '';
    });
    socket.on('session_ended', (p) => push(`📊 Sesi berakhir (${p.reason}).\n${p.score}`));
    socket.on('error', (p) => push(`⚠️ ${p.message}`));
    socket.on('connect_error', (err) => push(`⚠️ ${err.message}`));
});

onBeforeUnmount(() => {
    socket.removeAllListeners();
    socket.close();
});

const joinedLog = computed(() => log.value.join('\n'));

function submit() {
    const text = msg.value.trim();
    if (!text) return;
    push(`🧑 ${text}`);
    socket.emit('user_message', { text });
    msg.value = '';
}
</script>

<template>
    <div class="wrap">
        <div class="log" role="log" aria-live="polite">
            <pre>{{ joinedLog }}</pre>
        </div>
        <form @submit.prevent="submit">
            <input v-model="msg" placeholder="Ketik jawaban..." style="width:80%" />
            <button>Kirim</button>
        </form>
        <details v-if="assembling">
            <summary>Sedang menyusun token…</summary>
            <pre>{{ assembling }}</pre>
        </details>
    </div>
</template>

<style scoped>
.wrap {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    max-width: 720px;
    margin: 24px auto;
}

.log {
    white-space: pre-wrap;
    border: 1px solid #ddd;
    padding: 12px;
    min-height: 200px;
}
</style>
