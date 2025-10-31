<!-- App.vue -->
<template>
    <div>
        <header>
            <h1>Roleplay Chat</h1>
            <div>{{ isConnected ? "Online" : "Offline" }}</div>
        </header>

        <div>
            <div v-for="(m, i) in messages" :key="i">
                <strong>{{ m.role === 'ai' ? 'AI' : m.role === 'system' ? 'System' : 'You' }}:</strong>
                <span> {{ m.text }} </span>
            </div>
        </div>

        <form ref="formEl" @submit.prevent="send">
            <input name="text" placeholder="Tulis pesan..." autocomplete="off" />
            <button :disabled="!isConnected">Kirim</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { io } from "socket.io-client"; // client resmi Socket.IO v4 :contentReference[oaicite:0]{index=0}

const socket = io("http://localhost:5000", {
    path: "/socket.io",
    transports: ["websocket"],
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
});

const isConnected = ref(false);
const messages = ref([]);
const formEl = ref(null); // template ref untuk akses <form> / <input> :contentReference[oaicite:1]{index=1}

function add(role, text) {
    messages.value.push({ role, text });
}

function send(e) {
    // Ambil nilai dari <form> tanpa v-model
    const fd = new FormData(e.target);
    const text = (fd.get("text") || "").toString().trim();
    if (!text) return;

    add("user", text);
    // Emit ke server sesuai kontrak: { text }
    socket.emit("user_message", { text }); // dukungan ack tersedia jika perlu: emit(..., (ack) => {}) :contentReference[oaicite:2]{index=2}

    // reset field input & fokuskan lagi
    e.target.reset();
    // fokuskan input pertama di form (opsional)
    const firstInput = e.target.querySelector("input[name='text']");
    firstInput && firstInput.focus();
}

onMounted(() => {
    socket.on("connect", () => { isConnected.value = true; });
    socket.on("disconnect", () => { isConnected.value = false; });

    socket.on("system", (payload) => { if (payload?.message) add("system", payload.message); });
    socket.on("ai_message_done", (payload) => { if (payload?.text) add("ai", payload.text); });
    socket.on("session_ended", (payload) => {
        console.log(payload)
        const reason = payload?.reason ?? "ended";
        const score = payload?.score ? ` | score: ${payload.score}` : "";
        add("system", `Sesi berakhir (${reason})${score}`);
        console.log(score)
    });
    socket.on("error", (payload) => { add("system", `Error: ${payload?.message ?? "unknown error"}`); });
});

onBeforeUnmount(() => {
    socket.off("connect");
    socket.off("disconnect");
    socket.off("system");
    socket.off("ai_message_done");
    socket.off("session_ended");
    socket.off("error");
});
</script>
