import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    profile: null,
    loading: false,
  }),

  actions: {
    async initialize() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        this.user = user
        await this.fetchProfile()
      }

      supabase.auth.onAuthStateChange((_event, session) => {
        this.user = session?.user || null
        if (this.user) {
          this.fetchProfile()
        } else {
          this.profile = null
        }
      })
    },

    async fetchProfile() {
      if (!this.user) return

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', this.user.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error)
        return
      }

      if (data) {
        this.profile = data
      } else {
        await this.createDefaultProfile()
      }
    },

    async createDefaultProfile() {
      if (!this.user) return

      const newProfile = {
        id: this.user.id,
        email: this.user.email,
        full_name: this.user.user_metadata?.full_name || 'Student',
        target_exam: 'General',
      }

      const { data, error } = await supabase.from('profiles').insert(newProfile).select().single()

      if (error) {
        console.error('Error creating profile:', error)
      } else {
        this.profile = data
      }
    },

    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      return data
    },

    async signup(email, password, fullName) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })
      if (error) throw error
      return data
    },

    async signOut() {
      await supabase.auth.signOut()
      this.user = null
      this.profile = null
    },
  },
})
