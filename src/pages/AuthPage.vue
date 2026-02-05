<template>
  <q-page
    class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 font-display"
  >
    <div class="w-full max-w-[400px] flex flex-col items-center">
      <div
        class="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 flex flex-col items-center"
      >
        <div class="mb-8 flex flex-col items-center">
          <div
            class="w-16 h-16 mb-6 rounded-lg bg-primary-login/10 flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-deep-teal dark:text-primary-login text-4xl"
              >school</span
            >
          </div>
          <h1 class="text-deep-teal dark:text-white text-3xl font-bold tracking-tight mb-2">
            ජයමඟ
          </h1>
          <p class="text-slate-gray dark:text-zinc-400 text-sm text-center leading-relaxed">
            රජයේ රැකියාවකට ඔබව සූදානම් කරන පියස
          </p>
        </div>
        <div class="w-full space-y-4">
          <!-- Initial View -->
          <template v-if="view === 'initial'">
            <button
              @click="handleGoogleLogin"
              class="w-full h-12 flex items-center justify-center gap-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <span class="text-zinc-700 dark:text-zinc-200 font-medium">Continue with Google</span>
            </button>
            <div class="relative py-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-zinc-100 dark:border-zinc-800"></div>
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-white dark:bg-zinc-900 px-2 text-zinc-400">or</span>
              </div>
            </div>
            <button
              @click="toggleEmailView"
              class="w-full h-12 flex items-center justify-center text-slate-gray dark:text-zinc-400 text-sm font-medium hover:text-deep-teal dark:hover:text-primary-login transition-colors"
            >
              Login with Email
            </button>
          </template>

          <!-- Email Login / Signup Form -->
          <template v-else>
            <div class="space-y-4 animate-fade-in">
              <div v-if="view === 'signup'" class="space-y-2">
                <label class="text-xs font-semibold text-zinc-500 uppercase">Full Name</label>
                <input
                  v-model="fullName"
                  type="text"
                  placeholder="Enter your name"
                  class="w-full h-12 px-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary-login focus:border-transparent outline-none transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-zinc-500 uppercase">Email</label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full h-12 px-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary-login focus:border-transparent outline-none transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-zinc-500 uppercase">Password</label>
                <input
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  class="w-full h-12 px-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary-login focus:border-transparent outline-none transition-all"
                  @keyup.enter="submitAuth"
                />
              </div>

              <button
                @click="submitAuth"
                :disabled="loading"
                class="w-full h-12 mt-4 bg-deep-teal dark:bg-primary-login hover:bg-opacity-90 text-white font-bold rounded-lg transition-all active:scale-[0.98] flex items-center justify-center"
              >
                <q-spinner v-if="loading" size="sm" class="mr-2" />
                {{ view === 'signup' ? 'Create Account' : 'Login' }}
              </button>

              <button
                @click="view = 'initial'"
                class="w-full py-2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                Back to options
              </button>
            </div>
          </template>
        </div>
      </div>
      <div class="mt-8 flex flex-col items-center space-y-4">
        <p class="text-xs text-zinc-400 dark:text-zinc-500">
          {{ view === 'signup' ? 'Already have an account?' : 'New to LankaExam Pro?' }}
          <a
            @click.prevent="toggleSignupView"
            class="text-primary-login font-semibold cursor-pointer hover:underline"
          >
            {{ view === 'signup' ? 'Login' : 'Sign Up' }}
          </a>
        </p>
        <div class="flex items-center gap-4">
          <a class="text-[10px] text-zinc-400 dark:text-zinc-500 hover:underline" href="#"
            >Privacy Policy</a
          >
          <span class="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
          <a class="text-[10px] text-zinc-400 dark:text-zinc-500 hover:underline" href="#"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-login via-deep-teal to-primary-login opacity-20"
    ></div>
  </q-page>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
