// 1- 2 -vazifa yil ko'rsat
let kiritilganYosh = prompt("hurmatli foydalanuvchi yoshingizni kiriting men sizga tug'ilgan yilingizni va 3 yildan keyin necha yoshda bo'lishingizni ko'rsataman");
let javob = alert(2023 - kiritilganYosh);
let javob3 = alert(Number(kiritilganYosh)+3);


// 3 yildan keyin nechi yoshga kirishini ko'rsat
// let kiritilganYil = prompt(
//   "hurmatli foydalanuvchi yilingizni kiriting men sizga 3 yildan keyin necha yoshda bo'lishingizni ko'rsataman"
// );
// let javob1 = alert(2026 - kiritilganYil);

//3-vazifa nechi yosga kirishni hohlidi va shu yosh uchun nechi yil kerak
let dreamAge = prompt(
  "hurmatli foydalanuvchi nechi yoshga kirishni hohlaysiz"
); 
let javob2 = alert( (dreamAge - kiritilganYosh) + " " + "shu yildan keyin siz hohlagan yoshga kirasiz");