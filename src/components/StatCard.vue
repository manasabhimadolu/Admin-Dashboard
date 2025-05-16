<script setup>
import { ref, onMounted, inject } from 'vue'
import { NCard } from 'naive-ui'
import dashboardData from '../assets/data/dashboardData.json'

const isCollapsed = inject('isCollapsed')

const cards = ref([])

onMounted(() => {
  cards.value = dashboardData
})
</script>

<template>
  <div class="cardcontainer">
    <h3 class="cardcontainer_title">Dashboard</h3>
    <div :class="['cardcontainer_cards', { isCollapsed: isCollapsed }]">
      <n-card
        v-for="(card, index) in cards"
        :key="index"
        size="small"
        :title="card.title"
        class="cardcontainer_eachcard"
      >
        <template #header-extra>
          <div class="cardcontainer_iconwrapper" :style="{ backgroundColor: card.bgColor }">
            <i :class="card.icon" style="font-size: 1.5rem; color: inherit"></i>
          </div>
        </template>

        <div class="cardcontainer_value">{{ card.value }}</div>

        <template #footer>
          <div class="cardcontainer_footer">
            <i :class="[card.changePositive ? 'pi pi-arrow-up up' : 'pi pi-arrow-down down']"></i>
            <span :class="card.changePositive ? 'up' : 'down'">{{ card.change }}</span>
            <span class="change-text">{{ card.changeText }}</span>
          </div>
        </template>
      </n-card>
    </div>
  </div>
</template>
