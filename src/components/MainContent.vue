<template>
    <div class="main-content">
        <section class="disease-list">
            <h4>常见流行病</h4>
            <ul class="disease-items">
                <li>流行病一</li>
                <li>流行病一</li>
                <li>流行病一</li>
                <li>流行病一</li>
            </ul>
            <div class="show">
                图片
            </div>
        </section>
        <section class="disease-info">
            <ul class="disease-hot">
                <li>常见流行病动态</li>
                <li>新增加病原体</li>
                <li>流行病关注度排名</li>
            </ul>
            <div class="line"></div>
            <ul class="category">
                <li>
                    <a href="#">
                        <img src="../assets/icon/virus_1.png" alt="">
                        <span>病毒</span>
                    </a>
                </li><li>
                    <a href="#">
                        <img src="../assets/icon/bacteria_2.png" alt="">
                        <span>细菌</span>
                    </a>
                </li><li>
                    <a href="#">
                        <img src="../assets/icon/fungus_3.png" alt="">
                        <span>真菌</span>
                    </a>
                </li><li>
                    <a href="#">
                        <img src="../assets/icon/protozoon_4.png" alt="">
                        <span>原虫</span>
                    </a>
                </li>
            </ul>
            <div class="introduction">
                <p>关注流行病动态，了解病原体信息。病原体信息（Integrative Information for Pathogens)网站为大众及广大医学工作者、科研人员提供常见流行病病原体的综合信息，包括基本信息、宿主受体、抗原蛋白、抗体、疫苗等，以及相关研究常用的资源和工具。

                </p>
                <div class="more">了解更多 > ></div>

            </div>
        </section>
        <div class="wrapper">
            <section class="disease-src">
                <h4>资源</h4>
                <ul>

                    <li>资源------</li>
                    <li>资源------</li>
                    <li>资源------</li>
                    <li>资源------</li>
                    <li>资源------</li>
                </ul>
            </section>
            <section class="disease-src">
                <h4>工具</h4>
                <ul>

                    <li>工具------</li>
                    <li>资源------</li>
                    <li>资源------</li>
                    <li>资源------</li>
                    <li>资源------</li>
                </ul>
            </section>

        </div>


    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component

  export default class MainContent extends Vue {

  }
</script>

<style scoped lang="scss">
    .main-content{
        padding: 40px 80px;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        .disease-list{
            width: 20%;
            height: 450px;
            .show{
                margin-top: 70px;
                width: 100%;
                height: 200px;
                background-color: #cccccc;
            }
            .disease-items{
                >li{
                    margin:40px 0;
                    padding: 20px 0;

                    background-color: #9bb5ce;
                }
            }
        }
        .disease-info{

            height: 350px;
            background-color: #ccc;
            width: 50%;
            .introduction{
                margin-top: 70px;
                padding: 30px;
                background-color: #d0dae4;
                .more{
                    text-align: right;

                }

            }
            .disease-hot{
                display: flex;
                justify-content: space-between;

                >li{
                    width: 32%;
                    height: 300px;
                    border: 1px solid black;
                    &:first-child{
                        background-color: #d5d8eb;
                    }
                    &:nth-child(2){
                        background-color: #becce7;
                    }
                    &:last-child{
                        background-color: #bedce7;
                    }

                }

            }
            .line{
                margin: 30px 0;
                border: 1px solid black;
            }
            .category{
                    display: flex;
                justify-content: center;

                    li>a{
                        margin:0 50px;
                        display: flex;
                        align-items: center;
                        >img{
                            margin-right: 15px;
                        }
                    }

            }


        }
        .wrapper{
            width: 20%;
            .disease-src{
                margin-bottom: 100px;
                height: 300px;
                background-color: #d5d5d5;

                h4{
                    padding: 15px 10px;
                    background-color:#d2dce8;
                    font-weight: 800;
                }
                ul>li{
                    padding: 15px 3px;

                }
            }
        }

    }
</style>