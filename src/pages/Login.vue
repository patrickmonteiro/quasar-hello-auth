<template>
    <q-page  class="docs-input row justify-center">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xl dark">
          <div class="text-center" style="color:white">
            <img src="statics/quasar-logo.png" width="130em" />
            <p class="q-display-1 text-weight-bolder q-pt-lg">Quasar + Hello.js</p>
            <p class="q-title text-weight-bold q-ma-none">Login com redes sociais</p>
          </div>
          <div class="q-mt-xl">
            <q-btn
              color="primary" glossy push class="full-width"
              icon="fab fa-facebook-f" label="Entrar com facebook"
              size="md" @click="auth('facebook')" >
            </q-btn>
          </div>
       </div>
    </q-page>
</template>,

<script>
export default {
  name: 'Login',
  methods: {
    auth (network) {
      this.$hello(network).login()
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>
.dark{
  background: #1817309a;
}
</style>
