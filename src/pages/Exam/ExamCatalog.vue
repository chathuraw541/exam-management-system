<template>
  <q-page
    class="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-gray-100 min-h-screen flex flex-col"
  >
    <!-- Top Navigation Bar -->
    <header
      class="sticky top-0 z-50 bg-white dark:bg-[#142d2d] border-b border-[#e0e0e0] dark:border-gray-700"
    >
      <div class="flex items-center justify-between px-4 h-16">
        <div class="flex items-center">
          <span class="material-symbols-outlined text-primary text-2xl">menu</span>
        </div>
        <h1 class="text-xl font-bold text-primary">ජයමඟ</h1>
        <div class="flex items-center">
          <span class="material-symbols-outlined text-slate-gray dark:text-gray-300"
            >account_circle</span
          >
        </div>
      </div>
      <!-- Tab Filters -->
      <nav
        class="flex px-4 gap-6 overflow-x-auto no-scrollbar border-b border-[#e0e0e0] dark:border-gray-700 bg-white dark:bg-[#142d2d]"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="flex flex-col items-center justify-center border-b-2 py-3 text-sm font-medium whitespace-nowrap transition-colors"
          :class="
            activeTab === tab
              ? 'border-primary text-primary font-semibold'
              : 'border-transparent text-slate-gray dark:text-gray-400 hover:text-primary'
          "
        >
          {{ tab }}
        </button>
      </nav>
    </header>

    <!-- Main Content: Exam Catalog -->
    <main class="flex-1 p-4 pb-20 max-w-7xl mx-auto w-full">
      <div
        v-if="loading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div
          v-for="n in 8"
          :key="n"
          class="bg-white dark:bg-[#1a3333] border border-[#e0e0e0] dark:border-gray-700 rounded-lg p-5 flex flex-col h-full"
        >
          <div class="flex justify-between mb-4">
            <q-skeleton type="text" width="30%" />
            <q-skeleton type="circle" size="20px" />
          </div>
          <q-skeleton type="text" width="80%" class="mb-2 text-lg" />
          <q-skeleton type="text" width="40%" />
          <div class="mt-auto pt-4 flex justify-end">
            <q-skeleton type="rect" width="80px" height="36px" class="rounded-lg" />
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <!-- Exam Cards -->
        <div
          v-for="(exam, index) in filteredExams"
          :key="exam.id"
          class="bg-white dark:bg-[#1a3333] border border-[#e0e0e0] dark:border-gray-700 rounded-lg p-5 flex flex-col relative transition-all duration-300 h-full hover:shadow-xl hover:-translate-y-1 animate-fade-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex flex-col gap-1 pr-2 mt-auto">
            <span class="text-xs font-semibold text-primary/70 uppercase tracking-wider">{{
              exam.dept
            }}</span>
            <h2
              class="text-lg font-bold text-slate-800 dark:text-white leading-tight line-clamp-2 min-h-[3rem]"
            >
              {{ exam.title }}
            </h2>
            <div class="flex items-center gap-1.5 mt-2 text-slate-gray dark:text-gray-400">
              <span class="material-symbols-outlined text-sm">schedule</span>
              <span class="text-sm">{{ exam.duration }}</span>
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <button
              @click="$router.push(`/exam/${exam.id}`)"
              class="bg-primary text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-[#006666] transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/20 w-full md:w-auto"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </main>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../../supabase'

const activeTab = ref('All')
const loading = ref(true)
const categories = ref([])
const exams = ref([])

const tabs = computed(() => ['All', ...categories.value.map((c) => c.name)])

const fetchData = async () => {
  try {
    loading.value = true

    // Fetch Categories
    const { data: cats, error: catError } = await supabase
      .from('categories')
      .select('id, name, slug')
      .order('name')

    if (catError) throw catError
    categories.value = cats

    // Fetch Exams with Category details
    const { data: examData, error: examError } = await supabase
      .from('exams')
      .select('*, categories(name)')
      .order('created_at', { ascending: false })

    if (examError) throw examError

    // Transform data to match UI expectations
    exams.value = examData.map((e) => ({
      id: e.id,
      title: e.title,
      dept: e.categories?.name || 'Uncategorized', // Display Category Name
      duration: `${e.duration_minutes} Mins`,
      type: e.categories?.name, // Used for filtering
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

const filteredExams = computed(() => {
  if (activeTab.value === 'All') return exams.value
  return exams.value.filter((exam) => exam.type === activeTab.value)
})

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
