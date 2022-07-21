<template>
    <div class="menu-filter">
        <span @click="selectFilter(filter.category)" class="menu-filter__btn" v-for="filter in filters" :key="filter">{{ filter.label }}</span>
    </div>
</template>

<script>
export default {
    props: ['foodCategory'],
    data() {
        return {
            filters: [
                {
                    label: 'Simples',
                    category: 'simples'
                },
                {
                    label: 'Especiais',
                    category: 'especiais'
                },
                {
                    label: 'Vegetarianos',
                    category: 'vegetarianos'
                },
                {
                    label: 'Combos',
                    category: 'combos'
                },
                {
                    label: 'Todos',
                    category: 'todos'
                },
            ]
        }
    },
    methods: {
        selectFilter(foodCategory){
            // console.log('children', foodCategory)
            this.$emit('selectFilter', foodCategory)
        }
    }
}
</script>

<style scoped>
.menu-filter {
    max-width: 800px;
    margin: 0 auto 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.menu-filter__btn {
    padding: 0.7rem 1rem;
    margin: 0.5em;

    text-align: center;
    font-size: 1rem;
    color: #4D4D4D;

    border-radius: 0.2rem;
    background-color: #FFC1A6;
}
</style>