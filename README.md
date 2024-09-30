## What's Vue Js

- Progresive JS framework for building user Interface
- Simple, flexible and incrementally adoptable
- Used for projects of all sizes
- Data-binding component based architecture

## Prerequisites

- JavaScript Fundamentals
- Events & Dom Manipulation
- Fetch API & HTTP
- Arrow Function, HO array method, Destruction
- NPM

## Why Vue?

- Simplicity
- Flexibility
- Performance & size (run time performance, and faster initial load time)
- Component-based architecture
- Active Community

## Component Vue

- Reusable, self-contained
- Includes JS / HTML output & scoped Styling
- Options API vs Composition API

## Getting Setup

- CDN: Include the script tag with the CDN url
- Vue CLI: this is no longer recommended
- Create Vue: Uses vite which includes features hot-reloading, out of the box TS and ecosystem of plugins
- Nuxt.JS: SSR & SSG frameworks that use Vue

## v-if/v-else Directives

v-if = condition
v-else-id = Another condition
V-else

- Example :

```bash
<p v-if="status === 'active'">User is Active</p>
<p v-else>User is Inactive</p>
```

## v-for Directives

v-for='x in Array'

- Example :

```bash
<li v-for="task in tasks" :key="task">{{ task }}</li>
```

## v-bind Directives

The v-bind Directives is used to bind an HTML attribute to a property in the Vue instance , or to pass props

- Example :

```bash
<a v-bind:href="link">Click for google</a>
```

we can replace v-bind: with ':'

## v-on Directives

The v-on Directives allows us to perform actions based on specified events.

- Example :

```bash
<button v-on:click="toggleStatus">Change status</button>
```

we can replace v-on: with '@'

## v-model Directives

The v-model Directives is used mainly for input and form bidning, so use it when you dealing with various input types.

- Example :

```bash
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
```

## v-model vs v-bind

- **v-model** is used mainly for input and form bidning, so use it when you dealing with various input types.v-bind directive allow you to produce some dynamic value by typing some JS expression that in most cases depends on the data from data model - so think about **v-bind** as directive that you should use when you want deal with some dynamic things.

* v-model: **two way bindings**

  if you change input value, the bound data will be changed and vice versa.
  Bind a peace of data into input

* v-bind:value **one way binding**

  You can change input value by changing bound data but you can't change bound data by changing input value through the element\_

* v-model replace v-bind:value and v-on

## Options API ===> Composition API

- Options API have One issue is that it can become cumbersome to manage a large number of options as the complexity of a component increases. This can lead to a phenomenon known as "option explosion,"

- Reusability
  Another limitation of the Options API is that it can be inflexible when it comes to sharing logic between components.

```bash
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
  }
```

Composition API need to use setup and ref

- The setup() hook serves as the entry point for Composition API usage

* It allows developers to use a functional, reactive programming style to build components, and it offers a more flexible and expressive way of defining component behavior.

* Takes an inner value and returns a reactive and mutable ref object, which
* has a single property `.value` that points to the inner value.
* ref (Reactive State) is like useState in react

```bash
<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('MedEllili');
    const status = ref('active');
    const tasks = ref(['task one', 'task two', 'task tree']);
    const toggleStatus = () => {
      status.value === 'active'
        ? (status.value = 'pending')
        : status.value === 'pending'
        ? (status.value = 'inactive')
        : (status.value = 'active');
    };
    return {
      name,
      status,
      tasks,
      toggleStatus,
    };
  },
};
</script>
```

- More readable Composition API

```bash
<script setup>
import { ref } from 'vue';

const name = ref('MedEllili');
const status = ref('active');
const tasks = ref(['task one', 'task two', 'task tree']);
const toggleStatus = () => {
  status.value === 'active'
    ? (status.value = 'pending')
    : status.value === 'pending'
    ? (status.value = 'inactive')
    : (status.value = 'active');
};
</script>
```

FYI: If we use the ref inside the Template we dont need to use .value

## LifeCycle Methods

**onBeforeMount** : Called before mouting begins

**onMounted** : Called when component is mounted

**onBeforeUpdate** : Called when reactive data changes and before re-render

**onUpdated** : Called after re-render (applied to the DOM)

**onBeforeUnmount** : Called before the Vue instance is distroyed

**onUnmounted** : Called after the instance is destroyed

**onActivated** : Called when a kept-alive component is actived

**onDeactivated** : called when a kept-alive component is deactivated

**onErrorCaptured** : called when an error is captured from a child component

## Props

- **defineProps** is a compile-time macro that is only available inside <**script setup**> and does not need to be explicitly imported. Declared props are automatically exposed to the template. defineProps also returns an object that contains all the props passed to the component

Example:

```bash
<script setup>
const { title, subtitle } = defineProps({
 title: {
   type: String,
   default: 'Become de Vue Dev',
 },
 subtitle: {
   type: String,
   default: 'Find the Vue job that fits your skills and needs',
 },
});
</script>
```

## Templates with Slot

- The <**template**> element allows for reusing markup structures, and its contents can be referenced with JavaScript. When combined with web components, such as <**my-paragraph**>, templates can include styling information. The <**slot**> element adds flexibility by defining placeholders that can be filled with any markup fragment when the element is used. Slots are identified by their name attribute and can have fallback content. Unnamed slots fill with all top-level child nodes without the slot attribute. The page also shows a more involved example using <**slot**> with <**template**> and JavaScript.

## Computed function

- Function returns return values based on other value, it will run when the particular value changes (when necessary),
- Computed properties, using the computed() function, are recommended for such cases, as they track reactive dependencies and update automatically.
- The returned value from a computed property should be treated as read-only and never be mutated.
- Similar to dependency array in UseEffect Hook in react

Example:

```bash
const showFullDescription = ref(false);
const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});

```

## Component Registration

- Global registration using .component() makes components available app-wide, but can lead to unused components in the final bundle.
  Example:

```bash
Vue.component('ComponentA', ComponentA);
```

- Local registration limits component availability to the current component, improving app maintainability and allowing for tree-shaking.
- In <**script setup**>, imported components can be used locally without registration, but in non-<**script setup**>, the components option is needed.
  Example:

```bash
export default {
  components: {
    ComponentA,
  },
};
```

## Router

```bash
npm i vue-router
```

- Create folder named **router** add file named **index.js** that contain paths and their related components

**index.js**

```bash
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/', name: 'home', component: HomeViews
  }]
})

export default router
```

- Create folder named views to add our pages
- In main.js add the router from the index file under router and use it as middelware

**main.js**

```bash
const app = createApp(App)

app.use(router)
app.mount('#app')

```

**FYI:** we can skip this part by taping yes when create new Vue project with Vue CLI

```bash
npm create vue@latest
```

**App.vue**

- inside App.vue we add the RouterView from vue-router

```bash
<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>
```
