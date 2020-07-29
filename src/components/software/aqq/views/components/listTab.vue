<template>
  <div>
    <div class="link-group">
      <!-- 这样写就会报错，原因是没有这个字符串？ -->
      <!-- <router-link to=msglist>消息</router-link> -->

      <router-link
        v-for="(item,index) in links"
        :key="index"
        :to="{path:item.path}"
      >{{item.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
        current:0,
      links: [
        {
          path: "msglist",
          title: "消息",
        },
        {
          path: "persionlist",
          title: "联系人",
        },
        {
          path: "roomlist",
          title: "空间",
        },
      ],
    };
  }
};
</script>
<style>
.link-group {
  display: flex;
}
.link-group a {
  text-align: center;
  text-decoration: none;
  height: 45px;
  line-height: 45px;
  width: 100px;
  color: #aaaaaa;
}
/* 注意下面的空格 ，书写的时候*/
/* .link-group a :hover{
color: black;
} */
.link-group a:hover{
    color: black;
}
.router-link-active{
    color: coral !important;
    border-bottom: 2px solid coral;
    
}
</style>