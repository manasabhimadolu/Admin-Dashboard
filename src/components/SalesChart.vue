<script setup>
import { Line } from 'vue-chartjs'
import { ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
)

const chartData = {
  labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
  datasets: [
    {
      label: 'Engagement Rate',
      data: [20, 30, 45, 85, 50, 55, 25, 30, 70, 55, 40, 55],
      borderColor: '#3b82f6',
      background: 'linear-gradient(to bottom, #4379EE29, #FFFFFF2D)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#3b82f6',
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `${context.raw}%`,
      },
    },
  },
  scales: {
    x: {
      offset: true,
      ticks: {
        autoSkip: false,
      },
    },
    y: {
      min: 20,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: (value) => `${value}%`,
      },
    },
  },
}

const selectedMonth = ref('October')
const monthOptions = [
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
]
</script>

<template>
  <div class="saleschartcontainer">
    <div class="saleschartcontainer_header">
      <h3 class="saleschartcontainer_header_title">Sales Details</h3>
      <n-select v-model:value="selectedMonth" :options="monthOptions" style="width: 120px" />
    </div>
    <Line
      :data="chartData"
      :options="chartOptions"
      class="saleschartcontainer_content"
      style="height: 160px"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/sales';
</style>
