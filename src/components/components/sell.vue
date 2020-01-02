<template>
  <section class="flex wrap c-ai c-jc">
      <div class="content flex column">
        <h2>فروش انواع مودم ADSL</h2>
        <p>اگر دنبال یک مودم مناسب برای منزل یا محل کار خود نیاز دارید که هم ارزان و هم قوی و سریع باشد و امنیت لازمه را داشته باشد؛ ما آن را در خدمت شما قرار میدهیم. برای اطلاعات بیشتر و نحوه ی فروش با ما تماس بگیرید.</p>
        <vs-button color="primary" type="filled">تماس با ما</vs-button>
      </div>
  </section>
</template>


<script>

export default {
  name: 'Sell',
}
</script>

<style scoped>
section{
    position: relative;
    background-color: #fafbfc;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: 80px 0;
    text-align: center;
}
div.content{
  width: 60%;
}
button{
  margin: 40px auto 0 auto;
  width: 140px;
}
@media only screen and (max-width: 992px) {
  div.content{
    width: 80%;
  }
}
</style>
