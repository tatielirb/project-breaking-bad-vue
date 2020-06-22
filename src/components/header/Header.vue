<template>
  <header class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 align-self-center">
          <img src="../../assets/logo.png" lt="{</>} tatieli ramos logo" class="logo" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="less" scoped>
@import './../../assets/index.less';

header {
  background: #4b6684;
  padding: 30px 0;

  img {
    width: 100%;
    height: auto;
    &.logo {
      width: 210px;
      height: auto;
      text-align: center;
    }
  }
}
</style>
