import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "@/views/HomeViews.vue";
import JobsViews from "@/views/JobsViews.vue";
import NotFounfView from "@/views/NotFounfView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

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
    path: '/jobs/add', name: 'addJob', component: AddJobView
  },
  {
    path: '/jobs/edit/:id', name: 'editJob', component: EditJobView
  },
  {
    path: '/:catchAll(.*)', name: 'not-found', component: NotFounfView
  },
  ]
})

export default router