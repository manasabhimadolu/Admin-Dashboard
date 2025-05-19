<script setup>
import TopNavbar from '../components/TopNavbar.vue'
import StatCard from '../components/StatCard.vue'
import SalesChart from '../components/SalesChart.vue'
import Table from '../components/Table.vue'
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'
import SideBar from '../components/SideBar.vue'

const isCollapsed = ref(false)
const collapseBreakpoint = 992

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  console.log(isCollapsed?.value)
}

const checkWindowSize = () => {
  isCollapsed.value = window.innerWidth < collapseBreakpoint
}

onMounted(() => {
  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize)
})

provide('isCollapsed', isCollapsed)
provide('toggleCollapse', toggleCollapse)
</script>

<template>
  <div class="page-container">
    <SideBar />
    <div class="layout">
      <TopNavbar />
      <div :class="['main-content', { isCollapsed: isCollapsed }]">
        <StatCard />
        <SalesChart />
        <Table />
      </div>
    </div>
  </div>
</template>
