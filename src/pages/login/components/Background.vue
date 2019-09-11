<template>
  <div class="bg"></div>
</template>

<script>
  export default {
    name: "LoginBackground"
  }
</script>

<style scoped>
  @media screen and (min-width: 1024px) {
    .bg{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("../../../assets/images/wrapperbg2.jpeg");
      background-size: cover;
    }
  }
</style>
