<template>
    <div>
        <TitleImg :imgPath="title" />

        <div class="menu__filter">
            <span class="menu__filter-btn" v-for="filter in filters" :key="filter">{{ filter }}</span>
        </div>

        <div class="menu__items">
            <div class="menu__item" v-for="food in menuFood" :key="food">
                <div>
                    <img :src="food.thumb" alt="" class="menu__item__img">
                </div>
                <div class="menu__item__text-block">
                    <p class="menu__item__name">{{ food.name }}</p>
                    <p>{{ food.description }}</p>
                    <p>{{ food.price }}</p>
                    <button class="menu__item__btn">Adicionar no Carrinho</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleImg from './TitleImg.vue'
import titleSrc from '@/assets/img/menu.svg'

export default {
    components: {TitleImg},
    data(){
        return{
            title: titleSrc,
            filters: ['Simples', 'Especiais', 'Vegetarianos', 'Todos'],
            menuFood: [
                {
                    thumb: 'src/assets/img/food/salsicha-da-casa.svg',
                    name: 'Salsicha da Casa',
                    description: 'Pão, salsicha, maionese especial, mostarda, catchup, pepino japonês, tomate cereja e cebola',
                    price: 'R$ 10,00'
                },
                {
                    thumb: 'src/assets/img/food/bidu-bidu.svg',
                    name: 'Bidu Bidu',
                    description: 'Pão, salsicha, maionese especial, mostarda, catchup, vinagrete',
                    price: 'R$ 10,00'
                },
                {
                    thumb: 'src/assets/img/food/hotdogson.svg',
                    name: 'Hotdogson Combo',
                    description: 'O clássico com 250g de batata frita e aquela coquinha gelada de 350ml!',
                    price: 'R$ 10,00'
                },
                {
                    thumb: 'src/assets/img/food/monstro-da-dungeon.svg',
                    name: 'Monstro da Dungeon',
                    description: 'Pãozão com salsicha, maionese especial, bacon, pepino, muito queijo e cebola roxa',
                    price: 'R$ 10,00'
                }
            ]
        }
    }
}
</script>

<style>
.menu__filter{
    max-width: 600px;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.menu__filter-btn{
    padding: 0.7rem 1rem;
    margin: 0.5em;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.2rem;
    background-color: #FFC1A6;
    color: #4D4D4D;
}

.menu__items{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
}
.menu__item{
    display: block;
    max-width: 300px;
    margin: 1rem auto;
}
.menu__item__img{
    max-width: 270px;
    max-height: 270px;
}
.menu__item__text-block{
    margin: 1rem;
}
.menu__item__name{
    font-size: 1.5rem;
    font-weight: 700;
}
.menu__item__description{
    font-weight: lighter;
}
.menu__item__btn{
    padding: 0.7rem 1rem;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.2rem;
    background-color: #FFC1A6;
    color: #4D4D4D;
}
@media screen and (min-width: 1024px) {
    .menu__item{
        display: flex;
        max-width: 560px;
        margin: 1rem auto;
    }
}
</style>