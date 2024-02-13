<script setup>
import { ref } from 'vue'

const message = ref('Hello from Vue')
</script>

<template>
  <span class="d-text-fantasy">{{ message }}</span>
</template>