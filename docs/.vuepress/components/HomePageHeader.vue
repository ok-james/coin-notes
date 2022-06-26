<template>
  <div class="home-page-header">
    <img :src="$withBase('/images/bitcoin-img.svg')">
  </div>
</template>

<script>
export default {
  name: 'HomePageHeader'
}
</script>

<style>
.home-page-header {
  text-align: center;
}

.home-page-header img {
  width: 350px;
  margin: 20px 0;
}
</style>
