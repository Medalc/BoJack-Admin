<template>
  <div class="hdpi-box" ref="statistic">
    <div class="hdpi-herder">
      <!-- <div class="time-css left-herder">{{ numTime }}</div> -->
      <div class="centen-herder">
        <dv-decoration-8 class="animation_left" style="width: 100%; height: 40px" :color="['#134d9f', '#134d9f']" />
        <div class="animation_line">
          <div class="herder-title">数据大屏</div>
          <dv-decoration-5 style="width: 100%; height: 20px" :color="['#134d9f', '#134d9f']" />
        </div>
        <dv-decoration-8
          class="animation_right"
          style="width: 100%; height: 40px"
          :reverse="true"
          :color="['#134d9f', '#134d9f']"
        />
      </div>
      <div @click="toggleFullscreen()" class="amplifier">
        <el-icon :size="20" color="#6c85e5"><FullScreen /></el-icon>
      </div>
    </div>
    <div class="hdpi-centen">
      <div class="centen-left">
        <Slideshow :lunConfig="lunConfig1" :title="'最新漏洞情报'" :toUrl="toUrl" />
        <Slideshow :lunConfig="lunConfig2" :title="'最新组件情报'" :toUrl="toUrl1" />
        <Slideshow :lunConfig="lunConfig3" :title="'最新安全事件'" :toUrl="toUrl1" />
      </div>
      <div class="centen-centre">
        <div class="center-topCss">
          <dv-border-box-12 dur="10" class="card-boxDv">
            <div class="center-itemCard">
              <span class="loudong-icon lou-icon"></span>
              <div class="loudong-item">
                <div class="loudong-title">漏洞情报</div>
                <div>100</div>
              </div>
            </div>
            <div class="center-itemCard">
              <span class="loudong-icon an-icon"></span>
              <div class="loudong-item">
                <div class="loudong-title">组件情报</div>
                <div>53</div>
              </div>
            </div>
            <div class="center-itemCard">
              <span class="loudong-icon zu-icon"></span>
              <div class="loudong-item">
                <div class="loudong-title">安全事件</div>
                <div>87</div>
              </div>
            </div>
            <div class="center-itemCard">
              <span class="loudong-icon nv-icon"></span>
              <div class="loudong-item">
                <div class="loudong-title">安全资讯</div>
                <div>120</div>
              </div>
            </div>
          </dv-border-box-12>
        </div>
        <div class="center-bottomCss">
          <dv-border-box-12 class="box12-css">
            <InformationStatistics />
          </dv-border-box-12>
        </div>
      </div>
      <div class="centen-right">
        <div class="left-Item">
          <dv-border-box-12 class="box12-css">
            <analystStatistics></analystStatistics>
          </dv-border-box-12>
        </div>
        <Slideshow :lunConfig="lunConfig1" :title="'被依赖组件Top10'" :toUrl="toUrl1" />
        <Slideshow :lunConfig="lunConfig1" :title="'安全资讯'" :toUrl="toUrl1" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import InformationStatistics from "./components/InformationStatistics.vue";
import analystStatistics from "./components/analystStatistics.vue";
import Slideshow from "./components/slideshow.vue";
import screenfull from "screenfull";
import { FullScreen } from "@element-plus/icons-vue";
const numTime = ref(dayjs(new Date()).format(`YYYY年MM月DD日 HH时mm分ss秒`));
onMounted(() => {
  realTime();
});
const statistic = ref(null);
const toggleFullscreen = () => {
  if (screenfull.isEnabled) {
    screenfull.request(statistic.value);
  }
};
// 实时显示时间
const realTime = () => {
  setInterval(() => {
    numTime.value = dayjs(new Date()).format(`YYYY年MM月DD日 HH:mm:ss `);
  }, 1000);
};

