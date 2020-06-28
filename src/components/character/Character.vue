<template>
  <div id="character">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 " v-for="person of persons" :key="person.char_id"  v-show="person.category !== 'Better Call Saul'">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-12 align-self-center">
                <img :src="person.img" alt="" class="Imgcharacter" />
              </div>
              <div class="col-md-12">
                <div class="card-body">
                  <h5 class="card-title">
                    <strong>{{ person.name }}</strong>
                  </h5>
                  <p class="h6">
                    <em>{{ person.nickname }}</em>
                  </p>
                  <p class="card-text text-left">
                    <strong>Id:</strong><small>{{ person.char_id }}</small>
                  </p>
                  <p class="card-text text-left">
                    <strong>Occupation:</strong><small>{{ person.occupation }}</small>
                  </p>
                  <p class="card-text text-left">
                    <strong>Birthday:</strong>
                    <small v-if="person.birthday === 'Unknown'">Não informada </small>
                    <small v-else>{{ person.birthday }}</small>
                  </p>
                  <p class="card-text text-left">
                    <strong>Seasons:</strong><small>{{ person.appearance }}</small>
                  </p>
                  <p class="card-text text-left">
                    <strong>Status:</strong><small>{{ person.status }}</small>
                  </p>
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
import { CharacterService } from './../../service/character/CharacterService';
import { ListCharacter } from '@/types/ListCharacter';
import GetCharacter from './../../service/GetCharacter';

@Component
export default class Character extends Vue {
  private persons: ListCharacter[] = [];

  mounted() {
    this.listar();
  }
  public listar() {
    GetCharacter.listar()
      .then(resposta => {
        this.persons = resposta;
      })
      .catch((err: any) => {
        err.message;
      });
  }
}
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
