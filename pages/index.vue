<template>
  <div class="main">
    <!-- 表头 -->
    <HeaderView />
    <!-- 图片 -->
    <div class="container">
      <img src="../static/indexView/logo.png" alt="" />
    </div>
    <!-- 公司简介 -->
    <div
      class="companyProfile"
      v-for="(briefItem, briefIndex) in briefList"
      :key="briefIndex"
    >
      <div class="companyProfileLeft">
        <div class="top">
          <h1>走进疆通</h1>
          <h2>Walk into Jiangtong</h2>
        </div>
        <div style="margin-top: 50px">
          <!-- muted是否静音 -->
          <video autoplay loop :muted="true" width="100%" id="video" ref="video">
            <!-- <source
              src="https://sekiro-1312712349.cos.ap-shanghai.myqcloud.com/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%91.mp4"
            /> -->
            <source :src="briefItem.url" />
          </video>
        </div>
      </div>
      <div class="companyProfileRight">
        <div>
          <h1>上海疆通</h1>
          <h1>科技有限公司</h1>
          <h4 class="headerH4">
            {{ briefItem.content }}
          </h4>
          <div class="bottom">
            <div>
              <span>{{ briefItem.tagANumber }}</span>
              <div>{{ briefItem.tagA }}</div>
            </div>
            <a-divider type="vertical" />
            <div>
              <span>{{ briefItem.tagBNumber }}</span>
              <div>{{ briefItem.tagB }}</div>
            </div>
            <a-divider type="vertical" />
            <div>
              <span>{{ briefItem.tagCNumber }}</span>
              <div>{{ briefItem.tagC }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 核心优势 -->
    <div class="coreAdvantage">
      <h1>核心优势</h1>
      <h4>Core advantages</h4>
      <div class="cardAll">
        <a-row :gutter="100">
          <a-col :span="11" v-for="(cardItem, cardIndex) in cardList" :key="cardIndex">
            <div style="display: flex; background-color: #ffffff">
              <img :src="cardItem.icon" class="coreAdvantageImg" />
              <div>
                <div class="topTitle">{{ cardItem.title }}</div>
                <div class="bottomTitle">{{ cardItem.content }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div style="position: relative; margin: 50px 0">
        <div style="width: 100%; height: 2px; border-top: 2px dashed #4363d4"></div>
      </div>
      <div class="cardAllTwo">
        <a-row :gutter="100">
          <a-col :span="9" v-for="(cardItem2, cardIndex2) in cardList2" :key="cardIndex2">
            <div style="display: flex; background-color: #ffffff">
              <img :src="cardItem2.icon" class="coreAdvantageImg" />
              <div>
                <div class="topTitle">{{ cardItem2.title }}</div>
                <div class="bottomTitle">{{ cardItem2.content }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- 技术能力 -->
    <div class="solution">
      <h1>技术能力</h1>
      <h4>Solution</h4>
      <div class="cardAll">
        <div
          class="card"
          v-for="(solutionItem, solutionIndex) in solutionList"
          :key="solutionIndex"
        >
          <div style="display: flex">
            <img :src="solutionItem.icon" class="SolutionImg" />
            <div>
              <div style="font-weight: 900; font-size: 24px; margin-top: 10px">
                {{ solutionItem.title }}
              </div>
              <div class="topTitle">{{ solutionItem.line }}</div>
              <div class="bottomTitle">{{ solutionItem.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我们的服务 -->
    <div class="ourServices">
      <h1>我们的服务</h1>
      <h4>Our services</h4>
      <div>
        <a-tabs
          v-model:activeKey="activeKey"
          style="position: relative"
          @change="handleChange(activeKey)"
        >
          <a-tab-pane
            :key="ourServicesIndex"
            v-for="(ourServicesItem, ourServicesIndex) in ourServicesList"
            :tab="ourServicesItem.tags"
          >
            <a-row :gutter="[10, 10]" style="margin-top: 2px">
              <a-col :span="8" style="padding: 0">
                <NuxtLink :to="ourServicesItem.activeKeys">
                  <div class="colLeft" @click="handleClick(activeKey)">
                    <img
                      :src="ourServicesItem.img"
                      style="position: absolute; top: 2px; left: 4px"
                    />
                    <div class="colLeftTitle">概述:</div>
                    <div class="colLeftLine"></div>
                    <div class="colLeftData">
                      {{ ourServicesItem.summarize }}
                    </div>
                  </div>
                  <div class="masking" @click="handleClick(activeKey)"></div>
                </NuxtLink>
              </a-col>
              <a-col :span="16">
                <a-row :gutter="[10, 10]">
                  <a-col
                    :span="ourServicesItemSon2.span"
                    v-for="(
                      ourServicesItemSon2, ourServicesItemSonIndex2
                    ) in ourServicesItem.content"
                    :key="ourServicesItemSonIndex2"
                  >
                    <NuxtLink :to="ourServicesItem.activeKeys">
                      <div class="imgDivFirst" @click="handleClick(activeKey)">
                        <img
                          :src="ourServicesItemSon2.img"
                          style="position: absolute; top: 2px; left: 4px"
                        />
                        <div class="colLeftTitle">
                          {{ ourServicesItemSon2.title }}
                        </div>
                        <div class="colLeftLine"></div>
                        <div class="colLeftData">
                          {{ ourServicesItemSon2.content }}
                        </div>
                      </div>
                      <div class="maskingTwo" @click="handleClick(activeKey)"></div>
                    </NuxtLink>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <!-- 项目案例 -->
    <div class="projectCases">
      <h1>项目案例</h1>
      <h4>Project Cases</h4>
      <a-tabs v-model:activeKey="activeKeyList" tab-position="left">
        <a-tab-pane
          :key="projectItem.id"
          :tab="projectItem.tag"
          v-for="(projectItem, projectIndex) in projectList"
        >
          <h2 style="color: #ffffff">{{ projectItem.title }}</h2>
          <h3 style="color: #ffffff">{{ projectItem.tag }}</h3>
          <a-row :gutter="[30, 30]" style="margin-top: 47px; color: #ffffff">
            <a-col :span="12">
              <div class="projectTitle">
                <div>背景:</div>
                <div class="projectValue">
                  {{ projectItem.bg }}
                </div>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="projectTitle">
                <div>痛点:</div>
                <div class="projectValue">
                  {{ projectItem.td }}
                </div>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="projectTitle">
                <div>方案:</div>
                <div class="projectValue">
                  {{ projectItem.fa }}
                </div>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="projectTitle">
                <div>益处:</div>
                <div class="projectValue">
                  {{ projectItem.yc }}
                </div>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
      <a-button class="viewBtn">
        <NuxtLink to="case">查看更多 →</NuxtLink>
      </a-button>
    </div>
    <!-- 新闻资讯 -->
    <div class="news">
      <h1>新闻资讯</h1>
      <h4>News</h4>
      <a-row class="newsMain" style="display: flex">
        <a-col
          :span="8"
          class="card"
          v-for="(NewsItem, NewsIndex) in NewsListView"
          :key="NewsIndex"
        >
          <img src="../static/indexView/timing.png" alt="" />
          <span class="cardDate">{{ newsDate }}</span>
          <div class="cardTitle">
            {{ NewsItem.title }}
          </div>
          <a :href="NewsItem.link"><a-button>了解更多</a-button></a>
          <img style="margin-top: 40px; width: 100%" :src="NewsItem.image" alt="" />
        </a-col>
      </a-row>
    </div>
    <FooterView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<script lang="ts" setup>
import { ref, onMounted, nextTick, reactive } from "vue";
import useRouter from "vue-router";
import AOptions from "@/api/index.js";
import * as dayjs from "dayjs";
import {
  getAdvantage,
  getBrief,
  getNews,
  getSolution,
  getServers,
  getCases,
} from "@/api/index.js";
// 概况

onMounted(() => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    window.location.href =
      "https://jt-phone-1312712349.cos.ap-shanghai.myqcloud.com/index.html"; //手机
  }
});

const activeKey = ref(0);
const activeKeyList = ref(1);
// 概况
let briefList = ref([]);
getBrief()
  .then((res) => {
    briefList.value = res.data.data;
    console.log(briefList.value, "32131231232132132132321321321321");
  })
  .catch((err) => {
    console.log(err);
  });

// 核心优势
let cardList = ref([]);
let cardList2 = ref([]);
getAdvantage()
  .then((res) => {
    const firstList = [];
    const secondList = [];
    firstList.push([res.data.data[0], res.data.data[1]]);
    secondList.push([res.data.data[2], res.data.data[3]]);
    cardList.value = firstList[0];
    cardList2.value = secondList[0];
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 技术能力
let solutionList = ref([]);
getSolution()
  .then((res) => {
    solutionList.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
//  我们的服务
let ourServicesList = ref([]);
getServers()
  .then((res) => {
    ourServicesList.value = res.data.data;
    console.log(ourServicesList.value, "13123213213123");
  })
  .catch((err) => {
    console.log(err);
  });
//
let projectList = ref([]);
getCases()
  .then((res) => {
    projectList.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
// 新闻
const NewsListView = ref([]);
let newsDate = ref([]);
getNews()
  .then((res) => {
    NewsListView.value = res.data.data;
    newsDate.value = dayjs(res.data.data.time).format("YYYY-MM-DD");
    console.log(newsDate.value);
  })
  .catch((err) => {
    console.log(err);
  });
// 路由
const router = new useRouter();

const handleChange = (activeKey) => {
  console.log(activeKey);
};
const handleClick = (activeKey) => {
  sessionStorage.setItem("activeIndex", JSON.stringify(activeKey));
};

// const projectList = [
//   {
//     key: "1",
//     tabs: "知识图谱",
//     title: "某工厂合规方案咨询优化",
//     card: [
//       {
//         title: "背景：",
//         value: `工厂大部分检修维流程项目使用外包的方式，对工作人员的安全保障手段目前采用人工安全审核与安全作业指导的方式。`,
//       },
//       {
//         title: "痛点：",
//         value: `经过咨询发现，目前工厂对有限空间下的作业以及其他特种作业基本没有智能化的监察手段，在发生危险的第一时间没有及时的解决办法。`,
//       },
//       {
//         title: "方案：",
//         value: `采用监理机器人伴随的方案，将合规与智能化结合，使用深度学习与知识图谱等手段，智能化作业过程，随时溯源。`,
//       },
//       {
//         title: "益处：",
//         value: `智能化系统，提高工作人员安全性，避免造成人生安全损失，提高了检维修效率。`,
//       },
//     ],
//   },
//   {
//     key: "2",
//     tabs: "远程医疗",
//     title: "上海120院前救治",
//     card: [
//       {
//         title: "背景：",
//         value: `急救中心院前救治需要数字化手段提高救治率。`,
//       },
//       {
//         title: "痛点：",
//         value: `随车医生遇到部分紧急病情的外援手段单一不直观；无法同时监控多个诊疗器械导致效率低；车载摄像头辅助远程监控视角死角多，效果不佳。`,
//       },
//       {
//         title: "方案：",
//         value: `采用AR眼镜和无线传输。`,
//       },
//       {
//         title: "益处：",
//         value: `即插即用，建设周期短，实现第一视角外设接入和的互动会诊。`,
//       },
//     ],
//   },
//   {
//     key: "3",
//     tabs: "数据中心建设",
//     title: "银行数据中心",
//     card: [
//       {
//         title: "背景：",
//         value: `某世界知名的银行数据中心需进行改造，新旧智能化系统并存，部分系统已超10年，部分旧系统已停产需更新，部分旧系统仍需接入新系统。`,
//       },
//       {
//         title: "痛点：",
//         value: `必须确保不断电不断网，涉及各类新旧子系统和不同品牌，施工和调试难度极大。`,
//       },
//       {
//         title: "方案：",
//         value: `整体规划，连续几天24小时轮班作业，项目实施精细到分钟，对改造涉及供配电系统、UPS、综合布线、精密空调、环境控制系统、自动化控制系统等每个子系统都设计了多种实施和应急预案。`,
//       },
//       {
//         title: "益处：",
//         value: `我司在规定时间内零误差超前完成项目。`,
//       },
//     ],
//   },
//   {
//     key: "4",
//     tabs: "电气火灾超前预警处置平台",
//     title: "某国企电气柜智能诊断及应急处置项目",
//     card: [
//       {
//         title: "背景：",
//         value: `电气柜火灾造成停电停产，领导担责，灾后投入大量人力巡检，工作强度大，人力成本高。`,
//       },
//       {
//         title: "痛点：",
//         value: `烟感报警只能提前几分钟预警电气火灾，救援时间紧；巡检人员技术参差不齐，无法确保及时准确处置电气火灾；人工巡检记录不够准确完整。`,
//       },
//       {
//         title: "方案：",
//         value: `采用多种传感器，通过AI算法模型，提前几天发现火灾隐患并预警，并将应急预案通知到相关处置人员，接收人按照方案快速执行即可。`,
//       },
//       {
//         title: "益处：",
//         value: `AI智能提前避险火灾，应急指挥辅助决策，变被动受损为主动巡检。`,
//       },
//     ],
//   },
// ];

// const NewsList = [
//   {
//     date: "2023-08-26",
//     title: "疆通新闻 | 疆通科技 X 西门子 打造低代码高效智能未来!",
//     img: require("../static/indexView/news-1.png"),
//     href: "https://mp.weixin.qq.com/s/1Wt-4NCi0eNzO8UxwWsMJQ",
//   },
//   {
//     date: "2023-08-18",
//     title: "疆通业务 | 配电系统",
//     img: require("../static/indexView/news-2.png"),
//     href: "https://mp.weixin.qq.com/s/5PebUZPjb1vEJBdxaUw20g",
//   },
//   {
//     date: "2023-07-10",
//     title: "疆通科技数字孪生展陈成果亮相2023世界人工智能大会。",
//     img: require("../static/indexView/news-second.png"),
//     href:
//       "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486101&idx=1&sn=8454250002409a838eeaaf7bc47c4cd1&chksm=96f732dea180bbc8cfc792d0b0e53e52aa3869dbe6f886b815e403b485b04754ca58964d4ead#rd",
//   },
//   // {
//   //   date: "2023-06-11",
//   //   title: "疆通与行业高端咨询公司深度合作。",
//   //   img: require("../static/indexView/news-first.png"),
//   //   href:
//   //     "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486127&idx=1&sn=561f8b6ac6ae5dcdf461dd158f7c6808&chksm=96f732e4a180bbf2cd5355ec26ccd3997d1165e2e4d8e7da7a067cbd7e54a60570afe767b53a#rd",
//   // },
//   // {
//   //   date: "2023-04-17",
//   //   title: "疆通助力上海120急救中心，AR技术让急救加速",
//   //   img: require("../static/indexView/news-third.png"),
//   //   href:
//   //     "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485912&idx=1&sn=e5bc6ca4479a1b2945caee5224276868&chksm=96f73193a180b8855731f8980921c4987705957f7c9ef0662bca0a71189c69a6965f0cd2558c#rd",
//   // },
// ];
</script>

<style scoped>
.main {
  background-color: #f0f2f5;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media only screen and (max-width: 1400px) {
  .companyProfile {
    padding: 60px 15% !important;
  }
}
/* ----------------------logo图片------------------- */
.container img {
  width: 100%;
  height: 100%;
  background: linear-gradient(192deg, #ffffff 0%, #f7f8fe 0%, #6491f6 100%);
}
/* ----------------------公司简介---------------- */

.headerH4 {
  margin-top: 42px;
  line-break: anywhere;
  word-wrap: break-word !important;
}

.companyProfile {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  display: flex;
  padding: 60px 20%;
}
/* 公司简介左侧边 */
.companyProfileLeft {
  width: 50%;
  background: #f7f7f7;
}
/* 左侧边标题 */
.companyProfileLeft .top {
  background-color: #f7f7f7;
}
.companyProfileLeft h1 {
  font-size: 40px;
  color: #333333;
  line-height: 56px;
  margin: 0;
  font-weight: bold;
}
.companyProfileLeft h2 {
  font-size: 26px;
  color: #cccccc;
  line-height: 36px;
  margin: 0;
}

/* 公司简介右侧边 */
.companyProfileRight {
  width: 50%;
  background: #f7f7f7;
  border-top: 5px solid #294dce;
  padding: 40px 0 40px 50px;
}
/* 右侧边标题 */
.companyProfileRight h1 {
  letter-spacing: 10px;
  color: #333333;
  font-size: 50px;
  margin: 0;
  font-weight: bold;
}
/* 文字内容 */
.companyProfileRight h4 {
  text-indent: 2em;
  font-weight: 400;
  color: #333333;
  line-height: 35px;
  font-weight: 400;
}
/* 底部内容 */
.companyProfileRight .bottom {
  height: 100px;
  display: flex;
}
.companyProfileRight .bottom span {
  font-size: 46px;
  color: #294dce;
  font-weight: bold;
}
.companyProfileRight .bottom div {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}
.companyProfileRight > .ant-divider,
.ant-divider-vertical {
  height: 60px !important;
  background-color: #e9e9e9;
  margin: 20px 40px 0;
}

/* --------------------------- 核心优势 ------------------------------ */
.coreAdvantage {
  width: 100%;
  height: 100%;
}

.coreAdvantage h1 {
  padding: 0 20%;
  font-size: 40px;
  color: #333333;
  line-height: 56px;
  margin: 60px 0 0 0;
  font-weight: bold;
}

.coreAdvantage h4 {
  margin: 0;
  font-size: 26px;
  color: #cccccc;
  line-height: 36px;
  padding: 0 20%;
  margin-bottom: 60px;
  font-weight: 700;
}

.coreAdvantage .cardAll {
  margin-top: 100px;
  padding: 0 20%;
}

.coreAdvantage .card,
.cardTwo {
  width: 28%;
  height: 90px;
  display: inline-block;
  background-color: #ffffff;
}

.coreAdvantage .card {
  margin-left: 30px;
}
.coreAdvantage .cardAllTwo {
  padding: 0 0 0 25%;
}
.coreAdvantage .card:nth-child(2) {
  margin-left: 8%;
}

.coreAdvantage .cardTwo {
  margin-left: 160px;
}

.coreAdvantage .topTitle {
  margin-top: 15px;
  font-size: 16px;
  padding-right: 10px;
  color: #333333;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
}
.coreAdvantageImg {
  width: 60px;
  height: 100%;
  margin: 25px 20px 25px 10px;
}
.coreAdvantage .bottomTitle {
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  padding-right: 10px;
  color: #999999;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-break: break-all;
  display: inline-block;
}
/* --------------------解决方案-------------------- */

.solution {
  padding: 60px 20%;
  margin-top: 60px;
  background-color: #ffffff;
}

.solution h1 {
  margin: 0;
  font-size: 40px;
  color: #333333;
  font-weight: bold;
}
.solution h4 {
  font-size: 26px;
  color: #cccccc;
  margin-bottom: 60px;
  margin: 0;
}
.SolutionImg {
  width: 60px;
  height: 100%;
  margin: 45px 20px 45px;
}
.solution .cardAll {
  display: flex;
  margin-top: 70px;
}
.solution .card {
  width: 280px;
  height: 150px;
  background: #ffffff;
  border: 1px solid #ededed;
  margin-left: 27px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  word-break: break-all;
  display: inline-block;
}
.solution .card:nth-child(1) {
  margin: 0;
}
.solution .topTitle {
  font-size: 18px;
  color: #333333;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  word-break: break-all;
}

@media only screen and (max-width: 1400px) {
  .SolutionImg {
    width: 60px !important;
    height: 100% !important;
    margin: 45px 0 !important;
  }

  .solution .topTitle {
    font-size: 14px;
    color: #333333;
    margin-top: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    word-break: break-all;
    display: inline-block;
  }

  .solution .bottomTitle {
    margin: 12px 20px 33px 0;
    font-size: 12px;
    font-weight: 400;
    color: #999999;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    word-break: break-all;
    display: inline-block;
  }
}

.solution .bottomTitle {
  margin: 12px 25px 33px 0;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-break: break-all;
  display: inline-block;
}
/* -------------------我们的服务------------------------ */
.ourServices {
  padding: 60px 20%;
}
.ourServices h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
  font-weight: bold;
}
.ourServices h4 {
  font-size: 26px;
  color: #cccccc;
  margin-bottom: 60px;
}
.ourServices .colDIv {
  width: 98%;
  height: 380px;
}
.ourServices .colLeft {
  width: 100%;
  height: 380px;
  padding: 67px 30px;
  background-repeat: no-repeat;
  cursor: pointer;
}
.ourServices .colLeftLine {
  width: 30px;
  height: 3px;
  background: #ffffff;
  margin: 10px 0 0;
  position: relative;
  z-index: 1000;
}
.imgDivFirst {
  width: 100%;
  height: 185px;
  padding: 36px 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box !important;
  word-break: break-all;
}

.imgDivFirst img {
  width: 100%;
  height: 185px;
}
.imgDivFirst .colLeftData {
  width: 100%;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box !important ;
  word-break: break-all;
}
.colLeftData {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  z-index: 1000;
  font-weight: 400;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  display: -webkit-box !important ;
  word-break: break-all;
}
.ourServices .masking {
  width: 97.8% !important;
  height: 380px;
  background: linear-gradient(135deg, #294dce 0%, rgba(144, 183, 255, 0.16) 100%);
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 999;
  opacity: 0.5;
}
.ourServices .maskingTwo {
  width: 100%;
  height: 185px;
  background: linear-gradient(135deg, #294dce 0%, rgba(144, 183, 255, 0.16) 100%);
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 999;
  opacity: 0.5;
}
.colLeftTitle {
  color: #ffffff;
  font-size: 18px;
  position: relative;
  z-index: 1000;
  font-weight: 700;
}
.colLeftData {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  z-index: 1000;
  font-weight: 400;
  /* white-space: pre-line; */
}
.colLeft .colLeftData {
  width: 100%;
}
.colLeft img {
  width: 97%;
  overflow: hidden;
  height: 100%;
}

/* tabs样式 */
:deep(.ourServices .ant-tabs-nav-scroll) {
  text-align: center !important;
  background: #f7f7f7;
  height: 60px;
  font-size: 18px;
  color: #333333;
}

:deep(.ourServices .ant-tabs-bar) {
  margin: 0;
}

/* ----------------------项目案例----------------------- */
.projectCases {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  background-image: url("../static/indexView/projectCases-background.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.projectCases h1 {
  padding: 60px 20% 0;
  font-size: 40px;
  color: #ffffff;
  font-weight: 900;
  margin: 0;
}

.projectCases h4 {
  padding: 0 20%;
  font-size: 26px;
  color: #cccccc;
  margin: 0;
}

.projectTitle {
  height: 130px;
  padding: 15px 15px 20px 17px;
  border: 1px solid #ffffff;
}
.projectValue {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  word-break: break-all;
}
h2 {
  font-weight: 700;
}
h3 {
  font-weight: 300;
}
.viewBtn {
  position: absolute;
  top: 90%;
  left: 24%;
  background-color: #4a515e;
  outline: none;
  border: none;
  border-radius: unset;
  color: #ffffff;
  width: 120px;
  height: 40px;
}
:deep(.projectCases .ant-tabs) {
  margin: 40px 20%;
  height: 100%;
  background: #191f2c;
  opacity: 0.8;
}
:deep(.projectCases .ant-tabs-nav-wrap) {
  width: 280px;
  padding: 28px 30px 0 20px;
  margin-bottom: 10px;
  color: #ffffff;
}
:deep(.projectCases .ant-tabs .ant-tabs-left-bar .ant-tabs-tab) {
  text-align: left;
}
:deep(.projectCases .ant-tabs-nav .ant-tabs-tab-active) {
  background-color: #294dce;
  color: #ffffff;
  height: 50px;
  line-height: 34px;
}

:deep(.projectCases .ant-tabs .ant-tabs-left-content) {
  height: 100%;
  padding: 41px 64px;
  background-image: url("../static/indexView/projectCases-right.png");
}

/* -------------------------------新闻资讯--------------------------- */
.news {
  padding: 60px 20%;
  position: relative;
}
.news h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
  font-weight: 700;
}

.news h4 {
  font-size: 26px;
  color: #cccccc;
  margin: 0 0 60px 0;
}
.news .card {
  border-left: 1px solid #efefef;
  height: 100%;
  background-color: #ffffff;
  padding: 42px 25px;
}
.news .card:nth-child(1) {
  border: none;
}
.news .cardTitle {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-break: break-all;
  width: 100%;
  height: 50px;
  margin: 20px 0 30px 0;
}
.news .cardDate {
  font-size: 14px;
  font-weight: 400;
  color: #294dce;
  margin-left: 10px;
  display: inline-block;
}
</style>
