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
    <!--      <i :class="['fas', !isPlaying ? 'fa-play' : 'fa-pause']"></i>-->
    <!--    </button>-->
    <!--    TODO: поправить байн в фонт авсам-->
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

.player-button {
  font-size: 24px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.player-button:hover {
  background-color: #ddd;
}
</style>
