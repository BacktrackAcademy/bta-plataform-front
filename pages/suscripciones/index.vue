<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  auth: true,
})

interface Subscription {
  id: number
  name: string
  price: number
  quantity: number
  opportunities: number
  vouchers: number
  recommended: number
}

const { data: subscriptions, status: subscriptionStatus } = useAPI<Subscription[]>('/subscriptions')
</script>

<template>
  <section class="min-h-screen bg-bta-section py-12">
    <div class="container mx-auto px-4 md:px-10 xl:px-20">
      <!-- Título -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-semibold text-white font-oswald uppercase">
          Elige tu plan
        </h2>
        <p class="text-gray-muted text-lg font-inconsolata mt-2">
          Accede a los mejores cursos de seguridad informática con el plan que mejor se adapte a ti.
        </p>
      </div>

      <!-- Grid de Planes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(subscription, i) in subscriptions"
          :key="i"
          class="bg-bta-dark-blue border p-6 rounded-lg shadow-lg flex flex-col items-center"
          :class="{
            'border-bta-pink': subscription.recommended === 1,
            'border-gray-600': subscription.recommended === 0,
          }"
        >
          <!-- Plan Name -->
          <h3
            class="text-2xl font-semibold font-oswald"
            :class="subscription.recommended === 1 ? 'text-bta-pink' : 'text-white'"
          >
            {{ subscription.name }}
          </h3>
          <p class="text-gray-muted text-lg font-inconsolata">
            {{ subscription.quantity }} {{ subscription.quantity > 1 ? 'meses' : 'mes' }} de acceso
          </p>
          <span
            class="text-4xl font-bold mt-4 font-oswald"
            :class="subscription.recommended === 1 ? 'text-bta-pink' : 'text-white'"
          >
            {{ subscription.price }} USD
          </span>

          <!-- Beneficios -->
          <ul class="mt-6 space-y-3 text-white font-inconsolata text-sm">
            <li class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" /> Acceso a todos los cursos
            </li>
            <li class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" />
              {{ subscription.opportunities }} oportunidades de examen
            </li>

            <!-- Especialidades (Solo si tiene vouchers) -->
            <li v-if="subscription.vouchers > 0" class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" />
              {{ subscription.vouchers }} especialidad{{ subscription.vouchers > 1 ? 'es' : '' }} a elección
            </li>
            <li v-else class="flex items-center text-gray-muted">
              <Icon name="lucide:x" class="text-gray-muted mr-2" /> Sin acceso a especialidades
            </li>

            <!-- Vouchers -->
            <li v-if="subscription.vouchers > 0" class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" />
              {{ subscription.vouchers }} voucher{{ subscription.vouchers > 1 ? 's' : '' }} de especialidad
            </li>
            <li v-else class="flex items-center text-gray-muted">
              <Icon name="lucide:x" class="text-gray-muted mr-2" /> Sin vouchers de especialidad
            </li>

            <li class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" /> Certificados de aprobación
            </li>

            <!-- Acompañamiento -->
            <li v-if="subscription.recommended === 1 || subscription.recommended === 0" class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" /> Estudio con acompañamiento
            </li>
            <li v-else class="flex items-center text-gray-muted">
              <Icon name="lucide:x" class="text-gray-muted mr-2" /> Sin acompañamiento
            </li>

            <!-- Comunidad Discord -->
            <li v-if="subscription.recommended === 1 || subscription.recommended === 0" class="flex items-center">
              <Icon name="lucide:check" class="text-bta-pink mr-2" /> Acceso a comunidad en Discord
            </li>
            <li v-else class="flex items-center text-gray-muted">
              <Icon name="lucide:x" class="text-gray-muted mr-2" /> Sin acceso a Discord
            </li>
          </ul>

          <!-- Botón -->
          <NuxtLink to="/suscripciones/tarjeta" class="block w-full">
            <button
              class="mt-6 w-full py-3 text-white font-semibold rounded-lg transition-all font-inconsolata"
              :class="{
                'bg-bta-pink hover:bg-bta-pink/90': subscription.recommended === 1,
                'bg-bta-blue hover:bg-bta-blue/90': subscription.recommended === 0,
              }"
            >
              Suscribirme
            </button>
          </NuxtLink>
        </div>
      </div>

      <!-- Nota Importante -->
      <p class="text-center text-sm text-gray-muted mt-8 font-inconsolata">
        IMPORTANTE: Si tu pago recurrente está activado, las suscripciones no tienen derecho a reembolso.
        Cualquier duda, contáctanos en <span class="text-bta-pink">contacto@backtrackacademy.com</span>.
      </p>
    </div>
  </section>
</template>
