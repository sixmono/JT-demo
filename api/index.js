import axios from "axios";

const axiosURL = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === 'production' ? '/' : 'https://106.14.32.178:8080/api',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// function response (options) {
//     return new Promise((resolve, reject) => {
//         axiosURL(options).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   }

function response(options) {
  return new Promise((resolve, reject) => {
    axiosURL(options)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const options = {
  url: "", // 接口地址
  method: "", // 请求方式
};

// 简介
export function getBrief(params) {
  const options = {
    url: "/brief",
    method: "get",
    params: params,
  };
  return response(options);
}

// 核心优势
export function getAdvantage(params) {
  const options = {
    url: "/advantage",
    method: "get",
    params: params,
  };
  return response(options);
}

// 技术能力
export function getSolution(params) {
  const options = {
    url: "/solution?current=1&pagesize=10",
    method: "get",
    params: params,
  };
  return response(options);
}

// 我们的案例
export function getServers(params) {
  const options = {
    url: "/servere",
    method: "get",
    params: params,
  };
  return response(options);
}

export function getCases(params) {
  const options = {
    url: "/cases",
    method: "get",
    params: params,
  };
  return response(options);
}

// 新闻
export function getNews(params) {
  const options = {
    url: "/news",
    method: "get",
    params: params,
  };
  return response(options);
}

// 留言
export function getMessage(params) {
  const options = {
    url: `/message`,
    method: "post",
    data: { ...params },
  };
  return response(options);
}

response(options)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });