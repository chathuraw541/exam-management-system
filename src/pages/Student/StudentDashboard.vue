<template>
  <q-page
    class="bg-gradient-to-br from-teal-50 to-slate-100 dark:from-zinc-900 dark:to-slate-900 font-display text-slate-gray antialiased min-h-screen"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 md:gap-6">
      <!-- Top Row (Header) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <!-- Personalized Greeting (Col 1-8) -->
        <div class="md:col-span-8 flex flex-col order-2 md:order-none">
          <h1 class="text-xl md:text-3xl font-bold text-slate-gray dark:text-gray-100">
            Hello, <span class="text-primary">{{ authStore.profile?.full_name || 'Student' }}</span>
          </h1>
          <p class="text-sm text-slate-gray/60 dark:text-gray-400 font-medium tracking-wide mt-1">
            Welcome back to your personalized study hub. Let's conquer your goals!
          </p>
        </div>

        <!-- Exam Countdown Timer (Col 9-12) -->
        <div class="md:col-span-4 order-1 md:order-none">
          <div
            class="bg-gradient-to-r from-primary to-deep-teal rounded-2xl p-4 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
            @click="showDatePicker = true"
          >
            <div
              class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"
            ></div>
            <div class="relative z-10 flex items-center justify-between">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                  exam countdown
                </p>
                <div v-if="daysLeft !== null">
                  <div class="flex items-baseline gap-1">
                    <span class="text-3xl font-black">{{ daysLeft }}</span>
                    <span class="text-xs font-medium opacity-80">Days Left</span>
                  </div>
                  <p class="text-[10px] text-white/80 font-medium">{{ formattedTargetDate }}</p>
                </div>
                <div v-else class="flex items-center gap-2 mt-1">
                  <span class="material-symbols-outlined text-lg">event</span>
                  <span class="text-sm font-bold">Set Date</span>
                </div>
              </div>
              <div class="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <span class="material-symbols-outlined text-xl">timer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row (Stats) -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        <!-- Total Exams -->
        <div
          class="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border border-white/50 dark:border-white/10 p-4 md:p-5 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300 flex items-center gap-4 group"
        >
          <div
            class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 transition-colors"
          >
            <span class="material-symbols-outlined text-2xl">history_edu</span>
          </div>
          <div>
            <p class="text-xs font-bold text-slate-gray/50 uppercase tracking-wider">Total Exams</p>
            <p class="text-2xl font-bold text-slate-gray dark:text-white">{{ totalExams }}</p>
          </div>
        </div>

        <!-- Avg Score -->
        <div
          class="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border border-white/50 dark:border-white/10 p-4 md:p-5 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300 flex items-center gap-4 group"
        >
          <div
            class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 transition-colors"
          >
            <span class="material-symbols-outlined text-2xl">bar_chart</span>
          </div>
          <div>
            <p class="text-xs font-bold text-slate-gray/50 uppercase tracking-wider">Avg Score</p>
            <p class="text-2xl font-bold text-slate-gray dark:text-white">{{ averageScore }}%</p>
          </div>
        </div>

        <!-- Rank -->
        <div
          class="col-span-2 md:col-span-1 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border border-white/50 dark:border-white/10 p-4 md:p-5 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300 flex items-center gap-4 group"
        >
          <div
            class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-100 transition-colors"
          >
            <span class="material-symbols-outlined text-2xl">military_tech</span>
          </div>
          <div>
            <p class="text-xs font-bold text-slate-gray/50 uppercase tracking-wider">Rank</p>
            <p class="text-2xl font-bold text-slate-gray dark:text-white">
              #{{ authStore.profile?.rank || '-' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content Row (Performance & Engagement) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Performance Hub (Col 1-7) -->
        <div
          class="md:col-span-7 bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[400px]"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-slate-gray dark:text-white">Performance Hub</h3>
            <span
              class="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-slate-gray/60"
              >Overall Readiness</span
            >
          </div>

          <div class="flex-1 flex flex-col items-center justify-center relative">
            <!-- Readiness Circle -->
            <div class="relative w-64 h-64 flex items-center justify-center">
              <div
                class="circular-progress w-full h-full rounded-full flex items-center justify-center transition-all duration-1000 shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)]"
                :style="circularStyle"
              >
                <div class="flex flex-col items-center">
                  <span
                    class="text-5xl font-black block tracking-tighter"
                    :style="{ color: readiness.color }"
                    >{{ readiness.percent }}%</span
                  >
                  <span class="text-xs font-bold uppercase tracking-widest text-slate-gray/40 mt-1"
                    >Readiness</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 text-center">
            <p class="text-sm font-medium text-slate-gray dark:text-gray-300">
              {{ readiness.label }} approach.
              <span
                class="text-primary font-bold cursor-pointer hover:underline block w-full text-center py-2 mt-1"
                @click="router.push('/app/exams')"
                >Start a new exam</span
              >
              to improve.
            </p>
          </div>
        </div>

        <!-- Engagement Stack (Col 8-12) -->
        <div class="md:col-span-5 flex flex-col gap-6">
          <!-- Daily Challenge Card -->
          <div
            class="bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden group"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 dark:bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="p-2 bg-orange-100 dark:bg-orange-500/20 rounded-xl text-orange-600 dark:text-orange-400"
                  >
                    <span class="material-symbols-outlined text-xl">emoji_events</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-gray dark:text-white">Daily Challenge</h3>
                    <p class="text-xs text-slate-gray/50">+50 Points Reward</p>
                  </div>
                </div>
                <div class="text-right">
                  <span
                    class="text-xs font-bold text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg"
                    >{{ challengeProgress }}/5</span
                  >
                </div>
              </div>

              <div class="mb-4">
                <div class="flex justify-between text-xs text-slate-gray/60 mb-2 font-medium">
                  <span>Progress</span>
                  <span>{{ (challengeProgress / 5) * 100 }}%</span>
                </div>
                <q-linear-progress
                  :value="challengeProgress / 5"
                  color="orange"
                  track-color="orange-1"
                  rounded
                  size="8px"
                  class="rounded-full"
                />
              </div>

              <button
                @click="startDailyChallenge"
                :disabled="challengeProgress >= 5"
                class="w-full p-4 my-2 bg-slate-800 dark:bg-white dark:text-slate-900 text-white rounded-xl text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {{ challengeProgress >= 5 ? 'Challenge Completed!' : 'Start Challenge' }}
              </button>
            </div>
          </div>

          <!-- Study Calendar (Compact) -->
          <div
            class="flex-1 bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-4 shadow-sm flex flex-col justify-center"
          >
            <div class="flex items-center gap-2 mb-2 px-2">
              <span class="material-symbols-outlined text-slate-gray/40 text-lg"
                >calendar_month</span
              >
              <span class="text-xs font-bold uppercase text-slate-gray/40 tracking-widest"
                >Consistency</span
              >
            </div>
            <div class="flex justify-center">
              <q-date
                v-model="modelDate"
                minimal
                readonly
                flat
                :events="studyEventDates"
                class="bg-transparent w-full"
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Row (Actions & Resources) -->
      <div class="flex flex-col gap-6">
        <!-- Exam Category Selector (Col 1-12) -->
        <div class="w-full overflow-x-auto pb-2 scrollbar-hide">
          <div class="flex gap-4 min-w-max">
            <div
              v-for="(cat, idx) in categories"
              :key="idx"
              @click="navigateToCategory(cat.name)"
              class="flex items-center gap-3 bg-white dark:bg-zinc-800/80 border border-white/50 dark:border-gray-700 pl-4 pr-6 py-3 rounded-2xl cursor-pointer hover:border-primary hover:shadow-md transition-all group min-w-[160px]"
            >
              <div
                :class="`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`"
              >
                <span class="material-symbols-outlined text-lg" :class="cat.color">{{
                  cat.icon
                }}</span>
              </div>
              <span class="font-bold text-slate-gray dark:text-gray-200 text-sm">{{
                cat.name
              }}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <!-- Recent Activity Feed (Col 1-6) -->
          <div
            class="md:col-span-6 bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm min-h-[300px]"
          >
            <div class="flex items-center justify-between mb-6">
              <h3 class="font-bold text-slate-gray dark:text-white">Recent Activity</h3>
              <button
                @click="router.push('/app/exams')"
                class="text-xs font-bold text-primary hover:underline"
              >
                View All
              </button>
            </div>

            <div v-if="loading" class="flex flex-col gap-4">
              <q-skeleton type="rect" height="60px" class="rounded-2xl" v-for="n in 3" :key="n" />
            </div>

            <div v-else-if="recentResults.length > 0" class="flex flex-col gap-3">
              <div
                v-for="(exam, index) in recentResults"
                :key="index"
                class="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group animate-slide-in-right border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                :style="{ animationDelay: `${index * 50}ms` }"
              >
                <div class="flex items-center gap-4">
                  <div
                    :class="exam.iconBg"
                    class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <span class="material-symbols-outlined text-lg" :class="exam.iconColor">{{
                      exam.icon
                    }}</span>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-gray dark:text-gray-200 line-clamp-1">
                      {{ exam.title }}
                    </p>
                    <p class="text-xs text-slate-gray/50">
                      {{ exam.score >= 50 ? 'Passed' : 'Needs Work' }}
                    </p>
                  </div>
                </div>
                <span :class="exam.scoreColor" class="text-lg font-black">{{ exam.score }}</span>
              </div>
            </div>

            <div v-else class="h-full flex flex-col items-center justify-center text-center pb-10">
              <div
                class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 icon-float"
              >
                <span class="material-symbols-outlined text-gray-300 text-3xl">history_edu</span>
              </div>
              <p class="text-sm font-bold text-slate-gray/70">No activity yet</p>
              <p class="text-xs text-slate-gray/40">Your recent exams will appear here.</p>
            </div>
          </div>

          <!-- Learning Resources Grid (Col 7-12) -->
          <div class="md:col-span-6 flex flex-col gap-4">
            <div class="flex items-center justify-between px-2">
              <h3 class="font-bold text-slate-gray dark:text-white">Learning Resources</h3>
            </div>

            <div class="grid grid-cols-2 gap-4 h-full">
              <div
                class="bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-5 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-center gap-3"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors"
                >
                  <span class="material-symbols-outlined text-red-500 text-xl">picture_as_pdf</span>
                </div>
                <div>
                  <p class="font-bold text-slate-gray dark:text-white">PDF Notes</p>
                  <p class="text-xs text-slate-gray/50">Subject summaries</p>
                </div>
              </div>

              <div
                class="bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-5 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-center gap-3"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
                >
                  <span class="material-symbols-outlined text-blue-500 text-xl">play_circle</span>
                </div>
                <div>
                  <p class="font-bold text-slate-gray dark:text-white">Video Lessons</p>
                  <p class="text-xs text-slate-gray/50">Expert tutorials</p>
                </div>
              </div>

              <div
                class="col-span-2 bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 rounded-3xl p-5 flex items-center justify-between cursor-pointer hover:bg-primary/10 transition-colors"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm"
                  >
                    <span class="material-symbols-outlined text-primary text-xl">assignment</span>
                  </div>
                  <div>
                    <p class="font-bold text-primary">Model Papers</p>
                    <p class="text-xs text-primary/70">Download & Practice</p>
                  </div>
                </div>
                <span class="material-symbols-outlined text-primary/40">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Date Picker Dialog -->
      <q-dialog v-model="showDatePicker">
        <q-card class="bg-white dark:bg-zinc-900 min-w-[300px]">
          <q-card-section>
            <div class="text-h6">Set Exam Date</div>
          </q-card-section>
          <q-card-section>
            <q-date v-model="targetDate" mask="YYYY-MM-DD" color="primary" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Save" color="primary" @click="saveTargetDate" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- Daily Challenge Dialog -->
      <q-dialog v-model="showChallengeDialog" persistent>
        <q-card class="bg-white dark:bg-zinc-900 min-w-[400px] rounded-3xl p-4">
          <q-card-section class="flex flex-col items-center pt-6">
            <div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-orange-500 text-3xl">lightbulb</span>
            </div>
            <div class="text-sm font-bold uppercase tracking-widest text-slate-gray/40 mb-2">
              Question {{ challengeProgress + 1 }}/5
            </div>
            <p class="text-lg font-bold text-center text-slate-gray dark:text-gray-200 px-4">
              {{ currentQuestion?.question_text }}
            </p>
          </q-card-section>
          <q-card-section class="flex flex-col gap-3 pb-6">
            <button
              v-for="(opt, i) in currentQuestion?.options"
              :key="i"
              @click="checkAnswer(opt)"
              class="w-full py-4 px-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-zinc-800/50 hover:bg-primary/10 hover:border-primary transition-all text-left font-medium text-slate-gray dark:text-gray-300 relative group overflow-hidden"
            >
              <span class="relative z-10">{{ opt }}</span>
              <div
                class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"
              ></div>
            </button>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from 'stores/auth'
