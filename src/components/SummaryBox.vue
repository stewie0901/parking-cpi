<script setup>
defineProps({
  totalCount: Number,
  averagePrice: Number
})
</script>

<template>
  <section class="summary">
    <div>
      <p>資料筆數</p>
      <strong>{{ totalCount }}</strong>
    </div>

    <div>
      <p>平均停車費</p>
      <strong>{{ averagePrice }} 元 / 小時</strong>
    </div>
  </section>
</template>