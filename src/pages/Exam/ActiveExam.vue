<template>
  <q-page
    class="bg-background-light dark:bg-background-dark text-[#0d1b1b] dark:text-white antialiased overflow-hidden font-display flex flex-col h-screen"
  >
    <!-- Header -->
    <header
      class="bg-white dark:bg-[#1a2e2e] border-b border-gray-100 dark:border-gray-800 pt-8 px-4 pb-4"
    >
      <div class="flex items-center justify-between mb-4">
        <button
          @click="$router.back()"
          class="text-[#0d1b1b] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-1 transition-colors"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
        <h1 class="text-base font-bold tracking-tight">IQ විශේෂිත - Paper 01</h1>
        <div class="flex items-center gap-1 text-slate-gray font-medium">
          <span class="material-symbols-outlined text-sm">schedule</span>
          <span class="text-sm">45:20</span>
        </div>
      </div>
      <div class="w-full bg-gray-100 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
        <div class="bg-primary-active h-full w-[35%]"></div>
      </div>
    </header>

    <!-- Question Area -->
    <main class="flex-1 overflow-hidden flex relative">
      <!-- Questions List (Desktop) -->
      <aside
        class="hidden md:flex flex-col w-72 border-r border-[#e0e0e0] dark:border-gray-800 bg-white dark:bg-[#1a2e2e]"
      >
        <div class="p-4 border-b border-[#e0e0e0] dark:border-gray-800">
          <h3 class="font-bold text-sm uppercase tracking-wide text-slate-gray dark:text-gray-400">
            Questions
          </h3>
        </div>
        <div class="flex-1 overflow-y-auto p-4 grid grid-cols-4 gap-2 content-start">
          <div
            v-for="n in 50"
            :key="n"
            class="aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-colors cursor-pointer"
            :class="
              n === 8
                ? 'bg-primary text-white'
                : n < 8
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
            "
          >
            {{ n < 10 ? '0' + n : n }}
          </div>
        </div>
      </aside>

      <!-- Main Question Content -->
      <div class="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">
        <div class="w-full max-w-2xl">
          <p
            class="text-slate-gray text-xs font-semibold mb-2 uppercase tracking-widest text-center md:text-left"
          >
            ප්රශ්නය 08 / 50
          </p>
          <h2
            class="text-xl md:text-2xl font-bold text-center md:text-left leading-snug mb-10 text-[#0d1b1b] dark:text-white"
          >
            පහත රූපයේ දැක්වෙන රටාව සම්පූර්ණ කරන්න?
          </h2>
          <div class="space-y-4">
            <label
              class="group flex items-center justify-between p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2e2e] cursor-pointer hover:border-primary-active/50 transition-colors"
              @click="triggerHaptic"
            >
              <span class="text-base font-medium">පිළිතුර 01</span>
              <input
                type="radio"
                name="exam-option"
                class="w-5 h-5 text-primary-active border-gray-300 focus:ring-primary-active"
              />
            </label>
            <label
              class="group flex items-center justify-between p-5 rounded-xl border-2 border-primary-active bg-primary-active/5 dark:bg-primary-active/10 cursor-pointer"
              @click="triggerHaptic"
            >
              <span class="text-base font-bold">පිළිතුර 02</span>
              <input
                type="radio"
                name="exam-option"
                class="w-5 h-5 text-primary-active border-gray-300 focus:ring-primary-active"
                checked
              />
            </label>
            <label
              class="group flex items-center justify-between p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2e2e] cursor-pointer hover:border-primary-active/50 transition-colors"
              @click="triggerHaptic"
            >
              <span class="text-base font-medium">පිළිතුර 03</span>
              <input
                type="radio"
                name="exam-option"
                class="w-5 h-5 text-primary-active border-gray-300 focus:ring-primary-active"
              />
            </label>
            <label
              class="group flex items-center justify-between p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2e2e] cursor-pointer hover:border-primary-active/50 transition-colors"
              @click="triggerHaptic"
            >
              <span class="text-base font-medium">පිළිතුර 04</span>
              <input
                type="radio"
                name="exam-option"
                class="w-5 h-5 text-primary-active border-gray-300 focus:ring-primary-active"
              />
            </label>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer / Navigation -->
    <div
      class="p-4 flex flex-col items-center gap-4 bg-white dark:bg-[#1a2e2e] border-t border-gray-100 dark:border-gray-800 z-10"
    >
      <button
        @click="showSheet = !showSheet"
        class="md:hidden flex items-center gap-1 text-slate-gray py-2 px-4 rounded-full text-xs font-semibold"
      >
        <span class="material-symbols-outlined text-sm">grid_view</span>
        සියලු ප්රශ්න පෙන්වන්න
      </button>
      <div class="w-full flex gap-3 container max-w-sm">
        <button
          class="flex-1 py-4 px-6 rounded-xl border border-gray-200 dark:border-gray-700 text-[#0d1b1b] dark:text-white font-bold text-center"
        >
          කලින්
        </button>
        <button
          @click="$router.push('/exam/123/results')"
          class="flex-[2] py-4 px-6 rounded-xl bg-primary-active text-[#0d1b1b] font-bold text-center"
        >
          ඊළඟ
        </button>
      </div>
    </div>

    <!-- Question Sheet (Mobile Overlay) -->
    <div
      v-if="showSheet"
      class="md:hidden absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex flex-col justify-end"
      @click.self="showSheet = false"
    >
      <div class="bg-white dark:bg-[#102222] rounded-t-3xl p-6 h-3/4 shadow-2xl animate-slide-up">
        <div class="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-6"></div>
        <h3 class="text-lg font-bold mb-6 text-center">ප්රශ්න මාලාව</h3>
        <div class="grid grid-cols-5 gap-3 h-[400px] overflow-y-auto no-scrollbar pb-10">
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            01
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            02
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            03
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            04
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            05
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            06
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-primary-active text-xs font-bold text-[#0d1b1b]"
          >
            07
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full border-2 border-primary-active text-xs font-bold text-primary-active"
          >
            08
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            09
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            10
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            11
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            12
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            13
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            14
          </div>
          <div
            class="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-400"
          >
            15
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const showSheet = ref(false)

const triggerHaptic = () => {
  if (navigator.vibrate) {
    navigator.vibrate(50) // Light tap
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
