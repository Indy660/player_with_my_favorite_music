<script setup lang="ts">
import {computed, watchEffect} from 'vue'

interface Props {
  isPlaying: boolean

  isFavoriteSong: boolean
  hasText: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['previous', 'play-pause', 'next', 'add-favorite', 'show-text-song'])

function previousButtonHandler(): void {
  emit('previous')
}

const iconPlayerButton = computed(() => {
  return props.isPlaying ? '<i class="fas fa-pause fa-2xl"/>' : ' <i class="fas fa-play fa-2xl"/>'
})

function playerButtonHandler(): void {
  emit('play-pause')
}

function nextButtonHandler(): void {
  emit('next')
}



// -----------начинаю ломать отсюда

const iconHeartClass = computed(() => {
  return props.isFavoriteSong ? 'active' : ''
})
const iconShowTextClass = computed(() => {
  return props.hasText ? '' : 'disabled'
})
function onIconAddFavoriteClick(): void {
  emit('add-favorite')
}
function onIconShowTextClick(): void {
  props.hasText && emit('show-text-song')
}
watchEffect(() => {
  console.log('isFavoriteSong', props.isFavoriteSong, '=> class:', iconHeartClass.value)
})
</script>

<template>


  <div class="main-control">
    <button class="heart" :class="iconHeartClass" @click.stop="onIconAddFavoriteClick">
      <i class="fa-solid fa-heart fa-1x" />
    </button>
    <button class="player-button" @click.stop="previousButtonHandler">
      <i class="fas fa-step-backward "></i>
    </button>
    <button class="player-button" @keyup.space.prevent @click.stop="playerButtonHandler">
      <span v-html="iconPlayerButton"></span>
    </button>
<!--    <button class="player-button" @keyup.space.prevent @click.stop="playerButtonHandler">-->
<!--      <i v-if="props.isPlaying" class="fas fa-pause"></i>-->
<!--      <i v-else class="fas fa-play"></i>-->
<!--    </button>-->
    <button class="player-button" @click.stop="nextButtonHandler">
      <i class="fas fa-step-forward"></i>
    </button>
    <button class="show-text" :class="iconShowTextClass" @click.stop="onIconShowTextClick">
      <i class="fa-solid fa-text-height" />
    </button>
  </div>
</template>

<style scoped>
.main-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}
.player-button {
  font-size: 32px;
  cursor: pointer;
  color: var(--player-button-color);
  transition: transform 0.3s;
}

.player-button:hover {
  color: var(--player-button-hover);
  transform: scale(1.1);
}

.player-button > svg,.player-button > span > svg,
.player-button > i {
  font-size: 32px;
}

.heart.active {
  color: #de0a26;
}
.heart > i {
  color: inherit;
}
@media (min-width: 400px) and (max-width: 1200px) {

  .main-control {
    margin: 10px 0;
  }
}

</style>
