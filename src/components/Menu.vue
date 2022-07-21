<template>
    <div>
        <TitleImg :imgPath="title" />

        <FilterMenu v-on:selectFilter="filterFoodByCategory($event)" />
        <div class="menu__items">
            <div class="menu__item" v-for="food in menuFoodFiltered" :key="food">
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
import TitleImg from './Titles/TitleImg.vue'
import FilterMenu from './FilterMenu.vue'
import titleSrc from '@/assets/img/menu.svg'

export default {
    components: {TitleImg, FilterMenu},
    data(){
        return{
            title: titleSrc,
            filters: ['Simples', 'Especiais', 'Vegetarianos', 'Combos', 'Todos'],
            menuFood: [
                {
                    thumb: 'src/assets/img/food/salsicha-da-casa.svg',
                    name: 'Salsicha da Casa',
                    description: 'Pão, salsicha, maionese especial, mostarda, catchup, pepino japonês, tomate cereja e cebola',
                    price: 'R$ 10,00',
                    category: 'simples'
                },
                {
                    thumb: 'src/assets/img/food/bidu-bidu.svg',
                    name: 'Bidu Bidu',
                    description: 'Pão, salsicha veggie, maionese especial, mostarda, catchup, vinagrete',
                    price: 'R$ 10,00',
                    category: 'vegetarianos'
                },
                {
                    thumb: 'src/assets/img/food/hotdogson.svg',
                    name: 'Hotdogson Combo',
                    description: 'O clássico com 250g de batata frita e aquela coquinha gelada de 350ml!',
                    price: 'R$ 10,00',
                    category: 'combos'
                },
                {
                    thumb: 'src/assets/img/food/monstro-da-dungeon.svg',
                    name: 'Monstro da Dungeon',
                    description: 'Pãozão com salsicha, maionese especial, bacon, pepino, muito queijo e cebola roxa',
                    price: 'R$ 10,00',
                    category: 'especiais'
                }
            ],
            menuFoodFiltered: []
        }
    },
    mounted(){
        this.menuFoodFiltered = this.menuFood
    },
    methods: {
        filterFoodByCategory(foodCategory){
            // console.log('father', foodCategory)
            let tempList = []

            if(foodCategory == 'todos'){
                return this.menuFoodFiltered = this.menuFood
            }

            this.menuFood.forEach(element => {

                if(element.category  == foodCategory ){
                    tempList.push(element)
                }

            });

            this.menuFoodFiltered = tempList
        }
    }
}
</script>

<style>
.menu__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
}
.menu__item {
    display: block;
    max-width: 300px;
    margin: auto;
}
.menu__item__img {
    max-width: 270px;
    max-height: 270px;
}
.menu__item__text-block {
    margin: 1rem;
    display: grid;
}
.menu__item__name {
    font-size: 1.5rem;
    font-weight: 700;
}
.menu__item__description {
    font-weight: lighter;
}
.menu__item__btn {
    padding: 0.7rem 1rem;

    text-align: center;
    font-size: 1rem;
    color: #4D4D4D;

    border: none;
    border-radius: 0.5em;
    background-color: #FFC1A6;
}
@media screen and (min-width: 1024px) {
    .menu__items {
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }
    .menu__item {
        display: flex;
        max-width: 560px;
        margin: 1rem auto;
    }
}
</style>