<script setup>
import { onMounted, ref } from 'vue';

const name = ref('MedEllili');
const status = ref('active');
const tasks = ref(['task one', 'task two', 'task tree']);

const newTask = ref(''); // default Value

const toggleStatus = () => {
  status.value === 'active'
    ? (status.value = 'pending')
    : status.value === 'pending'
    ? (status.value = 'inactive')
    : (status.value = 'active');
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// when compoenent is mounted (accessible throught the navigator)
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch {
    console.log('Error fetching data');
  }
});
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else>User is Inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <br />
  <button @click="toggleStatus">Change status</button>
</template>
