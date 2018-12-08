<template>
  <h1 class="text-grey">Hello {{ name }}</h1>
</template>
<script lang="ts">
export default {
  async asyncData(context) {
    return { name: 'World' }
  }
}
</script>
