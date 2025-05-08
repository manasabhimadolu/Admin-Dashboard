<script setup>
import LogoImage from '@/assets/images/DashStack.png'
</script>

<template>
  <div class="sidebar">
    <div class="sidebar_imagecontainer">
      <img :src="LogoImage" alt="Dashboard" />
    </div>
    <ul class="sidebar_list">
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'store']" />
        Dashboard
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'box']" />
        Products
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'heart']" />
        Favorites
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'message']" />
        Inbox
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'list']" />
        Order Lists
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'box']" />
        Product Stock
      </li>
      <n-divider />
      <li class="sidebar_list_header">PAGES</li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'tag']" />
        Pricing
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'calendar']" />
        Calendar
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'clipboard-list']" />
        To-Do
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'phone']" />
        Contact
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'file-invoice']" />
        Invoice
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'chart-bar']" />
        UI Elements
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'users']" />
        Team
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'table']" />
        Table
      </li>
      <n-divider />
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'cog']" />
        Settings
      </li>
      <li class="sidebar_list_navitem">
        <font-awesome-icon class="sidebar_list_navitem_icon" :icon="['fas', 'sign-out-alt']" />
        Logout
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/sidebar';
</style>
