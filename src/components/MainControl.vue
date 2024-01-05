<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainControl',
  props: {
    isPlaying: {
      type: Boolean,
      default: false
    }
  },
  emits: ['previous', 'play-pause', 'next'],
  setup(_, { emit }) {
    function previousButtonHandler() {
      emit('previous')
    }

    function playerButtonHandler() {
      console.log('playerButtonHandler')
      emit('play-pause')
    }

    function nextButtonHandler() {
      emit('next')
    }

    return {
      previousButtonHandler,
      playerButtonHandler,
      nextButtonHandler
    }
  }
})
</script>

<template>
  <div class="main-control">
    <button class="player-button" @click="previousButtonHandler">
      <i class="fas fa-step-backward"></i>
    </button>
    <!--    <button class="player-button" @click="playerButtonHandler">-->
    <!--      <template v-if="isPlaying">-->
    <!--        <i class="fas fa-pause"></i>-->
    <!--      </template>-->
    <!--      <template v-else>-->
    <!--        <i class="fas fa-play"></i>-->
    <!--      </template>-->
    <!--    </button>-->
    <!--    todo: хз почему только нижний вариант работает-->
    <button v-if="isPlaying" class="player-button" @click="playerButtonHandler">
      <i class="fas fa-pause"></i>
    </button>
    <button v-else class="player-button" @click="playerButtonHandler">
      <i class="fas fa-play"></i>
    </button>
    <button class="player-button" @click="nextButtonHandler">
      <i class="fas fa-step-forward"></i>
    </button>
  </div>
</template>

<style scoped>
.main-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
