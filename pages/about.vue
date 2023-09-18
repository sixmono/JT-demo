<template>
  <div class="container">
    <HeaderView />
    <div class="headerTitle">
      <img src="../static/AboutView/AboutLogo.png" alt="" style="width: 100%" />
      <div class="headerBody">
        <h5 class="headerBodyTitle">关于我们</h5>
        <div class="headerBodyLine"></div>
        <h6 class="headerBodyData">探索智慧生活，提升人类幸福</h6>
      </div>
    </div>
    <!-- tabs表格 -->
    <div class="tabs">
      <a-tabs>
        <a-tab-pane tab="企业文化" class="tabsTab" key="1">
          <a-row :gutter="[20]" class="tabsRow">
            <a-col class="tabsCol" :span="10">
              <div class="tabsCard">
                <div class="sequence">01</div>
                <div class="enTitle">{{ tabsListData[0]?.ent }}</div>
                <div class="title">{{ tabsListData[0]?.title }}</div>
                <div class="data">{{ tabsListData[0]?.content }}</div>
              </div>
            </a-col>
            <a-col class="tabsCol" :span="10">
              <div class="tabsCard">
                <div class="sequence">02</div>
                <div class="enTitle">{{ tabsListData[1]?.ent }}</div>
                <div class="title">{{ tabsListData[1]?.title }}</div>
                <div class="data">{{ tabsListData[1]?.content }}</div>
              </div>
            </a-col>
            <a-col class="tabsCol" :span="4">
              <img class="tabsColImg" src="../static/AboutView/JTKJ.png" />
            </a-col>
            <a-col class="tabsCol" :span="24">
              <div class="tabsCard">
                <div class="sequence">03</div>
                <div class="enTitle">{{ tabsListData[2]?.ent }}</div>
                <div class="title">{{ tabsListData[2]?.title }}</div>
                <div class="data">{{ tabsListData[2]?.content }}</div>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
    <!-- 企业证书 -->
    <div class="certificate">
      <h1>企业证书</h1>
      <h4>Certificate</h4>
      <a-carousel arrows>
        <template #prevArrow>
          <img
            style="
              width: 20px;
              height: 20px;
              position: absolute;
              top: 40%;
              left: 10%;
              z-index: 100;
            "
            src="../static/AboutView/zuojiantou.png"
          />
        </template>
        <template #nextArrow>
          <img
            style="position: absolute; top: 40%; right: 10%; z-index: 100"
            src="../static/AboutView/youjiantou.png"
          />
        </template>
        <div v-for="(certificate, certIndex) in certificateList" :key="certIndex">
          <a-row :gutter="15" class="certificateRow">
            <a-col
              :span="6"
              v-for="(certificateSon, certIndexSon) in certificate"
              :key="certIndexSon"
              class="certificateCol"
            >
              <div style="text-align: center">
                <img class="certificateColimage" :src="certificateSon.img" />
                <div style="text-align: center; margin-top: 25px">
                  {{ certificateSon.title }}
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-carousel>
      <div class="semicircle">
        <svg width="100%" height="100%">
          <ellipse cx="50%" cy="276" rx="51%" ry="125%" style="fill: #294dce" />
        </svg>
      </div>
    </div>
    <!-- 业务分类 -->
    <div class="achievement">
      <h1>业务分类</h1>
      <h4>Company Achievements</h4>
      <a-row :gutter="20" style="margin-bottom: 20px">
        <a-col
          :span="8"
          v-for="(achievementItem, achievementIndex) in achievementList"
          :key="achievementIndex"
        >
          <div class="card">
            <img :src="achievementItem.icon" alt="" />
            <div class="cardTitle">{{ achievementItem.title }}</div>
            <div class="cardData">
              {{ achievementItem.content }}
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 我们的客户 -->
    <div class="customers">
      <h1>我们的客户</h1>
      <h4>Our customers</h4>
      <a-row :gutter="20" style="margin: 60px 0">
        <a-col
          :span="4"
          :lg="{ span: '4-8' }"
          v-for="(customersItem, customersIndex) in customersList"
          :key="customersIndex"
        >
          <img :src="customersItem.img" style="width: 100%" />
        </a-col>
      </a-row>
    </div>
    <FooterView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "about",
});
</script>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getTabsData, getCertificate, getBusiness, getCustomer } from "@/api/about.js";

