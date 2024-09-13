<template>
  <div class="left-Item">
    <dv-border-box-13>
      <div class="card-dv-box">
        <div class="card-dv-herder">
          <div class="dv-herder-title"><span class="title-icon"></span> {{ title }}</div>
          <div class="dv-herder-skip" @click="openUrl" v-if="toUrl.isShow">
            更多
            <el-icon>
              <ArrowRight />
            </el-icon>
          </div>
        </div>
        <div class="card-dv-lun">
          <dv-scroll-board :config="lunConfig" style="width: 100%; height: 100%" />
        </div>
      </div>
    </dv-border-box-13>
  </div>
</template>
<script lang="ts" setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  lunConfig: { default: () => [] },
  toUrl: {
    default: () => ({ url: "", query: "", isShow: false })
  },
  title: { default: () => "" }
});
const openUrl = () => {
  router.push({ name: props.toUrl.url, query: { name: props.toUrl.query } });
};
// const lunConfig1 = ref({
//   header: ['漏洞编号', '发布时间', '漏洞类型'],
//   data: [
//     ['CVE-2024-39627', '2024-08-02 07:15:52', '信息暴露'],
//     ['CNNVD-202401-344', '2024-08-02 09:16:01', 'Sql注入'],
//     ['CVE-2024-39627', '2024-08-02 07:15:52', '信息暴露'],
//     ['CVE-2024-39627', '2024-08-02 09:16:01', 'XSS'],
//     ['CNNVD-202401-324', '2024-08-02 07:15:52', '信息暴露'],
//     ['CVE-2024-39627', '2024-08-02 05:04:52', 'Sql注入'],
//   ],
//   headerBGC: "rgba(0, 0, 0, 0)",
//   oddRowBGC: "rgba(0, 0, 0, 0)",
//   evenRowBGC: "rgba(0, 0, 0, 0)",
//   waitTime: 1000
// })
</script>

<style lang="scss" scoped>
.left-Item {
  height: 33%;
  width: 100%;
  margin-top: 1%;
  color: #fff;
}

card-dv-box {
  overflow: hidden;
  height: 100%;
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

.card-dv-box {
  overflow: hidden;
  height: 100%;
}
</style>
