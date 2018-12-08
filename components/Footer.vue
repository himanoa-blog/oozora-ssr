<template>
  <div class="flex items-center justify-center flex-wrap bg-green-darkest p-6">
    <p class="text-white">© {{ yearCredit }} himanoa</p>
  </div>
</template>
<script>
export default {
  computed: {
    yearCredit() {
      const startYear = 2018
      const nowYear = new Date().getFullYear()
      if (startYear === nowYear) {
        return nowYear.toString()
      }
      return `${startYear}-${nowYear}`
    }
  }
}
</script>
