<template>
  <div>
    <login-background></login-background>
    <login-form></login-form>
  </div>
</template>

<script>
  import LoginBackground from './components/Background'
  import LoginForm from './components/Form'

  export default {
    name: "Login",
    components: {
      LoginBackground,
      LoginForm
    }
  }
</script>

<style scoped>

</style>
