<template>
  <q-page
    class="bg-background-light dark:bg-background-dark text-[#0d1b1b] dark:text-white antialiased font-display min-h-screen"
  >
    <div
      class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-32"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div
          @click="$router.push('/app/dashboard')"
          class="flex items-center gap-2 cursor-pointer group text-slate-gray dark:text-gray-300 hover:text-primary transition-colors"
        >
          <div
            class="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm"
          >
            <span class="material-symbols-outlined">arrow_back</span>
          </div>
          <span class="font-bold hidden md:inline">Back to Dashboard</span>
        </div>
        <h2
          class="text-xl md:text-2xl font-black text-slate-gray dark:text-white text-center flex-1 pr-12 md:pr-0"
        >
          Exam Summary
        </h2>
        <div class="hidden md:block w-32"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Score & Stats -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Hero Score Card -->
          <div
            class="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"
            ></div>

            <q-circular-progress
              show-value
              font-size="40px"
              :value="percentage"
              size="180px"
              :thickness="0.15"
              color="primary"
              track-color="grey-3"
              class="font-black text-slate-gray dark:text-white mb-6"
            >
              {{ percentage }}%
            </q-circular-progress>

            <h3 class="text-3xl font-black text-center mb-2 animate-fade-in-up">
              {{ resultMessage.title }}
            </h3>
            <p
              class="text-slate-gray/70 dark:text-gray-400 text-center font-medium animate-fade-in-up delay-100"
            >
              {{ resultMessage.subtitle }}
            </p>
          </div>

          <!-- Stats Bento Grid -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Total Questions -->
            <div
              class="p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2 hover:border-primary/30 transition-colors"
            >
              <span class="material-symbols-outlined text-blue-500 text-3xl">list_alt</span>
              <span class="text-2xl font-bold text-slate-gray dark:text-white">{{ total }}</span>
              <span class="text-xs font-bold text-slate-gray/50 dark:text-gray-500 uppercase"
                >Questions</span
              >
            </div>

            <!-- Correct Answers -->
            <div
              class="p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2 hover:border-green-500/30 transition-colors"
            >
              <span class="material-symbols-outlined text-green-500 text-3xl">check_circle</span>
              <span class="text-2xl font-bold text-slate-gray dark:text-white">{{ score }}</span>
              <span class="text-xs font-bold text-slate-gray/50 dark:text-gray-500 uppercase"
                >Correct</span
              >
            </div>
          </div>

          <!-- Category Breakdown Chart -->
          <div
            class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 w-full animate-fade-in-up delay-200"
          >
            <h4
              class="text-sm font-bold uppercase tracking-widest text-slate-gray dark:text-gray-400 mb-4 flex items-center gap-2"
            >
              <span class="material-symbols-outlined font-normal">pie_chart</span> Performance by
              Topic
            </h4>
            <div v-if="loadingReview" class="flex justify-center py-4">
              <q-spinner color="primary" size="2em" />
            </div>
            <div v-else class="space-y-4">
              <div v-for="(cat, idx) in categoryStats" :key="idx" class="space-y-1">
                <div class="flex justify-between text-xs font-bold">
                  <span>{{ cat.name }}</span>
                  <span>{{ cat.percentage }}%</span>
                </div>
                <div class="h-2 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-primary transition-all duration-1000"
                    :style="{ width: cat.percentage + '%' }"
                  ></div>
                </div>
              </div>
              <div
                v-if="categoryStats.length === 0"
                class="text-xs text-center text-gray-400 italic"
              >
                No category data available
              </div>
            </div>
          </div>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex flex-col gap-3 sticky top-8">
            <button
              @click="$router.go(-1)"
              class="w-full h-14 bg-gradient-to-r from-primary to-primary-login text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined">refresh</span>
              Retake Exam
            </button>
            <button
              @click="$router.push('/app/dashboard')"
              class="w-full h-14 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-slate-gray dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined">dashboard</span>
              Back to Dashboard
            </button>
          </div>
        </div>

        <!-- Right Column: Detailed Review -->
        <div class="lg:col-span-2 space-y-6">
          <div
            class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800"
          >
            <h3 class="font-bold text-slate-gray dark:text-white text-lg">Detailed Analysis</h3>
            <div class="flex gap-2">
              <span
                class="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold flex items-center gap-1"
              >
                <span class="w-2 h-2 rounded-full bg-green-500"></span> Correct
              </span>
              <span
                class="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-bold flex items-center gap-1"
              >
                <span class="w-2 h-2 rounded-full bg-red-500"></span> Wrong
              </span>
            </div>
          </div>

          <!-- Review Loading -->
          <div v-if="loadingReview" class="flex flex-col gap-4">
            <div
              v-for="n in 3"
              :key="n"
              class="h-32 bg-gray-100 dark:bg-white/5 rounded-2xl animate-pulse"
            ></div>
          </div>

          <!-- Review List Container -->
          <div v-else class="space-y-6">
            <div
              v-for="(item, index) in reviewData"
              :key="index"
              class="flex flex-col gap-4 animate-fade-in-up"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <!-- Question Card -->
              <div
                class="relative p-6 rounded-2xl bg-white dark:bg-white/5 border shadow-sm transition-colors"
                :class="
                  item.isCorrect
                    ? 'border-l-4 border-l-green-500 border-gray-100 dark:border-gray-800'
                    : 'border-l-4 border-l-red-500 border-gray-100 dark:border-gray-800'
                "
              >
                <div class="flex gap-4">
                  <span
                    class="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold"
                    :class="
                      item.isCorrect
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    "
                  >
                    {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
                  </span>
                  <div class="flex-1">
                    <div class="mb-2" v-if="item.category">
                      <span
                        class="text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/10 px-2 py-1 rounded text-gray-500"
                        >{{ item.category }}</span
                      >
                    </div>
                    <p
                      class="text-[#0d1b1b] dark:text-white font-medium text-lg leading-relaxed mb-4"
                    >
                      {{ item.question }}
                    </p>

                    <div class="flex flex-col gap-2">
                      <!-- User selection if wrong -->
                      <div
                        v-if="!item.isCorrect"
                        class="text-sm flex items-center gap-2 text-red-600 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900/20"
                      >
                        <span class="material-symbols-outlined text-lg">cancel</span>
                        Your Answer: {{ item.userAnswer }}
                      </div>

                      <!-- Correct Answer -->
                      <div
                        class="text-sm flex items-center gap-2 text-green-700 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/20"
                      >
                        <span class="material-symbols-outlined text-lg">check_circle</span>
                        Correct Answer: {{ item.correctAnswer }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Explanation Box (Conditional) -->
              <div
                v-if="item.explanation"
                class="ml-12 p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 relative"
              >
                <!-- Connector Line -->
                <div class="absolute -top-4 left-6 w-0.5 h-4 bg-blue-200 dark:bg-blue-800"></div>

                <div class="flex gap-3">
                  <span class="material-symbols-outlined text-blue-500">lightbulb</span>
                  <div>
                    <p class="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">
                      Explanation
                    </p>
                    <p class="text-sm text-slate-gray/80 dark:text-gray-300 leading-relaxed">
                      {{ item.explanation }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Actions Fixed Bottom -->
      <div
        class="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-[#0d1b1b]/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-50 flex flex-col gap-3"
      >
        <button
          @click="$router.go(-1)"
          class="w-full h-12 bg-primary text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          <span class="material-symbols-outlined">refresh</span>
          Retake Exam
        </button>
        <button
          @click="$router.push('/app/dashboard')"
          class="w-full h-12 bg-gray-100 dark:bg-white/10 text-slate-gray dark:text-white font-bold rounded-xl flex items-center justify-center gap-2"
        >
          <span class="material-symbols-outlined">dashboard</span>
          Back to Dashboard
        </button>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import confetti from 'canvas-confetti'
import { supabase } from '../../supabase'

const route = useRoute()

// Data from Query Params
const score = computed(() => Number(route.query.score) || 0)
const total = computed(() => Number(route.query.total) || 0)
const percentage = computed(() =>
  total.value > 0 ? Math.round((score.value / total.value) * 100) : 0,
)

// Data State
const loadingReview = ref(true)
const reviewData = ref([])
const categoryStats = ref([])

// Dynamic Message
const resultMessage = computed(() => {
  if (percentage.value >= 75)
    return { title: 'Excellent Work! 🎉', subtitle: 'You have mastered this subject.' }
  if (percentage.value >= 50)
    return { title: 'Good Job! 👍', subtitle: 'You passed, but keep practicing.' }
  return { title: 'Keep Trying! 💪', subtitle: "Don't give up. Review your mistakes below." }
})

// Confetti Effect
const triggerConfetti = () => {
  if (percentage.value < 50) return

  const duration = 2 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
  const random = (min, max) => Math.random() * (max - min) + min

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }
    const particleCount = 50 * (timeLeft / duration)
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    )
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    )
  }, 250)
}

