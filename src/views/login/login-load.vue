<template>
  <div class="win10-login-wrap">
    <div class="login-group">
      <ul v-show="isShow" class="login">
        <li class="login-item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595392944864&di=61061b5cc1bb2055fca6d7a4192833f5&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg"
            alt
            width="100"
            height="100"
          />
        </li>
        <li class="login-item">
          <span class="username">{{name}}</span>
        </li>
        <li class="login-item">
          <div class="login-btn" @click="loginShow">登陆</div>
        </li>
      </ul>
      <ul v-show="!isShow" class="login">
        <li class="login-item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595392944864&di=61061b5cc1bb2055fca6d7a4192833f5&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg"
            alt
            width="100"
            height="100"
          />
        </li>
        <li class="login-item">
          <span class="username">{{name}}</span>
        </li>
        <li class="login-item">
          <div class="input">
            <input class="login-input" type="password" placeholder="密码" autofocus />
            <!-- <div class="img">test</div> -->
            <div class="img-wrap" @click="login">
              <img src="../../../static/img/login/right-arrow.png" alt />
            </div>
            <!-- <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg"
            />-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Adminstrans",
      isShow: true
    };
  },
  methods: {
    loginShow() {
      this.isShow = !this.isShow;
    },
    login() {
      // 密码验证正确
      this.$router.push("/windows");
    }
  }
};
</script>

<style lang="scss" scoped>
.win10-login-wrap {
  //   background: lemonchiffon;
  background-image: url("../../../static/img/login/9acd3a890be260f74413be99e9dc02050e0a0ebb35f4bb66036a64c77e31927c.jpg");
  position: relative;
  height: 100%;
  .login-group {
    // position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .login {
      height: 300px;
      width: 300px;
      // background: lightcoral;
      display: flex;
      flex-direction: column;

      .login-item {
        list-style-type: none;
        text-align: center;
        position: relative;
        margin-top: 20px;
        .input {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid rgba($color: #000000, $alpha: 0.5);
          background-color: white;
          height: 30px;
          width: 230px;
          .login-input {
            width: 210px;
            height: 30px;
            outline: none;
            border: 0;
            white-space: 2px;
          }
          //   此处换成div试一试，是宽度的问题？
          //   img {
          //     width: 40px;
          //     height: 40px;
          //     position: absolute;
          //     top: 0;
          //     right: 0;
          //     margin-top: 0;
          //     // text-align: right;
          //   }
          .img-wrap {
            width: 30px;
            height: 31px;
            position: absolute;
            top: 0;
            right: -1px;
            background: rgba($color: #000000, $alpha: 0.7);
            &:hover {
              background: rgba($color: #000000, $alpha: 1);
            }
            img {
              width: 30px;
              height: 30px;
              margin-top: 0;
            }
          }
        }

        img {
          margin-top: 50px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
        .username {
          font-size: 20px;
          color: white;
        }
        .login-btn {
          width: 100px;
          height: 30px;
          line-height: 30px;
          color: white;
          margin: 0 auto;
          font-size: 15px;
          background: rgba($color: #000000, $alpha: 0.2);
          &:hover {
            background: rgba($color: #000000, $alpha: 0.5);
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>