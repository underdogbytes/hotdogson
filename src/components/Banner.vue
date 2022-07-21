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

  display: grid;

  background-image: url(@/assets/img/header-bg.png);
  background-size: cover;
  background-position: right;
}
.banner__content{
  max-width: 1280px;
  margin: 5% 0;
  left: 0;
  display: flex;
  justify-content: center;
}
.banner__logo{
  height: clamp(8em, 10vw, 20em);
  margin: 60% 0 0 0;
}
@media screen and (min-width: 1000px) {
  .banner{ background-position: top; }
  .banner__logo{ margin: 6em 0 0 0; }
}
</style>