<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, watch, computed, ref } from 'vue'

type OptionText = string

interface Question {
    id: number
    text: string
    options: OptionText[]
}

const abc = (idx: number): string => String.fromCharCode(97 + idx)

const baseOptions = [
    'Pasti ada yang salah di struktur kodenya.',
    'Mungkin jaringan atau device aku yang lemot.',
    'Pengen tahu berapa banyak orang lain yang ngalamin hal yang sama.',
    'Desain dan alurnya emang kurang nyaman buat user.',
] as const satisfies readonly OptionText[]

const makeQuestions = (): Question[] =>
    Array.from({ length: 15 }, (_, i) => {
        if (i === 0) {
            return {
                id: i + 1,
                text:
                    'Kamu buka website dan tampilannya berantakan, loading-nya juga lama. Hal pertama yang kamu pikirin apa?',
                options: [...baseOptions],
            }
        }
        if (i === 1) {
            return {
                id: i + 1,
                text:
                    'Kalau kamu diminta bikin tombol “Login”, hal paling penting yang bakal kamu pikirin apa?',
                options: ['Pastikan tampilannya rapi dan bisa dipakai semua orang.', 'Harus bisa jalan di semua device tanpa bug.', 'Data login-nya harus aman dan terukur.', 'Flow-nya jangan bikin user bingung pas login.'],
            }
        }
        if (i === 2) {
            return {
                id: i + 1,
                text:
                    'Suatu hari data penjualan naik dua kali lipat, tapi besoknya langsung turun. Reaksi kamu apa?',
                options: ['Cek dulu sistem atau kodenya, takutnya error.', 'Mungkin ada promo harian yang udah selesai.', 'Coba analisis datanya, bisa jadi hasilnya belum akurat.', 'Bisa jadi user salah paham sama promonya.'],
            }
        }
        if (i === 3) {
            return {
                id: i + 1,
                text:
                    'Kamu kerja bareng tim dari berbagai bidang. Bagian mana yang paling kamu pengen pegang?',
                options: ['Bagian teknis dan struktur sistem.', 'Bikin fitur biar bisa dipakai di berbagai perangkat.', 'Analisis performa dan data hasil kerja tim.', 'Ngatur alur produk biar sesuai kebutuhan user dan bisnis.'],
            }
        }
        if (i === 4) {
            return {
                id: i + 1,
                text:
                    'Ada bug yang cuma muncul kalau user ngelakuin urutan langkah tertentu. Cara kamu nyari penyebabnya gimana?',
                options: ['Lacak satu-satu urutan fungsi yang jalan.', 'Coba langsung di beberapa device.', 'Analisis log atau data aktivitas user.', 'Lihat bug mana yang paling ganggu user dulu baru perbaiki.'],
            }
        }
        if (i === 5) {
            return {
                id: i + 1,
                text:
                    'Antara tugas kreatif efek kecil dan tugas teknis dampak besar, mana yang kamu pilih?',
                options: ['Yang teknis dulu, biar langsung keliatan hasilnya.', 'Yang kreatif, soalnya lebih seru dan fleksibel.', 'Lihat mana yang paling efisien dari waktu dan hasil.', 'Pilih yang paling ngaruh ke user dan tujuan bisnis.'],
            }
        }
        if (i === 6) {
            return {
                id: i + 1,
                text:
                    'Kamu disuruh milih antara ngerapihin semua kode dari awal biar lebih bersih atau memperbaiki bug kecil yang sering muncul. Kamu bakal...',
                options: ['Rapihin semua kode biar jangka panjangnya aman.', 'Fokus ke bug kecil dulu biar sistem tetap stabil.', 'Cek data error buat tahu mana yang paling sering muncul.', 'Lihat bug mana yang paling ganggu user dulu baru perbaiki.'],
            }
        }
        if (i === 7) {
            return {
                id: i + 1,
                text:
                    'User bilang fitur “Cari Kursus” susah dipakai. Apa langkah pertama kamu?',
                options: ['Cek dulu kodenya, mungkin logikanya belum optimal.', 'Tes tampilan di HP dan laptop, siapa tahu tampilannya beda.', 'Analisis data pencarian buat tahu bagian mana yang sering gagal.', 'Lakukan uji coba langsung sama user buat tahu bagian mana yang bikin bingung.'],
            }
        }
        if (i === 8) {
            return {
                id: i + 1,
                text:
                    'Kalau kerja bareng tim, kamu lebih suka dapet tugas yang...',
                options: ['Butuh logika dan struktur yang jelas.',
                    'Bisa langsung dicoba dan dilihat hasilnya.',
                    'Perlu analisis angka dan data buat ambil keputusan.',
                    'Melibatkan ide, strategi, dan diskusi bareng orang lain.'
                ],
            }
        }
        if (i === 9) {
            return {
                id: i + 1,
                text:
                    'Kamu lagi ngolah data dan nemu beberapa bagian kosong. Kamu bakal ngapain?',
                options: ['Tambah validasi biar data kosong nggak kejadian lagi.',
                    'Coba isi pakai data serupa yang udah ada.',
                    'Analisis dulu kenapa bisa kosong, baru putusin mau hapus atau isi.',
                    'Tanya tim produk apakah data kosong itu ngaruh ke keputusan user.'
                ],
            }
        }
        if (i === 9) {
            return {
                id: i + 1,
                text:
                    'Kamu disuruh redesign tampilan halaman kursus biar lebih menarik. Langkah pertamamu apa?',
                options: ['Cari referensi desain lain buat dapet ide layout.',
                    'Tes tampilan di berbagai ukuran layar biar responsif.',
                    'Analisis bagian mana yang paling sering di-skip sama user.',
                    'Tanya user langsung bagian mana yang menurut mereka bikin ribet.'
                ],
            }
        }
        if (i === 10) {
            return {
                id: i + 1,
                text:
                    'Kamu disuruh redesign tampilan halaman kursus biar lebih menarik. Langkah pertamamu apa?',
                options: ['Cari referensi desain lain buat dapet ide layout.',
                    'Tes tampilan di berbagai ukuran layar biar responsif.',
                    'Analisis bagian mana yang paling sering di-skip sama user.',
                    'Tanya user langsung bagian mana yang menurut mereka bikin ribet.'
                ],
            }
        }
        if (i === 11) {
            return {
                id: i + 1,
                text:
                    'Cara berpikirmu lebih sering kayak gini...',
                options: ['“Gimana caranya biar sistem ini jalan cepat dan efisien?”',
                    '“Gimana biar hasilnya bisa dipakai di semua perangkat?”',
                    '“Apa insight yang bisa aku ambil dari data ini?”',
                    '“Apakah fitur ini bener-bener penting buat user dan bisnis?”'
                ],
            }
        }
        if (i === 12) {
            return {
                id: i + 1,
                text:
                    'Data nunjukin 60% user batal pas mau bayar kursus. Menurut kamu langkah paling tepat pertama kali apa?',
                options: ['Optimasi kecepatan halaman biar nggak lemot.',
                    'Tes tampilan di mobile, mungkin tombol bayarnya ketutupan.',
                    'Cek data alur pembayaran buat tahu di step mana mereka berhenti',
                    'Riset alasan user batal bayar dan hitung kerugian bisnisnya.'
                ],
            }
        }
        if (i === 13) {
            return {
                id: i + 1,
                text:
                    'Fitur baru yang kamu buat bisa ningkatin engagement user, tapi biaya server-nya tinggi banget. Apa yang bakal kamu lakuin?',
                options: ['Tetap jalanin, yang penting fiturnya keren.',
                    'Cari solusi teknis biar biaya server bisa ditekan.',
                    'Hitung dulu perbandingan cost dan manfaatnya buat bisnis.',
                    'Tanya user apakah fitur ini beneran mereka butuhin.'
                ],
            }
        }
        return {
            id: i + 1,
            text:
                'Kamu paling puas kalau hasil kerja kamu...',
            options: ['Berfungsi lancar tanpa error',
                'Bisa dipakai di mana aja dengan performa bagus.',
                'Ngasih insight yang bisa bantu ambil keputusan',
                'Dipakai banyak orang dan bener-bener ngebantu mereka'
            ],
        }
    })

