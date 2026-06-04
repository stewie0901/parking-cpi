<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-parking'])

const area = ref('')
const place = ref('')
const price = ref('')

function submitForm() {
  if (!area.value || !place.value || !price.value) {
    alert('請填完整資料')
    return
  }

  emit('add-parking', {
    id: Date.now(),
    area: area.value,
    place: place.value,
    price: Number(price.value)
  })

  area.value = ''
  place.value = ''
  price.value = ''
}
</script>

<template>
  <section class="form-box">
    <h2>新增停車費資料</h2>

    <form @submit.prevent="submitForm">
      <input v-model="area" type="text" placeholder="地區" />
      <input v-model="place" type="text" placeholder="停車場名稱" />
      <input v-model="price" type="number" placeholder="每小時價格" />

      <button type="submit">新增</button>
    </form>
  </section>
</template>