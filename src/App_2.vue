<script>
export default {
  data() {
    return {
      name: 'MedEllilli',
      status: 'active',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://google.com',
    };
  },
  methods: {
    toggleStatus() {
      this.status === 'active'
        ? (this.status = 'pending')
        : this.status === 'pending'
        ? (this.status = 'inactive')
        : (this.status = 'active');
    },
  },
};
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else>User is Inactive</p>
  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for google</a>
  <button @click="toggleStatus">Change status</button>
</template>
