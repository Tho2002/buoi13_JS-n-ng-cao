///Callbacks
//HÀm callback(gọi lại) là một hàm được truyền vào đối số của hàm khác
//Hàm callback có thể được chạy sau khi những chức năng khác kết thúc
// VD 1:
// const congviec1 = () => {
//   console.log("cv 1");
// };
// const congviec2 = (ham) => {
//   console.log("cv 2");
//   ham();
// };

// congviec2(congviec1);
//VD 2:
// const soDuong = (num) => {
//   if (num >= 0) {
//     console.log("đây là dương");
//   } else {
//     console.log("âm");
//   }
// };
// import { soDuong } from "./helper/soDuong.js";
// import { chanle } from "./helper/chanle.js";

// const tinhTong = (a, b, callback) => {
//   const ketqua = a + b;

//   callback(ketqua); ///gọi hàm
// };
// tinhTong(10, 20, soDuong); //chuyền hàm
// tinhTong(32, 11, chanle);
/// Ví dụ 3//
// const loginSucces = () => {
//   console.log("đăng nhập thành công");
// };
// const checkLogin = (data, callback) => {
//   const email = "ldtho1604@gmail.com";
//   const password = "2222";
//   if (data.email === email && data.password === password) {
//     callback();
//   } else {
//     console.log("đăng nhập thất bại");
//   }
// };
// let data = {
//   email: "ldtho1604@gmail.com",
//   password: "22222",
// };
// checkLogin(data, loginSucces);

///2 Promise
//dùng để giải quyết vấn đề callback hell
//callbach hell là có nhiều hàm lồng nhau gây khó chịu
//promise có cách viết đơn giản và dễ nhìn hơn callback

//Cú pháp :
// var a = 10;
// var promise = new Promise((resolve, reject) => {
//   if (a === undefined) {
//     reject(); //thất bại
//   } else {
//     resolve(a); //thành công
//   }
// });
// promise
//   .then((a) => {
//     console.log(a);
//     return a;
//   })
//   .then((a) => {
//     const b = a + 10;
//     return b;
//   })

//   .then((b) => {
//     const c = b * 20;
//     console.log(c);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("thất bại");
//   });

///3 trạng thái
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("lỗi"); ///lỗi trả ra undeffine  romise {<rejected>: 'lỗi'}
//     // resolve(); //đang lấy data trong trạng thái Promise {<pending>}
//   }, 3000); ///sau 3 giây mới chạy hàm
// });
// setTimeout(() => {
//   console.log("sau 1 giây", promise);
// }, 1000); ///chạy sau 1 giây   Promise {<pending>}
// setTimeout(() => {
//   console.log("sau 2 giây", promise);
// }, 2000); ///chạy sau 2 giây   Promise {<pending>}
// setTimeout(() => {
//   console.log("sau 3 giây", promise);
// }, 3000); ///chạy sau 3giây Promise {<fulfilled>: undefined}

// ///fecth API dùng để gọi lên sever thông qua 1 âpi để lấy dữ liệu từ trên sever trả về
// //API là một url để cho phép FE có thể giao tiếp được với BE
// fetch("https://dummyjson.com/products") //call api backend
//   .then((response) => {
//     return response.json();
//   }) //chờ data BE chuyển đổi sang javascript

//   .then((data) => {
//     console.log(data.products);
//     const newArray = data.products.map((item) => {
//       return `<div>
//       <img src="${item.thumbnail}"  />
//       ${item.title}
//       ${item.price}$

//       </div>`;
//     });

//     const htmls = newArray.join("");
//     const productList = document.querySelector("#product-list");
//     productList.innerHTML = htmls;
//   });

////4 Async/await
//là một tính năng của JS giúp chúng ta làm việc với các hàm bất đồng bộ theo cách dễ hiêu hơn
//được xây dựng trên promise
//Async :khai báo một hàm bất đồng bộ
//tự động biến đổi một hàm thông thường thành một promise ,từ khóa async được đặt trước 1 hàm
//Await: Tạm dừng việc thực hiện các hàm async
//khi được đặt trước một promise ,nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả
//Await chỉ có thể được sử dụng bên trong các hàm async

//cú pháp
const fetchApi = async (api) => {
  const respone = await fetch(api);
  const data = await respone.json();
  return data;
};
// fetchApi("https://dummyjson.com/products").then((data) => {
//   console.log(data);
// });

//5 JSON sever
// fetchApi("http://localhost:3000/products").then((data) => {
//   console.log(data);
//   const newArray = data.map((item) => {
//     return `
// <div>
// <img src='${item.thumbnail}'/>
// ${item.id}
// ${item.title}
// ${item.description}
// ${item.price}$

// </div>
//     `;
//   });
//   const htmls = newArray.join("");
//   const listphone = document.querySelector("#product-list");
//   listphone.innerHTML = htmls;
// });

//5.2 POST MAN
//Phương thức get :lấy ra 1 hay nhiều bản ghi

//Phương thức post: tạo mới 1 bản ghi

//Phương thức put
//Phương thức delete
