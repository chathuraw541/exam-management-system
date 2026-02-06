<template>
  <q-page
    class="p-4 space-y-8 pb-20 bg-background-light dark:bg-background-dark text-[#0c1d1d] dark:text-white"
  >
    <!-- Analytics Section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold tracking-tight">Overview</h2>
        <span class="text-xs font-semibold text-primary/60">Real-time</span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">school</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Total Students</p>
          <p class="text-xl font-extrabold">{{ stats.students }}</p>
        </div>
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">assignment</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Active Exams</p>
          <p class="text-xl font-extrabold">{{ stats.exams }}</p>
        </div>
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">quiz</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Total Questions</p>
          <p class="text-xl font-extrabold">{{ stats.questions }}</p>
        </div>
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">category</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Categories</p>
          <p class="text-xl font-extrabold">{{ categories.length }}</p>
        </div>
      </div>
    </section>

    <!-- Professional Question Entry System -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold tracking-tight">Question Bank Entry</h2>
        <button
          @click="resetForm"
          class="text-xs text-slate-gray/60 hover:text-primary transition-colors cursor-pointer flex items-center gap-1 font-bold"
        >
          <span class="material-symbols-outlined text-sm">restart_alt</span> Reset Form
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <!-- Form Area (Left) -->
        <div
          class="lg:col-span-7 bg-white dark:bg-zinc-800/50 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-white/10 p-6 shadow-sm space-y-6"
        >
          <!-- Row 1: Exam & Category -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50 dark:text-gray-400"
                >Target Exam</label
              >
              <select
                v-model="form.exam_id"
                class="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary p-3 cursor-pointer outline-none transition-all font-medium"
              >
                <option disabled value="">Select an exam...</option>
                <option v-for="exam in exams" :key="exam.id" :value="exam.id">
                  {{ exam.title }}
                </option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50 dark:text-gray-400"
                >Section Category</label
              >
              <select
                v-model="form.category"
                class="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary p-3 cursor-pointer outline-none transition-all font-medium"
              >
                <option disabled value="">Select Category...</option>
                <option value="Teaching - Aptitude">Teaching - Aptitude</option>
                <option value="Teaching - GK">Teaching - GK</option>
                <option value="IQ & Logic">IQ & Logic</option>
                <option value="Language Skills">Language Skills</option>
              </select>
            </div>
          </div>

          <!-- Tags Multi-Select -->
          <div class="space-y-1.5">
            <label
              class="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50 dark:text-gray-400"
              >Tags / Topics</label
            >
            <q-select
              v-model="form.tags"
              multiple
              use-chips
              stack-label
              filled
              dense
              bg-color="white"
              color="primary"
              class="bg-slate-50 dark:bg-white/5 rounded-xl border-none"
              :options="[
                'Education Law',
                'Current Affairs 2026',
                'Logic Patterns',
                'Child Psychology',
                'History',
              ]"
            >
              <template v-slot:selected-item="scope">
                <q-chip
                  removable
                  dense
                  @remove="scope.removeAtIndex(scope.index)"
                  :tabindex="scope.tabindex"
                  color="primary"
                  text-color="white"
                  class="text-xs font-bold"
                >
                  {{ scope.opt }}
                </q-chip>
              </template>
            </q-select>
          </div>

          <!-- Question Text -->
          <div class="space-y-1.5">
            <label
              class="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50 dark:text-gray-400"
              >Question Content</label
            >
            <textarea
              v-model="form.question_text"
              class="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 p-4 min-h-[120px] outline-none transition-all resize-y font-medium leading-relaxed"
              placeholder="Type your question here. Markdown is supported."
            ></textarea>
          </div>

          <!-- Interactive Options -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50 dark:text-gray-400"
                >Answer Options</label
              >
              <span class="text-[10px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded"
                >Select Correct Answer</span
              >
            </div>

            <div
              v-for="(opt, idx) in form.options"
              :key="idx"
              class="flex items-center gap-3 p-2 pr-4 rounded-xl border transition-all duration-300"
              :class="
                form.correct_option_index === idx
                  ? 'bg-primary/5 border-primary ring-1 ring-primary'
                  : 'bg-slate-50 dark:bg-white/5 border-transparent hover:border-gray-300'
              "
            >
              <!-- Radio Trigger -->
              <div @click="form.correct_option_index = idx" class="cursor-pointer p-2 group">
                <div
                  class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                  :class="
                    form.correct_option_index === idx
                      ? 'border-primary'
                      : 'border-gray-300 group-hover:border-primary'
                  "
                >
                  <div
                    class="w-2.5 h-2.5 rounded-full bg-primary transform scale-0 transition-transform"
                    :class="{ 'scale-100': form.correct_option_index === idx }"
                  ></div>
                </div>
              </div>

              <!-- Input -->
              <input
                type="text"
                v-model="form.options[idx]"
                class="flex-1 bg-transparent border-none text-sm font-medium focus:ring-0 p-0 text-slate-gray dark:text-white placeholder-slate-400"
                :placeholder="`Option ${idx + 1}`"
              />
            </div>
          </div>

          <!-- Explanation -->
          <div class="space-y-1.5">
            <label
              class="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50 dark:text-gray-400"
              >Explanation & Rationale</label
            >
            <textarea
              v-model="form.explanation"
              class="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 p-4 min-h-[80px] outline-none transition-all resize-y font-medium"
              placeholder="Explain the logic behind the correct answer..."
            ></textarea>
          </div>

          <!-- Action Bar -->
          <div class="pt-2">
            <button
              @click="submitQuestion"
              :disabled="isSubmitting || !isFormValid"
              class="w-full bg-gradient-to-r from-primary to-primary-login text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
            >
              <q-spinner v-if="isSubmitting" color="white" size="xs" />
              <span v-if="isSubmitting">Publishing...</span>
              <span v-else class="flex items-center gap-2"
                ><span class="material-symbols-outlined">add_task</span> Add to Question Bank</span
              >
            </button>
          </div>
        </div>

        <!-- Live Preview (Right) -->
        <div class="lg:col-span-5 sticky top-24">
          <div
            class="bg-gradient-to-br from-teal-50 to-slate-100 dark:from-zinc-900 dark:to-slate-900 p-1 rounded-3xl shadow-lg border border-white/50 dark:border-white/5"
          >
            <div
              class="bg-white dark:bg-background-dark rounded-[1.4rem] overflow-hidden flex flex-col min-h-[500px]"
            >
              <!-- Preview Header -->
              <div
                class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-white/50 dark:bg-white/5 backdrop-blur-sm"
              >
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">smartphone</span>
                  <span class="text-xs font-bold uppercase tracking-widest text-primary"
                    >Student View</span
                  >
                </div>
                <div class="flex gap-1" v-if="form.tags.length">
                  <span
                    v-for="tag in form.tags.slice(0, 2)"
                    :key="tag"
                    class="text-[9px] font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500 uppercase"
                    >{{ tag }}</span
                  >
                  <span
                    v-if="form.tags.length > 2"
                    class="text-[9px] font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500"
                    >+{{ form.tags.length - 2 }}</span
                  >
                </div>
              </div>

              <!-- Preview Content -->
              <div class="p-6 flex-1 flex flex-col gap-6">
                <!-- Question Text -->
                <div v-if="form.question_text" class="animate-fade-in">
                  <span
                    class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold mb-3 uppercase tracking-wide"
                    v-if="form.category"
                    >{{ form.category }}</span
                  >
                  <p class="text-lg font-bold text-[#0d1b1b] dark:text-white leading-relaxed">
                    {{ form.question_text }}
                  </p>
                </div>
                <div
                  v-else
                  class="flex flex-col items-center justify-center h-32 text-gray-300 border-2 border-dashed border-gray-100 rounded-xl"
                >
                  <span class="material-symbols-outlined text-3xl mb-1">edit</span>
                  <span class="text-xs font-bold uppercase">Preview Pending</span>
                </div>

                <!-- Options Preview -->
                <div class="space-y-3">
                  <div
                    v-if="!form.options.some((o) => o)"
                    class="text-center text-xs text-gray-400 py-4 italic"
                  >
                    Options will appear here...
                  </div>
                  <div
                    v-for="(opt, idx) in form.options"
                    :key="idx"
                    v-show="opt"
                    class="relative group cursor-pointer transition-all duration-300"
                  >
                    <div
                      class="flex items-center p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-white/5 shadow-sm transition-all"
                      :class="{
                        'ring-2 ring-primary border-transparent bg-primary/5':
                          form.correct_option_index === idx,
                        'hover:border-primary/30 hover:shadow-md':
                          form.correct_option_index !== idx,
                      }"
                    >
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 transition-colors"
                        :class="
                          form.correct_option_index === idx
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                        "
                      >
                        {{ String.fromCharCode(65 + idx) }}
                      </div>
                      <span class="text-sm font-medium text-slate-gray dark:text-gray-200">{{
                        opt
                      }}</span>

                      <!-- Correct Badge -->
                      <div
                        v-if="form.correct_option_index === idx"
                        class="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <span class="material-symbols-outlined text-primary">check_circle</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Explanation Preview -->
                <div
                  v-if="form.explanation && form.question_text"
                  class="mt-auto pt-6 border-t border-dashed border-gray-200 dark:border-gray-700 animate-fade-up"
                >
                  <div
                    class="flex gap-3 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30"
                  >
                    <span class="material-symbols-outlined text-blue-600 dark:text-blue-400"
                      >lightbulb</span
                    >
                    <div>
                      <h4 class="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 mb-1">
                        Explanation
                      </h4>
                      <p class="text-sm text-slate-gray/80 dark:text-blue-100/80 leading-relaxed">
                        {{ form.explanation }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Helper -->
          <div
            class="mt-4 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/10 flex items-center gap-3 text-amber-700 dark:text-amber-500"
          >
            <span class="material-symbols-outlined">info</span>
            <p class="text-xs font-medium">
              Use <strong>MathJax</strong> or Markdown for complex equations. Images can be dragged
              and dropped (Coming Soon).
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bulk Import Section -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold tracking-tight">Bulk Import Questions</h2>
      </div>
      <div class="bg-white dark:bg-primary/5 rounded-xl border border-primary/5 p-6 shadow-sm">
        <div
          class="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group relative overflow-hidden"
        >
          <input
            type="file"
            accept=".csv"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            @change="handleCSVUpload"
            :disabled="isUploading"
          />
          <div v-if="isUploading" class="flex flex-col items-center animate-pulse">
            <q-spinner class="text-primary text-3xl mb-2" />
            <span class="text-sm font-bold text-slate-gray dark:text-gray-300"
              >Processing CSV...</span
            >
          </div>
          <div v-else class="flex flex-col items-center gap-2">
            <div
              class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-3xl">upload_file</span>
            </div>
            <p class="text-lg font-bold text-slate-gray dark:text-white mt-2">
              Click to upload or drag CSV here
            </p>
            <p
              class="text-xs text-slate-gray/60 dark:text-gray-400 max-w-lg text-center leading-relaxed"
            >
              Required Columns:<br /><code
                class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary"
                >question</code
              >,
              <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary"
                >option_1</code
              >,
              <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary"
                >option_2</code
              >, ...
              <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary"
                >correct_option</code
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '../../supabase'
import { useQuasar } from 'quasar'
import Papa from 'papaparse'

const $q = useQuasar()
const isSubmitting = ref(false)
const isUploading = ref(false)

// State
const stats = ref({
  students: 0,
  exams: 0,
  questions: 0,
})
const categories = ref([])
const exams = ref([])

// Form
const initialFormState = {
  exam_id: '',
  category: '',
  tags: [],
  question_text: '',
  options: ['', '', '', ''],
  correct_option_index: null, // 0-3
  explanation: '',
}

const form = ref({ ...initialFormState })

const isFormValid = computed(() => {
  return (
    form.value.exam_id &&
    form.value.category &&
    form.value.question_text &&
    form.value.tags.length > 0 &&
    form.value.options.every((o) => o.trim() !== '') &&
    form.value.correct_option_index !== null
  )
})

// Actions
const fetchAdminData = async () => {
  try {
    // Fetch Categories logic
    const { data: catData } = await supabase.from('categories').select('id, name')
    categories.value = catData || []

    // Fetch Exams
    const { data: examData } = await supabase.from('exams').select('*')
    exams.value = examData || []

    // Fetch Stats
    const { count: studentCount } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'student')
    const { count: examCount } = await supabase
      .from('exams')
      .select('*', { count: 'exact', head: true })
    const { count: questionCount } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })

    stats.value = {
      students: studentCount || 0,
      exams: examCount || 0,
      questions: questionCount || 0,
    }
  } catch (e) {
    console.error('Admin Fetch Error', e)
  }
}

