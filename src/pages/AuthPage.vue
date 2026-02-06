<template>
  <q-page
    class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 font-display selection:bg-primary/30 selection:text-primary overflow-hidden relative"
  >
    <!-- Background Decor -->
    <div class="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-70 animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-60 animate-pulse-slow delay-700"
      ></div>
    </div>

    <!-- Auth Card -->
    <div class="w-full max-w-[420px] flex flex-col items-center relative z-10 animate-fade-in-up">
      <!-- Glass Card -->
      <div
        class="w-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col items-center"
      >
        <!-- Header -->
        <div class="mb-8 flex flex-col items-center">
          <div
            class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-login shadow-lg shadow-primary/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
          >
            <span class="material-symbols-outlined text-white text-4xl">school</span>
          </div>
          <h1 class="text-3xl font-black tracking-tighter mb-2 text-slate-gray dark:text-white">
            ජය<span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-login"
              >මඟ</span
            >
          </h1>
          <p
            class="text-slate-gray/70 dark:text-zinc-400 text-sm text-center font-medium leading-relaxed"
          >
            රජයේ රැකියාවකට ඔබව සූදානම් කරන පියස
          </p>
        </div>

        <!-- Dynamic Content -->
        <div class="w-full space-y-4">
          <!-- Initial View -->
          <template v-if="view === 'initial'">
            <button
              @click="handleGoogleLogin"
              class="w-full h-14 flex items-center justify-center gap-3 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 group"
            >
              <svg
                class="w-6 h-6 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Google SVG Content -->
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span class="text-slate-gray dark:text-gray-200 font-bold text-sm"
                >Continue with Google</span
              >
            </button>
            <div class="relative py-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200 dark:border-white/10"></div>
              </div>
              <div class="relative flex justify-center text-xs font-bold uppercase tracking-widest">
                <span class="bg-transparent px-2 text-gray-400">or</span>
              </div>
            </div>
            <button
              @click="toggleEmailView"
              class="w-full h-14 flex items-center justify-center text-slate-gray/80 dark:text-gray-300 font-bold hover:text-primary transition-colors text-sm"
            >
              Login with Email
            </button>
          </template>

          <!-- Email Login / Signup Form -->
          <template v-else>
            <div class="space-y-5 animate-fade-in-right">
              <div v-if="view === 'signup'" class="space-y-2">
                <label
                  class="text-xs font-bold text-slate-gray/60 dark:text-gray-400 uppercase tracking-wider ml-1"
                  >Full Name</label
                >
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span
                      class="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-xl"
                      >badge</span
                    >
                  </div>
                  <input
                    v-model="fullName"
                    type="text"
                    placeholder="Enter your name"
                    class="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 text-slate-gray dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label
                  class="text-xs font-bold text-slate-gray/60 dark:text-gray-400 uppercase tracking-wider ml-1"
                  >Email</label
                >
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span
                      class="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-xl"
                      >mail</span
                    >
                  </div>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="name@example.com"
                    class="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 text-slate-gray dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label
                  class="text-xs font-bold text-slate-gray/60 dark:text-gray-400 uppercase tracking-wider ml-1"
                  >Password</label
                >
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span
                      class="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-xl"
                      >lock</span
                    >
                  </div>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="••••••••"
                    class="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 text-slate-gray dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    @keyup.enter="submitAuth"
                  />
                </div>
              </div>

              <button
                @click="submitAuth"
                :disabled="loading"
                class="w-full h-14 mt-6 bg-gradient-to-r from-primary to-primary-login hover:shadow-lg hover:shadow-primary/30 text-white font-bold text-lg rounded-xl transition-all hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center"
              >
                <q-spinner v-if="loading" size="sm" class="mr-2" />
                {{ view === 'signup' ? 'Create Account' : 'Login' }}
              </button>

              <button
                @click="view = 'initial'"
                class="w-full py-2 text-xs font-bold text-slate-gray/60 dark:text-gray-400 hover:text-slate-gray dark:hover:text-white transition-colors"
              >
                Back to options
              </button>
            </div>
          </template>
        </div>
      </div>

      <!-- Footer Text -->
      <div class="mt-8 flex flex-col items-center space-y-4 animate-fade-in delay-200">
        <p class="text-sm font-medium text-slate-gray/70 dark:text-gray-400">
          {{ view === 'signup' ? 'Already have an account?' : 'New to LankaExam Pro?' }}
          <a
            @click.prevent="toggleSignupView"
            class="text-primary font-bold cursor-pointer hover:underline"
          >
            {{ view === 'signup' ? 'Login' : 'Sign Up' }}
          </a>
        </p>
        <div class="flex items-center gap-4">
          <a
            class="text-[10px] uppercase font-bold text-slate-gray/40 dark:text-gray-600 hover:text-primary transition-colors"
            href="#"
            >Privacy Policy</a
          >
          <span class="w-1 h-1 rounded-full bg-slate-gray/20 dark:bg-gray-700"></span>
          <a
            class="text-[10px] uppercase font-bold text-slate-gray/40 dark:text-gray-600 hover:text-primary transition-colors"
            href="#"
            >Terms</a
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
/* Keyframes */
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
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(10px);
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