const activeKey = ref<string>("1");

onMounted(() => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    window.location.href =
      "https://jt-phone-1312712349.cos.ap-shanghai.myqcloud.com/index.html#/pages/about/about"; //手机
  }
});

// 企业文化
const tabsListData = ref([]);
getTabsData()
  .then((res) => {
    tabsListData.value = res.data.data;
    console.log(tabsListData.value, "31321321321312");
  })
  .catch((err) => {
    console.log(err);
  });

// 企业图片
const certificates = ref([]);
const certificateList = ref([]);
getCertificate()
  .then((res) => {
    certificates.value = res.data.data;
    for (let i = 0; i < certificates.value?.length; i += 4) {
      certificateList.value.unshift(certificates.value?.slice(i, i + 4));
    }
    console.log(certificateList.value, "2221111");
    for (let a = 0; a < certificateList.value.length; a += 1) {
      console.log(certificateList.value[a]);
    }
  })
  .catch((err) => {
    console.log(err, "2222");
  });

// const certificateList = [
//   {
//     certificate: [
//       {
//         img: require("../static/AboutView/about-certificate-3.png"),
//         data: "高新技术企业",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-4.png"),
//         data: "消杀资质",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-6.png"),
//         data: "华东师范大学实习基地",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-7.png"),
//         data: "西门子工艺魔方最佳创意",
//       },
//     ],
//   },

//   {
//     certificate: [
//       {
//         img: require("../static/AboutView/about-certificate-11.png"),
//         data: "建筑业企业资质证书",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-10.png"),
//         data: "无接触电梯控制方法及装置",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-18.png"),
//         data: "一种头戴式计算机移动巡检装置",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-17.png"),
//         data: "一种工业设备信息的采集装置",
//       },
//     ],
//   },
//   {
//     certificate: [
//       {
//         img: require("../static/AboutView/about-certificate-5.png"),
//         data: "荣誉证书",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-1.png"),
//         data: "人工智能技能等级证书二级",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-9.png"),
//         data: "质量管理体系证书",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-13.png"),
//         data: "电气系统风险预测管理系统",
//       },
//     ],
//   },
//   {
//     certificate: [
//       {
//         img: require("../static/AboutView/about-certificate-14.png"),
//         data: "裸眼全息视频互动软件",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-15.png"),
//         data: "人工智能互动多媒体控制软件",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-16.png"),
//         data: "医疗影像分析软件",
//       },
//       {
//         img: require("../static/AboutView/about-certificate-12.png"),
//         data: "FOD多维度识别预警系统",
//       },
//     ],
//   },
// ];
const achievementList = ref([]);
getBusiness()
  .then((res) => {
    achievementList.value = res.data.data;
    console.log(achievementList.value);
  })
  .catch((err) => {
    console.log(err);
  });

const customersList = ref([]);
getCustomer()
  .then((res) => {
    customersList.value = res.data.data;
    console.log(customersList.value);
  })
  .catch((err) => {
    console.log(err);
  });
</script>
<style scoped>
.container {
}
.headerTitle {
  position: relative;
  top: 0;
}
.headerBody {
  padding: 4% 20% 0;
  position: absolute;
  top: 0;
}
.headerBodyTitle {
  font-size: 50px;
  font-family: AlimamaShuHeiTi;
  color: #ffffff;
}
.headerBodyLine {
  width: 34px;
  height: 4px;
  background: #ffffff;
}
.headerBodyData {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 23px;
  width: 350px;
}
@media only screen and (max-width: 1300px) {
  .headerBody {
    padding: 1% 0 0 20%;
  }
  .headerBodyTitle {
    font-size: 40px;
    color: #ffffff;
    margin: 0 0 20px 0;
  }
  .headerBodyData {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 23px;
    width: 850px;
  }
}
/* ------------------------TABS------------------  */
.tabs {
}
.tabsRow {
  padding: 0 20%;
  background-color: #f6f6f6;
}
.tabsTab {
  background-color: #f6f6f6;
}
.tabsCol:nth-child(3) .tabsCard {
  background: #294dce;
  padding: 0;
}
.tabsCol:nth-child(3) .tabsCard .enTitle {
  padding: 0;
}