import { supabase } from '../../supabase'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const authStore = useAuthStore()
const $q = useQuasar()

const loading = ref(true)
const recentResults = ref([])
const totalExams = ref(0)
const averageScore = ref(0)
const modelDate = ref(new Date().toISOString().slice(0, 10).replace(/-/g, '/'))

// For now, mock dates. Later, we can map `recentResults.created_at` to this array.
const studyEventDates = ref([])

const categories = [
  {
    name: 'IQ',
    icon: 'psychology',
    bg: 'bg-purple-50 dark:bg-purple-500/20',
    color: 'text-purple-600 dark:text-purple-300',
  },
  {
    name: 'Teaching',
    icon: 'school',
    bg: 'bg-orange-50 dark:bg-orange-500/20',
    color: 'text-orange-600 dark:text-orange-300',
  },
  {
    name: 'SLAS',
    icon: 'account_balance',
    bg: 'bg-blue-50 dark:bg-blue-500/20',
    color: 'text-blue-600 dark:text-blue-300',
  },
  {
    name: 'General',
    icon: 'public',
    bg: 'bg-green-50 dark:bg-green-500/20',
    color: 'text-green-600 dark:text-green-300',
  },
]

const navigateToCategory = (catName) => {
  // Navigate with query param
  router.push({ path: '/app/exams', query: { category: catName } })
}

