<script setup lang="ts">
import type { SixInput } from '@six-group/ui-library-vue'
import { ref } from 'vue'

const vModelInputValue = ref('Initial Value')
const manualInputValue = ref('Initial Value')
</script>

<template>
  <main>
    <h2>SIX Components</h2>

    <h3>Input with v-model</h3>
    <section>
      <six-input v-model="vModelInputValue"></six-input>
      <pre>Model Value: {{ vModelInputValue }}</pre>
    </section>

    <h3>Input with manual binding</h3>
    <section>
      <six-input
        :value="manualInputValue"
        @input="manualInputValue = $event.target.value"
      ></six-input>
    </section>
    <pre>Model Value: {{ manualInputValue }}</pre>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: var(--six-spacing-large);
}

section {
  display: flex;
  flex-direction: column;
  gap: var(--six-spacing-large);
  max-width: 320px;
}
</style>
