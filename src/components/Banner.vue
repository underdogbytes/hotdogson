<template>
  <div class="banner">
    <div class="banner__content">
      <img class="banner__logo" src="@/assets/img/logo.svg" alt="hotdogson logo" />
    </div>
  </div>
</template>
<style>
.banner{
  min-height: 80vh;
  max-height: 100vh;

  background-image: url(@/assets/img/header-bg.png);
  background-size: cover;
  background-position: top;
}
.banner__content{
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: center;
}
.banner__logo{
  height: 6rem;
  margin: 4em 0 0 0;
}
</style>