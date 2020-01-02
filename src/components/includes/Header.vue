<template>
  <header class="flex column">
    <div class="flex nowrap c-ai">
      <div class="logo" @click="goTo('/')">
        <div class="image"></div>
        <div class="flex column">
          <span class="title">امید ایمن پرداز ققنوس</span>
          <span class="details">ما مانند یک ققنوس واقعی هستیم</span>
        </div>
        </div>
      <div class="flex-space"></div>
      <button class="button-menu show-on-small" @click="active = !active">
        <div class="menu"></div>
      </button>
      <div class="flex nowrap c-ai hide-on-small" style="margin-top: -30px;">
        <vs-dropdown>
          <span class="link colored flex nowrap c-ai c-jc" style="margin-left: 10px;">
            سیستم ققنوسی
            <vs-icon style="margin-right: 10px" icon="expand_more"></vs-icon>
          </span>

          <vs-dropdown-menu>
            <vs-dropdown-item href="https://karmand.ghoghnoosit.ir/">
              سیستم اتوماسیون کارمندان ققنوس
            </vs-dropdown-item>
            <vs-dropdown-item href="https://karamozi.ghoghnoosit.ir/">
              سیستم اتوماسیون کارآموزان ققنوس
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
        <vs-button color="primary" type="filled" onclick="window.open('https://my.ghoghnoosit.ir')">سامانه ققنوس من</vs-button>
      </div>
    </div>
    <div class="flex nowrap links hide-on-small">
      <div class="flex-space"></div>
      <span class="link" @click="goTo('/download')">دانلود</span>
      <span class="link" @click="goTo('section#projects')">پروژه ها</span>
      <span class="link" @click="goTo('section#products')">محصولات</span>
      <span class="link" @click="goTo('section#faq', '/faq')">سوالات متداول</span>
      <span class="link" @click="goTo('/blog')">وبلاگ</span>
      <span class="link" @click="goTo('/contact-us')">تماس با ما</span>
    </div>
      <vs-sidebar :parent="$refs.parrent"  default-index="1" color="primary" class="sidebarx" spacer v-model="active">
        <div class="flex nowrap"><div class="logo"><div class="image"></div></div><div class="flex column"><div class="title">امید ایمن پرداز ققنوس</div></div></div>
        <div class="flex column">
          <vs-button color="primary" type="filled" onclick="window.open('https://my.ghoghnoosit.ir')">سامانه ققنوس من</vs-button>
          <vs-button color="primary" type="flat" onclick="window.open('https://karamozi.ghoghnoosit.ir')">سیستم کارآموزی</vs-button>
          <vs-divider/>
          <vs-button color="dark" type="flat" @click="goTo('/')">صفحه اول</vs-button>
          <vs-button color="dark" type="flat" @click="goTo('/download')">دانلود</vs-button>
          <vs-button color="dark" type="flat" @click="goTo('section#projects')">پروژه ها</vs-button>
          <vs-button color="dark" type="flat" @click="goTo('section#products')">محصولات</vs-button>
          <vs-button color="dark" type="flat" @click="goTo('section#faq', '/faq')">سوالات متداول</vs-button>
          <vs-button color="dark" type="flat" @click="goTo('/blog')">وبلاگ</vs-button>
          <vs-button color="dark" type="flat" @click="goTo('/contact-us')">تماس با ما</vs-button>
        </div>
      </vs-sidebar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      active: false
    }
  },
  methods: {
    goTo(to='', redirect=''){
      if(window.location.pathname == '/' && to.slice(0,1) != '/' &&  document.querySelector(to)){
        document.querySelector(to).scrollIntoView({ behavior: 'smooth' });
      } else if(to.slice(0,1) == '/'){
        this.$router.push(to);
      } else if(redirect.length != 0){
        this.$router.push(redirect);
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
  header{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px 10%;
    transition: padding 0.2s;
  }
  div.logo{
    cursor: pointer;
    position: relative;
    margin-top: -100px;
    display: block;
    transition: all .2s;
  }
  div.logo div.image{
    position: relative;
    top: 100px;
    background-image: url('../../assets/logo.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 120px;
    height: 120px;
    transition: all .2s;
  }
  div.logo div.flex.column{
    position: relative;
    right: 120px;
    transition: right .2s;
  }
  div.logo span.title{
    font-size: 1.4rem;
    margin-bottom: 5px;
    transition: all .2s;
  }
  span.link{
    cursor: pointer;
    font-size: 0.9rem;
  }
  span.link.colored,
  span.link:not(.colored):hover{
    color: rgb(var(--vs-primary));
    transition: color 0.2s;
  }
  span.link:not(.colored),
  span.link.colored:hover{
    color: #000;
    transition: color 0.2s;
  }
  div.links{
    margin-top: -20px;
  }
  div.links span.link{
    margin-right: 14px;
  }
  button.button-menu{
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
  div.menu{
    position: relative;
    width: 24px;
    height: 24px;
  }
  div.menu::before,
  div.menu::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background-color: rgb(var(--vs-dark));
    height: 2px;
    width: 100%;
  }
  div.menu::before{
    top: 6px;
  }
  div.menu::after{
    bottom: 6px;
  }
  .show-on-small{
    display: none;
  }
  .vs-sidebar div.logo{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .vs-sidebar div.logo div.image{
    top: 0;
    width: 60px;
    height: 60px;
  }
  .vs-sidebar div.title{
    margin-top: 30px;
  }
  .vs-sidebar button{
    margin: 2px 10px;
  }
  @media only screen and (max-width: 992px) {
    .show-on-small{
      display: block;
    }
    .hide-on-small{
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    header{
      padding: 30px 5%;
    }
    div.logo{
      margin-top: -60px;
    }
    div.logo div.image{
      width: 60px;
      height: 60px;
      top: 60px;
    }
    div.logo div.flex.column{
      right: 60px;
    }
    div.logo span.title{
      font-size: 1.2rem;
    }
    div.logo span.details{
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 350px) {
    div.logo span.title{
      font-size: 1rem;
    }
    div.logo span.details{
      font-size: 0.7rem;
    }
  }
</style>
