<template>
    <div>
        <div class="delivery__main">
            <div class="delivery__container">
                <img src="@/assets/img/delivery-man.png" alt="" class="delivery__img">
                <div class="delivery__content">
                    <img src="@/assets/img/delivery.svg" alt="" class="delivery__title">
                    <p class="delivery__text">Ligue ou mande um whats para o número</p>
                    <p class="delivery__text delivery__number">(xx) xxxx-xxxx</p>
                </div>
            </div>
        </div>
        <div class="delivery__copyright">
            <div class="delivery__container">
                <p>Hotdogson - {{ year }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        year(){
            let today = new Date()
            return today.getFullYear()
        }
    }
}
</script>

<style>
.delivery__main {
    height: 20rem;
    margin: 15rem 0 0 0;
    background-color: #F99C73;
    color: #181818;
}
.delivery__container {
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
}
.delivery__content {
    margin: auto 0;
    text-align: center;
    max-width: 300px;
}
.delivery__title {
    height: 5rem;
    width: 100%;
}
.delivery__number {
    font-weight: bolder;
}
.delivery__text{
    background-color: white;
    margin: auto;
    width: fit-content;
}
.delivery__img {
    position: absolute;
    bottom: 0;
    width: 100%;
}
.delivery__copyright {
    padding: 1rem 3rem;
    height: 3rem;
    background-color: #FF8047;
    color: #181818;
    text-align: end;
}
@media screen and (min-width: 1024px) {
    .delivery__container {
        padding: 0 10rem 0 0;
        justify-content: end;
    }
    .delivery__img {
        position: absolute;
        bottom: 0;
        left: 10rem;
        max-width: 400px;
        height: auto;
    }
}
</style>