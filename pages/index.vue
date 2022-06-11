<template>
  <main class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 dark:text-white h-full">
    <h1 class="mb-8 font-bold text-lg">Nuxt - Tailwind - Vuetify - Chart.js Setup</h1>
    <!-- Doughnut/Pie chart -->
    <div class="flex flex-col justify-center items-center min-w-0 p-4 bg-white rounded-lg shadow-xs text-gray-800 dark:text-gray-300 dark:bg-gray-800">
      <h4 class="mb-4 font-semibold">
        Pie (Donut) Chart Data
      </h4>
      <PieChart :chartData="donutChartData" :options="donutChartOptions" :height="150" />
      <div
        class="flex justify-center mt-4 space-x-3 text-xs text-gray-600 dark:text-gray-400"
      >
        <!-- Chart legend -->
        <div class="flex items-center">
          <span
            class="inline-block w-3 h-3 mr-1 bg-purple-900 rounded-full"
          ></span>
          <span>Active Users</span>
        </div>
        <div class="flex items-center">
          <span
            class="inline-block w-3 h-3 mr-1 bg-purple-50 rounded-full"
          ></span>
          <span>Inactive Users</span>
        </div>
      </div>   
    </div>    
  </main>
</template>

<script>
import PieChart from '../components/charts/PieChart.vue'
export default {
  name: 'IndexPage',
  components: { PieChart },
  data() {
    return {
      donutChartOptions: {
        responsive: true,
        cutoutPercentage: 70,
        legend: {
          display: false,
          position: 'bottom',
          boxHeight: 8,
          pointStyle: 'circle',
          usePointStyle: true,
        },
      },
      donutChartData: {
        datasets: [
          {
            data: [43, 57],
            backgroundColor: ['#4E153F', '#F5F1FF'],
            borderColor: 'transparent',
            label: 'Dataset 1',
          },
        ],
        labels: ['Active Users', 'Inactive Users'],
      },            
    }
  }
}
</script>
