<template>
  <q-page
    class="bg-background-light dark:bg-background-dark font-display text-slate-gray antialiased min-h-screen"
  >
    <div class="max-w-3xl mx-auto w-full p-4 pb-20 md:p-8">
      <!-- Header -->
      <header class="mb-8 text-center md:text-left">
        <h1 class="text-2xl font-bold text-slate-800 dark:text-white">Profile & Settings</h1>
        <p class="text-sm text-slate-gray/60 mt-1">Manage your account preferences</p>
      </header>

      <div class="grid gap-6">
        <!-- Profile Card -->
        <div
          class="bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm relative overflow-hidden"
        >
          <q-inner-loading :showing="saving" color="primary">
            <q-spinner-dots size="50px" color="primary" />
          </q-inner-loading>

          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="relative group cursor-pointer">
              <div
                class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold border-4 border-white dark:border-zinc-800 shadow-md"
              >
                KP
              </div>
              <div
                class="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm"
              >
                <span class="material-symbols-outlined text-xs">edit</span>
              </div>
            </div>

            <div class="flex-1 w-full space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-xs font-bold uppercase tracking-wider text-slate-gray/60"
                    >Full Name</label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                  />
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold uppercase tracking-wider text-slate-gray/60"
                    >Email Address</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Settings -->
        <div
          class="bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
        >
          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4">Academic Focus</h3>

          <div class="space-y-4">
            <div class="space-y-1">
              <label class="text-xs font-bold uppercase tracking-wider text-slate-gray/60"
                >Target Examination</label
              >
              <div class="relative">
                <select
                  v-model="form.examType"
                  class="w-full appearance-none bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                >
                  <option value="slas">SLAS (Sri Lanka Administrative Service)</option>
                  <option value="teaching">Teaching Service</option>
                  <option value="banking">Banking Exams</option>
                  <option value="customs">Customs Officer</option>
                </select>
                <div
                  class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-gray"
                >
                  <span class="material-symbols-outlined">expand_more</span>
                </div>
              </div>
              <p class="text-xs text-slate-gray/60 mt-1">
                This customizes your dashboard and recommendations.
              </p>
            </div>
          </div>
        </div>

        <!-- App Preferences -->
        <div
          class="bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
        >
          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4">Preferences</h3>

          <div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-700">
            <div class="flex items-center justify-between py-2">
              <div>
                <p class="text-sm font-semibold dark:text-white">Dark Mode</p>
                <p class="text-xs text-slate-gray/60">
                  Use a dark theme for low-light environments
                </p>
              </div>
              <q-toggle v-model="form.darkMode" color="primary" keep-color />
            </div>
            <div class="flex items-center justify-between py-4">
              <div>
                <p class="text-sm font-semibold dark:text-white">Notifications</p>
                <p class="text-xs text-slate-gray/60">
                  Receive alerts about new papers and results
                </p>
              </div>
              <q-toggle v-model="form.notifications" color="primary" keep-color />
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            <button class="text-primary text-sm font-bold hover:underline flex items-center gap-2">
              <span class="material-symbols-outlined">lock_reset</span>
              Reset Password
            </button>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex justify-end pt-4">
          <button
            @click="saveSettings"
            class="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-active transition-all active:scale-95 shadow-md shadow-primary/20"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const saving = ref(false)

const form = reactive({
  name: 'Kasun Perera',
  email: 'kasun.p@example.com',
  examType: 'slas',
  darkMode: false,
  notifications: true,
})

const saveSettings = () => {
  saving.value = true
  // Simulate API call
  setTimeout(() => {
    saving.value = false
    $q.notify({
      color: 'positive',
      message: 'Settings saved successfully!',
      icon: 'check_circle',
    })
  }, 1500)
}
</script>
