<template>
    <div class="search">
        <img src="../../../../../../static/img/software/aqq/search.png" width="20" height="20" alt="">
        <input type="text" placeholder="搜索">
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.search{
    width: 298px;
    border: 1px solid black;
    position: relative;
}
.search img{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 2px;
}
.search input{
    width: 270px;
    height: 25px;
    outline: 0;
    border: 0;
    padding-left: 28px;
}
</style>