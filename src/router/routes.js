const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/AuthPage.vue') },
      { path: 'register', component: () => import('pages/AuthPage.vue') },
    ],
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'exams', component: () => import('pages/Exam/ExamCatalog.vue') },
      { path: 'dashboard', component: () => import('pages/Student/StudentDashboard.vue') },
      { path: 'leaderboard', component: () => import('pages/Student/StudentLeaderboard.vue') },
      { path: 'settings', component: () => import('pages/Student/ProfileSettings.vue') },
    ],
  },
  {
    path: '/exam/:id',
    component: () => import('layouts/ExamLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Exam/ActiveExam.vue') },
      { path: 'results', component: () => import('pages/Exam/ExamResults.vue') },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [{ path: '', component: () => import('pages/Admin/AdminDashboard.vue') }],
    beforeEnter: (to, from, next) => {
      // Mock Admin Check
      const isAdmin = false // Simulating student user
      if (isAdmin) {
        next()
      } else {
        alert('Access Denied: Admin privileges required.')
        next('/app/dashboard')
      }
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
