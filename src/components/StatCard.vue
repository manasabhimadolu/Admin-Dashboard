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
            <font-awesome-icon :icon="['fas', card.icon]" />
          </div>
        </template>

        <div class="cardcontainer_value">{{ card.value }}</div>

        <template #footer>
          <div class="cardcontainer_footer">
            <font-awesome-icon
              :icon="['fas', card.changePositive ? 'arrow-up' : 'arrow-down']"
              :class="card.changePositive ? 'up' : 'down'"
            />
            <span :class="card.changePositive ? 'up' : 'down'">{{ card.change }}</span>
            <span class="change-text">{{ card.changeText }}</span>
          </div>
        </template>
      </n-card>
    </div>
  </div>
</template>