const questions = ref<Question[]>(makeQuestions())

type SelectedIndex = number | null
const selected = ref<SelectedIndex[]>(
    Array.from({ length: questions.value.length }, () => null)
)

function selectAnswer(qIndex: number, optionIndex: number): void {
    selected.value[qIndex] = optionIndex
}

const route = useRoute()
const router = useRouter()

const defaultQuestion = '1'
const totalQuestions = 15

const question = computed(() => (route.query.question as string) || defaultQuestion)

const justifyClass = computed(() => {
    if (question.value === '1') return 'justify-end'
    if (question.value === '15') return 'justify-start'
    return 'justify-between'
})

const updateQuestion = (question: string) => {
    router.replace({
        query: { ...route.query, question: question }
    })
}

const handleNext = () => {
    updateQuestion(String(Number(question.value) + 1))
}

const handleBack = () => {
    updateQuestion(String(Number(question.value) - 1))
}

const isNotNumber = (str: string) => {
    return str.trim() === '' || !Number.isFinite(Number(str));
}

onMounted(() => {
    const currentQuestion = route.query.question as string | undefined

    if (!currentQuestion) {
        router.replace({
            query: { ...route.query, question: defaultQuestion }
        })
    }
})

watch(
    () => route.query.question,
    (newQuestion) => {
        if (isNotNumber(String(newQuestion))) {
            router.replace({
                query: { ...route.query, question: defaultQuestion }
            })
        }
    }
)
</script>

