<template>
    <nav>
        <button class="navbar__mobile-toggle" aria-controls="primary-navigation" aria-expanded="false"></button>
        <ul class="navbar" id="primary-navigation" data-visible="false">
            <li class="navbar__item"><small>Escolha seu pedido:</small></li>
            <li class="navbar__item">Cardárpio</li>
            <li class="navbar__item">Sobre nós</li>
            <li class="navbar__item">Idiomas</li>
            <li class="navbar__item">Contato</li>
            <li class="navbar__item"><small><i>Bon appetit!</i></small></li>
        </ul>
    </nav>
</template>

<script>
export default {
    mounted(){
        const primaryNav = document.querySelector('.navbar');
        const navToggle = document.querySelector('.navbar__mobile-toggle');

        navToggle.addEventListener('click', () => {
            console.log('clikckkkk')
            const visibility = primaryNav.getAttribute('data-visible')
            visibility === 'false' ? (primaryNav.setAttribute('data-visible', true), navToggle.setAttribute('aria-expanded', true)) : (primaryNav.setAttribute('data-visible', false), navToggle.setAttribute('aria-expanded', false))
        })
    }
}
</script>

<style scoped>
.navbar{ display: none; }
.navbar[data-visible=true]{
    display: block;
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;

    padding: min(15vh,10rem) 2em;

    color: white;
    background-color: hsl(0, 100%, 0%, 0.8);
}
.navbar__item {
    width: 100%;
    margin: 1em 1em 0 0;
    font: 600 clamp(1rem, 5vh, 1.1rem) var(--font-family);
    text-align: center;
    list-style: none;
}

/* mobile menu icon */
.navbar__mobile-toggle{
    margin: 1em 1em 0 0;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 1001;

    width: 30px;
    height: 30px;

    border: none;
    background-image: url(../assets/icons/menu-burger--black.svg);
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
}
.navbar__mobile-toggle[aria-expanded=true]{
    background-image: url(../assets/icons/menu-burger--white.svg);
}

/* desktop screens */
@media screen and (min-width: 1000px) {
    .navbar__mobile-toggle{ display: none; }
    .navbar {
        display: flex;

        max-width: 800px;

        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .navbar__item {
        width: 200px;
    }
    .navbar__item:hover {
        color: white;
        background-color: hsl(0, 100%, 0%, 0.5);
    }
}
</style>