const lunConfig1 = ref({
  header: ["漏洞编号", "发布时间", "漏洞类型"],
  data: [
    ["CVE-2024-39627", "2024-08-02 07:15:52", "信息暴露"],
    ["CNNVD-202401-344", "2024-08-02 09:16:01", "Sql注入"],
    ["CVE-2024-39627", "2024-08-02 07:15:52", "信息暴露"],
    ["CVE-2024-39627", "2024-08-02 09:16:01", "XSS"],
    ["CNNVD-202401-324", "2024-08-02 07:15:52", "信息暴露"],
    ["CVE-2024-39627", "2024-08-02 05:04:52", "Sql注入"]
  ],
  headerBGC: "rgba(0, 0, 0, 0)",
  oddRowBGC: "rgba(0, 0, 0, 0)",
  evenRowBGC: "rgba(0, 0, 0, 0)",
  waitTime: 1000
});
let toUrl = ref({
  url: "an_management",
  query: "first",
  isShow: true
});
let toUrl1 = ref({
  url: "an_management",
  query: "first",
  isShow: false
});
const lunConfig2 = ref({
  header: ["组件名称", "发布时间", "事件类型"],
  data: [
    ["Kibana", "2024-08-02 07:15:52", "AGPL v3"],
    ["OpenCV", "2024-08-02 09:16:01", "11.0.1+"],
    ["MongoDB", "2024-08-02 07:15:52", "AGPL v3"],
    ["MapboxGL", "2024-08-02 09:16:01", "投毒攻击"],
    ["CockroachLabs", "2024-08-02 07:15:52", "11.0.1+"],
    ["Neo4j", "2024-08-02 09:16:01", "AGPL v3"]
  ],
  headerBGC: "rgba(0, 0, 0, 0)",
  oddRowBGC: "rgba(0, 0, 0, 0)",
  evenRowBGC: "rgba(0, 0, 0, 0)",
  waitTime: 1000
});
const lunConfig3 = ref({
  header: ["事件标题", "发布时间", "事件类型"],
  data: [
    ["VPN零日攻击", "2024-08-02 07:15:52", "远程攻击"],
    ["软件供应链攻击", "2024-08-02 07:15:51", "供应链安全"],
    ["VPN零日攻击", "2024-08-02 07:15:52", "信息暴露"],
    ["软件供应链攻击", "2024-08-02 08:15:49", "供应链安全"],
    ["用户数据窃取攻击", "2024-08-02 07:15:52", "远程攻击"],
    ["软件供应链攻击", "2024-08-02 07:15:51", "信息暴露"]
  ],
  headerBGC: "rgba(0, 0, 0, 0)",
  oddRowBGC: "rgba(0, 0, 0, 0)",
  evenRowBGC: "rgba(0, 0, 0, 0)",
  waitTime: 1000
});
</script>

<style lang="scss" scoped>
.hdpi-box {
  background: url(@/assets/images/dapinQing.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 55px);
  padding-bottom: 10px;
  box-sizing: border-box;
}

.hdpi-herder {
  width: 100%;
  height: 70px;
  color: #fdfeff;
  font-size: 14px;
  display: flex;
}

.hdpi-centen {
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
}

.time-css {
  width: 18%;
}

.centen-herder {
  width: 100%;
  display: flex;
}

.animation_line {
  width: 30% !important;
}

.animation_left {
  width: 35% !important;
}

.animation_right {
  width: 35% !important;
}

.herder-title {
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: 700;
  margin-top: 5px;
}

.centen-left {
  width: 28%;
  height: 100%;
  padding-left: 5px;
  padding-bottom: 5px;
}

.centen-centre {
  width: 42%;
  height: 100%;
  margin: 0 1% 0 1%;
}

.centen-right {
  width: 28%;
  height: 100%;
  padding-right: 5px;
  padding-bottom: 5px;
}

.left-Item {
  height: 33%;
  width: 100%;
  color: #fff;
}

.card-dv-herder {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  height: 14%;

  .dv-herder-title {
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .dv-herder-skip {
    color: #00f4f6;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}

.title-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(@/assets/images/mikuai.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
}

.card-dv-lun {
  width: 100%;
  height: 70%;
  padding-left: 4%;
}

:deep(.rows .row-item) {
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.8);
  font-weight: 400;
}

:deep(.header-item) {
  font-size: 12px;
}

.center-topCss {
  height: 40%;
  // border: 1px solid #243b85;
}

:deep(.card-boxDv .border-box-content) {
  display: flex;
  flex-wrap: wrap;
}

.loudong-icon {
  display: inline-block;
  width: 70px;
  height: 70px;
}

.lou-icon {
  background: url(@/assets/images/icon1.png) no-repeat;
  background-size: 100% 100%;
}

.an-icon {
  background: url(@/assets/images/icon2.png) no-repeat;
  background-size: 100% 100%;
}

.zu-icon {
  background: url(@/assets/images/icon3.png) no-repeat;
  background-size: 100% 100%;
}

.nv-icon {
  background: url(@/assets/images/icon4.png) no-repeat;
  background-size: 100% 100%;
}

.center-itemCard {
  display: flex;
  color: #fff;
  padding: 10px;
  width: 46%;
  align-items: center;
  justify-content: center;
}

.loudong-item {
  margin-left: 20px;
}

.loudong-title {
  font-size: 22px;
}

.center-bottomCss {
  width: 100%;
  height: 55%;
  margin-top: 5%;
}

.card-dv-box {
  overflow: hidden;
  height: 100%;
}
.amplifier {
  position: absolute;
  top: 100px;
  right: 10px;
  cursor: pointer;
}
.box12-css {
  padding: 20px;
  box-sizing: border-box;
}
</style>
