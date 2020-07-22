<template>
    <div class="main">
        <win-interface class="main-interface"></win-interface>
        <win-footer class="main-footer"></win-footer>
    </div>
</template>
<script>
import winFooter from "./common/win-footer"
import winInterface from "./common/win-interface"
export default {
    components:{
        winFooter,
        winInterface
    }
}
</script>
<style lang="scss" scoped>
.main{
    background: url("../../../static/img/win-home/LenovoWallPaper.jpg");
    background-size: 100% 100%;
    position: relative;   
    height: 100%;
    width: 100%;
    .main-footer{
        // 这里不设置高度的话就是100%，还怎么居中，就是刚刚的错误
        height: 50px;
        background: rgba($color: #000000, $alpha: .5);
        position: absolute;
        bottom: 0;
       
    }
    .main-interface{
        height: 100%;
        overflow:hidden;
    }
}
</style>