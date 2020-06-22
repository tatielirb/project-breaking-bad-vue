<template>
  <div id="character">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <div class="card mb-3">
            <div class="card-header">
              <h5 class="card-title"><strong> Walter White</strong></h5>
            </div>
            <div class="row no-gutters">
              <div class="col-md-4 align-self-center card-left">
                <img
                  src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
                  alt=""
                  class="Imgcharacter"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="h6"><em>Heisenberg</em></p>
                  <p class="card-text text-left"><strong>Id:</strong><small></small></p>
                  <p class="card-text text-left"><strong>Occupation:</strong><small></small></p>
                  <p class="card-text text-left"><strong>Birthday:</strong><small></small></p>
                  <p class="card-text text-left"><strong>Seasons:</strong><small></small></p>
                  <p class="card-text text-left"><strong>Status:</strong><small></small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Character extends Vue {}
</script>

<style lang="less" scoped>
@import './../../assets/index.less';

.Imgcharacter {
  height: 300px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  opacity: 0.8;
}
</style>
