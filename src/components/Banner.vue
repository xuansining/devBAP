<template>
    <div class="banner">
        <img src="../assets/icon/banner.jpg" alt="">
        
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component

  export default class Banner extends Vue {

  }
</script>

<style scoped lang="scss">
    .banner{
        margin-bottom: -4px;
        max-width: 100%;
        background: #d5d5d5;
        >img{
            width: 100%;
        }

    }
</style>