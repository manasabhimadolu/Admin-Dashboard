<script setup>
import { inject } from 'vue'
import LogoImage from '@/assets/images/DashStack.png'

const isCollapsed = inject('isCollapsed')

const menuItems = [
  { label: 'Dashboard', icon: ['fas', 'store'] },
  { label: 'Products', icon: ['fas', 'box'] },
  { label: 'Favorites', icon: ['fas', 'heart'] },
  { label: 'Inbox', icon: ['fas', 'message'] },
  { label: 'Order Lists', icon: ['fas', 'list'] },
  { label: 'Product Stock', icon: ['fas', 'box'] },
  { divider: true },
  { header: 'PAGES' },
  { label: 'Pricing', icon: ['fas', 'tag'] },
  { label: 'Calendar', icon: ['fas', 'calendar'] },
  { label: 'To-Do', icon: ['fas', 'clipboard-list'] },
  { label: 'Contact', icon: ['fas', 'phone'] },
  { label: 'Invoice', icon: ['fas', 'file-invoice'] },
  { label: 'UI Elements', icon: ['fas', 'chart-bar'] },
  { label: 'Team', icon: ['fas', 'users'] },
  { label: 'Table', icon: ['fas', 'table'] },
  { divider: true },
  { label: 'Settings', icon: ['fas', 'cog'] },
  { label: 'Logout', icon: ['fas', 'sign-out-alt'] },
]
</script>

<template>
  <div :class="['sidebar', { isCollapsed: isCollapsed }]">
    <div class="sidebar_imagecontainer">
      <img :src="LogoImage" alt="Dashboard" v-if="!isCollapsed" />
    </div>
    <ul class="sidebar_list">
      <template v-for="(item, index) in menuItems" :key="index">
        <n-divider v-if="item.divider" v-show="!isCollapsed" />
        <li v-else-if="item.header" class="sidebar_list_header" v-show="!isCollapsed">
          {{ item.header }}
        </li>
        <li v-else class="sidebar_list_navitem">
          <div class="sidebar_list_wrapper">
            <font-awesome-icon class="sidebar_list_wrapper_navitem_icon" :icon="item.icon" />
            <span class="sidebar_list_wrapper_navitem_label" v-show="!isCollapsed">{{
              item.label
            }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
