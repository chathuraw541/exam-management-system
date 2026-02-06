<template>
  <q-page
    class="bg-background-light dark:bg-background-dark text-slate-gray dark:text-white antialiased font-display selection:bg-primary/30 selection:text-primary"
  >
    <!-- Background Decor -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-70"
      ></div>
      <div
        class="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"
      ></div>
    </div>

    <!-- Navigation -->
    <header
      class="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-background-dark/80 border-b border-gray-100/50 dark:border-white/5"
    >
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <!-- Simple Logo Icon -->
          <div
            class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-login flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20"
          >
            J
          </div>
          <h2 class="text-2xl font-black tracking-tighter text-slate-gray dark:text-white">
            ජය<span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-login"
              >මඟ</span
            >
          </h2>
        </div>

        <div class="flex items-center gap-4">
          <router-link
            to="/login"
            class="hidden md:flex text-sm font-bold text-slate-gray/70 dark:text-gray-300 hover:text-primary transition-colors"
          >
            පිවිසෙන්න
          </router-link>
          <router-link
            to="/register"
            class="flex items-center justify-center h-10 px-6 rounded-full bg-slate-gray dark:bg-white text-white dark:text-background-dark text-sm font-bold transition-transform hover:scale-105 active:scale-95"
          >
            ලියාපදිංචි වන්න
          </router-link>
        </div>
      </div>
    </header>

    <main class="relative z-10 max-w-7xl mx-auto w-full pt-20">
      <!-- Improved Hero Section (PAS Model) -->
      <section
        class="flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-32 gap-12 lg:gap-20"
      >
        <!-- Hero Text -->
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-8"
        >
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase animate-fade-in-up"
          >
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            The #1 Exam Platform
          </div>

          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fade-in-up delay-100"
          >
            <span class="block text-primary">විභාගය ළඟයිද?</span>
            <span class="block text-slate-gray dark:text-white"
              >තවමත් සූදානම් මදි වගේ දැනෙනවාද?</span
            >
          </h1>

          <p
            class="text-lg md:text-xl text-slate-gray/70 dark:text-gray-400 font-medium leading-relaxed max-w-lg animate-fade-in-up delay-200"
          >
            එක ලකුණක් නිසා ඔබේ සිහින රැකියාව තවත් වසරකින් පස්සට යන්න දෙන්න එපා. ලංකාවේ අංක 1 විභාග
            පුහුණු පද්ධතිය සමඟ අදම එක්වන්න.
          </p>

          <div
            class="flex flex-col items-center sm:items-start gap-4 w-full sm:w-auto animate-fade-in-up delay-300"
          >
            <div class="flex flex-col sm:flex-row gap-4 w-full">
              <router-link
                to="/register"
                class="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-primary-login text-white font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                නොමිලේ පටන් ගන්න
                <span class="material-symbols-outlined text-xl">arrow_forward</span>
              </router-link>
              <router-link
                to="/login"
                class="h-14 px-8 rounded-full bg-white dark:bg-white/5 border border-border-gray dark:border-white/10 text-slate-gray dark:text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              >
                පිවිසෙන්න
                <span class="material-symbols-outlined text-xl">login</span>
              </router-link>
            </div>
            <!-- Ability Badge (Fogg Model) -->
            <div class="flex items-center gap-2 text-sm text-slate-gray/60 dark:text-gray-400">
              <span class="material-symbols-outlined text-green-500 text-lg">timer</span>
              <span>තත්පර 30න් ලියාපදිංචි වන්න</span>
            </div>
          </div>

          <!-- Trust Indicators -->
          <div class="pt-4 flex items-center gap-6 opacity-80 animate-fade-in-up delay-500">
            <div class="flex -space-x-3">
              <div
                class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-200"
              ></div>
              <div
                class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-300"
              ></div>
              <div
                class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-400"
              ></div>
              <div
                class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-primary text-white text-xs font-bold flex items-center justify-center"
              >
                15k+
              </div>
            </div>
            <div class="text-sm font-bold text-slate-gray dark:text-gray-300">
              සිසුන් 15,000+ විශ්වාසය <br />දිනූ එකම තැන
            </div>
          </div>
        </div>

        <!-- Hero Visual (Dynamic Glassmorphism) -->
        <div
          class="relative md:w-1/2 w-full flex justify-center perspective-1000 animate-fade-in-left delay-300"
        >
          <!-- Abstract Glows behind -->
          <div
            class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
          ></div>

          <!-- Main Glass Card -->
          <div
            class="relative w-full max-w-md bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700"
          >
            <!-- Inner Card Content mimicking a Dashboard/Exam Panel -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-2xl bg-white dark:bg-background-dark shadow-md flex items-center justify-center text-primary"
                >
                  <span class="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <h3 class="font-bold text-slate-gray dark:text-white text-lg">
                    General Knowledge
                  </h3>
                  <p class="text-xs text-slate-gray/60 dark:text-gray-400">Time Left: 45:00</p>
                </div>
              </div>
              <div
                class="px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold"
              >
                Active
              </div>
            </div>

            <!-- Mock Questions -->
            <div class="space-y-3">
              <div
                class="p-3 rounded-xl bg-white/60 dark:bg-black/20 border border-white/20 dark:border-white/5 flex items-center gap-3 cursor-pointer hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              >
                <div
                  class="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center"
                >
                  <div class="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span class="text-sm font-medium text-slate-gray dark:text-gray-200"
                  >ශ්‍රී ලංකාවේ අගනුවර කුමක්ද?</span
                >
              </div>
              <div
                class="p-3 rounded-xl bg-white/40 dark:bg-black/10 border border-white/20 dark:border-white/5 flex items-center gap-3 opacity-60"
              >
                <div
                  class="w-6 h-6 rounded-full border-2 border-gray-400 dark:border-gray-600"
                ></div>
                <span class="text-sm font-medium text-slate-gray dark:text-gray-200"
                  >මහවැලි ගඟේ දිග කොපමණද?</span
                >
              </div>
            </div>

            <!-- Floating Success Badge -->
            <div
              class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 dark:border-gray-700 animate-bounce-slow"
            >
              <div
                class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"
              >
                <span class="material-symbols-outlined">check</span>
              </div>
              <div>
                <p class="text-xs text-gray-500 dark:text-gray-400">Score</p>
                <p class="text-lg font-black text-slate-gray dark:text-white">92/100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Bento Grid (Desire) -->
      <section class="px-6 py-12">
        <div class="flex flex-col items-center mb-12">
          <span class="text-primary font-bold uppercase tracking-widest text-sm mb-2"
            >Why Choose Us?</span
          >
          <h2 class="text-3xl font-black text-slate-gray dark:text-white text-center">
            විභාග ජයගන්න හොඳම ක්‍රමය
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <!-- Interactive IQ Exams -->
          <div
            class="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-white/5 border border-border-gray dark:border-white/10 hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col justify-between"
          >
            <div
              class="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500"
            >
              <span class="material-symbols-outlined text-9xl">psychology</span>
            </div>
            <div class="relative z-10">
              <div
                class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4"
              >
                <span class="material-symbols-outlined text-2xl">timer</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-gray dark:text-white mb-2">
                Interactive IQ Exams
              </h3>
              <p class="text-slate-gray/70 dark:text-gray-400 max-w-sm">
                නියමිත වේලාවට අභියෝග කරන්න. සැබෑ විභාග අත්දැකීම විඳගන්න.
              </p>
            </div>
            <!-- Mock Timer Visual -->
            <div
              class="mt-6 w-full bg-gray-100 dark:bg-black/20 rounded-xl p-4 flex items-center justify-between"
            >
              <span class="text-sm font-bold text-slate-gray dark:text-white">Question 05</span>
              <span class="text-sm font-mono text-red-500 font-bold">00:45</span>
            </div>
          </div>

          <!-- Daily Challenges -->
          <div
            class="p-8 rounded-3xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 hover:border-orange-200 transition-all group flex flex-col justify-between"
          >
            <div>
              <div
                class="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30"
              >
                <span class="material-symbols-outlined text-2xl">local_fire_department</span>
              </div>
              <h3 class="text-xl font-bold text-slate-gray dark:text-white mb-2">
                Daily Challenges
              </h3>
              <p class="text-slate-gray/70 dark:text-gray-400 text-sm">
                දිනපතා අලුත් අභියෝගයක්. ඔබේ දැනුම යාවත්කාලීනව තබාගන්න.
              </p>
            </div>
            <div class="mt-4 flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
              <div
                class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold"
              >
                +
              </div>
            </div>
          </div>

          <!-- Progress Analytics -->
          <div
            class="md:col-span-3 p-8 rounded-3xl bg-gradient-to-br from-slate-800 to-black text-white relative overflow-hidden"
          >
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="md:w-1/2">
                <div
                  class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4"
                >
                  <span class="material-symbols-outlined text-2xl">analytics</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">Progress Analytics</h3>
                <p class="text-gray-400 mb-6">
                  ඔබේ ප්‍රගතිය දත්ත සමඟ බලන්න. දුර්වලතා හඳුනාගෙන ඒවා මගහරවා ගන්න.
                </p>
                <router-link
                  to="/register"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-login transition-colors font-bold text-sm"
                >
                  විශ්ලේෂණය අරඹන්න
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </router-link>
              </div>

              <!-- Mock Chart Visual -->
              <div class="md:w-1/2 w-full h-40 flex items-end justify-between px-4 gap-2">
                <div class="w-full bg-white/10 rounded-t-lg h-[40%]"></div>
                <div class="w-full bg-white/20 rounded-t-lg h-[60%]"></div>
                <div class="w-full bg-primary/80 rounded-t-lg h-[80%] relative group">
                  <div
                    class="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    85%
                  </div>
                </div>
                <div class="w-full bg-white/10 rounded-t-lg h-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer Minimal -->
      <footer
        class="mt-20 border-t border-border-gray dark:border-white/5 py-12 px-6 bg-white dark:bg-black/20"
      >
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary-login flex items-center justify-center text-white text-xs font-bold"
            >
              J
            </div>
            <span class="font-bold text-slate-gray dark:text-white">LankaExam Pro</span>
          </div>

          <div class="flex gap-8 text-sm font-medium text-slate-gray/70 dark:text-gray-400">
            <a href="#" class="hover:text-primary transition-colors">Home</a>
            <a href="#" class="hover:text-primary transition-colors">About</a>
            <a href="#" class="hover:text-primary transition-colors">Courses</a>
            <a href="#" class="hover:text-primary transition-colors">Contact</a>
          </div>

          <div class="text-xs text-light-gray">© 2026. Made with ❤️ for Students.</div>
        </div>
      </footer>
    </main>
  </q-page>
</template>

<script setup>
// Minimal Logic, focus on visuals
</script>

<style scoped>
/* Custom Animations */
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulseSlow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

@keyframes bounceSlow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0; /* Starte hidden */
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 4s infinite ease-in-out;
}

.animate-bounce-slow {
  animation: bounceSlow 3s infinite ease-in-out;
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-500 {
  animation-delay: 0.5s;
}

/* 3D Perspective */
.perspective-1000 {
  perspective: 1000px;
}
.rotate-y-6 {
  transform: rotateY(-6deg) rotateX(2deg);
}
</style>