// Helper for Readiness Logic
const readiness = computed(() => {
  if (averageScore.value === 0) return { percent: 0, label: 'Get Started', color: '#cbd5e1' }
  const score = averageScore.value
  if (score >= 80) return { percent: score, label: 'Excellent', color: '#008080' }
  if (score >= 60) return { percent: score, label: 'Good', color: '#10b981' } // teal/green
  if (score >= 40) return { percent: score, label: 'Improving', color: '#f59e0b' } // orange
  return { percent: score, label: 'Needs Practice', color: '#ef4444' } // red
})

// CSS for Dynamic Circle
const circularStyle = computed(() => {
  const percent = readiness.value.percent
  const color = readiness.value.color
  const bg = '#e2e8f0' // slate-200
  // dark mode handling is tricky inline, assume light mode base mainly or handle via specialized class if needed,
  // but for conic-gradient we just use hex.
  return {
    background: `radial-gradient(closest-side, var(--bg-color, white) 85%, transparent 86% 100%), conic-gradient(${color} ${percent}%, ${bg} 0)`,
  }
})

// Feature: Daily Challenge & Countdown
const showDatePicker = ref(false)
const targetDate = ref('')
const daysLeft = ref(null)

const challengeProgress = ref(0)
const showChallengeDialog = ref(false)
const dailyQuestions = ref([])
const currentQuestionIndex = ref(0)
const currentQuestion = computed(() => dailyQuestions.value[currentQuestionIndex.value])

