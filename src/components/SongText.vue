<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'

import SONGS_TEXT from '../const/songs_text'
export default defineComponent({
  props: {
    songName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // const fileContent: Ref<string> = ref('')
    // if (props.songName) {
    //   fileContent.value = SONGS_TEXT[props.songName]
    // }
    const fileContent: Ref<string> = ref(SONGS_TEXT[props.songName])
    // if (props.songName) {
    //   fileContent.value = SONGS_TEXT[props.songName]
    // }
    return {
      fileContent
    }
  }
})
</script>

<template>
  <div class="sidebar">
    <span v-text="fileContent" />
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
