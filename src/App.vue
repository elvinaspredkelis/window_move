<script setup>
import { listen } from '@tauri-apps/api/event';

listen("tauri://move", (event) => {
  console.log(event)
})

listen("tauri://resize", (event) => {
  console.log(event)
})
</script>

<template>
  <p>To toggle this window, press</p>
  <h1 style="max-width: 40rem;">CommandOrControl + E</h1>

  <p>To replicate:</p>
  <ol style="max-width: 30rem">
    <li>Show window</li>
    <li>Resize - Increase height downwards</li>
    <li>Hide window</li>
    <li>Show window again and it should reappear in a different position</li>
  </ol>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  padding: 4rem
}
</style>
