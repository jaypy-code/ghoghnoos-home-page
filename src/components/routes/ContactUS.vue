<template>
  <main>
    <Header />
    <section class="flex wrap">
      <div class="content flex column">
        <div class="title">تماس با ما</div>
        <p><span class="grey">آدرس</span> قزوین ، قزوین ، چهار راه نادری ، نبش کوچه کانون ، ساختمان شهر ، طبقه ۱ ، واحد ۳</p>
        <p><span class="grey">تلفن</span> 09364716009 &nbsp;|&nbsp; 02833241272</p>
        <p><span class="grey">آدرس ایمیل</span> <span class="en">ghoghnoosit@gmail.com</span></p>
      </div>
      <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.1500064204614!2d50.00265172924335!3d36.2734883799553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff355e439d62279%3A0xec5abb8b5c1e6cf4!2sAseman%20no!5e0!3m2!1sen!2s!4v1576048736786!5m2!1sen!2s" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
    </section>
    <Footer />
  </main>
</template>


<script>

import Header from '../includes/Header';
import Footer from '../includes/Footer';

export default {
  name: 'ContactUS',
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
section{
  padding: 5% 15%;
}
div.title{
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 50px;
}
p{
  max-width: 350px;
  margin-bottom: 30px;
  margin-right: 30px;
}
p span.grey{
  color: #999;
  margin-left: 10px;
}
div.content{
  margin-bottom: 50px;
}
div.map{
  margin-top: -30px;
  margin-right: auto;
  float: left;
}
iframe{
  border-radius: 1rem;
  width: 500px;
  height: 400px;
}
@media only screen and (max-width: 800px) {
  div.map{
    margin-right: auto;
    margin-left: auto;
    float: right;
  }
  iframe{
    width: 100%;
  }
}
</style>
