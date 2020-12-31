<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Nav from '@/components/Nav.vue';
  import Banner from '@/components/Banner.vue';
  import MainContent from '@/components/MainContent.vue';

  @Component({
    components:{
      Header: Header,
      Banner: Banner,
      Nav: Nav,
      MainContent: MainContent,
      Footer: Footer
    }

  })

  export default class HomePage extends Vue {

  }
</script>

<style scoped lang="scss">

</style>