.tabsCol:nth-child(4) .tabsCard {
  margin-bottom: 40px;
}
.tabsCard {
  background: #ffffff;
  position: relative;
}
.tabsCard .sequence {
  position: absolute;
  font-size: 80px;
  font-weight: bold;
  color: #f0f7ff;
  z-index: 1;
  top: 0;
}
.tabsCard .enTitle {
  position: relative;
  z-index: 2;
  font-size: 26px;
  color: #294dce;
  margin: 40px 0 0 47px;
  padding: 20px 0 0 0;
}
.tabsCard .title {
  position: relative;
  z-index: 2;
  font-size: 20px;
  color: #000000;
  margin: 14px 56px;
}
.tabsCard .data {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  margin: 0 56px 0;
  padding-bottom: 40px;
}
.tabsColImg {
  width: 100%;
  height: 180px;
  padding: 20px 0 0 0;
  margin-top: 40px;
  background-color: #294dce;
}

:deep(.ant-tabs-bar) {
  padding: 0 20% !important;
  margin: 0;
}
.ant-tabs .ant-tabs-top-content.ant-tabs-content-animated,
.ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated {
  background-color: #f6f6f6;
}

/* ----------------------企业证书----------------------------------------- */
:deep(.certificate .ant-row) {
  margin: 0 !important;
}
.certificate {
  position: relative;
}
.certificateColimage {
  height: 90%;
  margin: 0 auto;
}
.certificate h1 {
  padding: 60px 20% 0;
  font-size: 40px;
  margin: 0;
  color: #333333;
}
.certificate h4 {
  padding: 0 20%;
  font-size: 26px;
  color: #cccccc;
  margin-bottom: 60px;
}
.certificateRow {
  padding: 0 20%;
  /* position: absolute; */
}
.certificateRow :nth-child(1) img {
  height: 90%;
  width: 60%;
}

.semicircle {
  height: 220px;
  position: absolute;
  width: 100%;
  top: 280px;
  z-index: 2;
}
.ant-carousel {
  position: relative;
  z-index: 99;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 270px;
  /* line-height: 160px; */
  overflow: hidden;
  color: white;
}
:deep(.ant-carousel .slick-dots-bottom) {
  display: none !important;
}
.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
/* -----------------公司成就---------------- */
.achievement {
  padding: 60px 20%;
  height: 100%;
  background: #f6f6f6;
}
.achievement h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
}
.achievement h4 {
  font-size: 26px;
  color: #cccccc;
  padding: 0;
}
.cardTitle {
  font-size: 18px;
  color: #000000;
  margin: 30px 0 20px 0;
  font-weight: bold;
}
.cardData {
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  white-space: pre-line;
  text-align: left;
}
.achievement .card {
  text-align: center;
  width: 100%;
  padding: 0 34px;
}
/* --------------------------我们的客户------------------------ */
.customers {
  padding: 60px 20% 0;
}

.customers h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
}

.customers h4 {
  font-size: 26px;
  color: #cccccc;
}
@media (min-width: 992px) {
  .ant-col-lg-4-8 {
    width: 33.3%;
  }
}
@media (min-width: 1350px) {
  .ant-col-lg-4-8 {
    width: 20%;
  }
}

@media only screen and (max-width: 1348px) {
  .tabsColImg {
    height: 200px;
  }
  .certificateColImg {
    height: 100%;
  }
}
</style>
