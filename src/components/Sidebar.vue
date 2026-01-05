<script setup lang="ts">
interface Props {
  title?: string
  showTitle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  showTitle: true
})
</script>

<template>
  <div class="sidebar" @click.stop>
    <h3 v-if="showTitle && title" class="sidebar-title">{{ title }}</h3>
    <div class="sidebar-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--main-bg-color);
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: start;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
}

.sidebar-title {
  color: var(--main-color);
  font-size: calc(var(--main-font-size) + 2px);
  margin: 0;
  padding: 15px 10px 10px;
  text-align: center;
  border-bottom: 1px solid;
  border-bottom-color: var(--main-color);
  background-color: var(--main-bg-color);
  z-index: 2;
}

.sidebar-content {
  height: 100%;
  overflow-y: auto;
}
</style>

