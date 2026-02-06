<template>
  <q-layout view="lHh Lpr fff" class="bg-background-light dark:bg-background-dark">
    <!-- Desktop Sidebar (Glassmorphism) -->
    <aside
      class="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 border-r border-border-gray dark:border-white/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50"
    >
      <div class="p-6 flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <span class="material-symbols-outlined">school</span>
        </div>
        <h1 class="text-xl font-bold text-primary tracking-tight">ජයමඟ</h1>
      </div>

      <nav class="flex-1 px-4 space-y-2">
        <router-link
          to="/app/dashboard"
          active-class="bg-primary/10 text-primary"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium"
        >
          <span class="material-symbols-outlined">home</span>
          Dashboard
        </router-link>
        <router-link
          to="/app/exams"
          active-class="bg-primary/10 text-primary"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium"
        >
          <span class="material-symbols-outlined">description</span>
          Exams
        </router-link>

        <router-link
          to="/app/settings"
          active-class="bg-primary/10 text-primary"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium"
        >
          <span class="material-symbols-outlined">settings</span>
          Settings
        </router-link>
      </nav>

      <div class="p-4 border-t border-border-gray dark:border-white/10">
        <div class="flex items-center gap-3 px-4 py-3">
          <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold truncate text-slate-gray dark:text-white">Student User</p>
            <p class="text-xs text-gray-500 truncate">student@example.com</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content Wrapper -->
    <div class="md:pl-64 min-h-screen">
      <!-- Desktop Header (Glassmorphism) -->
      <header
        class="hidden md:flex items-center justify-between px-8 py-4 sticky top-0 bg-white/60 dark:bg-background-dark/60 backdrop-blur-md z-40 border-b border-border-gray dark:border-white/10 transition-colors"
      >
        <h2 class="text-lg font-bold text-slate-gray dark:text-white">
          {{ $route.name || 'Dashboard' }}
        </h2>
        <div class="flex items-center gap-4">
          <button
            class="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-slate-gray dark:text-white hover:bg-gray-200 transition-colors"
          >
            <span class="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <q-page-container>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </div>

    <!-- Mobile Bottom Navigation (Glassmorphism) -->
    <nav
      v-if="showBottomNav"
      class="md:hidden sticky bottom-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-border-gray dark:border-slate-800 flex justify-around items-center py-3 px-2 z-50 transition-all duration-300"
    >
      <router-link
        to="/app/dashboard"
        active-class="text-primary"
        class="flex flex-col items-center gap-1 text-slate-gray dark:text-gray-400 transition-transform active:scale-95"
      >
        <span class="material-symbols-outlined">home</span>
        <span class="text-[10px] font-bold uppercase">Home</span>
      </router-link>
      <router-link
        to="/app/exams"
        active-class="text-primary"
        class="flex flex-col items-center gap-1 text-slate-gray dark:text-gray-400 transition-transform active:scale-95"
      >
        <span class="material-symbols-outlined">description</span>
        <span class="text-[10px] font-bold uppercase">Exams</span>
      </router-link>

      <router-link
        to="/app/settings"
        active-class="text-primary"
        class="flex flex-col items-center gap-1 text-slate-gray dark:text-gray-400 transition-transform active:scale-95"
      >
        <span class="material-symbols-outlined">person</span>
        <span class="text-[10px] font-bold uppercase">Profile</span>
      </router-link>
    </nav>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue'

const showBottomNav = computed(() => {
  // Show bottom nav strictly for /app routes that aren't handling their own footers?
  // User template shows BottomNav on 'Exam Search Results' and 'Student Dashboard'.
  return true
})
</script>

<style>
/* Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