<template>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center">
        <div class="min-h-full flex flex-col justify-center items-center gap-5">
            <h1 class="text-2xl font-bold">AI Learning Path Assessment</h1>
            <Separator class="my-5 border-5 !w-[96px] mx-auto rounded-sm border-[#5476ff]" />
            <div class="flex gap-5 items-center">
                <div v-for="n in totalQuestions" :key="n" :class="{
                    'h-[13px] rounded-md cursor-pointer !w-[64px]': true,
                    'bg-gradient-to-r from-[#ac97ff] to-[#b9a8ff]': Number(n) <= Number(question),
                    'bg-[#d7d7ff]': question !== String(n)
                }" />
                <img src="/Frame 1618869573.png" alt="">
            </div>
            <div class="w-full">
                <div v-for="(q, qi) in questions" :key="q.id"
                    :class="['p-5 gap-5 rounded-xl shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] border-[#B0C0FF] border-2', qi + 1 === Number(question) ? 'flex flex-col' : 'hidden']">
                    <h2 class="font-semibold text-xl mx-auto text-center max-h-15 line-clamp-2 max-w-[60ch]">
                        {{ qi + 1 }}. {{ q.text }}
                    </h2>

                    <div v-for="(opt, oi) in q.options" :key="oi" class="border cursor-pointer p-3 rounded-md" :class="[
                        'bg-[#f5f2ff]',
                        selected[qi] === oi ? 'ring-2 ring-[#B0C0FF] bg-white' : '',
                        'hover:bg-[#f5f2ff] transition'
                    ]" @click="selectAnswer(qi, oi)">
                        <p>{{ abc(oi) }}. {{ opt }}</p>
                    </div>

                    <div class="text-sm text-gray-500" v-if="selected[qi] !== null && selected[qi] !== undefined">
                        Jawaban kamu: {{ abc(selected[qi]!) }}
                    </div>
                </div>
            </div>
            <div :class="['w-full flex', justifyClass]">
                <Button @click="handleBack"
                    :class="{ 'bg-[#5476FF] hover:bg-[#5476FF] w-24 justify-center items-center cursor-pointer': true, 'flex': question === '15', 'hidden': question === '1' }">Back</Button>
                <Button @click="handleNext"
                    :class="{ 'bg-[#5476FF] hover:bg-[#5476FF] w-24 justify-center items-center cursor-pointer': true, 'hidden': question === '15', 'flex': question === '1' }">Next</Button>
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
