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
    children: [
      { path: '', component: () => import('pages/Admin/AdminDashboard.vue') },
      { path: 'exams', component: () => import('pages/Admin/AdminDashboard.vue') }, // Placeholder
      { path: 'questions', component: () => import('pages/Admin/AdminDashboard.vue') }, // Placeholder
    ],
    beforeEnter: (to, from, next) => {
      // Mock Admin Check
      const isAdmin = true // Simulating admin user for development
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
