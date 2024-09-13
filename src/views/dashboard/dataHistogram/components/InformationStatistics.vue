<template>
  <div class="situation">
    <div class="title-qi">
      <div class="dv-herder-title"><span class="title-icon"></span> 安全情报趋势图</div>
      <div>
        <span class="qi-tabs-left qi-tabs" @click="tabFun(1)" :class="isTabs == 1 ? 'tab-activate' : ''">近7日</span>
        <span class="qi-tabs-right qi-tabs" @click="tabFun(2)" :class="isTabs == 2 ? 'tab-activate' : ''">近30日</span>
      </div>
    </div>
    <div ref="myChart" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, markRaw } from "vue";
import * as echarts from "echarts";

const myChart = ref<any>();
const line = ref<any>(null);
let isTabs = ref(1);

onMounted(() => {
  showChartLine();
  window.addEventListener("resize", () => {
    line.value.resize();
  });
});
const tabFun = (index: any) => {
  isTabs.value = index;
};

let showChartLine = () => {
  // EchartsLineConsumption.series[0].data =
  const colors = ["#da0922", "#ffa63e", "#009ce9", "#83f133"];
  let EchartsLineConsumption = {
    color: colors,
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross"
      }
    },
    legend: {
      textStyle: {
        color: "#6a6c76" // 设置图例文字的颜色为红色
      }
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false
          // lineStyle: {
          //   color: '000'
          // }
        },
        axisPointer: {
          label: {
            formatter: function (params: any) {
              return params.value + (params.seriesData.length ? "：" + params.seriesData[0].data : "");
            }
          }
        },
        // prettier-ignore
        data: ['漏洞情报', '组件情报', '安全事件', '安全资讯']
      },
      {
        type: "category",
        show: false
        // prettier-ignore
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "漏洞情报",
        type: "line",
        stack: "Total",
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name: "组件情报",
        type: "line",
        stack: "Total",
        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
      },
      {
        name: "安全事件",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410, 154, 190, 330, 410]
      },
      {
        name: "安全资讯",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334]
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
  margin-bottom: 10px;
}

.qi-tabs {
  cursor: pointer;
  background: url(@/assets/images/Wechat.jpg) no-repeat;
  background-size: 100% 100%;
  padding: 5px;
  text-align: center;
  color: #3579d5;
}

.qi-tabs:hover {
  background: url(@/assets/images/WechatActiwe.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}

.qi-tabs-left {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 5px;
}

.qi-tabs-right {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 5px;
}

.tab-activate {
  color: #fff;
  background: url(@/assets/images/WechatActiwe.jpg) no-repeat;
  background-size: 100% 100%;
}
.dv-herder-title {
  font-size: 16px;
  display: flex;
  align-items: center;
}
.title-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(@/assets/images/mikuai.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
}
</style>
