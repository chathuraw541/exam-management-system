<template>
  <q-page
    class="bg-background-light dark:bg-background-dark text-slate-gray dark:text-white antialiased font-display"
  >
    <!-- TopAppBar -->
    <header
      class="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-50 border-b border-border-gray dark:border-white/10"
    >
      <h2 class="text-primary text-xl font-bold leading-tight tracking-tight flex-1">ජයමඟ</h2>
      <div class="flex items-center justify-end">
        <button class="flex items-center justify-center h-10 w-10 text-slate-gray dark:text-white">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
    <main class="max-w-7xl mx-auto w-full">
      <!-- Hero Section -->
      <section
        class="flex flex-col md:flex-row items-center gap-12 px-6 py-12 md:py-20 text-center md:text-left bg-background-light dark:bg-background-dark"
      >
        <div class="flex flex-col gap-6 md:w-1/2">
          <h1
            class="text-slate-gray dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight"
          >
            රජයේ විභාග ජයග්රහණයට නිවැරදිම මාවත
          </h1>
          <p class="text-light-gray text-base md:text-xl font-normal leading-relaxed">
            SLAS, ගුරු විභාග සහ IQ පේපර්ස් විවරණ සහිතව. දිවයිනේ දක්ෂතම ඇදුරන් විසින් සැකසූ ප්රශ්න
            පත්ර.
          </p>
          <div class="flex justify-center md:justify-start gap-4">
            <router-link
              to="/register"
              class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide transition-all hover:opacity-90 hover:scale-105 shadow-lg shadow-primary/30"
            >
              ආරම්භ කරන්න
            </router-link>
            <router-link
              to="/login"
              class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 border border-border-gray dark:border-gray-700 text-slate-gray dark:text-gray-300 text-base font-bold tracking-wide transition-all hover:bg-gray-50 dark:hover:bg-white/5"
            >
              ඇතුල් වන්න
            </router-link>
          </div>
        </div>
        <!-- Hero Graphic Placeholder (Geometric Shapes) -->
        <div class="hidden md:flex md:w-1/2 justify-center relative">
          <div
            class="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
          ></div>
          <div
            class="relative w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-sm"
          >
            <span class="material-symbols-outlined text-9xl text-slate-gray/20">school</span>
          </div>
        </div>
      </section>

      <!-- Stats Bar (Desktop Only) -->
      <section
        class="hidden md:grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 border-y border-gray-100 dark:border-gray-800 py-8 bg-white dark:bg-white/5 mx-6 rounded-2xl"
      >
        <div class="text-center px-4">
          <h3 class="text-3xl font-black text-primary">15k+</h3>
          <p class="text-xs font-bold uppercase tracking-widest text-slate-gray/60">Students</p>
        </div>
        <div class="text-center px-4">
          <h3 class="text-3xl font-black text-primary">500+</h3>
          <p class="text-xs font-bold uppercase tracking-widest text-slate-gray/60">Papers</p>
        </div>
        <div class="text-center px-4">
          <h3 class="text-3xl font-black text-primary">92%</h3>
          <p class="text-xs font-bold uppercase tracking-widest text-slate-gray/60">Pass Rate</p>
        </div>
      </section>

      <!-- Search Bar -->
      <section class="px-6 py-8 md:py-12 max-w-3xl mx-auto">
        <label
          class="block text-center mb-4 text-sm font-bold uppercase tracking-widest text-slate-gray/50"
          >Find Your Exam</label
        >
        <div class="relative flex items-center w-full group">
          <div
            class="absolute left-4 text-light-gray group-focus-within:text-primary transition-colors"
          >
            <span class="material-symbols-outlined">search</span>
          </div>
          <input
            class="form-input w-full h-14 pl-12 pr-4 rounded-xl border border-border-gray dark:border-white/10 bg-white dark:bg-white/5 text-slate-gray dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-light-gray shadow-sm"
            placeholder="ඔබේ විභාගය මෙතන සොයන්න..."
            type="text"
          />
        </div>
      </section>

      <!-- Category Grid -->
      <section class="px-6 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <!-- Teacher Exams -->
          <div
            class="flex flex-col gap-4 rounded-2xl border border-border-gray dark:border-white/10 bg-white dark:bg-white/5 p-6 items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div
              class="w-16 h-16 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors"
            >
              <span class="material-symbols-outlined text-orange-500 text-3xl">school</span>
            </div>
            <h3 class="text-slate-gray dark:text-white text-base font-bold leading-tight">
              ගුරු විභාග
            </h3>
          </div>
          <!-- Admin Services -->
          <div
            class="flex flex-col gap-4 rounded-2xl border border-border-gray dark:border-white/10 bg-white dark:bg-white/5 p-6 items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div
              class="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors"
            >
              <span class="material-symbols-outlined text-blue-600 text-3xl">account_balance</span>
            </div>
            <h3 class="text-slate-gray dark:text-white text-base font-bold leading-tight">
              පරිපාලන සේවා
            </h3>
          </div>
          <!-- Grama Niladhari -->
          <div
            class="flex flex-col gap-4 rounded-2xl border border-border-gray dark:border-white/10 bg-white dark:bg-white/5 p-6 items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div
              class="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-500/20 transition-colors"
            >
              <span class="material-symbols-outlined text-green-600 text-3xl">location_city</span>
            </div>
            <h3 class="text-slate-gray dark:text-white text-base font-bold leading-tight">
              ග්රාම නිලධාරී
            </h3>
          </div>
          <!-- IQ Special -->
          <div
            class="flex flex-col gap-4 rounded-2xl border border-border-gray dark:border-white/10 bg-white dark:bg-white/5 p-6 items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div
              class="w-16 h-16 rounded-full bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors"
            >
              <span class="material-symbols-outlined text-purple-600 text-3xl">psychology</span>
            </div>
            <h3 class="text-slate-gray dark:text-white text-base font-bold leading-tight">
              IQ විශේෂ
            </h3>
          </div>
        </div>
      </section>

      <!-- Features List -->
      <section class="max-w-4xl mx-auto px-6 py-8 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        >
          <div
            class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-2"
          >
            <span class="material-symbols-outlined text-2xl">menu_book</span>
          </div>
          <div>
            <h4 class="text-slate-gray dark:text-white font-bold text-lg mb-2">
              සවිස්තරාත්මක විවරණ
            </h4>
            <p class="text-slate-gray/70 dark:text-gray-400 text-sm leading-relaxed">
              ප්රශ්න පත්ර ලියූ පසු සෑම ගැටලුවකටම අදාළ පැහැදිලි විවරණ ලබා ගත හැක.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        >
          <div
            class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-2"
          >
            <span class="material-symbols-outlined text-2xl">bolt</span>
          </div>
          <div>
            <h4 class="text-slate-gray dark:text-white font-bold text-lg mb-2">ක්ෂණික ප්රතිඵල</h4>
            <p class="text-slate-gray/70 dark:text-gray-400 text-sm leading-relaxed">
              විභාගය අවසානයේ ඔබේ ලකුණු සහ ශ්රේණිගත කිරීම් එසැනින් දැනගන්න.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        >
          <div
            class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-2"
          >
            <span class="material-symbols-outlined text-2xl">smartphone</span>
          </div>
          <div>
            <h4 class="text-slate-gray dark:text-white font-bold text-lg mb-2">
              ජංගම දුරකථන හිතකාමී
            </h4>
            <p class="text-slate-gray/70 dark:text-gray-400 text-sm leading-relaxed">
              ගමනේ දී බස් රථයේ දී වුවද පහසුවෙන් අධ්යයනය කිරීමට හැකි ලෙස සකසා ඇත.
            </p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="px-6 py-12 mt-8 border-t border-border-gray dark:border-white/10 text-center">
        <p class="text-light-gray text-sm font-medium">
          © 2024 LankaExam Pro. සියලුම හිමිකම් ඇවිරිණි.
        </p>
        <div class="flex justify-center gap-6 mt-6">
          <a
            class="text-sm font-medium text-slate-gray dark:text-gray-400 hover:text-primary transition-colors"
            href="#"
            >නියමයන්</a
          >
          <a
            class="text-sm font-medium text-slate-gray dark:text-gray-400 hover:text-primary transition-colors"
            href="#"
            >පෞද්ගලිකත්වය</a
          >
          <a
            class="text-sm font-medium text-slate-gray dark:text-gray-400 hover:text-primary transition-colors"
            href="#"
            >සම්බන්ධ වන්න</a
          >
        </div>
      </footer>
    </main>
  </q-page>
</template>

<script setup>
// Landing Page Logic
</script>
