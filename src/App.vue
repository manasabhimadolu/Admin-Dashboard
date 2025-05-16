<script setup>
import SideBar from './components/Sidebar.vue'
import TopNavbar from './components/TopNavbar.vue'
import StatCard from './components/StatCard.vue'
import SalesChart from './components/SalesChart.vue'
import Table from './components/Table.vue'
import { ref, provide } from 'vue'

const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  console.log(isCollapsed?.value)
}

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
