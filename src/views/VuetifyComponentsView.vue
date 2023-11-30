<script setup lang="ts"></script>

<template>
  <main>
    <h2>SIX Components</h2>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-text-field :counter="10" label="First name" required hide-details></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field :counter="10" label="Last name" hide-details required></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            label="Autocomplete"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-checkbox label="Checkbox"></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: var(--six-spacing-large);
}

form {
  max-width: 320px;
}
</style>
