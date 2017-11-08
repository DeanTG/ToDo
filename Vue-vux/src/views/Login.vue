<template>
  <div id="login">
    <h1><i class="iconfont icon-todo"></i></h1>
    <div class="form-container">
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
          <flexbox :class="activeColor[0]" class="item" :gutter="0">
            <flexbox-item :span="1/10" class="item-title">
              <i :class="activeColor[0]" class="iconfont icon-account"></i>
            </flexbox-item>
            <flexbox-item :span="9/10">
              <x-input v-model="value1" placeholder="账号" on-focus=""></x-input>
            </flexbox-item>
          </flexbox>
          <flexbox :class="activeColor[1]" class="item" :gutter="0">
            <flexbox-item :span="1/10" class="item-title">
              <i :class="activeColor[1]" class="iconfont icon-password"></i>
            </flexbox-item>
            <flexbox-item :span="9/10">
              <x-input v-model="value4" type="password" placeholder="密码" @focus.native="focus"></x-input>
            </flexbox-item>
          </flexbox>
        </group>
        <x-button type="primary" class="login">登录</x-button>
    </div>
  </div>
</template>
<script>
import {
  GroupTitle,
  Group,
  Cell,
  XInput,
  Selector,
  PopupPicker,
  Datetime,
  XNumber,
  XAddress,
  XTextarea,
  XSwitch,
  XButton,
  Flexbox,
  FlexboxItem
} from "vux";
export default {
  data() {
    return {
      value1: "",
      value2: "工艺技术",
      value3: "",
      value7: "",
      value8: "",
      value4: "",
      time1: "2017-06-01",
      value5: ["A"],
      value6: [],
      list: [["A", "B", "C"]],
      numberValue: 0,
      activeColor: [false,false]
    };
  },
  methods:{
    focus(){
      console.log(1)
    }
  },
  components: {
    Group,
    GroupTitle,
    Cell,
    XInput,
    Selector,
    PopupPicker,
    XAddress,
    Datetime,
    XNumber,
    XTextarea,
    XSwitch,
    XButton,
    Flexbox,
    FlexboxItem
  }
};
</script>
<style lang="less">
@import "../assets/less/base.less";
@import "http://at.alicdn.com/t/font_461053_w8kbz1mtkdpfogvi.css";

body {
  background: #fdfdfd;
}

#login {
  width: 90%;
  margin: 0 auto;
  h1 {
    margin-top: 40px;
    text-align: center;
    .icon-todo {
      color: @baseColor;
      font-size: 50px;
    }
  }
  .form-container {
    width: 90%;
    padding: 20px;
    margin-top: 40px;
    border: @border;
    background: #fff;
    .item {
      position: relative;
      &.active:before{
        border-top-color: $baseColor;
        color: $baseColor;
      }
      &:before {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        z-index: 2;
      }
    }
    .item-title{
      text-align: center;
      i{
        font-size: 18px;
        color: #C7C7C7;
        &.active{
          color: $baseColor;
        }
      }
    }
    .login{
      margin-top: 50px;
    }
  }
  .weui-cells:before,
  .weui-cells:after,
  .weui-cell:before {
    display: none !important;
  }
}
</style>


