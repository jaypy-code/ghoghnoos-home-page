<template>
  <footer class="flex column c-ai c-jc">
      <div class="flex wrap">
          <div class="item">
              <div class="logo"></div>
          </div>
          <div class="item">
              <span>دسترسی سریع</span>
              <div class="flex nowrap">
                  <div class="flex column">
                      <span class="link" @click="goTo('#projects')">پروژه ها</span>
                      <span class="link" @click="goTo('#services')">خدمات</span>
                      <span class="link" @click="goTo('#products')">محصولات</span>
                  </div>
                  <div class="flex column">
                      <span class="link" @click="goTo('/blog')">وبلاگ</span>
                      <span class="link" @click="goTo('/faq')">سوالات متداول</span>
                      <span class="link" @click="goTo('/contact-us')">تماس با ما</span>
                  </div>
              </div>
          </div>
          <div class="item">
              <span>تماس با ما</span>
              <div class="flex column">
                  <p><span class="grey">آدرس</span> قزوین ، قزوین ، چهار راه نادری ، نبش کوچه کانون ، ساختمان شهر ، طبقه ۱ ، واحد ۳</p>
                  <p><span class="grey">تلفن</span> 09364716009 &nbsp;|&nbsp; 02833241272</p>
                  <p><span class="grey">آدرس ایمیل</span> <span class="en">ghoghnoosit@gmail.com</span></p>
              </div>
          </div>
      </div>
      <div class="flex wrap"></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
      goTo(to=''){
          if(to.slice(0,1) == '/'){
                this.$router.push(to);
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100);
          } else {
            if(window.location.pathname != '/') this.$router.push('/');
            setTimeout(() => {
                document.querySelector(to).scrollIntoView({ behavior: 'smooth' });
            }, window.location.pathname == '/'?0:100);
          }
      }
  }
}
</script>

<style scoped>
footer{
    margin-top: 1rem;
    background-color: #fafbfc;
    border-top: 1px solid #eaeaea;
    padding: 50px 0 100px 0;
}
div.logo{
    background-image: url('../../assets/logo.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 150px;
    height: 150px;
}
div.item{
    margin: 0 20px;
    max-width: 410px;
}
div.flex.column{
    margin-left: 30px;
    margin-top: 10px;
}
span.grey{
    color: #888;
    margin-left: 10px;
}
span.link{
    cursor: pointer;
    margin-top: 10px;
    color: #888;
    transition: color 0.2s;
}
span.link:hover{
    color: #000;
    transition: color 0.2s;
}
span.en{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
p{
    margin-top: 10px;
}
@media only screen and (max-width: 992px) {
    footer{
        padding: 50px 50px 100px 50px;
    }
    div.logo{
        display: none;
    }
    div.item{
        margin-bottom: 30px;
    }
    div.item:nth-child(2){
        margin-right: -20px;
    }
}
@media only screen and (max-width: 378px) {
    div.item:nth-child(3){
        margin-right: -20px;
        margin-left: -50px;
    }
}
</style>
