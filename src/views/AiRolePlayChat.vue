<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { io, Socket } from 'socket.io-client'
import { Textarea } from '@/components/ui/textarea'
import Button from '@/components/ui/button/Button.vue'
import { ScrollArea } from '@/components/ui/scroll-area'

const timeout = ref(false)

const resultScore = ref('')

type Role = 'user' | 'ai' | 'system'
interface Msg { role: Role; text: string }

interface SystemPayload { message?: string }
interface AiMessagePayload { text?: string }
interface SessionEndedPayload { reason?: string; score?: number }
interface ErrorPayload { message?: string }

const resetChat = () => {
    messages.value = []
    resultScore.value = ''
    timeout.value = false
}

interface ServerToClientEvents {
    system: (payload: SystemPayload) => void
    ai_message_done: (payload: AiMessagePayload) => void
    session_ended: (payload: SessionEndedPayload) => void
    error: (payload: ErrorPayload) => void
    countdown: (payload: { remaining: number }) => void
}
interface ClientToServerEvents {
    user_message: (payload: { text: string }, ack?: (resp: { ok?: boolean; error?: string }) => void) => void
}

const draft = ref('')
const messages = ref<Msg[]>([])
const isConnected = ref(false)

const textareaEl = ref<HTMLElement | null>(null)
const listEl = ref<HTMLElement | null>(null)

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:5000',
    {
        path: '/socket.io',
        transports: ['websocket'],
        autoConnect: true,
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
    }
)

function add(role: Role, text: string) {
    messages.value.push({ role, text })
}
function focusTextarea() {
    const root = (textareaEl.value as any)?.$el ?? textareaEl.value
    const el: HTMLTextAreaElement | null =
        root instanceof HTMLTextAreaElement ? root : root?.querySelector?.('textarea') ?? null
    el?.focus?.()
}
function scrollToBottom() {
    const el = listEl.value as HTMLDivElement | null
    if (el) el.scrollTop = el.scrollHeight
}
function send() {
    const text = draft.value.trim()
    if (!text) return
    add('user', text)
    socket.emit('user_message', { text }, (ack) => {
        if (ack?.error) console.error('[ack error]', ack.error)
    })
    draft.value = ''
    nextTick(() => {
        focusTextarea()
        scrollToBottom()
    })
}
function onKeydown(e: KeyboardEvent) {
    if ((e as any).isComposing) return
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        send()
    }
}

onMounted(() => {
    socket.on('connect', () => { isConnected.value = true })
    socket.on('disconnect', () => { isConnected.value = false })

    socket.on('system', (p) => { if (p?.message) add('system', p.message) })
    socket.on('ai_message_done', (p) => { if (p?.text) add('ai', p.text) })
    socket.on('session_ended', (p) => {
        const reason = p?.reason ?? 'ended'
        const score = p?.score != null ? ` ${p.score}` : ''
        resultScore.value = `${score}`
        add('system', `Sesi berakhir (${reason})${score}`)
        timeout.value = true
    })
    socket.on('error', (p) => { add('system', `Error: ${p?.message ?? 'unknown error'}`) })
    socket.on('countdown', (p) => { console.log(p) })
    nextTick(() => {
        focusTextarea()
        scrollToBottom()
    })
})

watch(
    () => messages.value.length,
    () => nextTick(scrollToBottom)
)

onBeforeUnmount(() => {
    socket.off('connect')
    socket.off('disconnect')
    socket.off('system')
    socket.off('ai_message_done')
    socket.off('session_ended')
    socket.off('error')
    socket.off('countdown')
    socket.disconnect()
})
</script>

<template>
    <div class="flex-1 w-full flex justify-center items-center pt-40" v-if="!timeout">
        <div class="flex flex-col w-full gap-20">
            <ScrollArea class="h-[500px] w-full rounded-md flex items-center">
                <div ref="listEl" class="w-[80%] mx-auto overflow-auto">
                    <div v-for="(m, i) in messages" :key="i" :class="[
                        'mb-6 flex items-end gap-3',
                        m.role === 'ai' ? 'justify-start' : m.role === 'user' ? 'justify-end' : 'justify-center'
                    ]">
                        <template v-if="m.role === 'ai'">
                            <div
                                class="w-9 h-9 rounded-full bg-sky-100 border border-sky-200 grid place-items-center shrink-0">
                                <span aria-hidden="true">🤖</span>
                            </div>

                            <div class="relative max-w-[72%] rounded-2xl bg-blue-50 px-5 py-4 text-slate-800 shadow-sm
               after:content-[''] after:absolute after:-left-2 after:bottom-3
               after:border-y-8 after:border-r-8 after:border-y-transparent after:border-r-blue-50">
                                <div class="font-semibold text-slate-900">Tim Anggota 1</div>
                                <p class="mt-1 whitespace-pre-wrap leading-relaxed
                  before:content-['\201C'] after:content-['\201D']">
                                    {{ m.text }}
                                </p>
                            </div>
                        </template>

                        <template v-else-if="m.role === 'user'">
                            <div class="relative max-w-[72%] rounded-2xl bg-slate-100 px-5 py-4 text-slate-900 shadow-sm
               after:content-[''] after:absolute after:-right-2 after:bottom-3
               after:border-y-8 after:border-l-8 after:border-y-transparent after:border-l-slate-100">
                                <p class="whitespace-pre-wrap leading-relaxed">
                                    {{ m.text }}
                                </p>
                            </div>

                            <div
                                class="w-9 h-9 rounded-full bg-slate-200 border border-slate-300 grid place-items-center shrink-0">
                                <span aria-hidden="true">🧑‍💼</span>
                            </div>
                        </template>

                        <template v-else>
                            <div
                                class="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-3 py-1">
                                {{ m.text }}
                            </div>
                        </template>
                    </div>
                </div>
            </ScrollArea>


            <Textarea class="w-[80%] mx-auto" placeholder="Ketik Respon Kamu..." v-model="draft" @keydown="onKeydown"
                ref="textareaEl" />
        </div>
    </div>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center" v-else>
        <div class="flex flex-col gap-15 w-full">
            <h1 class="text-[30px] text-center font-bold">Selamat! Kamu berhasil menyelesaikan role play ini. Yuk, lihat
                hasilnya!
            </h1>
            <div class="bg-[#f5f2ff] w-[54%] mx-auto rounded-md p-3">
                <h2 class="text-start font-bold text-[20px]">Memimpin Rapat Evaluasi dengan Sikap Terbuka dan Solutif
                </h2>
                <br>
                <p>{{ resultScore }}</p>
                <br>
                <div class="flex justify-end">
                    <Button class="bg-[#5476ff] hover:bg-[#5476ff] cursor-pointer" @click="resetChat">
                        Ulangi Skenario
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
