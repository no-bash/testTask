<template>
  <div>
    <div class="card mx-auto mb-4 rounded-0" style="max-width: 35rem">
      <div class="card-body position-relative">
        <h2>Форма заявки на субсидию</h2>
        <!-- Форма обратной связи -->
        <form
          id="feedbackForm"
          @submit="callback"
        >
          <div class="form-row">
            <div class="col-sm-6">
              <!-- Имя пользователя -->
              <div class="form-group">
                <label for="name" class="control-label">Имя</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="form-control"
                  value=""
                  placeholder="Имя"
                  minlength="2"
                  maxlength="30"
                  required="required"
                  v-model="request.name"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col-sm-6">
              <!-- Email пользователя -->
              <div class="form-group">
                <label for="email" class="control-label">Фамилия</label>
                <input
                  id="surname"
                  type="text"
                  name="surname"
                  required="required"
                  class="form-control"
                  value=""
                  placeholder="Фамилия"
                  v-model="request.surname"

                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>
          <!-- Сообщение пользователя -->
          <div class="form-group">
            <label for="message" class="control-label"
              >Сообщение (не менее 20 символов)</label
            >
            <textarea
              id="message"
              name="message"
              class="form-control"
              rows="3"
              placeholder="Сообщение (не менее 20 символов)"
              minlength="20"
              maxlength="500"
              required="required"
                  v-model="request.msg"

            ></textarea>
            <div class="invalid-feedback"></div>
          </div>

          <!-- Паспортные данные -->
          <div class="form-group">
            <label for="message" class="control-label"
              >Серия и номер паспорта</label
            >
            <input
              id="passport"
              type="text"
              name="passport"
              required="required"
              class="form-control"
              value=""
              placeholder="3617 890789"
                  v-model="request.passport"

            />
            <div class="invalid-feedback"></div>
          </div>

          <!-- Пользовательское солашение -->
          <div class="form-group agreement">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                name="agree"
                class="custom-control-input"
                id="customCheck"
                  v-model="request.pd"
                  required

              />
              <label class="custom-control-label" for="customCheck"
                >Нажимая кнопку, я принимаю условия
                <a href="#">Пользовательского соглашения</a> и даю своё согласие
                на обработку моих персональных данных, в соответствии с
                Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных
                данных».</label
              >
            </div>
          </div>
      
          <!-- Кнопка для отправки формы -->
          <div class="text-right submit">
            <button
              type="submit"
              class="btn btn-primary position-relative"
            >
              Отправить заявку
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import IMask from "imask";

export default {
  mounted() {
    let element = document.getElementById("passport");
    let maskOptions = {
        mask: '0000 000000'
    };
    IMask(element, maskOptions);
  },

  data: function () {
    return {
      request: {
        name: null,
        surname: null,
        msg: null,
        passport: null,
        pd: null,
      },
    };
  },

  methods: {
    callback() {
      let requst_data_old = localStorage.getItem('request_data');

      let request_data_new_stringlify =  requst_data_old + ( requst_data_old ? ', ' : ' ') + JSON.stringify(this.request);

      localStorage.setItem('request_data', request_data_new_stringlify);

      this.$router.push({path: '/admin'});
    }
  }

};
</script>

<style>
</style>