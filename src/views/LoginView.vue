<template>
    <div class="auth__container">
        <form>
            <img src="@/assets/img/logo.png" alt="Hotdogson" class="auth__logo" />
            <div class="field">
                <label for="" class="label">E-mail</label>
                <input type="email" class="input" />
            </div>

            <div class="field">
                <label for="" class="label">Senha</label>
                <input type="password" class="input" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    beforeCreate: function(){
        document.body.className = 'auth';
    }
}
</script>

<style>
body.auth{
    background-image: url(@/assets/img/header-bg.png);
    background-size: contain;
}
.auth__container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.auth__logo{
    max-width: 300px;
}

form{
    --text-color: #d6d6d6;
    max-width: 500px;

    position: absolute;
    top: 10vh;

    background-color: #333;
    padding: 3rem;
}

.label{
    color: var(--text-color);
    font-size: 1.2rem;
}

.field{
    width: 100%;
    position: relative;
    border-bottom: 2px dashed var(--text-color);
    margin: 4rem auto 1rem;
}

.input{
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    font-size: 1.2rem;
    font-weight: bold;
}

.input:valid{
    color: rgb(36, 129, 20);
}
.input:invalid{
    color: rgb(205, 41, 8);
}

.field::after{
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 500ms ease;
    top: 2px;
    
    background: rgb(255, 168, 5);
}
.field:focus-within{
    border-color: transparent;
}
.field:focus-within::after{
    transform: scaleX(1);
}

.label{
    position: absolute;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 400ms;
}
.field:focus-within .label{
    transform: scale(0.8) translateY(-4rem);
}

</style>