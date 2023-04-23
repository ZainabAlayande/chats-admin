<template>
  <div class="flex justify-between items-center px-3 mb-8">
    <div class="flex justify-between items-center space-x-4">
      <span v-if="hasSearchField"> <Search /> </span>

      <span v-if="hasFilterOption"> <Filter /> </span>
    </div>

    <div class="flex justify-between items-center space-x-4">
      <div v-if="hasExportButton">
        <Button
          :hasBorder="true"
          :hasIcon="true"
          text="Export"
          iconName="export"
          class="!py-3.5"
          @click="clickExport"
        />
      </div>

      <div v-show="hasCreateButton">
        <Button
          :text="createBtnText"
          :hasIcon="true"
          iconName="add"
          class="!p-4"
          @click="clickCreate"
        />
      </div>
    </div>
  </div>
</template>

<script   setup lang="ts"> 
const props = defineProps({
  hasSearchField: {
    type: Boolean,
    default: true,
  },
  hasExportButton: {
    type: Boolean,
    default: true,
  },
  hasCreateButton: {
    type: Boolean,
    default: true,
  },
  hasFilterOption: {
    type: Boolean,
    default: true,
  },
  createBtnText: {
    type: String,
    default: 'Create',
  },
  searchPlaceholder: {
    type: String,
    default: 'Search NGOs...',
  },
  filterPlaceholder: {
    type: String,
    default: 'Filter',
  },
},)

// emits
const emit = defineEmits(['export', 'create'])
const clickExport = () => { emit('export') }
const clickCreate = () => { emit('create') }
</script>

<style lang="scss" scoped></style>
