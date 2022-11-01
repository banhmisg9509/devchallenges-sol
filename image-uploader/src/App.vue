<template>
  <main
    @drop="(e) => e.preventDefault()"
    @dragover="(e) => e.preventDefault()"
    class="w-screen min-h-screen flex justify-center items-center bg-slate-50"
  >
    <ImageUploader />
  </main>
</template>

<script lang="ts" setup>
import ImageUploader from "@/components/ImageUploader.vue";
</script>
