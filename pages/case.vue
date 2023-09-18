<template>
  <div class="container">
    <HeaderView />
    {{ result }}
    <div class="headerTitle">
      <img src="../static/AboutView/AboutLogo.png" alt="" style="width: 100%" />
      <div class="headerBody">
        <h5 class="headerBodyTitle">成功案例</h5>
        <div class="headerBodyLine"></div>
      </div>
    </div>
    <div class="tabs">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane
          v-for="(tabsItem, tabsIndex) in tabsList"
          :key="tabsItem.key"
          :tab="tabsItem.tab"
        >
          <div
            class="card"
            v-for="(cardItem, cardIndex) in tabsItem.cardList"
            :key="cardIndex"
          >
            <img style="width: 300px" :src="cardItem.img" />
            <div class="cardSon">
              <div class="cardSonTitle">
                <h2>{{ cardItem.title }}</h2>
                <h5>{{ cardItem.value }}</h5>
              </div>
              <a-row :gutter="[20, 20]">
                <a-col
                  :span="12"
                  v-for="(cardCardItem, cardCardIndex) in cardItem.card"
                  :key="cardCardIndex"
                >
                  <!-- <div class="cardCol">
                    <span class="cardData">
                      <span class="cardBackground">{{ cardCardItem.background }}</span>
                      {{ cardCardItem.data }}
                    </span>
                  </div> -->
                  <template>
                    <a-popover title="背景">
                      <template #content>
                        <p style="width: 300px">{{ cardCardItem.data }}</p>
                      </template>
                      <div class="cardCol">
                        <span class="cardData">
                          <span class="cardBackground">{{
                            cardCardItem.background
                          }}</span>
                          {{ cardCardItem.data }}
                        </span>
                      </div>
                    </a-popover>
                  </template>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const activeKey = ref("1");

