import axios from "axios";
import jsonp from "jsonp";

const configUrl = "http://106.14.32.178:8080/api";

const axiosURL = jsonp(
  axios.create({
    timeout: 5000,
    baseURL: configUrl,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
);

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

// 企业文化
export function getTabsData(params) {
  const options = {
    url: `/culture`,
    method: "get",
    data: { ...params },
  };
  return response(options);
}

// 企业证书
export function getCertificate(params) {
  const options = {
    url: `/certificate`,
    method: "get",
    data: { ...params },
  };
  return response(options);
}

// 企业证书
export function getBusiness(params) {
  const options = {
    url: `/business`,
    method: "get",
    data: { ...params },
  };
  return response(options);
}

//   我们的客户服务
export function getCustomer(params) {
  const options = {
    url: `/customer`,
    method: "get",
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