const submitQuestion = async () => {
  if (!isFormValid.value) return
  isSubmitting.value = true

  try {
    const payload = {
      exam_id: form.value.exam_id,
      category: form.value.category,
      tags: form.value.tags,
      question_text: form.value.question_text,
      options: form.value.options,
      correct_option: form.value.correct_option_index, // Integer Index 0-3
      explanation: form.value.explanation,
    }

    const { error } = await supabase.from('questions').insert(payload)

    if (error) throw error

    $q.notify({
      type: 'positive',
      message: 'Question added successfully!',
      position: 'top-right',
      icon: 'check_circle',
      timeout: 2000,
    })

    // Preserve Exam ID & Category for workflow speed
    const currentExam = form.value.exam_id
    const currentCat = form.value.category

    resetForm()

    form.value.exam_id = currentExam
    form.value.category = currentCat
    stats.value.questions++
  } catch (err) {
    $q.notify({
      type: 'negative',
      message: 'Failed to add question: ' + err.message,
      icon: 'error',
    })
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.value = { ...initialFormState, options: ['', '', '', ''], tags: [] }
}

const handleCSVUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  // Require exam selection to link questions
  if (!form.value.exam_id) {
    $q.notify({
      type: 'warning',
      message: 'Please select a Target Exam in the form above first!',
      icon: 'warning',
    })
    event.target.value = ''
    return
  }

  isUploading.value = true

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: async (results) => {
      try {
        console.log('CSV Parsed Raw Data:', results.data)

        const rows = results.data
          .map((row) => {
            // Robust Correct Option Parsing
            let correctIdx = 0
            const rawCorrect = String(row.correct_option || '').trim()

            if (['1', '2', '3', '4'].includes(rawCorrect)) {
              correctIdx = parseInt(rawCorrect) - 1
            } else if (['A', 'B', 'C', 'D'].includes(rawCorrect.toUpperCase())) {
              correctIdx = rawCorrect.toUpperCase().charCodeAt(0) - 65
            } else if (['0', '1', '2', '3'].includes(rawCorrect)) {
              correctIdx = parseInt(rawCorrect)
            }

            // Basic Validation
            if (!row.question || !row.option_1) return null

            const options = [row.option_1, row.option_2, row.option_3, row.option_4]
            const correctAnswerText = options[correctIdx] || options[0] // Default to first if index invalid

            // Map CSV columns to Supabase DB Columns explicitly
            return {
              exam_id: form.value.exam_id,
              category: row.category || form.value.category || 'General',
              tags: row.tags ? row.tags.split(',').map((t) => t.trim()) : [],
              question_text: row.question,
              options: options,
              correct_answer: correctAnswerText, // Column: correct_answer (Text)
              explanation: row.explanation || '',
            }
          })
          .filter((r) => r !== null)

        if (rows.length === 0) throw new Error('No valid questions found in CSV.')

        console.log('Payload for Supabase:', rows)

        // Explicitly target the 'public' schema to avoid ambiguity
        // If this still fails, please go to Supabase Dashboard -> Settings -> API -> Reload Schema Cache
        const { error } = await supabase.schema('public').from('questions').insert(rows)

        if (error) {
          console.error('Supabase Insert Error Full Object:', error)
          throw error
        }

        $q.notify({
          type: 'positive',
          message: `Successfully imported ${rows.length} questions!`,
          icon: 'cloud_done',
        })
        stats.value.questions += rows.length
      } catch (err) {
        console.error('Import process failed:', err)
        $q.notify({
          type: 'negative',
          message: 'Import Failed: ' + (err.message || 'Check console for details'),
          icon: 'error',
          timeout: 5000,
        })
      } finally {
        isUploading.value = false
        event.target.value = ''
      }
    },
    error: (err) => {
      console.error('PapaParse Error:', err)
      $q.notify({
        type: 'negative',
        message: 'CSV Parse Error: ' + err.message,
        icon: 'error',
      })
      isUploading.value = false
      event.target.value = ''
    },
  })
}

onMounted(() => {
  fetchAdminData()
})
</script>
