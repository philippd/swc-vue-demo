<script setup lang="ts">
import {
  SixAvatar,
  SixHeader,
  SixMenu,
  SixMenuItem,
  SixRoot,
  SixSidebar,
  SixSidebarItemGroup
} from '@six-group/ui-library-vue'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const leftSidebarOpen = ref(true)
</script>

<template>
  <v-app>
    <six-root>
      <six-header
        slot="header"
        :open-hamburger-menu="leftSidebarOpen"
        @six-header-hamburger-menu-clicked="leftSidebarOpen = !leftSidebarOpen"
      >
        <six-menu slot="app-switcher-menu">
          <six-menu-item>App 1</six-menu-item>
          <six-menu-item>App 2</six-menu-item>
        </six-menu>
        <six-menu slot="profile-menu">
          <six-menu-item><b>Heinz Meier</b><br />heinz.meier@demo.com</six-menu-item>
          <six-menu-item value="change-password">Change password</six-menu-item>
          <six-menu-item value="logout">Logout</six-menu-item>
        </six-menu>
        <six-avatar initials="HM" slot="profile-avatar"></six-avatar>
      </six-header>
      <six-sidebar slot="left-sidebar" position="left" :open="leftSidebarOpen">
        <six-sidebar-item-group
          @click="$router.push('/')"
          name="SIX Components"
          icon="home"
        ></six-sidebar-item-group>
        <six-sidebar-item-group
          @click="$router.push('/vuetify')"
          name="Vuetify Components"
          icon="assignment"
        ></six-sidebar-item-group>
      </six-sidebar>
      <div slot="main">
        <RouterView />
      </div>
    </six-root>
  </v-app>
</template>

<style scoped>
six-root {
  height: 100vh;
}
</style>