onMounted(() => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    window.location.href =
      "https://jt-phone-1312712349.cos.ap-shanghai.myqcloud.com/index.html#/pages/case/Consulting-Training"; //手机
  }
});
// let result = ref([]);
// const data = ref([
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
//   { title: "2321321" },
// ]);
// for (let i = 0; i < data.value.length; i += 3) {
//   result.value.push(data.value.slice(i, i + 3));
// }
const tabsList = [
  {
    tab: "咨询.培训",
    key: "1",
    cardList: [
      {
        title: "某厂合规方案咨询优化",
        value: "知识图谱",
        img: require("../static/CaseView/case-21.png"),
        card: [
          {
            background: "背景：",
            data:
              "某厂大部分检修维流程项目使用外包的方式，对工作人员的安全保障手段目前采用人工安全审核与安全作业指导的方式。",
          },
          {
            background: "痛点：",
            data:
              "经过咨询发现，目前某厂对有限空间下的作业以及其他特种作业基本没有智能化的监察手段，在发生危险的第一时间没有及时的解决办法。",
          },
          {
            background: "方案：",
            data:
              "采用监理机器人伴随的方案，将合规与智能化结合，使用深度学习与知识图谱等手段，智能化作业过程，随时溯源。",
          },
          {
            background: "益处：",
            data:
              "智能化系统，提高工作人员安全性，避免造成人生安全损失，提高了检维修效率。",
          },
        ],
      },
    ],
  },
  {
    tab: "AR/VR/MR眼镜方案",
    key: "2",
    cardList: [
      {
        title: "远程医疗：",
        value: "上海120院前救治",
        img: require("../static/CaseView/case-1.png"),
        card: [
          {
            background: "背景：",
            data: "急救中心院前救治需要数字化手段提高救治率",
          },
          {
            background: "痛点：",
            data:
              "随车医生遇到部分紧急病情的外援手段单一不直观；无法同时监控多个诊疗器械导致效率低；车载摄像头辅助远程监控视角死角多，效果不佳",
          },
          {
            background: "方案：",
            data: "采用AR眼镜和无线传输",
          },
          {
            background: "益处：",
            data: "即插即用，建设周期短，实现第一视角外设接入和的互动会诊",
          },
        ],
      },
      {
        title: "远程医疗：",
        value: "上海某三甲数字化医院",
        img: require("../static/CaseView/case-2.png"),
        card: [
          {
            background: "背景：",
            data: "某三甲医院进行手术教学",
          },
          {
            background: "痛点：",
            data:
              "无法多人进入手术室，专家资源匮乏，远程会诊系统架设成本高，周期长，且原有远程医疗系统还需要助手一旁协助调试摄像机视角，效果不佳",
          },
          {
            background: "方案：",
            data: "采用AR和无线传输",
          },
          {
            background: "益处：",
            data: "即插即用，建设周期短，并可实现第一视角的会诊和手术直播教学",
          },
        ],
      },
      {
        title: "远程协助巡检：",
        value: "大连商品交易所机房",
        img: require("../static/CaseView/case-3.png"),
        card: [
          {
            background: "背景：",
            data:
              "数据机房与总部保持远程维修、维护，采用技术方案是手机、监控摄像机和电脑联调，进行远程汇报",
          },
          {
            background: "痛点：",
            data:
              "现场检修技术难度高，总部技术人员无法第一视角判断，机房背景噪音大，总部听不见，现场服务器检修代码，总部看不清，现场检修动作协作，不同步",
          },
          {
            background: "方案：",
            data: "采用特定AR眼镜和远程平台",
          },
          {
            background: "益处：",
            data: "在高噪声环境下实现双向互动协助",
          },
        ],
      },
      {
        title: "多媒体教学：",
        value: "某世界五百强药企",
        img: require("../static/CaseView/case-4.png"),
        card: [
          {
            background: "背景：",
            data: "实验室有多种危险化学品，需要进行操作培训",
          },
          {
            background: "痛点：",
            data:
              "有些实验场景因为危险性和试验成本问题，再现难度比较高，培训和实际情况割裂",
          },
          {
            background: "方案：",
            data: "通过AR虚拟教学模拟场景",
          },
          {
            background: "益处：",
            data: "安全培训教学，不规范动作 AI自动识别纠错",
          },
        ],
      },
      {
        title: "数字孪生：",
        value: "某德国润滑油工厂生产优化",
        img: require("../static/CaseView/case-5.png"),
        card: [
          {
            background: "背景：",
            data: "工厂原有不同年代建设的数字化系统，流水线作业采用人工巡检的方式",
          },
          {
            background: "痛点：",
            data:
              "不同智能化系统信息孤岛，不能和业务流程紧密结合，日常巡检，易出现人为失误",
          },
          {
            background: "方案：",
            data:
              "采用多源异构集成方案，将不同品牌的系统整合在一个平台，将智能化系统嵌入生产业务流程中，利用AR和AI相结合的方式，对生产过程中的异常情况自动识别，全程跟踪溯源",
          },
          {
            background: "益处：",
            data: "智能化系统提供优化策略，避免损失，提高了生产效益",
          },
        ],
      },
      {
        title: "数字孪生：",
        value: "德国汉诺威工业展",
        img: require("../static/CaseView/case-6.png"),
        card: [
          {
            background: "背景：",
            data:
              "用户希望通过展示厅实现：虚拟下单、数字仿真、知识图谱预测、AR展示等内容的数字双胞胎整体解决方案",
          },
          {
            background: "痛点：",
            data:
              "时间紧、跨专业、要求复杂。短时间内需提供建筑智能化系统接入、IT系统接入、OT系统接入、VR接入、建模、动画制作等各类不同行业工种服务。",
          },
          {
            background: "方案：",
            data:
              "和多国用户保持协同，应对时差，快速建模，接入各类系统，展厅实现虚拟流水线和仿真预测等功能，并通过MR眼镜上实现虚实互动。",
          },
          {
            background: "益处：",
            data: "提前完成项目，让用户的案例和流水线仿真系统在展厅完美融合再现。",
          },
        ],
      },
      {
        title: "远程协助：",
        value: "米其林",
        img: require("../static/CaseView/case-19.png"),
        card: [
          {
            background: "背景：",
            data:
              "工业轮胎使用环境多是交通不便的山区、矿区等野外环境、技术维修复杂，需要专业技工维修。",
          },
          {
            background: "痛点：",
            data:
              "专业技工无法及时赶到用户现场，采用手机互动时现场前端无法同步看到手机画面。",
          },
          {
            background: "方案：",
            data:
              "低代码接入售后服务平台，采用远程协助平台，可随时确保异地用户得到准确服务。",
          },
          {
            background: "益处：",
            data: "大量节约企业的服务成本、提高了用户服务满意度。",
          },
        ],
      },
    ],
  },
  {
    tab: "IT/OT/MR集成",
    key: "3",
    cardList: [
      {
        title: "电气火灾超前预警处置平台：",
        value: "某国企电气柜智能诊断及应急处置项目",
        img: require("../static/CaseView/case-8.png"),
        card: [
          {
            background: "背景：",
            data:
              "电气柜火灾造成停电停产，领导担责，灾后投入大量人力巡检，工作强度大，人力成本高",
          },
          {
            background: "痛点：",
            data:
              "烟感报警只能提前几分钟预警电气火灾，救援时间紧；巡检人员技术参差不齐，无法确保及时准确处置电气火灾；人工巡检记录不够准确完整",
          },
          {
            background: "方案：",
            data:
              "采用多种传感器，通过AI算法模型，提前几天发现火灾隐患并预警，并将应急预案通知到相关处置人员，接收人按照方案快速执行即可",
          },
          {
            background: "益处：",
            data: "AI智能提前避险火灾，应急指挥辅助决策，变被动受损为主动巡检",
          },
        ],
      },
      {
        title: "互动多媒体展陈：",
        value: "国家会展中心",
        img: require("../static/CaseView/case-9.png"),
        card: [
          {
            background: "背景：",
            data:
              "三百余块多媒体屏，其中几十块物理损坏、信息发布系统瘫痪，资料缺失，历时半年多家供应商未能解决",
          },
          {
            background: "痛点：",
            data: "展览开展在即，如不能如期播放广告，广告主面临巨额赔偿。",
          },
          {
            background: "方案：",
            data:
              "摸排现场线路，调配零件，重新调试，通宵作业，在开展前恢复系统，并搭建提供了相应的多媒体展陈方案",
          },
          {
            background: "益处：",
            data: "多媒体系统如期正常使用，避免了巨额经济损失",
          },
        ],
      },
      {
        title: "垃圾分类管理：",
        value: "上海某区政府垃圾分类智能管理",
        img: require("../static/CaseView/case-20.png"),
        card: [
          {
            background: "背景：",
            data: "某社区居民在非规定时间段在垃圾桶外乱丢垃圾",
          },
          {
            background: "痛点：",
            data:
              "乱丢垃圾影响脏乱差，安排专门人员看守成本高，小区保安监控实时性和积极性不高",
          },
          {
            background: "方案：",
            data:
              "利用原有垃圾房普通监控进行系统升级，自动识别违规行为，并在现场发出语音督导，执法人员可同步收到违规截图提醒",
          },
          {
            background: "益处：",
            data:
              "低成本解决了违规行为，语音督导和图文追溯相结合，大幅降低现场违规现象，提高了监管效率",
          },
        ],
      },
      {
        title: "人脸识别管控系统：",
        value: "央企资产公司VVIP接待厅",
        img: require("../static/CaseView/case-11.png"),
        card: [
          {
            background: "背景：",
            data: "金融展厅，用于接待VVIP客户和宣传金融产品",
          },
          {
            background: "痛点：",
            data:
              "门头采用LED招牌无新意，投资顾问更替频繁，新来人员无法记住每个贵宾，不能即时给贵宾提供精准的个性化服务",
          },
          {
            background: "方案：",
            data:
              "采用全息投影招牌替代原有门头，内容可随意调整，通过智能识别，自动通知相关投资顾问迎宾，将合适的理财产品推送给顾问，并匹配贵宾喜好的场景",
          },
          {
            background: "益处：",
            data:
              "全息门头时尚新颖，即时更新理财广告，提高了企业形象和信息发布效率；智能识别，降低服务成本，提供宾至如归的精准服务，提升了服务品质。",
          },
        ],
      },
      {
        title: "智慧养老跌倒系统等：",
        value: "某养老院智慧养老系统",
        img: require("../static/CaseView/case-12.png"),
        card: [
          {
            background: "背景：",
            data: "养老院由园区多栋建筑构成，需要多种智慧场景解决方案，尤其是跌倒和定位",
          },
          {
            background: "痛点：",
            data:
              "我司跌倒监测抛弃了手环，提供了非接触式检测方式，老人跌倒，可自动通知相关人员采取措施；同时区别与传统的蓝牙和UWB定位方式，单基站定位即可实现定位。",
          },
          {
            background: "方案：",
            data: "成本有限，同时不希望采取手环和摄像监控的方式",
          },
          {
            background: "益处：",
            data:
              "非接触，不改变老人生活习惯的前提下，实现了多种智慧养老场景，单基站定位大幅缩短施工工期，降低了业主的采购成本",
          },
        ],
      },
      {
        title: "智慧养老精准服务系统等：",
        value: "某街道为民服务中心",
        img: require("../static/CaseView/case-16.png"),
        card: [
          {
            background: "背景：",
            data: "街道为民服务中心打造智慧养老样板",
          },
          {
            background: "痛点：",
            data:
              "对来访者提供的服务类型是否匹配不了解 ，没有数据参考，对下属服务商的服务无法有效监督",
          },
          {
            background: "方案：",
            data:
              "自动识别陌生人的性别、年龄和消费习惯，服务中心可根据数据提供精准服务，服务中心亦可管理下属服务商，当服务人员上门提供服务时，可通过非接触传感器识别服务商是否按时、合规，提供了相应服务。",
          },
          {
            background: "益处：",
            data:
              "服务更准确，场景更智能，提升了服务品质，节约了大笔投入，民政部和市政府相关领导多次现场参观该项目",
          },
        ],
      },
      {
        title: "智能化系统维护：",
        value: "银行全国连锁网点",
        img: require("../static/CaseView/case-14.png"),
        card: [
          {
            background: "背景：",
            data:
              "某银行全国营业厅网点分散，各地系统品牌不同、年限不同、维护要求不同，需要统一管理",
          },
          {
            background: "痛点：",
            data: "新旧系统维护种类多、地域分散，当地维修有时不及时",
          },
          {
            background: "方案：",
            data:
              "根据总行政策，整体设计，分步实施，全国现场驻扎员工和长期合作人员相结合，对当地的智能化系统进行全生命周期服务",
          },
          {
            background: "益处：",
            data:
              "低成本下覆盖全国所有网点的智能化系统，确保了设备维修及时性、系统运行稳定性",
          },
        ],
      },
      {
        title: "智能家居：",
        value: "西郊庄园别墅全宅智能",
        img: require("../static/CaseView/case-15.png"),
        card: [
          {
            background: "背景：",
            data:
              "别墅之前安装安防、家电、多媒体等均为不同品牌，之前智能家居系统规划部分缺失",
          },
          {
            background: "痛点：",
            data:
              "未预留线缆，重新布线会破坏装修；电气品牌各异，多个系统互相独立，操作不便",
          },
          {
            background: "方案：",
            data: "打通全屋多品牌家居系统，多源异构方式将电气和家电设备统一管理",
          },
          {
            background: "益处：",
            data:
              "不破坏装修，电气设备底层协议联通，一网统管，智能场景会根据院门口来人喜好自动切换，智能系统支持远程调试、维护。",
          },
        ],
      },
      {
        title: "低碳节能：",
        value: "某工业园区全国管理平台",
        img: require("../static/CaseView/case-17.png"),
        card: [
          {
            background: "背景：",
            data: "某大型企业在各地均有园区，管理分散，",
          },
          {
            background: "痛点：",
            data: "原有能耗管理仅限在单体建筑，效果不明显，各地员工管理出差互访手续繁杂",
          },
          {
            background: "方案：",
            data: "所有建筑物的能耗设备和出入人员管理并入总部，由总部一网统管",
          },
          {
            background: "益处：",
            data: "通过一年的使用，降本增效果显著，人员和场景管控也更精准和人性化。",
          },
        ],
      },
    ],
  },
  {
    tab: "数据中心建设",
    key: "4",
    cardList: [
      {
        title: "某外资银行",
        value: "银行数据中心",
        img: require("../static/CaseView/case-18.png"),
        card: [
          {
            background: "背景：",
            data:
              "某世界知名的银行数据中心需进行改造，新旧智能化系统并存，部分系统已超10年，部分旧系统已停产需更新，部分旧系统仍需接入新系统",
          },
          {
            background: "痛点：",
            data:
              "必须确保不断电不断网，涉及各类新旧子系统和不同品牌，施工和调试难度极大",
          },
          {
            background: "方案：",
            data:
              "整体规划，连续几天24小时轮班作业，项目实施精细到分钟，对改造涉及供配电系统、UPS、综合布线、精密空调、环境控制系统、自动化控制系统等每个子系统都设计了多种实施和应急预案",
          },
          {
            background: "益处：",
            data: "我司在规定时间内零误差超前完成项目。",
          },
        ],
      },
    ],
  },
];
</script>
<style scoped>
.container {
}
/* 顶部图片 */
.headerTitle {
  position: relative;
  top: 0;
}
.headerBody {
  padding: 100px 20% 0;
  position: absolute;
  top: 0;
}
.headerBodyTitle {
  font-size: 50px;
  color: #ffffff;
  margin: 0 0 20px 0;
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
@media only screen and (max-width: 1440px) {
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
/* 内容-------------------------------- */
/*  */
.tabs {
  background-color: #f6f6f6;
}
.card {
  padding: 0 20%;
  display: flex;
  margin: 30px 0;
}
.cardSon {
  padding: 30px;
  width: 100%;
  background-color: #ffffff;
}
.cardSonTitle {
  display: flex;
  align-items: center;
}
h5 {
  margin-left: 20px;
}
.cardSonTitle h2 {
  font-size: 26px;
  color: #333333;
}
.cardSonTitle h5 {
  font-size: 18px;
  font-weight: 400;
  color: #747474;
}
.cardCol {
  border: 1px solid #e8e8e8;
  padding: 14px 20px 10px 10px;
  height: 90px;
}
.cardBackground {
  background-color: #447bf3;
  padding: 4px 4px;
}
.cardData {
  overflow: hidden;
  /* 文本溢出换成省略号 */
  text-overflow: ellipsis;
  /* 弹性盒子 */
  display: -webkit-box;
  /* 溢出到第几行 */
  -webkit-line-clamp: 3;
  /* 从上到下垂直排列子元素 */
  -webkit-box-orient: vertical;
}

/* tabs */
:deep(.ant-tabs-nav-scroll) {
  height: 80px;
  background-color: #ffffff;
  font-size: 20px;
  padding: 0 20%;
}
:deep(.ant-tabs-bar) {
  margin: 0;
  background-color: #ffffff;
}
:deep(.ant-tabs-nav .ant-tabs-tab-active) {
  margin: 0;
  padding-bottom: 25px;
  margin-top: 13px;
}
:deep(.ant-tabs-tab) {
  margin: 0;
}
</style>
