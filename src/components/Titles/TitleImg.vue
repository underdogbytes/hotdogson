<template>
    <div class="img__title">
        <img :src="imgPath" />
    </div>
</template>

<script>
export default {
    props: ['imgPath']
}
</script>

<style>
.img__title{
    display: grid;
    justify-content: center;
    margin: 2rem auto;
}
.img__title img{
    height: 5rem;
    width: 100%;
}
</style>