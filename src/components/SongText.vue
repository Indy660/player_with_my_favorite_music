<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    songText: {
      type: String,
      default: ''
    }
  },
})
</script>

<template>
  <div class="sidebar">
    <span v-text="songText" />
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--main-bg-color);
  width: 100%;
  overflow-y: auto;
  list-style-type: none;
  margin: 0;
  padding: 10px 5px;
  text-align: start;
}

.sidebar span {
  white-space: break-spaces;
  font-size: 20px;
  color: var(--main-color);
}
/*li {*/
/*  color: var(--main-color);*/
/*  margin-bottom: 5px;*/
/*  cursor: pointer;*/
/*}*/
/*li.selected {*/
/*  background-color: var(--main-bg-color-secondary);*/
/*}*/
/*li:hover {*/
/*  background-color: rgb(0 22 255 / 10%);*/
/*}*/
</style>
