<template>
  <q-page
    class="bg-gradient-to-br from-teal-50 to-slate-100 dark:from-zinc-900 dark:to-slate-900 font-display text-slate-gray antialiased min-h-screen p-4 md:p-8"
  >
    <div class="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
      <!-- 1. Hero Section -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 animate-scale-in">
        <div>
          <h1 class="text-3xl md:text-4xl font-black text-slate-gray dark:text-white leading-tight">
            ආයුබෝවන්,
            <span class="text-primary">{{
              authStore.profile?.full_name?.split(' ')[0] || 'Student'
            }}</span
            >! 👋
          </h1>
          <p class="text-slate-gray/60 dark:text-gray-400 font-medium mt-2 text-lg">
            ඔබේ විභාග ජයග්‍රහණයට තව දින
            <span class="text-primary font-bold">{{ daysLeft || '30' }}</span
            >යි. අදත් පුහුණුවීම් කරමු!
          </p>
        </div>
      </div>

      <!-- 2. Master Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        <!-- A. Overall Readiness (Main Card) - Col 1-5 -->
        <div
          class="md:col-span-5 md:row-span-2 bg-white dark:bg-zinc-800/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center group"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <!-- Circular Progress -->
          <div class="relative w-64 h-64 mb-6">
            <svg class="w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                stroke-width="20"
                fill="transparent"
                class="text-gray-100 dark:text-gray-800"
              />
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                stroke-width="20"
                fill="transparent"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="dashOffset"
                class="text-primary transition-all duration-1000 ease-out"
              />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-6xl font-black text-slate-gray dark:text-white tracking-tighter"
                >{{ readiness }}%</span
              >
              <span class="text-xs font-bold uppercase text-slate-gray/40 tracking-widest mt-1"
                >Ready</span
              >
            </div>
          </div>

          <h3 class="text-xl font-bold text-slate-gray dark:text-white mb-2 relative z-10">
            Overall Readiness
          </h3>
          <p class="text-slate-gray/60 dark:text-gray-400 text-sm max-w-xs relative z-10">
            Based on your last {{ recentResults.length }} exam attempts. Keep pushing to reach the
            90% safe zone!
          </p>
        </div>

        <!-- B. Real-time Stats - Col 6-12 -->
        <!-- Exams Completed -->
        <div
          class="md:col-span-3 bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between group"
        >
          <div
            class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
          >
            <span class="material-symbols-outlined text-2xl">history_edu</span>
          </div>
          <div>
            <span class="text-4xl font-black text-slate-gray dark:text-white block mb-1">{{
              totalExams
            }}</span>
            <span class="text-xs font-bold uppercase text-slate-gray/50 tracking-wide"
              >Exams Completed</span
            >
          </div>
        </div>

        <!-- Daily Streak -->
        <div
          class="md:col-span-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-500/10 rounded-3xl p-6 shadow-sm hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between relative overflow-hidden group"
        >
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10"
          ></div>
          <div
            class="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center relative z-10"
          >
            <span class="material-symbols-outlined text-2xl">local_fire_department</span>
          </div>
          <div class="relative z-10">
            <span class="text-4xl font-black text-slate-gray dark:text-white block mb-1"
              >5 Days</span
            >
            <span class="text-xs font-bold uppercase text-slate-gray/50 tracking-wide"
              >Daily Streak</span
            >
          </div>
        </div>

        <!-- C. Subject Breakdown - Col 6-12 (Row 2) -->
        <div
          class="md:col-span-7 bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm flex flex-col justify-between"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-slate-gray dark:text-white">Subject Mastery</h3>
            <button
              @click="router.push('/app/exams')"
              class="text-xs font-bold text-primary hover:underline"
            >
              View All
            </button>
          </div>

          <div class="space-y-5">
            <div v-for="(subject, idx) in subjectProgress" :key="idx">
              <div
                class="flex justify-between text-xs font-bold text-slate-gray/70 dark:text-gray-300 mb-2"
              >
                <span>{{ subject.name }}</span>
                <span>{{ subject.percent }}%</span>
              </div>
              <div class="h-2.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :class="subject.color"
                  :style="{ width: subject.percent + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Recent Activity (Full Width for Mobile, Col 1-8 for Desktop) -->
        <div
          class="md:col-span-8 bg-white dark:bg-zinc-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-sm min-h-[300px]"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-bold text-slate-gray dark:text-white text-lg">Recent Activity</h3>
          </div>

          <div v-if="loading" class="space-y-4">
            <q-skeleton type="rect" height="64px" class="rounded-2xl" v-for="n in 3" :key="n" />
          </div>

          <div v-else-if="recentResults.length > 0" class="flex flex-col gap-3">
            <div
              v-for="(exam, index) in recentResults"
              :key="index"
              class="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group animate-slide-in-right border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
              :style="{ animationDelay: `${index * 50}ms` }"
              @click="
                router.push(
                  '/exam/' + exam.exam_id + '/results?score=' + exam.rawScore + '&total=50',
                )
              "
            >
              <div class="flex items-center gap-4">
                <div
                  :class="exam.iconBg"
                  class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                >
                  <span class="material-symbols-outlined text-xl" :class="exam.iconColor">{{
                    exam.icon
                  }}</span>
                </div>
                <div>
                  <p class="font-bold text-slate-gray dark:text-white text-base">
                    {{ exam.title }}
                  </p>
                  <p class="text-xs text-slate-gray/50 font-medium">
                    {{ exam.date }} • {{ exam.score >= 50 ? 'Passed' : 'Failed' }}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span :class="exam.scoreColor" class="text-xl font-black">{{ exam.score }}</span>
                <span
                  class="material-symbols-outlined text-slate-gray/30 group-hover:text-primary transition-colors"
                  >arrow_forward</span
                >
              </div>
            </div>
          </div>

          <div v-else class="h-full flex flex-col items-center justify-center pb-8 opacity-60">
            <span class="material-symbols-outlined text-4xl mb-2 text-slate-gray/30"
              >history_edu</span
            >
            <p class="text-sm font-medium">No recent exams found.</p>
          </div>
        </div>

        <!-- 4. Quick Actions / Pro Tip (Col 9-12) -->
        <div class="md:col-span-4 flex flex-col gap-6">
          <!-- Start New Exam CTA -->
          <button
            @click="router.push('/app/exams')"
            class="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-login text-white font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            <span
              class="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform"
              >add_circle</span
            >
            <span class="text-lg">Start New Exam</span>
          </button>

          <!-- Pro Tip Card -->
          <div
            class="flex-1 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/10 rounded-3xl p-6 flex flex-col gap-3"
          >
            <div
              class="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold uppercase text-xs tracking-widest"
            >
              <span class="material-symbols-outlined text-lg">lightbulb</span>
              Did You Know?
            </div>
            <p class="text-sm font-medium text-slate-gray/80 dark:text-gray-300 leading-relaxed">
              Consistent practice at the same time each day builds a habit loop, increasing memory
              retention by up to 40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useAuthStore } from 'stores/auth'