const formattedTargetDate = computed(() => {
  if (!targetDate.value) return ''
  try {
    return new Date(targetDate.value).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return targetDate.value
  }
})

// Calculate Days Left
const calculateCountdown = () => {
  if (!targetDate.value) {
    daysLeft.value = null
    return
  }
  const target = new Date(targetDate.value).getTime()
  if (isNaN(target)) {
    daysLeft.value = null
    return
  }
  const now = new Date().getTime()
  const diff = target - now
  if (diff < 0) {
    daysLeft.value = 0
  } else {
    daysLeft.value = Math.ceil(diff / (1000 * 60 * 60 * 24))
  }
}

const saveTargetDate = async () => {
  if (!authStore.user) return
  const { error } = await supabase
    .from('profiles')
    .update({ target_exam_date: targetDate.value })
    .eq('id', authStore.user.id)
  if (error) {
    $q.notify({ type: 'negative', message: 'Failed to update date.' })
  } else {
    $q.notify({ type: 'positive', message: 'Target date set!' })
    calculateCountdown()
  }
}

// Daily Challenge Logic
const startDailyChallenge = async () => {
  if (challengeProgress.value >= 5) return

  // Fetch random questions only if starting fresh
  if (dailyQuestions.value.length === 0) {
    loading.value = true
    // Note: Supabase random sorting needs a function or calling logic.
    // Simple workaround: fetch some, shuffle client side (since fetched count is small DB).
    const { data, error } = await supabase.from('questions').select('*').limit(20)
    loading.value = false

    if (error) {
      console.error('Error fetching daily challenge:', error)
      $q.notify({ type: 'negative', message: 'Failed to load challenge questions.' })
      return
    }

    if (data && data.length > 0) {
      // Shuffle and pick 5
      dailyQuestions.value = data.sort(() => 0.5 - Math.random()).slice(0, 5)
      currentQuestionIndex.value = 0
      showChallengeDialog.value = true
    } else {
      $q.notify({ type: 'warning', message: 'No questions available for challenge yet.' })
    }
  } else {
    showChallengeDialog.value = true
  }
}

