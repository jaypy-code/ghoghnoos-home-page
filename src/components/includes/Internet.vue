<template>
            <div class="internet">
                <div class="head">
                    <div class="name">{{item['name']}}</div>
                    <div class="price"><b>{{getMoney(item['price'])}}</b> تومان</div>
                </div>
                <div class="list flex nowrap c-jc">
                    <div class="flex column">
                        <div class="item">سرعت</div>
                        <div class="item">زمان</div>
                        <div class="item">حجم داخلی</div>
                        <div class="item">حجم بین الملل</div>
                        <div class="item" v-if="item['each'] != -1">حجم ماهانه</div>
                    </div>
                    <div class="flex column">
                        <div class="item en">{{item['speed']}} MB</div>
                        <div class="item">{{getMonth(item['time'])}} ماهه</div>
                        <div class="item en">{{item['volume']['in']}} GB</div>
                        <div class="item en">{{item['volume']['out']}} GB</div>
                        <div class="item" v-if="item['each'] != -1">{{item['each']}}</div>
                    </div>
                </div>
            </div>
</template>


<script>
export default {
  name: 'Internet',
  props: ['item'],
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
      }
  },
}
</script>

<style scoped>
div.internet{
    border: 1px solid #eaeaea;
    border-radius: 0.75rem;
    width: 250px;
    margin: 1.25rem;
}
div.internet div.head{
    text-align: center;
    width: 100%;
    padding: 0.75rem 0;
    margin-bottom: 0;
    background-color: #fafbfc;
}
div.internet div.head div.name{
    margin-bottom: 10px;
    font-size: 1.1rem;
}
div.internet div.list{
    padding: 1rem 0;
}
div.internet div.list div.column:first-child{
    text-align: left;
    margin-left: 30px;
    margin-right: -30px;
}
div.internet div.list div.column div.item{
    margin-bottom: 5px;
}
div.internet div.list div.column div.item.en{
    direction: ltr;
    text-align: right;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 12px;
}
</style>
