<template>
  <div class="home">
    <Character />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character } from '@/components/character';

@Component({
  components: {
    Character
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
@import './../assets/index.less';
.home {
  margin-top: 30px;
}
</style>