const checkAnswer = async (selectedOption) => {
  const isCorrect = selectedOption === currentQuestion.value.correct_answer
  if (isCorrect) {
    $q.notify({ type: 'positive', message: 'Correct!', timeout: 500 })
  } else {
    $q.notify({
      type: 'negative',
      message: `Wrong! Answer: ${currentQuestion.value.correct_answer}`,
      timeout: 2000,
    })
  }

  // Move Next
  if (currentQuestionIndex.value < 4) {
    currentQuestionIndex.value++
  } else {
    // Finished
    showChallengeDialog.value = false
    challengeProgress.value = 5
    $q.notify({
      type: 'positive',
      message: 'Challenge Completed! +50 Points',
      icon: 'emoji_events',
      position: 'top',
    })

    // Update Points
    const newPoints = (authStore.profile?.points || 0) + 50
    await supabase.from('profiles').update({ points: newPoints }).eq('id', authStore.user.id)
    // Refresh profile locally if possible or simple manual update
    if (authStore.profile) authStore.profile.points = newPoints
  }
}

const fetchDashboardData = async () => {
  if (!authStore.user) {
    loading.value = false
    return
  }

  loading.value = true
  try {
    // 1. Fetch Results joined with Exams
    const { data, error } = await supabase
      .from('results')
      .select('score, created_at, exams (title)')
      .eq('profile_id', authStore.user.id)
      .order('created_at', { ascending: false })
      .limit(5)
    if (error) throw error

    // 2. Fetch Profile Extra Data (Target Date) specifically if not in store or just fresh
    const { data: profileData } = await supabase
      .from('profiles')
      .select('target_exam_date, points')
      .eq('id', authStore.user.id)
      .single()
    if (profileData) {
      if (profileData.target_exam_date) {
        targetDate.value = profileData.target_exam_date
        calculateCountdown()
      }
      // Update store points if mismatch (optional synchronization)
      if (authStore.profile) authStore.profile.points = profileData.points
    }

    // Basic Stats
    if (data && data.length > 0) {
      recentResults.value = data.map((r) => ({
        title: r.exams?.title || 'Unknown Exam',
        score: `${r.score}%`,
        rawScore: r.score,
        // Simple Icon Logic based on score
        icon: r.score >= 75 ? 'military_tech' : r.score >= 50 ? 'school' : 'quiz',
        iconBg:
          r.score >= 75 ? 'bg-primary/10' : r.score >= 50 ? 'bg-green-500/10' : 'bg-orange-500/10',
        iconColor:
          r.score >= 75 ? 'text-primary' : r.score >= 50 ? 'text-green-500' : 'text-orange-500',
        scoreColor: r.score >= 75 ? 'text-primary' : 'text-slate-gray',
      }))

      // Calculate Average & Calendar
      const totalScore = data.reduce((acc, curr) => acc + curr.score, 0)
      averageScore.value = Math.round(totalScore / data.length)
      totalExams.value = data.length
      studyEventDates.value = data.map((r) => r.created_at.slice(0, 10).replace(/-/g, '/'))
    } else {
      recentResults.value = []
      averageScore.value = 0
      totalExams.value = 0
    }
  } catch (err) {
    console.error('Dashboard Error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (authStore.user) {
    if (!authStore.profile) await authStore.fetchProfile()
    await fetchDashboardData()
  }
})

import { watch } from 'vue'
watch(
  () => authStore.user,
  async (val) => {
    if (val) {
      if (!authStore.profile) await authStore.fetchProfile()
      await fetchDashboardData()
    }
  },
)
</script>

<style scoped>
.circular-progress {
  background:
    radial-gradient(closest-side, white 85%, transparent 86% 100%),
    conic-gradient(#008080 75%, #e2e8f0 0);
}
.dark .circular-progress {
  background:
    radial-gradient(closest-side, #0f1717 85%, transparent 86% 100%),
    conic-gradient(#008080 75%, #1e293b 0);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in-right {
  opacity: 0;
  animation: slideInRight 0.5s ease-out forwards;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
