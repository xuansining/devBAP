<template>
    <div>
        <Header></Header>
        <Nav></Nav>
        <DetailContent></DetailContent>
        <Footer></Footer>

    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import Nav from '@/components/Nav.vue';
  import DetailContent from '@/components/DetailContent.vue';
  import Footer from '@/components/Footer.vue';

  @Component({
    components:{
      Header: Header,
      Nav: Nav,
      DetailContent: DetailContent,
      Footer: Footer
    }
  })
  export default class Detail extends Vue {

  }
</script>

<style scoped lang="scss">

</style>