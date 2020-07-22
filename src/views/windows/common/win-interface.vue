<template>
  <div class="main">
    <div class="main-grid">
      <div @click="handle(index)" class="main-grid-item" v-for="(item,index) in iconList" :key="index">
        <div class="img">
          <img :src="item.imgurl" alt />
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconList: [
        {
          imgurl: "../../../../static/img/win-home/computer.png",
          title: "我的电脑"
        },
        {
          imgurl: "../../../../static/img/win-home/file.png",
          title: "我的文档"
        }
      ]
    }
  },
  methods:{
        handle(index){
            alert(index)
        }
    }
};
</script>
<style lang="scss" scoped>
.main {
  overflow: hidden;
}
.main-grid {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(12, 100px);

  .main-grid-item {
    font-size: 14px;
    text-align: center;
    // border: 1px solid red;
    .img {
      width: 100%;
      height: 40%;
      text-align: center;
      img {
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>