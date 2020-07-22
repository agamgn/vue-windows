<template>
    <div class="main">
       <div class="main-grid">
           <div class="main-grid-item">
               test
           </div>
          
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            iconList:[
                {}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    overflow: hidden;
}
.main-grid{
    display: grid;
    grid-template-columns: repeat(3,150px);
    grid-template-rows: repeat(12,160px);
    .main-grid-item{
        border: 1px solid red;
    }
}
</style>