<script setup>
import { inject } from 'vue'
import LogoImage from '@/assets/images/DashStack.png'

const isCollapsed = inject('isCollapsed')

const menuItems = [
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Products', icon: 'pi pi-box' },
  { label: 'Favorites', icon: 'pi pi-heart' },
  { label: 'Inbox', icon: 'pi pi-envelope' },
  { label: 'Order Lists', icon: 'pi pi-list' },
  { label: 'Product Stock', icon: 'pi pi-box' },
  { divider: true },
  { header: 'PAGES' },
  { label: 'Pricing', icon: 'pi pi-dollar' },
  { label: 'Calendar', icon: 'pi pi-calendar' },
  { label: 'To-Do', icon: 'pi pi-check-square' },
  { label: 'Contact', icon: 'pi pi-phone' },
  { label: 'Invoice', icon: 'pi pi-file' },
  { label: 'UI Elements', icon: 'pi pi-chart-bar' },
  { label: 'Team', icon: 'pi pi-users' },
  { label: 'Table', icon: 'pi pi-table' },
  { divider: true },
  { label: 'Settings', icon: 'pi pi-cog' },
  { label: 'Logout', icon: 'pi pi-sign-out' },
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
            <i :class="item.icon" class="sidebar_list_wrapper_navitem_icon"></i>
            <span class="sidebar_list_wrapper_navitem_label" v-show="!isCollapsed">{{
              item.label
            }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
