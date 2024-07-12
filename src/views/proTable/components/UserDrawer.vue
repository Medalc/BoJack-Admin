<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}用户`">
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <slot></slot>
      <template v-for="item in drawerProps.row" :key="item">
        <el-form-item
          :label="item.label"
          :rules="[{ required: item.required, message: '请输入' + item.label }]"
          :prop="item.value"
        >
          <!-- <el-date-picker
            v-model="item.value"
            format="YYYY/MM/DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            type="date"
            style="width: 100%"
            placeholder="请选择创建时间"
          /> -->
          <component :is="item.myFormType.name" v-model.trim="item.value" v-bind="{ placeholder: '请输入' + item.label }">
            <template v-if="item.myFormType.name === 'el-select'">
              <component
                :is="`el-option`"
                v-for="(col, index) in columnEnum"
                :key="index"
                :label="col.label"
                :value="col.value"
              ></component>
            </template>
          </component>
        </el-form-item>

        <!-- selection || index -->
        <!-- <el-form-item :label="item.label" prop="address" v-if="item.myFormType.name == 'input'">
          <el-input v-model="drawerProps.row!.address" :placeholder="'请填写' + item.label" clearable></el-input>
        </el-form-item>
        <el-form-item :label="item.label" prop="address" v-if="item.myFormType.name == 'date'">
          <el-date-picker
            v-model="item.value"
            format="YYYY/MM/DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            type="date"
            style="width: 100%"
            placeholder="请选择创建时间"
          />
        </el-form-item> -->
      </template>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" v-show="!drawerProps.isView" @click="handleSubmit">确定</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="UserDrawer">
import { ref, reactive, computed } from "vue";
// import { genderType } from "@/utils/serviceDict";
import { ElMessage, FormInstance } from "element-plus";
import { User } from "@/api/interface";
// import UploadImg from "@/components/Upload/Img.vue";
// import UploadImgs from "@/components/Upload/Imgs.vue";

let rules = reactive({
  // avatar: [{ required: true, message: "请上传用户头像" }],
  // photo: [{ required: true, message: "请上传用户照片" }],
  // username: [{ required: true, message: "请填写用户姓名" }],
  // gender: [{ required: true, message: "请选择性别" }],
  // idCard: [{ required: true, message: "请填写身份证号" }],
  // email: [{ required: true, message: "请填写邮箱" }],
  // address: [{ required: true, message: "请填写居住地址" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  enumData: any;
  row: Partial<User.ResUserList>;
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}

const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  enumData: [],
  row: {}
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  console.log(params, "接收父组件传过来的参数");
  drawerProps.value = params;

  drawerVisible.value = true;
};

const columnEnum = computed(() => {
  console.log(drawerProps.value, "drawerProps.value.enumData");

  let enumData = drawerProps.value.enumData;
  if (!enumData) return [];
  // if (props.column.search?.el === "select-v2" && props.column.fieldNames) {
  //   enumData = enumData.map((item: { [key: string]: any }) => {
  //     return { ...item, label: item[fieldNames.value.label], value: item[fieldNames.value.value] };
  //   });
  // }
  return enumData;
});

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    try {
      console.log(drawerProps.value, "提交数据（新增");

      await drawerProps.value.api!(drawerProps.value.row);
      ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
      drawerProps.value.getTableList!();
      drawerVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({
  acceptParams
});
</script>
