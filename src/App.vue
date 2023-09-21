<template>
  <el-button plain @click="open2"> Won't close automatically </el-button>

  {{ count }}
</template>

<script setup lang="ts">
const count = ref('1')
const open2 = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success'
  })
}
</script>
