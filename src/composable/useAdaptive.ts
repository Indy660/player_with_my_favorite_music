import { ref, onMounted, onUnmounted } from 'vue'

const widthWindow = ref(0)
export function useAdaptive() {
  function handleResize() {
    widthWindow.value = window.innerWidth
    console.log('window.innerWidth', window.innerWidth);
  }

  handleResize()

  onMounted(() => window.addEventListener('resize', handleResize))
  onUnmounted(() => window.removeEventListener('resize', handleResize))

  return { widthWindow }
}
