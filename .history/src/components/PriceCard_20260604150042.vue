<script setup>
defineProps({
  parking: Object
})
</script>

<template>
  <div class="card">
    <h3>{{ parking.place }}</h3>

    <p>
      地區：
      {{ parking.area }}
    </p>

    <p>
      停車費：
      {{ parking.price }} 元 / 小時
    </p>
  </div>
</template>