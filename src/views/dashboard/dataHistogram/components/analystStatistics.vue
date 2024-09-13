<template>
  <div class="situation">
    <div class="title-qi">
      <div class="dv-herder-title"><span class="title-icon"></span> 漏洞情报类型分布</div>
    </div>
    <div ref="myChart" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, markRaw } from "vue";
import * as echarts from "echarts";

const myChart = ref<any>();
const line = ref<any>(null);

onMounted(() => {
  showChartLine();
  window.addEventListener("resize", () => {
    line.value.resize();
  });
});
let showChartLine = () => {
  // EchartsLineConsumption.series[0].data =
  // const colors = ["#da0922", "#ffa63e", "#009ce9", "#83f133"];
  let EchartsLineConsumption = {
    title: {
      left: "center"
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "注入" },
          { value: 735, name: "失效的身份" },
          { value: 580, name: "跨站脚本" },
          { value: 484, name: "敏感泄露" },
          { value: 300, name: "其他" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  line.value = markRaw(echarts.init(myChart.value));
  line.value.setOption(EchartsLineConsumption);
};
</script>

<style lang="scss" scoped>
.situation {
  width: 100%;
  height: 100%;
}
.title-qi {
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.qi-tabs {
  cursor: pointer;
}
.qi-tabs:hover {
  color: #3579d5;
}
.qi-tabs-left:hover {
  border: 1px solid #3579d5;
}
.qi-tabs-right:hover {
  border: 1px solid #3579d5;
  border-left: 0;
}

.qi-tabs-left {
  border: 1px solid #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 5px;
}
.qi-tabs-right {
  border: 1px solid #fff;
  border-left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 5px;
}
.tab-activate {
  color: #3579d5;
  border: 1px solid #3579d5;
}
.tab-activateLeft {
  color: #3579d5;
  border: 1px solid #3579d5;
  border-left: 0;
}
.title-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(@/assets/images/mikuai.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
}
.dv-herder-title {
  font-size: 16px;
  display: flex;
  align-items: center;
}
</style>
