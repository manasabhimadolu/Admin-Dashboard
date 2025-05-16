<script setup>
import profileIcon from '@/assets/images/Profile.png'
import { ref, inject } from 'vue'

const showDropdown = ref(false)
const selectedCountry = ref('en')
const isCollapsed = inject('isCollapsed')
const toggleCollapse = inject('toggleCollapse')

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const logout = () => {
  console.log('Logout clicked')
}

const goToProfile = () => {
  console.log('Go to Profile clicked')
}

const countryOptions = ref([
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'French', value: 'fr' },
])
</script>

<template>
  <div class="topnavbar">
    <div class="topnavbar_leftnavitems">
      <div class="topnavbar_leftnavitems_iconwrapper" :class="{ isCollapsed: isCollapsed }">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          @click="toggleCollapse"
          class="topnavbar_leftnavitems_icon"
        />
      </div>
      <div class="topnavbar_leftnavitems_input">
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          class="topnavbar_leftnavitems_input_search"
        />
        <input class="topnavbar_leftnavitems_input_style" type="text" placeholder="Search" />
      </div>
    </div>
    <div class="topnavbar_rightnavitems">
      <div class="topnavbar_rightnavitems_notificationwrapper">
        <font-awesome-icon
          :icon="['fas', 'bell']"
          class="topnavbar_rightnavitems_notificationwrapper_bell"
        />
        <span class="topnavbar_rightnavitems_notificationwrapper_count">5</span>
      </div>
      <n-select
        class="select-language"
        v-model:value="selectedCountry"
        :options="countryOptions"
        :render-label="renderFlagOption"
        :render-tag="renderFlagOption"
        :bordered="false"
        placeholder="Select a language"
      />
      <img :src="profileIcon" alt="profile" class="topnavbar_rightnavitems_profile" />
      <div class="topnavbar_rightnavitems_userinfo">
        <div class="topnavbar_rightnavitems_userinfo_name">Manasa Bhimadolu</div>
        <div style="color: #565656; font-size: 12px">(Admin)</div>
      </div>
      <font-awesome-icon
        :icon="['fas', 'circle-chevron-down']"
        class="topnavbar_rightnavitems_settings"
        @click="toggleDropdown"
      />
      <div v-if="showDropdown" class="dropdown-menu">
        <ul>
          <li @click="goToProfile">Profile</li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </div>
  </div>
</template>
