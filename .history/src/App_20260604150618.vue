<script setup>
import { ref, computed } from 'vue'
import HeaderBanner from './components/HeaderBanner.vue'
import SummaryBox from './components/SummaryBox.vue'
import PriceCard from './components/PriceCard.vue'
import PriceForm from './components/PriceForm.vue'
import FooterInfo from './components/FooterInfo.vue'

const parkingList = ref([
  { id: 1, area: '台北信義區', place: '百貨商圈停車場', price: 80 },
  { id: 2, area: '台中逢甲', place: '夜市周邊停車場', price: 60 },
  { id: 3, area: '新北板橋', place: '車站附近停車場', price: 50 }
])

const averagePrice = computed(() => {
  const total = parkingList.value.reduce((sum, item) => sum + item.price, 0)
  return Math.round(total / parkingList.value.length)
})

function addParking(newParking) {
  parkingList.value.push(newParking)
}
</script>

<template>
  <HeaderBanner />

  <main class="container">
    <SummaryBox
      :total-count="parkingList.length"
      :average-price="averagePrice"
    />

    <PriceForm @add-parking="addParking" />

    <h2>停車場資料</h2>

    <PriceCard
      v-for="item in parkingList"
      :key="item.id"
      :parking="item"
    />
  </main>

  <FooterInfo />
</template>