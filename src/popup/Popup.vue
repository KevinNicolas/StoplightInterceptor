<script setup lang="ts">
  // https://jsonplaceholder.typicode.com/todos/1
  // const url = 'https://jsonplaceholder.typicode.com/todos/1';
  
  // chrome.webRequest.onBeforeRequest.addListener(
  //   function (detail) {
  //     console.info({ detail });
  //     return {};
  //   },
  //   { urls: ['*://jsonplaceholder.typicode.com/*'] }
  // )
</script>

<template>
  <div class="popup">
    <h2>Stoplight interceptor 2.0</h2>
  </div>
</template>

<style lang="scss" scoped>
  .popup {
    width: 20rem;
    height: 20rem;
    padding: .5rem;
  };
</style>