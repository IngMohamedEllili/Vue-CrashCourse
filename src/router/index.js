import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "@/views/HomeViews.vue";
import JobsViews from "@/views/JobsViews.vue";
import NotFounfView from "@/views/NotFounfView.vue";
import JobView from "@/views/JobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/', name: 'home', component: HomeViews
  }, {
    path: '/jobs', name: 'jobs', component: JobsViews
  },
  {
    path: '/jobs/:id', name: 'job', component: JobView
  },
  {
    path: '/:catchAll(.*)', name: 'not-found', component: NotFounfView
  },
  ]
})

export default router