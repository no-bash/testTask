<template>
  <div class="mb-5">
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#" @click="$router.push({path: '/'})">Субсидия.ру</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav  class="ml-auto">
                <b-nav-item href="#" @click="$router.push({path: '/'})">Главная</b-nav-item>
                <b-nav-item  href="#" @click="$router.push({path: '/login'})">Авторизация</b-nav-item>
                <b-nav-item  href="#" @click="$router.push({path: '/register'})">Регистрация</b-nav-item>
                <b-nav-item  href="#" @click="$router.push({path: '/admin'})">Админка</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
    /* .navbar.bg-primary {
        background-color: #000 !important;
    } */
</style>