/* Animations */
.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-fade-in-right {
  animation: fadeInRight 0.4s ease-out forwards;
}
.animate-pulse-slow {
  animation: pulseSlow 4s infinite ease-in-out;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-700 {
  animation-delay: 0.7s;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from 'stores/auth'
import { useQuasar } from 'quasar'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const $q = useQuasar()

const view = ref('initial') // 'initial', 'email-login', 'signup'
const email = ref('')
const password = ref('')
const fullName = ref('')
const loading = ref(false)

onMounted(() => {
  if (route.path.includes('register')) {
    view.value = 'signup'
  }
})

const handleGoogleLogin = async () => {
  $q.notify({
    type: 'warning',
    message: 'Google Login requires provider configuration in Supabase Dashboard.',
  })
}

const toggleEmailView = () => {
  view.value = 'email-login'
}

const toggleSignupView = () => {
  if (view.value === 'initial') view.value = 'email-login'
  view.value = view.value === 'signup' ? 'email-login' : 'signup'
  if (view.value === 'signup') {
    router.replace('/register')
  } else {
    router.replace('/login')
  }
}

const submitAuth = async () => {
  if (!email.value || !password.value) return
  if (view.value === 'signup' && !fullName.value) {
    $q.notify({ type: 'warning', message: 'Please enter your full name.' })
    return
  }

  loading.value = true
  try {
    if (view.value === 'signup') {
      // 1. Attempt Signup
      const { session } = await authStore.signup(email.value.trim(), password.value, fullName.value)

      // 2. Check if we got an immediate session (Email Confirm Disabled in Supabase)
      if (session) {
        $q.notify({ type: 'positive', message: 'Account created successfully! Welcome.' })
        await authStore.fetchProfile()
        router.push('/app/dashboard')
        return
      }

      // 3. If no session, user is created but maybe needs verification.
      //    We try to login explicitly to check if we can force entry or if it fails.
      try {
        await authStore.login(email.value, password.value)

        // If login allows (no verify needed), proceed
        $q.notify({ type: 'positive', message: 'Account created successfully! Welcome.' })
        await authStore.fetchProfile()
        router.push('/app/dashboard')
      } catch (loginErr) {
        // 4. Handle specific "Email not confirmed" error
        if (loginErr.message && loginErr.message.includes('Email not confirmed')) {
          $q.notify({
            type: 'positive',
            message: 'Account created! Please check your email inbox to verify your account.',
            timeout: 5000,
          })
          // Optionally switch to login view
          view.value = 'email-login'
        } else {
          throw loginErr
        }
      }
    } else {
      // Login Flow
      await authStore.login(email.value.trim(), password.value)
      $q.notify({ type: 'positive', message: 'Welcome back!' })
      await authStore.fetchProfile()
      router.push('/app/dashboard')
    }
  } catch (error) {
    console.error(error)
    $q.notify({
      type: 'negative',
      message: error.message || 'Authentication failed',
    })
  } finally {
    loading.value = false
  }
}
</script>
