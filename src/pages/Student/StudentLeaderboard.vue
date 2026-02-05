<template>
  <q-page
    class="bg-background-light dark:bg-background-dark font-display text-slate-gray antialiased min-h-screen"
  >
    <div class="max-w-4xl mx-auto w-full p-4 pb-20 md:p-8">
      <!-- Header -->
      <header class="mb-8 text-center md:text-left">
        <h1 class="text-2xl font-bold text-slate-800 dark:text-white">Leaderboard</h1>
        <p class="text-sm text-slate-gray/60 mt-1">Top performers in Sri Lanka</p>
      </header>

      <!-- Filters -->
      <div
        class="flex justify-center md:justify-start gap-2 mb-8 bg-white dark:bg-zinc-800 p-1 rounded-xl w-fit mx-auto md:mx-0 border border-gray-100 dark:border-gray-700 shadow-sm"
      >
        <button
          @click="filter = 'island'"
          :class="
            filter === 'island'
              ? 'bg-primary text-white shadow-md'
              : 'text-slate-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
          "
          class="px-6 py-2 rounded-lg text-sm font-bold transition-all"
        >
          All Island
        </button>
        <button
          @click="filter = 'district'"
          :class="
            filter === 'district'
              ? 'bg-primary text-white shadow-md'
              : 'text-slate-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
          "
          class="px-6 py-2 rounded-lg text-sm font-bold transition-all"
        >
          Colombo Dist.
        </button>
      </div>

      <!-- Podium (Top 3) -->
      <div class="flex items-end justify-center gap-4 mb-10 pb-4">
        <!-- 2nd Place -->
        <div class="flex flex-col items-center gap-2">
          <div class="relative">
            <div
              class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-gray-300 bg-gray-200 flex items-center justify-center overflow-hidden"
            >
              <span class="material-symbols-outlined text-4xl text-gray-400">person</span>
            </div>
            <div
              class="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-800 text-xs font-bold px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              #2
            </div>
          </div>
          <div class="text-center">
            <p class="font-bold text-sm text-slate-800 dark:text-white">Nimali</p>
            <p class="text-xs text-primary font-bold">885 pts</p>
          </div>
        </div>

        <!-- 1st Place -->
        <div class="flex flex-col items-center gap-2 z-10 -mb-4">
          <div class="relative">
            <div
              class="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-yellow-400 bg-yellow-100 flex items-center justify-center overflow-hidden shadow-lg shadow-yellow-400/20"
            >
              <span class="material-symbols-outlined text-5xl text-yellow-600">person</span>
            </div>
            <div
              class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-sm font-bold px-3 py-0.5 rounded-full shadow-md"
            >
              #1
            </div>
            <div class="absolute -top-2 right-0 rotate-12">
              <span class="text-2xl">👑</span>
            </div>
          </div>
          <div class="text-center mt-2">
            <p class="font-bold text-base text-slate-800 dark:text-white">Kasun P.</p>
            <p class="text-sm text-primary font-bold">920 pts</p>
          </div>
        </div>

        <!-- 3rd Place -->
        <div class="flex flex-col items-center gap-2">
          <div class="relative">
            <div
              class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-orange-300 bg-orange-100 flex items-center justify-center overflow-hidden"
            >
              <span class="material-symbols-outlined text-4xl text-orange-400">person</span>
            </div>
            <div
              class="absolute -bottom-2 -left-2 bg-white dark:bg-zinc-800 text-xs font-bold px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              #3
            </div>
          </div>
          <div class="text-center">
            <p class="font-bold text-sm text-slate-800 dark:text-white">Amara</p>
            <p class="text-xs text-primary font-bold">850 pts</p>
          </div>
        </div>
      </div>

      <!-- Rank List -->
      <div
        class="bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm"
      >
        <div v-if="loading" class="p-8 h-40 relative">
          <q-inner-loading showing color="primary" />
        </div>
        <div v-else class="divide-y divide-gray-100 dark:divide-gray-700">
          <!-- Header Row -->
          <div
            class="flex items-center p-4 bg-gray-50/50 dark:bg-white/5 text-xs font-bold uppercase tracking-wider text-slate-gray/60"
          >
            <div class="w-8 text-center">#</div>
            <div class="flex-1 px-4">Student</div>
            <div class="w-20 text-right">Points</div>
          </div>

          <!-- List Items -->
          <div
            v-for="(student, index) in rankingList"
            :key="index"
            class="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <div class="w-8 text-center font-bold text-slate-gray dark:text-gray-400">
              {{ index + 4 }}
            </div>
            <div class="flex-1 px-4 flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-sm text-gray-400">person</span>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800 dark:text-white">
                  {{ student.name }}
                </p>
                <p class="text-[10px] text-slate-gray/60">{{ student.district }}</p>
              </div>
            </div>
            <div class="w-20 text-right font-bold text-primary">{{ student.points }}</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const filter = ref('island')
const loading = ref(true)

const allRankings = [
  { name: 'Sahan Dissanayake', district: 'Gampaha', points: 840 },
  { name: 'Ruwan Kumara', district: 'Kandy', points: 835 },
  { name: 'Tharindu Perera', district: 'Colombo', points: 820 },
  { name: 'Malith De Silva', district: 'Galle', points: 815 },
  { name: 'Chathura Bandara', district: 'Kurunegala', points: 810 },
  { name: 'Ishara Madushani', district: 'Matara', points: 805 },
  { name: 'Nuwan Pradeep', district: 'Anuradhapura', points: 800 },
]

// Mock user district
const myDistrict = 'Colombo'

const rankingList = computed(() => {
  if (filter.value === 'island') return allRankings
  return allRankings.filter((s) => s.district === myDistrict)
})

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>
