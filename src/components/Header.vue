<template>
    <header class="header">
        <a href="/" class="logo">LOGO</a>
            <div class="search">
            <input type="text" class="search">
                <img src="../assets/icon/search.png" alt="">
            </div>


        <div class="btn">
            <span>English</span>
            <span>|</span>
            <BablePage></BablePage>
            <span>注冊</span>
        </div>

    </header>
    
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import BablePage from '@/views/BablePage.vue';

  @Component({
    components:{
      BablePage: BablePage
    }
  })

  export default class Header extends Vue {

  }
</script>

<style scoped lang="scss">
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7vh;
        max-width: 100%;
        background: #3a6697;
        padding: 0 84px;
        .logo{
            font-size: 46px;

            color:#fff;
        }
        .search{
            display: flex;

            position: relative;
            width: 30%;
            padding: 8px;
            border-radius: 16px;
            border: none;
            >input{
                width: 100%;
            }
            >img{
                bottom: 10px;
                right: 24px;
                position: absolute;
                display: block;
                max-width: 25px;

            }
        }

        .btn{
            display: flex;
            >span{
                padding: 0 8px;
                color: white;
            }
        }
    }

</style>