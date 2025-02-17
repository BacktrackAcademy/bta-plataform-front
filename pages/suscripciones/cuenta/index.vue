<script lang="ts" setup>
</script>

<script setup>
import { loadMercadoPago } from '@mercadopago/sdk-js'

definePageMeta({
  layout: 'custom',
  auth: true,
})

const cardNumber = ref('')
const cardHolderName = ref('')
const cardExpirationMonth = ref('')
const cardExpirationYear = ref('')
const securityCode = ref('')

async function submitPayment() {
  const mp = await loadMercadoPago()
  const cardToken = await mp.cards.createCardToken({
    card_number: cardNumber.value,
    cardholder: {
      name: cardHolderName.value,
    },
    expiration_month: cardExpirationMonth.value,
    expiration_year: cardExpirationYear.value,
    security_code: securityCode.value,
  })

  // Enviar el token al backend
  await useFetch('/api/save_card', {
    method: 'POST',
    body: { cardToken: cardToken.id, email: 'cliente@example.com' },
  })

  console.log('Tarjeta guardada:', cardToken.id)
}
</script>

<template>
  <section class="min-h-screen bg-bta-section">
    <div class="container mx-auto px-2 md:px-10 xl:px-20 w-full">
      <!-- Título -->
      <div class="w-full pt-7 pb-12">
        <h3 class="text-4xl font-semibold text-white font-oswald uppercase">
          Suscripciones
        </h3>
      </div>

      <!-- Formulario -->
      <div class="max-w-md mx-auto bg-bta-dark-blue p-6 rounded-lg shadow-lg">
        <h2 class="text-white font-oswald text-xl mb-4">
          Ingresa los datos de tu tarjeta
        </h2>

        <form class="space-y-4" @submit.prevent="submitPayment">
          <div>
            <label class="text-gray-muted font-inconsolata text-sm">Número de tarjeta</label>
            <input
              v-model="cardNumber"
              type="text"
              placeholder="•••• •••• •••• ••••"
              class="w-full p-2 text-white bg-bta-blue rounded-md border border-gray-600 focus:ring focus:ring-bta-pink"
            >
          </div>

          <div>
            <label class="text-gray-muted font-inconsolata text-sm">Nombre del titular</label>
            <input
              v-model="cardHolderName"
              type="text"
              placeholder="Nombre en la tarjeta"
              class="w-full p-2 text-white bg-bta-blue rounded-md border border-gray-600 focus:ring focus:ring-bta-pink"
            >
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-gray-muted font-inconsolata text-sm">Mes de vencimiento</label>
              <input
                v-model="cardExpirationMonth"
                type="text"
                placeholder="MM"
                class="w-full p-2 text-white bg-bta-blue rounded-md border border-gray-600 focus:ring focus:ring-bta-pink"
              >
            </div>

            <div>
              <label class="text-gray-muted font-inconsolata text-sm">Año de vencimiento</label>
              <input
                v-model="cardExpirationYear"
                type="text"
                placeholder="YYYY"
                class="w-full p-2 text-white bg-bta-blue rounded-md border border-gray-600 focus:ring focus:ring-bta-pink"
              >
            </div>
          </div>

          <div>
            <label class="text-gray-muted font-inconsolata text-sm">Código de seguridad (CVV)</label>
            <input
              v-model="securityCode"
              type="text"
              placeholder="•••"
              class="w-full p-2 text-white bg-bta-blue rounded-md border border-gray-600 focus:ring focus:ring-bta-pink"
            >
          </div>

          <!-- Botón -->
          <button
            type="submit"
            class="w-full py-2 bg-bta-pink hover:bg-bta-pink/90 text-white font-semibold rounded-md transition-all"
          >
            Guardar tarjeta
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
