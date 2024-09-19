// const reg = new RegExp("will", "i");
// const str =
//   "i will go 1go go0 0go0 to school yesterday $%&*(*)_*&%^%@#_- 1234567890";

// // console.log(str.match(reg));
// // console.log(str.match(/\Bgo\B/));
// console.log(str.match(/0$/g));
// console.log(str.match(/^w/g));
// console.log(str.match(/will/g));
// console.log(/^(\d{4})\s\d{3}\s(\d{3})$/g.test("1234 123 456"));
// console.log(str.replaceAll(/\w{1,6}(?=l)/g, "yeees"));

// class User {
//   #e;
//   static ee = 0;
//   constructor(u, i, e) {
//     this.username = u;
//     this.age = i;
//     this.#e = e;
//     User.ee++;
//   }
//   fun() {
//     return parseInt(this.#e);
//   }
// }
// class Admin extends User {
//   static ee = 0;
//   constructor(u, i, e) {
//     super(u, i, e);
//     Admin.ee++;
//   }
// }
// const us = new Admin("1", 1, 100);
// const us1 = new Admin("1", 1, 100);
// const us2 = new Admin("1", 1, 100);
// const us4 = new User("1", 1, 100);
// console.log(us);
// console.log(us.fun());
// console.log(User.ee);
// console.log(Admin.ee);

// console.log("1. بداية البرنامج");

// const myPromise = new Promise((resolve) => {
//   console.log("2. داخل الـ Promise (متزامن)");
//   resolve("تم الحل");
// }).then((result) => {
//   console.log("4. " + result + " (غير متزامن)");
// });

// console.log("3. بعد إنشاء الـ Promise");

// console.log("5. نهاية البرنامج");
fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    return result.json();
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });
