<template>
  <q-page class="flex flex-center">
    <div>
    <div v-if="profile.id">
      <div class="q-title">{{ profile.first_name + ' ' +  profile.last_name }}</div>
      <p><img :src="profile.picture" alt="" ></p>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'Perfil',
  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    this.getProfile('facebook')
  },
  methods: {
    getProfile (network) {
      this.$hello(network).api('me')
        .then((res) => {
          console.log(res)
          this.profile = res
        })
    }
  }
}
</script>
