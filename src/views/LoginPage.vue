<template>
  <form method="post" action="#" autocomplete="off">
    <div class="form-group">
      <label for="email">Email адрес</label>
      <input
        name="email"
        type="email"
        class="form-control"
        id="email"
        placeholder="Введите email"
        v-model="user.email" required
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        class="form-control"
        id="password"
        placeholder="Введите пароль"
           v-model="user.password" required
      />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="save"    v-model="user.check" />
      <label name="save" class="form-check-label" for="save"
        >запомнить меня</label
      >
    </div>
    <button type="submit" class="btn btn-primary">Войти</button>
  </form>
</template>

<script>
export default {
  data: function () {
  return {
    user: {
      email: null,
      password: null,
      check: null
    }
  }
}
};
</script>

<style>
</style>