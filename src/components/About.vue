<template>
  <div>
    <div class="card text-center mt-4">
      <div class="card-header">Предложение 2020 года!</div>
      <div class="card-body">
        <h2 class="card-title">Получи субсидию от государства!</h2>
        <p class="card-text">
          Поддерживаем малый бизнес, предпринимателей и физических лиц. При
          поддержке ИРТех
        </p>
        <a @click.prevent="$router.push({path: '/request'});" href="#" class="btn btn-primary">Получить субсидию</a>
      </div>
    </div>

    <div class="cards mt-5">
      <div class="card" style="width: 18rem">
        <img src="../assets/2.png" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">Субсидия на <br> оплату ЖКХ</h5>
          <p class="card-text">
            Поможем вернуть Вам расходы на ЖКХ
          </p>
        </div>
        
        <div class="card-body" @click.prevent="$router.push({path: '/request'});">
          <a href="#" class="btn btn-primary">Получить субсидию</a>
        </div>
      </div>
        <div class="card" style="width: 18rem">
        <img src="../assets/3.png" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">Субсидия для малоимущих</h5>
          <p class="card-text">
            Купим Вам хлеб абсолютно бесплатно!
          </p>
        </div>
        <div class="card-body" @click.prevent="$router.push({path: '/request'});">
          <a href="#" class="btn btn-primary">Получить субсидию</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="../assets/disinfection.png" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">Субсидия на дезинфекцию</h5>
          <p class="card-text">
            Получите средства дезинфекции (спирт технический)
          </p>
        </div>
        <div class="card-body" @click.prevent="$router.push({path: '/request'});">
          <a href="#" class="btn btn-primary">Получить субсидию</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .cards {
        display: flex;
        justify-content: center;
        grid-gap: 40px;
    }
</style>