<template>
  <q-page
    class="bg-background-light dark:bg-background-dark text-[#0d1b1b] dark:text-white antialiased font-display"
  >
    <div
      class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-7xl mx-auto md:px-8"
    >
      <!-- Header -->
      <div
        class="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-[#cfe7e7] dark:border-[#1a3535] md:border-none md:pt-8"
      >
        <div
          @click="$router.push('/app/dashboard')"
          class="text-[#0d1b1b] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-black/5 rounded-full transition-colors"
        >
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <h2
          class="text-[#0d1b1b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10 md:text-left md:pl-4 md:text-2xl"
        >
          ප්රතිඵල සහ සමාලෝචනය
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-0 md:mt-4 pb-32">
        <!-- Left Col: Stats -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Summary Banner -->
          <div class="flex flex-wrap lg:flex-col gap-4">
            <div
              class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#cfe7e7] dark:border-[#1a3535] bg-white dark:bg-[#152e2e] shadow-sm"
            >
              <p class="text-[#4c9a9a] text-sm font-medium leading-normal">ලකුණු ප්රමාණය</p>
              <p class="text-[#0d1b1b] dark:text-white tracking-light text-4xl font-bold leading-tight">
                85%
              </p>
            </div>
            <div
              class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#cfe7e7] dark:border-[#1a3535] bg-white dark:bg-[#152e2e] shadow-sm"
            >
              <p class="text-[#4c9a9a] text-sm font-medium leading-normal">ප්රතිඵලය</p>
              <p class="text-primary-active tracking-light text-4xl font-bold leading-tight">සමත්</p>
            </div>
          </div>

           <!-- Desktop Actions (Moved from bottom) -->
          <div class="hidden lg:flex flex-col gap-3 sticky top-24">
            <button
               class="w-full bg-primary-active text-[#0d1b1b] font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-105"
            >
              <span class="material-symbols-outlined">refresh</span>
              වැරදුනු ප්රශ්න නැවත කරන්න
            </button>
            <button
              @click="$router.push('/app/dashboard')"
              class="w-full bg-[#e8f0f0] dark:bg-[#1a3535] text-[#0d1b1b] dark:text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <span class="material-symbols-outlined">home</span>
              මුල් පිටුවට
            </button>
          </div>
        </div>

        <!-- Right Col: Review List -->
        <div class="lg:col-span-2 space-y-6">
             <!-- Filter Tabs -->
            <div class="pb-3 px-1">
              <div class="flex border-b border-[#cfe7e7] dark:border-[#1a3535] justify-between md:justify-start md:gap-8">
                <a
                  class="flex flex-col items-center justify-center border-b-2 border-primary-active text-[#0d1b1b] dark:text-white pb-[13px] pt-4 min-w-[80px] cursor-pointer"
                >
                  <p class="text-sm font-bold leading-normal tracking-[0.015em]">සියලුම</p>
                </a>
                <a
                  class="flex flex-col items-center justify-center border-b-2 border-transparent text-[#4c9a9a] pb-[13px] pt-4 min-w-[80px] cursor-pointer hover:text-primary-active/70 transition-colors"
                >
                  <p class="text-sm font-bold leading-normal tracking-[0.015em]">වැරදුනු</p>
                </a>
                <a
                  class="flex flex-col items-center justify-center border-b-2 border-transparent text-[#4c9a9a] pb-[13px] pt-4 min-w-[80px] cursor-pointer hover:text-primary-active/70 transition-colors"
                >
                  <p class="text-sm font-bold leading-normal tracking-[0.015em]">විවරණ</p>
                </a>
              </div>
            </div>

             <!-- Review List -->
             <div class="flex flex-col gap-6">
        <!-- Question Item - Correct -->
        <div class="flex flex-col gap-3">
          <div
            class="flex gap-3 items-start border-l-4 border-primary-active bg-white dark:bg-[#152e2e] p-4 rounded-r-lg shadow-sm"
          >
            <div class="flex flex-1 flex-col gap-2">
              <p class="text-[#0d1b1b] dark:text-white text-base font-medium leading-relaxed">
                01. රුපියල් 500 කට භාණ්ඩයක් විකුණා 20% ක ලාභයක් ලැබූ විට එහි මුල් මිල කීයද?
              </p>
              <div class="flex flex-col gap-1 mt-2">
                <p class="text-primary-active text-sm font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> ඔබේ පිළිතුර:
                  රුපියල් 416.67
                </p>
              </div>
            </div>
          </div>
          <!-- Solution Box -->
          <div class="bg-[#f0f4f4] dark:bg-[#1a3535] p-4 rounded-lg">
            <p class="text-[#0d1b1b] dark:text-white text-sm font-bold mb-2">විවරණය:</p>
            <p class="text-[#4c9a9a] text-sm leading-relaxed">
              මෙහිදී ලාභය 20% බැවින් විකුණුම් මිල 120% වේ. <br />
              <span class="font-mono bg-white/50 dark:bg-black/20 px-1 rounded">120% = 500</span>
              <br />
              එවිට
              <span class="font-mono bg-white/50 dark:bg-black/20 px-1 rounded"
                >100% = (500 / 120) × 100 = 416.67</span
              >
            </p>
          </div>
        </div>
        <!-- Question Item - Incorrect -->
        <div class="flex flex-col gap-3">
          <div
            class="flex gap-3 items-start border-l-4 border-[#cfe7e7] dark:border-[#334b4b] bg-white dark:bg-[#152e2e] p-4 rounded-r-lg shadow-sm"
          >
            <div class="flex flex-1 flex-col gap-2">
              <p class="text-[#0d1b1b] dark:text-white text-base font-medium leading-relaxed">
                02. ශ්රේණියේ ඊළඟ අංකය කුමක්ද? 2, 6, 12, 20, ...
              </p>
              <div class="flex flex-col gap-1 mt-2">
                <p class="text-red-500 text-sm font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">cancel</span> ඔබේ පිළිතුර: 28
                </p>
                <p class="text-primary-active text-sm font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> නිවැරදි
                  පිළිතුර: 30
                </p>
              </div>
            </div>
          </div>
          <!-- Solution Box -->
          <div class="bg-[#f0f4f4] dark:bg-[#1a3535] p-4 rounded-lg">
            <p class="text-[#0d1b1b] dark:text-white text-sm font-bold mb-2">විවරණය:</p>
            <p class="text-[#4c9a9a] text-sm leading-relaxed">
              මෙම රටාව <span class="font-mono">n² + n</span> ලෙස හැඳින්විය හැක: <br />
              1² + 1 = 2 <br />
              2² + 2 = 6 <br />
              3² + 3 = 12 <br />
              4² + 4 = 20 <br />
              <span class="text-primary-active font-bold">5² + 5 = 30</span>
            </p>
          </div>
        </div>
        <!-- Question Item - Correct -->
        <div class="flex flex-col gap-3">
          <div
            class="flex gap-3 items-start border-l-4 border-primary-active bg-white dark:bg-[#152e2e] p-4 rounded-r-lg shadow-sm"
          >
            <div class="flex flex-1 flex-col gap-2">
              <p class="text-[#0d1b1b] dark:text-white text-base font-medium leading-relaxed">
                03. ශ්රී ලංකාවේ ප්රථම අග්රාමාත්යවරයා කවුද?
              </p>
              <div class="flex flex-col gap-1 mt-2">
                <p class="text-primary-active text-sm font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> ඔබේ පිළිතුර:
                  ඩී.එස්. සේනානායක
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- Spacer for bottom buttons -->
      <div class="h-10 md:hidden"></div>
      <!-- Bottom Actions (Mobile Only) -->
      <div
        class="lg:hidden fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-background-light dark:bg-background-dark p-4 flex flex-col gap-3 border-t border-[#cfe7e7] dark:border-[#1a3535]"
      >
        <button
          class="w-full bg-primary-active text-[#0d1b1b] font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
        >
          <span class="material-symbols-outlined">refresh</span>
          වැරදුනු ප්රශ්න නැවත කරන්න
        </button>
        <button
          @click="$router.push('/app/dashboard')"
          class="w-full bg-[#e8f0f0] dark:bg-[#1a3535] text-[#0d1b1b] dark:text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2"
        >
          <span class="material-symbols-outlined">home</span>
          මුල් පිටුවට
        </button>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import confetti from 'canvas-confetti'

const passed = true // Mock result

const triggerConfetti = () => {
  const duration = 3 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  const random = (min, max) => Math.random() * (max - min) + min

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
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

onMounted(() => {
  if (passed) {
    triggerConfetti()
  }
})
</script>
