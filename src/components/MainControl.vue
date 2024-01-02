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
    <button :class="{ playing: isPlaying }" class="player-button" @click="playerButtonHandler">
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

.player-button i {
  color: #333;
}

.player-button.playing i {
  display: none;
}

.player-button.playing:after {
  content: '\f04c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #333;
}

.player-button.playing:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.player-button:hover {
  background-color: #ddd;
}
</style>
