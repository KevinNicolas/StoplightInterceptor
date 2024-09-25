<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getStorageConfig, setStorageConfig } from "@/utils/chrome/storage"

  enum FieldsIds {
    webRequestListenerEndpoint = 'web-request-listener-endpoint'
  }

  const webRequestListenerEndpoint = ref<string>('');
  
  onMounted(async () => {
    const config = await getStorageConfig();
    if (config.webRequestListenerEndpoint) webRequestListenerEndpoint.value = config.webRequestListenerEndpoint
  })

  async function setWebRequestListenerEndpoint(event: any) {
    console.info('Set web request listener')
    const newListenerEndpoint = event.target['web-request-listener-endpoint'].value;
    await setStorageConfig({ webRequestListenerEndpoint: newListenerEndpoint });
  }
</script>

<template>
  <div class="options">
    <h3>Stoplight interceptor</h3>
    <form class="options__web-request-listener-endpoint" @submit.prevent="setWebRequestListenerEndpoint">
      <span class="title">Web request listener endpoint:</span>
      <br><br>
      <label :for="FieldsIds.webRequestListenerEndpoint">https://stoplight.io/</label>
      <input type="text" :name="FieldsIds.webRequestListenerEndpoint" v-model="webRequestListenerEndpoint">
      <br><br>
      <button type="submit" class="primary">Guardar</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/base.scss";

  .options {
    padding: 1rem;
    max-width: 25rem;
    min-height: 20rem;

    h3 {
      font-size: 1.25rem;
      margin: 1rem 0;
    }

    &__web-request-listener-endpoint {
      .title {
        font-weight: 500;
      }

      label {
        font-weight: 500;
        margin-right: .5ch;
      }
    }
  }
</style>