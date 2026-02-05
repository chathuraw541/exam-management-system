<template>
  <q-page
    class="p-4 space-y-8 pb-20 bg-background-light dark:bg-background-dark text-[#0c1d1d] dark:text-white"
  >
    <!-- Analytics Section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold tracking-tight">Overview</h2>
        <span class="text-xs font-semibold text-primary/60">Last 24 Hours</span>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">school</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Students</p>
          <p class="text-xl font-extrabold">12.5k</p>
          <p class="text-[10px] text-green-600 mt-1 font-bold">+12% ↑</p>
        </div>
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">assignment</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Exams</p>
          <p class="text-xl font-extrabold">142</p>
          <p class="text-[10px] text-primary/40 mt-1 font-bold">Steady</p>
        </div>
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">quiz</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Questions</p>
          <p class="text-xl font-extrabold">3.2k</p>
          <p class="text-[10px] text-green-600 mt-1 font-bold">+5% ↑</p>
        </div>
        <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
          <span class="material-symbols-outlined text-primary mb-2">visibility</span>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Visits</p>
          <p class="text-xl font-extrabold">45k</p>
          <p class="text-[10px] text-green-600 mt-1 font-bold">+24% ↑</p>
        </div>
      </div>
      <div class="mt-6 bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5">
        <p class="text-sm font-bold mb-4">Traffic Activity</p>
        <div class="h-40 w-full">
          <svg class="w-full h-full" viewBox="0 0 400 150">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: #007f80; stop-opacity: 0.2" />
                <stop offset="100%" style="stop-color: #007f80; stop-opacity: 0" />
              </linearGradient>
            </defs>
            <path
              d="M0,120 Q50,110 80,60 T160,80 T240,40 T320,70 T400,20 L400,150 L0,150 Z"
              fill="url(#grad)"
            ></path>
            <path
              d="M0,120 Q50,110 80,60 T160,80 T240,40 T320,70 T400,20"
              fill="none"
              stroke="#007f80"
              stroke-linecap="round"
              stroke-width="3"
            ></path>
          </svg>
        </div>
        <div class="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span
          ><span>SAT</span><span>SUN</span>
        </div>
      </div>
    </section>

    <!-- Exam Editor Section -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold tracking-tight">Question Editor</h2>
        <button class="bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold">
          Save Draft
        </button>
      </div>
      <div class="bg-white dark:bg-primary/5 rounded-xl border border-primary/5 p-4 space-y-4">
        <div class="space-y-1">
          <label class="text-[10px] font-bold uppercase tracking-widest text-primary/60"
            >Question Title</label
          >
          <input
            type="text"
            class="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-1 focus:ring-primary p-3"
            placeholder="e.g. Pure Mathematics II - Integration"
          />
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold uppercase tracking-widest text-primary/60"
            >The Question</label
          >
          <textarea
            class="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-1 focus:ring-primary p-3"
            rows="3"
            placeholder="Enter the main question text..."
          ></textarea>
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold uppercase tracking-widest text-primary/60"
            >LaTeX Solution</label
          >
          <textarea
            class="w-full bg-background-light dark:bg-background-dark border-none rounded-lg font-mono text-sm focus:ring-1 focus:ring-primary p-3"
            rows="4"
            placeholder="\int_{0}^{\pi} \sin(x) dx = 2"
          ></textarea>
        </div>
      </div>
      <div
        class="bg-primary/5 dark:bg-white/5 rounded-xl border border-primary/20 p-4 border-dashed"
      >
        <div class="flex items-center gap-2 mb-3">
          <span class="material-symbols-outlined text-primary text-sm">visibility</span>
          <span class="text-xs font-bold uppercase tracking-widest text-primary">Live Preview</span>
        </div>
        <div
          class="bg-white dark:bg-background-dark p-6 rounded-lg shadow-sm border border-primary/5"
        >
          <p class="text-sm font-semibold mb-4">Calculate the following definite integral:</p>
          <div
            class="bg-background-light dark:bg-white/5 p-4 rounded-lg flex justify-center italic text-lg py-8"
          >
            ∫₀ᵅ sin(x) dx
          </div>
          <div class="mt-4 space-y-2">
            <div class="flex items-center gap-3 p-3 border border-primary/20 rounded-lg">
              <div class="size-4 rounded-full border-2 border-primary"></div>
              <span class="text-sm">2</span>
            </div>
            <div
              class="flex items-center gap-3 p-3 border border-transparent bg-background-light dark:bg-white/5 rounded-lg"
            >
              <div class="size-4 rounded-full border-2 border-gray-300"></div>
              <span class="text-sm">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- User Management Section -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold tracking-tight">User Management</h2>
      <div class="relative">
        <span
          class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-lg"
          >search</span
        >
        <input
          type="text"
          class="w-full pl-10 pr-4 py-3 bg-white dark:bg-primary/5 border border-primary/10 rounded-xl text-sm focus:ring-1 focus:ring-primary"
          placeholder="Search students by name or ID..."
        />
      </div>
      <div class="bg-white dark:bg-primary/5 rounded-xl border border-primary/10 overflow-hidden">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="bg-primary/5 text-primary/80">
              <th class="p-3 font-bold uppercase">Name</th>
              <th class="p-3 font-bold uppercase">Progress</th>
              <th class="p-3 font-bold uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-primary/5">
            <tr>
              <td class="p-3">
                <div class="font-bold">Kasun Perera</div>
                <div class="text-[10px] text-gray-400">#STU-9921</div>
              </td>
              <td class="p-3">
                <div class="w-16 h-1 bg-primary/10 rounded-full overflow-hidden">
                  <div class="w-3/4 h-full bg-primary"></div>
                </div>
                <div class="text-[9px] mt-1 font-bold">75%</div>
              </td>
              <td class="p-3 text-right">
                <button class="text-primary">
                  <span class="material-symbols-outlined text-lg">more_horiz</span>
                </button>
              </td>
            </tr>
            <tr>
              <td class="p-3">
                <div class="font-bold">Dilini Gamage</div>
                <div class="text-[10px] text-gray-400">#STU-4412</div>
              </td>
              <td class="p-3">
                <div class="w-16 h-1 bg-primary/10 rounded-full overflow-hidden">
                  <div class="w-1/2 h-full bg-primary"></div>
                </div>
                <div class="text-[9px] mt-1 font-bold">50%</div>
              </td>
              <td class="p-3 text-right">
                <button class="text-primary">
                  <span class="material-symbols-outlined text-lg">more_horiz</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 text-center">
          <button class="text-primary text-[10px] font-bold uppercase tracking-widest">
            View All Users
          </button>
        </div>
      </div>
    </section>

    <!-- Announcement Form Section -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold tracking-tight">Post Announcement</h2>
      <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-primary/5 space-y-4">
        <div class="flex items-center gap-3">
          <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary">campaign</span>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-primary/60">New Update</p>
            <p class="text-sm font-medium">Broadcast to all students</p>
          </div>
        </div>
        <textarea
          class="w-full bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-1 focus:ring-primary p-3 h-24"
          placeholder="Type your announcement here..."
        ></textarea>
        <div class="flex justify-between items-center">
          <div class="flex gap-2">
            <button
              class="size-8 rounded-lg bg-background-light dark:bg-white/5 flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-lg">attach_file</span>
            </button>
            <button
              class="size-8 rounded-lg bg-background-light dark:bg-white/5 flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-lg">image</span>
            </button>
          </div>
          <button class="bg-primary text-white text-xs font-bold px-6 py-2 rounded-lg">
            Publish Now
          </button>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
// Admin Dashboard Logic
</script>
