<template>
  <div class="order">
    <div class="tips">请完善以下信息，否则无法为您开通账号</div>
    <div class="title">
      <div class="bg"></div>
      <span>账号信息</span>
    </div>
    <div class="bottom">
      <van-button class="button" round type="primary" @click="submit">
        确认提交
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'Order',
  // setup() {},
}
</script>
<style lang="scss" scoped></style>
