<template>
  <section id="projects" class="flex column c-ai c-jc">
    <div class="head">
      <h1>تمامی پروژه های ساخته شده توسط ققنوسی ها</h1>
      <p>شرکت ققنوس مجموعه ای از توانایی ها و خلاقیت ها و نوآوری هاست و ما در تلاش برای ارائه ی بهترین خدمات به شما هستیم.</p>
    </div>
    <div class="flex wrap c-jc s-ai" style="width: 100%; position: relative; left: -25px;">
      <vs-card v-for="(item, index) in projects" v-bind:key="index">
        <div class="flex column">
          <h2>{{item['name']}}</h2>
          <p>{{item['details']}}</p>
          <vs-button v-on:click="open(item['url'])">نمایش {{item['category']}}</vs-button>
        </div>
      </vs-card>
    </div>
  </section>
</template>


<script>

export default {
  name: 'Projects',
  props: ['projects'],
  methods: {
    open: (url='')=>{
      window.setTimeout(()=>{
        window.open(url);
      }, 300);
    }
  },
}
</script>

<style scoped>
section{
  background-color: rgb(var(--vs-success));
  padding: 80px 0;
  min-height: 400px;
}
div.head{
  text-align: center;
  width: 90%;
  margin-bottom: 80px;
  color: #fff;
}
div.head h1{
  font-weight: normal;
  margin-bottom: 10px;
}
div.head p{
  color: #eee;
}
.con-vs-card{
  width: 340px;
  height: auto;
  padding: 20px;
  padding-bottom: 0;
  margin-left: 20px;
}
.con-vs-card h2{
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.con-vs-card p{
  font-size: 0.9rem;
}
.con-vs-card button{
  margin-right: auto;
  margin-top: 20px;
}
</style>
