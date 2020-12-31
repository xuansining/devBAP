<template>

        <div class="nav">

                <router-link  to="/home"  active-class="clicked" >首页</router-link>
                <router-link to="/detail" active-class="clicked">常见流行病</router-link>
            <router-link to="#">病原体种类</router-link>
            <router-link to="#">站内搜索</router-link>
            <router-link to="#">帮助</router-link>
            <router-link to="#">关于我们</router-link>
<!--            </li>-->
<!--            <li><a href="">病原体种类</a></li>-->
<!--            <li><a href="">站内搜索</a></li>-->
<!--            <li><a href="">帮助</a></li>-->
<!--            <li><a href="">关于我们</a></li>-->
        </div>

</template>

<script lang="ts">

  import {Component,Prop} from 'vue-property-decorator';
  import Vue from 'vue';

  @Component
  export default class Nav extends Vue {
        @Prop(String) readonly navHeight: string | undefined;

  }
</script>

<style scoped lang="scss">
   .nav{
       height: 7vh;
       max-width: 100%;
       background: #bdcede;
       display: flex;
       align-items: center;
       justify-content: center;

               >a{
                   height: 7vh;
                   line-height: 7vh;
                   padding: 0 36px;
                   font-size: 25px;
                   display: block;
               ;

               }



           >a.clicked{
               background-color: #385d7e;
               color: white;

           }


   }

</style>