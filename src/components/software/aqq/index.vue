<template>
  <div class="main">
    <form action="/chatmain" class="form">
      <div class="img">
        <img width="100" height="100" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg" />
      </div>

      <div class="input-group">
        <div class="input username">
          <img width="20" height="20" src="../../../../static/img/software/aqq/login.png" alt />
          <input type="text" name id />
        </div>
        <div class="input password">
          <img width="20" height="20" src="../../../../static/img/software/aqq/pwd.png" alt />

          <input type="password" name id />
        </div>
        <div class="check-group">
          <div class="auto-login">
            <input type="checkbox" name id="auto-login-input" />
            <label for="auto-login-input">自动登陆</label>
          </div>
          <div class="repwd">
            <input type="checkbox" name id="repwd-input" />
            <label for="repwd-input">记住密码</label>
          </div>
          <div class="forpwd"><a href>找回密码</a></div>
        </div>
        <div class="login">
          <input type="submit" @click="login" value="登录" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {

    methods:{
        login(){
            
            this.$router.push("/chatmain")
        }
    }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.main {

  display: flex;
  justify-content: center;
  align-content: center;
}
.main .form {

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.main .form .img img{
    border-radius: 50%;
}
.main .form .input-group {
    
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input-group .input {
  width: 270px;
  height: 25px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}
.input-group .input input {
  outline: 0;
  border: 0;
  height: 25px;
  width: 240px;
  padding-left: 30px;
  font-size: 16px;
}
.input-group .input input:focus{
    border-bottom: 1px solid #00CCFF;
}
.input-group .input img{
    position: absolute;
}
.input-group .check-group {
  font-size: 14px;
  display: flex;
  line-height: 25px;
  justify-content:space-between;
  color: #BBBBBB
}
.input-group .check-group a {
  text-decoration: none;
  color: #BBBBBB;
}

.input-group .login {
  height: 30px;
  width: 270px;
}
.input-group .login input {
  height: 40px;
  width: 270px;
  line-height: 40px;
  font-size: 16px;
  outline: 0;
  border: 0;
  border-radius: 5px;
  color: white;
  background-color: #00ccff;
}
</style>