import { supabase } from '../../supabase'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

// State
const loading = ref(true)
const recentResults = ref([])
const totalExams = ref(0)
const averageScore = ref(0)
const daysLeft = ref(30) // Mock for now

// Progress Circle Logic
const circumference = 2 * Math.PI * 110
const readiness = computed(() => averageScore.value)
const dashOffset = computed(() => {
  return circumference - (readiness.value / 100) * circumference
})

// Mock Subject Data (In real app, calculate from results)
const subjectProgress = ref([
  { name: 'IQ Knowledge', percent: 75, color: 'bg-purple-500' },
  { name: 'General Knowledge', percent: 45, color: 'bg-blue-500' },
  { name: 'Teaching Aptitude', percent: 90, color: 'bg-emerald-500' },
  { name: 'Language Skills', percent: 60, color: 'bg-orange-500' },
])

const fetchDashboardData = async () => {
  if (!authStore.user) return

  loading.value = true
  try {
    // Fetch Results
    const { data, error } = await supabase
      .from('results')
      .select('*, exams (title)')
      .eq('profile_id', authStore.user.id)
      .order('created_at', { ascending: false })
      .limit(5)

    if (error) throw error

    if (data && data.length > 0) {
      recentResults.value = data.map((r) => ({
        title: r.exams?.title || 'Unknown Exam',
        score: `${r.score}%`,
        rawScore: r.score,
        exam_id: r.exam_id,
        date: new Date(r.created_at).toLocaleDateString(),
        scoreColor:
          r.score >= 75 ? 'text-primary' : r.score >= 50 ? 'text-green-600' : 'text-orange-500',
        icon: r.score >= 75 ? 'military_tech' : r.score >= 50 ? 'school' : 'quiz',
        iconColor:
          r.score >= 75 ? 'text-primary' : r.score >= 50 ? 'text-green-600' : 'text-orange-500',
        iconBg: r.score >= 75 ? 'bg-primary/10' : r.score >= 50 ? 'bg-green-100' : 'bg-orange-100',
      }))

      const totalScore = data.reduce((acc, curr) => acc + curr.score, 0)
      averageScore.value = Math.round(totalScore / data.length)
      totalExams.value = data.length // Ideally count(*) from DB
    } else {
      recentResults.value = []
      averageScore.value = 0
    }
  } catch (err) {
    console.error(err)
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

watch(
  () => authStore.user,
  async (val) => {
    if (val) await fetchDashboardData()
  },
)
</script>

<style scoped>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-scale-in {
  animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
</style>
