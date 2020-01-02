<template>
    <section id="products" class="flex column c-ai c-jc">
        <div class="head">
            <h2>تعرفه ی اینترنت ققنوسی</h2>
            <p>تعرفه ی خدمات ، اینترنت ارزان و بصرفه و با سرعت فوق العاده برای مودم های ADSL </p>
        </div>
        <div class="internets flex wrap c-jc c-ai">
            <Internet v-for="(item, index) in internets" v-bind:key="index" v-bind:item="item"></Internet>
        </div>
        <vs-button color="primary" type="border" @click="more()">نمایش تعرفه های بیشتر</vs-button>
    </section>
</template>


<script>
import Internet from '../includes/Internet.vue';
export default {
  name: 'Tariff',
  components: {Internet},
  props: ['internets'],
  methods: {
      getMoney: (money='')=>{
          money = money.toString();
          return money.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      },
      getMonth: (count = 0)=>{
        switch (count) {
            case 1:
                return 'یک';
            case 3:
                return 'سه';
            case 6:
                return 'شش';
            case 12:
                return 'دوازده';
            default:
                break;
        }
      },
      more(){
          this.$router.push('/pricing');
      }
  },
}
</script>

<style scoped>
section{
    padding: 70px 0;
}
div.head{
    margin-bottom: 30px;
    text-align: center;
    width: 90%;
}
</style>
