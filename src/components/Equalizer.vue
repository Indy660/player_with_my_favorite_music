<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import Sidebar from './Sidebar.vue'

interface Props {
  initialBands?: EqualizerBand[]
  initialPreset?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialBands: undefined,
  initialPreset: 'default'
})

const emit = defineEmits<{
  (e: 'update:bands', bands: EqualizerBand[]): void
  (e: 'update:preset', preset: string): void
}>()

// Константы частот для эквалайзера
const FREQUENCY_BANDS = [
  { frequency: 60, label: '60 Hz' },
  { frequency: 170, label: '170 Hz' },
  { frequency: 310, label: '310 Hz' },
  { frequency: 600, label: '600 Hz' },
  { frequency: 1000, label: '1 kHz' },
  { frequency: 3000, label: '3 kHz' },
  { frequency: 6000, label: '6 kHz' },
  { frequency: 12000, label: '12 kHz' },
  { frequency: 14000, label: '14 kHz' },
  { frequency: 16000, label: '16 kHz' }
] as const

// Предустановки эквалайзера с названиями
const EQUALIZER_PRESETS: EqualizerPreset[] = [
  { id: 'default', name: 'По умолчанию', gains: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { id: 'flat', name: 'Нейтральный', gains: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { id: 'rock', name: 'Рок', gains: [5, 4, 3, 1, -1, -2, 0, 2, 3, 4] },
  { id: 'metal', name: 'Метал', gains: [6, 5, 3, 0, -2, -1, 0, 3, 5, 6] },
  { id: 'pop', name: 'Поп', gains: [-2, -1, 0, 2, 4, 4, 2, 0, -1, -2] },
  { id: 'jazz', name: 'Джаз', gains: [4, 3, 1, 2, -2, -2, 0, 2, 3, 4] },
  { id: 'classical', name: 'Классическая музыка', gains: [5, 4, 3, 2, -2, -2, 0, 3, 4, 5] },
  { id: 'acoustic', name: 'Акустика', gains: [5, 4, 3, 1, 2, 2, 3, 4, 4, 3] },
  { id: 'electronic', name: 'Электроника', gains: [5, 4, 1, 0, -2, 2, 1, 2, 4, 5] },
  { id: 'bass-boost', name: 'Больше баса', gains: [8, 6, 4, 2, 0, -1, -2, -3, -3, -4] },
  { id: 'bass-treble', name: 'Бас + Высокие', gains: [7, 5, 3, 1, -2, -2, 1, 3, 5, 7] },
  { id: 'vocals', name: 'Вокал', gains: [-3, -2, -1, 1, 3, 3, 2, 1, 0, -1] },
  { id: 'soft-rock', name: 'Мягкий рок', gains: [3, 2, 1, 0, -1, -1, 0, 1, 2, 3] },
  { id: 'dance-club', name: 'Танцевальная', gains: [6, 5, 4, 2, 0, 0, 2, 4, 5, 6] },
  { id: 'hip-hop', name: 'Хип-хоп', gains: [7, 5, 2, 1, -1, -1, 1, 2, 3, 4] },
  { id: 'indie', name: 'Инди', gains: [3, 2, 1, 0, 0, 0, 1, 2, 3, 2] },
  { id: 'lounge', name: 'Лаунж', gains: [2, 1, 0, -1, -2, -2, -1, 0, 1, 2] },
  { id: 'custom', name: 'Пользовательская', gains: [], disabled: true }
]

// Создаём Map для быстрого доступа к предустановкам
const presetsMap = new Map(EQUALIZER_PRESETS.map((preset) => [preset.id, preset.gains]))

// Инициализация полос эквалайзера
const bands = ref<EqualizerBand[]>(
  FREQUENCY_BANDS.map((band) => ({
    ...band,
    gain: 0
  }))
)

const selectedPreset = ref('default')

// Флаг инициализации для предотвращения сохранения при первой загрузке
const isInitialized = ref(false)

// Форматированное значение для отображения
const formatGainValue = (gain: number): string => {
  return `${gain > 0 ? '+' : ''}${gain} дБ`
}

// Применение предустановки
function applyPreset(presetId: string): void {
  const presetGains = presetsMap.get(presetId)

  if (presetGains && presetGains.length > 0) {
    bands.value.forEach((band, index) => {
      band.gain = presetGains[index]
    })
    selectedPreset.value = presetId
    emitUpdates()
  }
}

// Сброс к настройкам по умолчанию
function resetEqualizer(): void {
  applyPreset('default')
}

// Отправка обновлений родителю
function emitUpdates(): void {
  emit('update:bands', bands.value)
  emit('update:preset', selectedPreset.value)
}

// Проверка, соответствует ли текущая настройка какой-либо предустановке
function detectCurrentPreset(): void {
  const currentGains = bands.value.map((b) => b.gain)

  // Ищем совпадение с предустановкой
  const matchedPreset = EQUALIZER_PRESETS.find(
    (preset) =>
      preset.gains.length > 0 && preset.gains.every((gain, index) => gain === currentGains[index])
  )

  selectedPreset.value = matchedPreset ? matchedPreset.id : 'custom'
  emit('update:preset', selectedPreset.value)
}

// Функция для загрузки настроек из props
function loadSettingsFromProps(): void {
  if (props.initialBands && props.initialBands.length === bands.value.length) {
    bands.value = props.initialBands.map((band) => ({ ...band }))
  }
  if (props.initialPreset) {
    selectedPreset.value = props.initialPreset
  }
}

// Инициализация при монтировании
onMounted(() => {
  loadSettingsFromProps()

  // Активируем отслеживание изменений после инициализации
  setTimeout(() => {
    isInitialized.value = true
  }, 0)
})

// Следим за изменениями props (когда компонент уже смонтирован)
watch(
  () => [props.initialBands, props.initialPreset],
  () => {
    // Временно выключаем isInitialized для обновления из props
    const wasInitialized = isInitialized.value
    isInitialized.value = false

    loadSettingsFromProps()

    // Восстанавливаем флаг через микротаск
    setTimeout(() => {
      isInitialized.value = wasInitialized
    }, 0)
  },
  { deep: true }
)

// Отслеживаем изменения полос и отправляем обновления
watch(
  bands,
  () => {
    // Не сохраняем при первой инициализации
    if (!isInitialized.value) return

    // Сначала определяем текущий пресет
    detectCurrentPreset()

    // Затем отправляем обновления (bands уже изменились, preset обновлен в detectCurrentPreset)
    emit('update:bands', bands.value)
  },
  { deep: true }
)
</script>

<template>
  <Sidebar title="Equalizer">
    <div class="equalizer">
      <div class="equalizer-presets">
        <label class="preset-label">Presets:</label>
        <select
          v-model="selectedPreset"
          class="preset-select"
          @change="applyPreset(selectedPreset)"
        >
          <option
            v-for="preset in EQUALIZER_PRESETS"
            :key="preset.id"
            :value="preset.id"
            :disabled="preset.disabled"
          >
            {{ preset.name }}
          </option>
        </select>
      </div>

      <div class="equalizer-bands">
        <div v-for="band in bands" :key="band.frequency" class="equalizer-band">
          <div class="band-value">{{ formatGainValue(band.gain) }}</div>
          <input
            v-model.number="band.gain"
            type="range"
            min="-12"
            max="12"
            step="0.5"
            class="band-slider"
            orient="vertical"
            :aria-label="`Frequency ${band.label}`"
          />
          <div class="band-label">{{ band.label }}</div>
        </div>
      </div>
      <div class="equalizer-controls">
        <button class="reset-button" @click="resetEqualizer">
          <i class="fas fa-undo"></i>
          Reset
        </button>
      </div>
    </div>
  </Sidebar>
</template>

<style scoped>
.equalizer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
  user-select: none;
}

.equalizer-presets {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: var(--panel-muted-bg);
  border: 1px solid var(--main-border-color);
  border-radius: 12px;
}

.preset-label {
  color: var(--main-color);
  font-size: var(--main-font-size);
  font-weight: 600;
}

.preset-select {
  padding: 8px 12px;
  font-size: var(--main-font-size);
  border: 1px solid var(--main-color);
  border-radius: 5px;
  background-color: var(--main-bg-color);
  color: var(--main-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.preset-select:hover {
  background-color: var(--main-bg-color-secondary);
}

.preset-select:focus {
  outline: none;
  border-color: hsl(var(--active-color-btn), var(--color-lightness));
}

.equalizer-bands {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 15px 10px;
  background-color: var(--panel-muted-bg);
  border: 1px solid var(--main-border-color);
  border-radius: 12px;
  overflow-x: auto;
}

.equalizer-band {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 40px;
}

.band-value {
  color: var(--main-color);
  font-size: calc(var(--main-font-size) - 4px);
  font-weight: 600;
  min-height: 30px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.band-slider {
  appearance: slider-vertical;
  -webkit-appearance: slider-vertical;
  writing-mode: bt-lr;
  width: 8px;
  height: 150px;
  padding: 0;
  margin: 0;
  background: linear-gradient(to top, hsl(0, 70%, 50%), hsl(60, 70%, 50%), hsl(120, 70%, 50%));
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}

.band-slider::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--main-color);
  border: 2px solid var(--main-bg-color);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.band-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--main-color);
  border: 2px solid var(--main-bg-color);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.band-label {
  color: var(--main-color);
  font-size: calc(var(--main-font-size) - 4px);
  writing-mode: horizontal-tb;
  text-align: center;
  white-space: nowrap;
}

.equalizer-controls {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.reset-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: var(--panel-muted-bg);
  color: var(--main-color);
  border: 1px solid var(--main-border-color);
  border-radius: 10px;
  cursor: pointer;
  font-size: var(--main-font-size);
  width: auto;
  height: auto;
  transition: all 0.2s ease;
}

.reset-button:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 84%);
  border-color: color-mix(in srgb, var(--accent-color), transparent 56%);
  transform: translateY(-1px);
}

.reset-button i {
  font-size: calc(var(--main-font-size) - 2px);
}

@media screen and (max-width: 600px) {
  .equalizer-bands {
    gap: 4px;
    padding: 10px 5px;
  }

  .equalizer-band {
    min-width: 30px;
  }

  .band-slider {
    height: 120px;
    width: 6px;
  }

  .band-slider::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
  }

  .band-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
  }
}
</style>
