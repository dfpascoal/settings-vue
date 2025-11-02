import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import 'primeicons/primeicons.css'

export default {
  install(app: App) {
    app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' })
    app.use(DialogService)
    app.use(ConfirmationService)
    app.use(ToastService)
  }
}
