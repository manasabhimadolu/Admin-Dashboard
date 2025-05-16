<template>
  <div class="dealscontainer">
    <div class="dealscontainer_header">
      <h2 class="dealscontainer_header_title">Deals Details</h2>
      <n-select v-model:value="selectedMonth" :options="monthOptions" style="width: 120px" />
    </div>
    <div class="dealscontainer_content">
      <n-data-table :columns="columns" :data="tableData" :pagination="false" :bordered="false" />
    </div>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import { NSelect, NDataTable, NTag } from 'naive-ui'
import watch from '../assets/images/Watch.png'

const selectedMonth = ref('October')
const monthOptions = [
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
]

const tableData = [
  {
    product: {
      name: 'Apple Watch',
      image: watch,
    },
    location: '6096 Marjolaine Landing',
    datetime: '12.09.2019 - 12.53 PM',
    piece: 423,
    amount: '$34,295',
    status: 'Delivered',
  },
]

const columns = [
  {
    title: 'Product Name',
    key: 'product',
    render(row) {
      return h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          },
        },
        [
          h('img', {
            src: row.product.image,
            alt: row.product.name,
            style: {
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
            },
          }),
          h('span', null, row.product.name),
        ],
      )
    },
  },
  {
    title: 'Location',
    key: 'location',
  },
  {
    title: 'Date - Time',
    key: 'datetime',
  },
  {
    title: 'Piece',
    key: 'piece',
  },
  {
    title: 'Amount',
    key: 'amount',
  },
  {
    title: 'Status',
    key: 'status',
    render(row) {
      return h(
        NTag,
        {
          type: 'success',
          bordered: false,
          round: true,
        },
        { default: () => row.status },
      )
    },
  },
]
</script>
