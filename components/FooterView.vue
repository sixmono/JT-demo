<template>
  <div class="container">
    <div class="main">
      <h1>联系我们</h1>
      <h4>Contact Us</h4>
      <a-row :gutter="100">
        <a-col :span="16">
          <a-row>
            <a-col :span="12">
              <input
                name="name"
                placeholder="请输入姓名"
                v-model="messageValue.name"
                class="name"
              />
              <input
                name="phone"
                v-model="messageValue.phone"
                placeholder="请输入手机号"
                class="phone"
              />
            </a-col>
            <a-col :span="12">
              <textarea
                name="message"
                v-model="messageValue.content"
                placeholder="请输入留言内容"
                class="message"
              />
            </a-col>
            <a-button type="primary" class="btn" @click="submitClick">提交</a-button>
          </a-row>
        </a-col>
        <a-col :span="8" style="color: white: padding-left: 0;padding-right: 0;">
          <h2 style="font-size: 16px">上海疆通科技有限公司</h2>
          <h3>邮箱：sales@jungt.com</h3>
          <div>
            <img
              style="width: 110px; height: 110px"
              src="../static/FooterView/WeChat-official-account.png"
              alt=""
            />
            <div
              style="text-align: center; width: 110px; margin-top: 6px; color: #ffffff"
            >
              官方公众号
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="footer">
      上海疆通科技有限公司版权所有
      <a
        href="https://beian.miit.gov.cn/"
        style="list-style: none; text-decoration: none; color: purple"
        >沪ICP备</a
      >
      18029365号
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { getMessage } from "@/api/index.js";

const messageValue = ref({
  name: "",
  content: "",
  phone: "",
});

const submitClick = () => {
  if (messageValue.value.name === "") {
    alert("请输入姓名");
  } else {
    console.log(messageValue.value.name);
  }
  if (messageValue.value.phone === "") {
    alert("请输入电话");
  } else {
    console.log(messageValue.value.phone);
  }
  if (messageValue.value.name !== "" && messageValue.value.phone !== "") {
    getMessage(messageValue.value)
      .then((res) => {
        alert("您输入的信息我们已收到");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 570px;
  background: #1f242b;
  position: relative;
}
.main {
  padding: 60px 20%;
}
.main h1 {
  font-size: 40px;
  color: #ffffff;
}
.main h4 {
  font-size: 26px;
  color: #cccccc;
}
.main h2 {
  font-size: 22px;
  color: #ffffff;
}
.main h3 {
  font-size: 16px;
  color: #cccccc;
}
.firstIpt {
  width: 260px;
  height: 50px;
  background: #2f3640;
}
.secondIpt {
  width: 260px;
  height: 50px;
  background: #2f3640;
}
.thirdIpt {
  width: 400px;
  height: 120px;
  background: #2f3640;
}

.footer {
  height: 60px;
  width: 100%;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  font-size: 14px;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #292d34;
}
.btn {
  color: #ffffff;
  margin-top: 54px;
  font-size: 18px;
  width: 140px;
  height: 46px;
}

.name {
  width: 90%;
  height: 50px;
  background: #2f3640;
  list-style: none;
  border: none;
  outline: none;
  padding: 10px;
  color: #ffffff;
}
.phone {
  width: 90%;
  height: 50px;
  background: #2f3640;
  list-style: none;
  border: none;
  outline: none;
  margin-top: 20px;
  padding: 10px;
  color: #ffffff;
}
.message {
  width: 90%;
  height: 120px;
  padding: 20px;
  background: #2f3640;
  list-style: none;
  border: none;
  outline: none;
  color: #ffffff;
  vertical-align: top;
}
</style>
