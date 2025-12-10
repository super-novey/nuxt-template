<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))

function throwError() {
  showError({
    statusCode: 500,
    message: 'This is a test error to display the error page!'
  })
}
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
    <button @click="throwError" style="background: red; color: white; padding: 8px; margin-left: 8px;">
      Throw Error
    </button>
    <Test />
  </div>
</template>