<template>
  <div>
      <a href="#" class="btn btn-primary mb-4"  @click="$router.push({path: '/request'})">Добавить новые заявки</a>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Сообщение</th>
          <th scope="col">Серия и номер паспорта</th>
          <th scope="col">Согласие на обработку ПД</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(request, index) in requests" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{request.name}}</td>
          <td>{{request.surname}}</td>
          <td>{{request.msg}}</td>
          <td>{{request.passport}}</td>
          <td>{{request.check ? 'дано' : 'не дано'}}</td>
          <td><div>
              <a href="#" class="btn btn-primary mb-2">Одобрить</a>
              <a href="#" class="btn btn-danger" @click="removeItem(index)">Отказать</a>
              </div></td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
export default {
  data: function () {
    return {
      requests: null,
    };
  },

  mounted() {
      let request_data = localStorage.getItem('request_data');
      request_data = '[' + request_data + ']'; 
    //   console.log(request_data);
      request_data = JSON.parse(request_data);
      this.requests = request_data;
  },

  methods: {
      removeItem(index) {
          this.requests.splice(index, 1);

          let request_with_skobochki = JSON.stringify(this.requests);
            request_with_skobochki = request_with_skobochki.slice(1);
          let request_without_skobochki = request_with_skobochki.slice(0, -1);
          localStorage.setItem('request_data', request_without_skobochki);

      }
  }
};
</script>

<style>
</style>