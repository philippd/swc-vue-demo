<script setup lang="ts">
import {
  SixAlert,
  SixBadge,
  SixButton,
  SixCheckbox,
  SixDatepicker,
  SixDetails,
  SixDialog,
  SixDrawer,
  SixDropdown,
  SixErrorPage,
  SixIconButton,
  SixInput,
  SixLanguageSwitcher,
  SixMenu,
  SixMenuItem,
  SixProgressBar,
  SixRange,
  SixSearchField,
  SixSelect,
  SixSwitch,
  SixTab,
  SixTabGroup,
  SixTabPanel,
  SixTag,
  SixTextarea
} from '@six-group/ui-library-vue'
import { computed, ref } from 'vue'

const inputValue = ref('Input Value')
const textAreaValue = ref('Textarea Value')
const checkboxValue = ref(true)
const switchValue = ref(true)
const rangeValue = ref(33)
const datePickerValue = ref<Date>(new Date())
const dialogOpen = ref(false)
const drawerOpen = ref(false)
const infoAlert = ref<HTMLElement | null>(null)

function onClick() {
  console.log('clicked')
}

function showInfoAlert() {
  if (infoAlert.value) {
    // TODO: Figure out how to type the ref properly.
    ;(infoAlert.value as any).toast()
  }
}

type ErrorCode = 403 | 404 | 500
const errorCode = ref('404')
const errorCodeValue = computed(() => Number.parseInt(errorCode.value) as ErrorCode)
</script>

<template>
  <main>
    <h2>Button</h2>
    <section class="two-column">
      <six-button @click="onClick()">Primary</six-button>
      <six-button type="secondary"
        >Secondary with Badge<six-badge type="danger" pill>6</six-badge></six-button
      >
      <six-button type="link">Link</six-button>
      <six-button pill>Pill</six-button>
      <six-button type="success">Success</six-button>
      <six-button type="warning">Warning</six-button>
      <six-button :disabled="true">Disabled</six-button>
      <six-button :loading="true"></six-button>
    </section>

    <h2>Input</h2>
    <section>
      <six-input v-model="inputValue"></six-input>
      <pre>Value: {{ inputValue }}</pre>
    </section>

    <h2>Textarea</h2>
    <section style="max-width: 640px">
      <six-textarea v-model="textAreaValue"></six-textarea>
      <pre>Value: {{ textAreaValue }}</pre>
    </section>

    <h2>Search Field</h2>
    <section>
      <six-search-field placeholder="Search" id="basic-search-field" clearable></six-search-field>
    </section>

    <h2>Checkbox</h2>
    <section>
      <!-- TODO: Figure out how to make v-model work here -->
      <six-checkbox
        :checked="checkboxValue"
        @six-checkbox-change="checkboxValue = $event.target.checked"
        >The SIX Checkbox</six-checkbox
      >
      <pre>Value: {{ checkboxValue }}</pre>
    </section>

    <h2>Switch</h2>
    <section>
      <!-- TODO: Figure out how to make v-model work here -->
      <six-switch :checked="switchValue" @six-switch-change="switchValue = $event.target.checked"
        >Switch</six-switch
      >
      <pre>Value: {{ switchValue }}</pre>
    </section>

    <h2>Date Picker</h2>
    <section>
      <!-- TODO: Figure out how to make v-model work here -->
      <six-datepicker
        :value="datePickerValue"
        @six-datepicker-select="datePickerValue = $event.target.value"
      ></six-datepicker>
      <pre>Value: {{ datePickerValue }}</pre>
    </section>

    <h2>Dropdown</h2>
    <section>
      <six-dropdown>
        <six-icon-button name="settings" slot="trigger" caret></six-icon-button>
        <six-menu>
          <six-menu-item>Hello</six-menu-item>
          <six-menu-item>SIX</six-menu-item>
          <six-menu-item>Web Components</six-menu-item>
        </six-menu>
      </six-dropdown>
    </section>

    <h2>Range</h2>
    <section>
      <six-range v-model="rangeValue" :min="0" :max="100" :step="1"></six-range>
      <pre>Value: {{ rangeValue }}</pre>
    </section>

    <h2>Progress Bar</h2>
    <six-progress-bar :percentage="rangeValue"></six-progress-bar>

    <h2>Dialog</h2>
    <six-dialog
      label="Dialog"
      class="dialog-overview"
      :open="dialogOpen"
      @six-dialog-hide="dialogOpen = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. aölkjölkjaölsdfas öl
      <six-button slot="footer" type="primary" @click="dialogOpen = false">Close</six-button>
    </six-dialog>
    <six-button @click="dialogOpen = true">Open Dialog</six-button>

    <h2>Drawer</h2>
    <six-drawer
      label="Drawer"
      class="drawer-overview"
      :open="drawerOpen"
      @six-drawer-hide="drawerOpen = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <six-button slot="footer" @click="drawerOpen = false">Close</six-button>
    </six-drawer>
    <six-button @click="drawerOpen = true">Open Drawer</six-button>

    <h2>Alerts</h2>
    <six-alert id="primary-alert" type="primary" :duration="3000" closable ref="infoAlert">
      <six-icon slot="icon">info</six-icon>
      <strong>This is super informative</strong><br />
      You can tell by how pretty the alert is.
    </six-alert>
    <six-button @click="showInfoAlert()">Show Info</six-button>

    <h2>Details</h2>
    <six-details summary="Toggle Me">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </six-details>

    <h2>Language Switcher</h2>
    <six-language-switcher></six-language-switcher>

    <h2>Tag</h2>
    <section class="two-column">
      <six-tag type="primary">Primary</six-tag>
      <six-tag type="info">Info</six-tag>
      <six-tag type="success">Success</six-tag>
      <six-tag type="warning">Warning</six-tag>
      <six-tag type="danger" pill>Danger Pill</six-tag>
      <six-tag type="action" pill>Action Pill</six-tag>
    </section>

    <h2>Tab Group</h2>
    <six-tab-group>
      <six-tab slot="nav" panel="general">General</six-tab>
      <six-tab slot="nav" panel="custom">Custom</six-tab>
      <six-tab slot="nav" panel="advanced">Advanced</six-tab>
      <six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>

      <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="general">
        This is the general tab panel.
      </six-tab-panel>
      <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="custom">
        This is the custom tab panel.
      </six-tab-panel>
      <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="advanced">
        This is the advanced tab panel.
      </six-tab-panel>
      <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="disabled">
        This is a disabled tab panel.
      </six-tab-panel>
    </six-tab-group>

    <h2>Error Page</h2>
    <section>
      <!-- TODO: Figure out how to make v-model work here -->
      <six-select :value="errorCode" @six-select-change="errorCode = $event.target.value">
        <six-menu-item value="403">Access Denied (403)</six-menu-item>
        <six-menu-item value="404">Not Found (404)</six-menu-item>
        <six-menu-item value="500">Error (500)</six-menu-item>
      </six-select>
    </section>

    <!-- TODO: The error icon is not updated when errorCodeValue changes -->
    <six-error-page :error-code="errorCodeValue" language="en"></six-error-page>
  </main>
</template>

<style scoped lang="css">
main {
  max-width: 800px;
}

h2 {
  margin: var(--six-spacing-x-large) 0 var(--six-spacing-large);
}
h2:first-of-type {
  margin: 0 0 16px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
}

.two-column {
  max-width: 656px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--six-spacing-large);
}
</style>