// Fetch Full Details
const fetchResultDetails = async () => {
  loadingReview.value = true
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return

    const examId = route.params.id

    // 1. Get Latest Result
    const { data: resultData, error } = await supabase
      .from('results')
      .select('answers_json')
      .eq('exam_id', examId)
      //.eq('user_id', user.id) // Enable if RLS enforces user check, otherwise optional if strictly own data
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error || !resultData) throw error

    const userAnswersMap = resultData.answers_json || {} // { qId: optionIndex }

    // 2. Get Questions
    const { data: questionsData } = await supabase
      .from('questions')
      .select('*')
      .eq('exam_id', examId)

    if (!questionsData) return

    // 3. Process Data for Review & Stats
    const processedReview = []
    const catMap = {} // { 'Math': { total: 10, correct: 5 } }

    questionsData.forEach((q) => {
      const userIdx = userAnswersMap[q.id]
      const userOptText = userIdx !== undefined && q.options ? q.options[userIdx] : 'Not Answered'

      // Check correctness robustly
      const isCorrect =
        userOptText && q.correct_answer && userOptText.trim() === q.correct_answer.trim()

      // Review Item
      if (userIdx !== undefined) {
        // Only show attempted or all? Showing all gives better feedback
        processedReview.push({
          question: q.question_text,
          userAnswer: userOptText,
          correctAnswer: q.correct_answer,
          isCorrect: isCorrect,
          explanation: q.explanation,
          category: q.category || 'General',
        })
      }

      // Category Stats
      const catName = q.category || 'General'
      if (!catMap[catName]) catMap[catName] = { total: 0, correct: 0 }
      catMap[catName].total++
      if (isCorrect) catMap[catName].correct++
    })

    reviewData.value = processedReview

    // Finalize Category Chart Data
    categoryStats.value = Object.keys(catMap)
      .map((key) => ({
        name: key,
        percentage: Math.round((catMap[key].correct / catMap[key].total) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage) // Highest first
  } catch (e) {
    console.error('Error loading details:', e)
  } finally {
    loadingReview.value = false
  }
}

onMounted(() => {
  triggerConfetti()
  fetchResultDetails()
})
</script>

<style scoped>
/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>
