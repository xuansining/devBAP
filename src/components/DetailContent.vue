<template>
    <div class="detail-content" >

        <ul class="sub-nav" >
            <li v-for="item in dataList" :key="item.main" v-on:click="activeTag(item)" :class="{clicked:current===item.id && item.id>0}" >
                <span v-if="item.main">{{item.main}}</span>
                <span v-if="item.simple">{{item.simple}}</span>
            </li>

        </ul>

        <div class="info">
            <h4>{{currentPage.title}}</h4>
            <p>
               {{currentPage.content}}
            </p>
            <p></p>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  type DataList={
    id: number;
    main: string;
    simple: string | null;
  }[]
  type Item={
    id: number;
    main: string;
    simple: string | null;
  }
  @Component
  export default class DetailContent extends Vue {
    activeTag(item: Item){
      if(item.id<1)return;

      this.current=item.id;
      this.currentPage.title=item.simple?item.main+item.simple:item.main;
    }

    currentPage={
      title: '新型感染冠状病毒',
      content:'专家建议放弃治疗'
    };
    current=1;
    dataList: DataList = [
      {
        id:0,
        main: '呼吸道感染',
        simple: null
      },
      {
        id:1,
        main: '新型感染冠状病毒',
        simple: '(COVID-19)'
      }, {
        id:2,
        main: '重症急性呼吸综合征',
        simple: '(SARS)'
      }, {
        id:3,
        main: '中东呼吸综合症',
        simple: '(MERS)'
      },{
        id:4,
        main:'流行性感冒',
        simple: null
      },
      {
        id:5,
        main: '流行性腮腺炎',
        simple: null
      },{
        id:6,
        main: '肺结核',
        simple: null
      },{
        id:7,
        main: '风疹',
        simple: null
      },{
        id:8,
        main: '麻疹',
        simple: null
      },{
        id:9,
        main: '流行性脑脊髓膜炎',
        simple: null
      }

    ];

  }
</script>

<style scoped lang="scss">
    .detail-content {
        display: flex;
        height: 76vh;
        max-width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0 240px;

        .sub-nav {
            border-radius: 8px;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);

            > li {
                justify-content: center;
                display: flex;
                flex-direction: column;

                width: 380px;
                text-align: center;
                height: 60px;


                border-bottom: 1px solid #f4f4f4;
                font-size: 16px;
                &:first-child {
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    height: 98px;
                    line-height: 98px;
                    font-size: 30px;
                    background: #f3933d;
                    color: white;

                }

            }

            .clicked {
                background-color: #bdcede;
            }


        }

        .info {
            height: 650px;
            padding: 16px;
            width: 1000px;
            border-radius: 8px;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);

            > h4 {
                font-size: 34px;
                padding: 50px 0;
            }

            > p {
                text-indent: 2em;
                line-height: 40px;
            }
        }
    }
</style>