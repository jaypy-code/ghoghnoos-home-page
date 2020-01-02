<template>
  <section class="flex wrap c-ai c-jc">
      <div class="image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M117.333,149.333H352c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667H117.333
				c-5.896,0-10.667,4.771-10.667,10.667C106.667,144.563,111.438,149.333,117.333,149.333z"/>
			<path d="M245.333,256h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
				c5.896,0,10.667-4.771,10.667-10.667C256,260.771,251.229,256,245.333,256z"/>
			<path d="M471.167,64c-0.618,0-1.217,0.155-1.833,0.184V64c0-23.531-19.146-42.667-42.667-42.667h-384
				C19.146,21.333,0,40.469,0,64v416c0,4.313,2.604,8.208,6.583,9.854c1.313,0.552,2.708,0.813,4.083,0.813
				c2.771,0,5.5-1.083,7.542-3.125L121.75,384h304.917c23.521,0,42.667-19.135,42.667-42.667V164.411l30.708-30.703c0,0,0,0,0-0.01
				c7.604-7.604,11.958-18.125,11.958-28.865C512,82.313,493.688,64,471.167,64z M448,341.333c0,11.76-9.563,21.333-21.333,21.333
				H117.333c-2.833,0-5.542,1.125-7.542,3.125L21.333,454.25V64c0-11.76,9.563-21.333,21.333-21.333h384
				C438.438,42.667,448,52.24,448,64v7.286c-2.025,1.392-3.962,2.923-5.708,4.672L326.232,192H117.333
				c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h191.785l-10.243,51.24
				c-0.708,3.5,0.396,7.115,2.917,9.635c2.021,2.021,4.75,3.125,7.542,3.125c0.688,0,1.396-0.073,2.083-0.208l53.313-10.667
				c2.083-0.417,3.979-1.427,5.458-2.917L448,185.742V341.333z M357.396,246.177l-34.458,6.896l6.896-34.5l96.828-96.828
				l27.587,27.587L357.396,246.177z M484.958,118.625l-15.625,15.625l-27.589-27.589l15.63-15.63
				c3.625-3.615,8.646-5.698,13.792-5.698c10.75,0,19.5,8.75,19.5,19.5C490.667,109.958,488.583,114.99,484.958,118.625z"/></svg>
      </div>
      <div class="content flex column">
        <h2>سامانه ی ققنوس من</h2>
        <p>حتما شما تا بحال شده که مشکلی در زمینه ی تکنولوژی و IT بر خورده باشید و به دنبال جواب باشید و سعی کنید در سریع ترین زمان ممکن ، جوابی صحیح و لازمه رو دریافت کنید ولی نتونستید. سیستم ققنوس من به شما کمک می کند که مشکل شما در هر موضوعی با سریع ترین و با کیفیت ترین و صحیح ترین روش  حل شود.</p>
        <vs-button color="success" type="filled" onclick="window.open('https://my.ghoghnoosit.ir/')">ورود به سامانه ققنوس من</vs-button>
      </div>
  </section>
</template>


<script>

export default {
  name: 'Ticketing',
}
</script>

<style scoped>
section{
    position: relative;
    background-color: #fafbfc;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    margin-top: 50px;
    padding: 50px 10px;
}
div.image{
    position: relative;
    background-image: url('/images/my-ghoghnoos.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 400px;
    width: 400px;
    margin-left: 100px;
    transition: all .2s;
}
div.image svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
}
div.image:hover{
  transform: scale(1.1);
  transition: all .2s;
}
p{
    max-width: 450px;
    margin-left: 50px;
    margin-top: 10px;
}
button{
    margin-right: auto;
    margin-top: 20px;
}
@media only screen and (max-width: 1050px) {
  div.image{
    width: 300px;
    height: 300px;
  }
}
@media only screen and (max-width: 937px) {
  div.image{
    display: none;
  }
}
</style>
