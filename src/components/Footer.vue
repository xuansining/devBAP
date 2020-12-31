<template>
    <footer class="footer">
        <p>版权声明 | 备案号</p>
        <p>East-mab 大数据与生物智能重庆市重点实验室</p>
    </footer>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Footer extends Vue {

  }
</script>

<style scoped lang="scss">
  .footer{

      text-align: center;
      height: 10vh;
      max-width: 100%;
      background: #3a6697;
      >p{
          padding: 10px 0;
      }
  }
</style>