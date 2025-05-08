<script setup>
import Sidebar from './components/Sidebar.vue'
import TopNavbar from './components/TopNavbar.vue'
import StatCard from './components/StatCard.vue'
import SalesChart from './components/SalesChart.vue'
import Table from './components/Table.vue'
</script>

<template>
  <div class="page-container">
    <Sidebar />
    <div class="layout">
      <TopNavbar />
      <div class="main-content">
        <div>
          <StatCard />
        </div>
        <SalesChart />
        <Table />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  height: 100vh;
}

.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  padding: 20px;
  background-color: #f5f6fa;
  height: calc(100vh - 60px);
}
</style>
