<template>
  <div>
    <header>暂时没有</header>
    <div class="content">
      <div class="wrap">
        <div class="user-img">
          <img :src=userImg alt width="70" height="70"/>
        </div>
        <div class="msg">
          <div class="msg-top">
            <div class="username">{{username}}</div>
            <div class="leave">{{leave}}</div>
            <div class="vip-icon">
              <img src alt />
            </div>
          </div>
           <div class="msg-bottom">
              <div class="introduction">{{introduction}}</div>
            </div>
        </div>
        <div class="weather">
            <img width="70" height="70" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596022374113&di=5ebe2f308a456e1af493d669ae9b61c9&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F04%2F20150804135125_tArhC.jpeg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userImg:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg",
      username: "Agam",
      leave: "LV74",
      introduction: "stay follesh",
    };
  },
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.content .wrap{
    width: 300px;
    height: 100px;
    background-color: #00dd55;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.content .wrap .user-img img{
    border-radius: 50%;
}

.content .wrap .msg {
    width: 140px;
}
.content .wrap .msg .msg-top{
    display: flex;
    justify-content: space-between;
}
</style>