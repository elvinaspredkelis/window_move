import { globalShortcut } from '@tauri-apps/api'
import { getAll, getCurrent, LogicalSize } from '@tauri-apps/api/window'
import { createApp } from 'vue'
import App from './App.vue'

globalShortcut.register('CommandOrControl+E', async () => {
  const window = getAll().find(w => w.label === 'main')

  if (await window.isVisible()) {
    await window.hide()
    window.setSize(new LogicalSize(800, 300))
  } else {
    await window.show()
  }
})
createApp(App).mount('#app')
