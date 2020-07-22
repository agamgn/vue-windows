<template>
  <div class="main">
    <div class="left">
      <ul>
        <li class="item item-1">
          <div class="icon-img">
            <img width="25" height="25" src="../../../../static/img/win-footer/win.png" alt />
          </div>
        </li>
        <li class="item item-2">
          <div class="input">
            <img width="25" height="25" src="../../../../static/img/win-footer/task.png" alt />
            <input type="text" />
            <img width="25" height="25" src="../../../../static/img/win-footer/task.png" alt />
          </div>
        </li>
        <li class="item item-3">
          <div class="task-img">
            <img width="25" height="25" src="../../../../static/img/win-footer/task.png" alt />
          </div>
        </li>
      </ul>
    </div>
    <div class="content">

        <!-- 待定 -->

    </div>
    <div class="right">
      <div class="img-icon">
        <img width="25" height="25" src="../../../../static/img/win-footer/win.png" alt />
      </div>
      <div class="time">
        <div class="time-hourse">{{daytime}}</div>
        <div class="time-date">{{daydate}}</div>
      </div>
      <ul>
        <li v-for="(item,index) in dict" :key="index">{{item.icon}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      daytime: "14:31:41",
      daydate: "2020/7/22",
      dict: [
        {
          icon: "test"
        },
        {
          icon: "test2"
        },
        {
          icon: "test2"
        },
        {
          icon: "test2"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  height: 50px;
  .left {
    width: 450px;
    float: left;
    ul {
      .item {
        height: 50px;
        line-height: 50px;
        list-style: none;
        float: left;
        .icon-img {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .item-2 {
        .input {
          height: 50px;
          width: 350px;
          position: relative;
          //   background-color: red;
          input {
            height: 50px;
            width: 350px;
            outline: none;
            border: none;
          }
          img {
            position: absolute;
            // 这里可以合并的
            &:last-child {
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            &:first-child {
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
      .item-3 {
        .task-img {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .right {
    float: right;
    width: 350px;
    display: flex;
    flex-direction: row-reverse;
    .time {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      color: white;
      font-size: 14px;
      .time-hourse {
        align-self: center;
      }
    }
    .img-icon {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ul {
      margin-right: 15px;
      display: flex;
      flex-direction: row-reverse;
      //   justify-content: space-between;
      align-items: center;
      li {
        margin-right: 5px;
      }
    }
  }
}
</style>