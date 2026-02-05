<template>
  <q-layout view="lHh Lpr fff" class="bg-background-light dark:bg-background-dark font-manrope">
    <!-- TopAppBar -->
    <q-header
      class="flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-primary/10 justify-between text-[#0c1d1d] dark:text-white"
    >
      <div class="flex items-center gap-3">
        <button
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="text-primary p-1 hover:bg-primary/10 rounded-full transition-colors"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <h1 class="text-lg font-extrabold tracking-tight text-primary">ජයමඟ Admin</h1>
      </div>
      <div class="flex items-center gap-2">
        <button class="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <div
          class="size-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30"
        >
          <span class="material-symbols-outlined text-primary text-sm">person</span>
        </div>
      </div>
    </q-header>

    <!-- Sidebar / Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-white dark:bg-background-dark border-r border-primary/10"
    >
      <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center gap-2 px-2">
          <div class="size-8 bg-primary rounded-lg"></div>
          <span class="font-bold text-primary">LankaExam Pro</span>
        </div>
        <nav class="flex flex-col gap-1">
          <a
            href="#"
            class="flex items-center gap-4 p-3 rounded-xl bg-primary/10 text-primary font-bold"
          >
            <span class="material-symbols-outlined">bar_chart</span> Analytics
          </a>
          <a
            href="#"
            class="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light dark:hover:bg-primary/5 transition-colors text-slate-gray dark:text-white"
          >
            <span class="material-symbols-outlined">edit_note</span> Exam Editor
          </a>
          <a
            href="#"
            class="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light dark:hover:bg-primary/5 transition-colors text-slate-gray dark:text-white"
          >
            <span class="material-symbols-outlined">group</span> Users
          </a>
          <a
            href="#"
            class="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light dark:hover:bg-primary/5 transition-colors text-slate-gray dark:text-white"
          >
            <span class="material-symbols-outlined">campaign</span> Announcements
          </a>
        </nav>
      </div>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Bottom Navigation (Mobile) -->
    <nav
      class="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-primary/10 flex items-center justify-around py-3 pb-6 px-4 z-40 lt-md"
    >
      <button class="flex flex-col items-center gap-1 text-primary">
        <span class="material-symbols-outlined">dashboard</span>
        <span class="text-[10px] font-bold">Dash</span>
      </button>
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <span class="material-symbols-outlined">edit_square</span>
        <span class="text-[10px] font-bold">Editor</span>
      </button>
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <span class="material-symbols-outlined">group</span>
        <span class="text-[10px] font-bold">Users</span>
      </button>
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <span class="material-symbols-outlined">settings</span>
        <span class="text-[10px] font-bold">Settings</span>
      </button>
    </nav>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
</script>

<style scoped>
.font-manrope {
  font-family: 'Manrope', sans-serif;
}
</style>
