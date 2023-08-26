function bubble_sort(arr) {
  for (let item = 0; item < arr.length; item++) {
    for (let i = 0; i < arr.length - 1 - item; i++) {
      if (arr[i] > arr[i + 1]) {
        let numb = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = numb;
      }
    }
  }
  return arr.flat();
}

let mas = [22, 11, 3, 5, 66, 7, 33];

console.log(bubble_sort(mas));

//Примеры на замыкание //

function creteStape() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let step = creteStape();
step();
step();
step();

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function careateBugger() {
  let s = 0;
  return function begger() {
    s += random(0, 100);
    console.log(s);
    if (s >= 250) return;
    begger();
  };
}

let begg1 = careateBugger();
begg1();

// function max_name(name1, name2, name3) {
//   let longest_name = "";

//   if (name1.length >= name2.length && name1.length >= name3.length) {
//     longest_name = name1;
//   } else if (name2.length >= name1.length && name2.length >= name3.length) {
//     longest_name = name2;
//   } else {
//     longest_name = name3;
//   }
//   return longest_name;
// }
// console.log(max_name("Alex", "George", "Michael"));

// // пропорции //
// let procent = (a, b) => {
//   a = +prompt("Введите число");
//   b = +prompt("Число для пропорции");
//   if (a >= b) {
//     alert(`${(b * 100) / a}%`);
//   } else {
//     alert("Не коректно");
//   }
// };
// procent();

// // фибоначи //
// let n = +prompt("Введите число");
// let fib = [0, 1];
// for (let i = 2; i <= n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }
// alert(fib[n]);

// let bank = [
//   {
//     name: "ruxshona beaty salon",
//     budget: 13000,
//     tax: 12,
//     expensesPerYear: [
//       {
//         title: "rent",
//         total: 6000,
//       },
//       {
//         title: "others",
//         total: 7000,
//       },
//       {
//         title: "ads",
//         total: 2000,
//       },
//     ],
//   },
//   {
//     name: "emin nosfrush",
//     budget: 5000,
//     tax: 0,
//     expensesPerYear: [
//       {
//         title: "rent",
//         total: 300,
//       },
//     ],
//   },
//   {
//     name: "akva mashennik",
//     budget: 80000,
//     tax: 15,
//     expensesPerYear: [
//       {
//         title: "rent",
//         total: 3008,
//       },
//     ],
//   },
// ];

// let nalog = 0;
// let banktax;
// for (let item of bank) {
//   let calcnalog = (item.budget / 100) * item.tax;

//   if (calcnalog > nalog) {
//     nalog = calcnalog;
//     banktax = item;
//   }
// }

// console.log(banktax);

// for (let item of bank) {
//   let all = 0;
//   for (let i of item.expensesPerYear) {
//     all += i.total;
//   }
//   item.procent = `${all / (item.budget / 100)}%`;
//   console.log(item);
// }

// let lucky = [];
// let unlucky = [];

// for (let item of bank) {
//   let calcnalog = (item.budget / 100) * item.tax;
//   let all = 0;
//   for (let i of item.expensesPerYear) {
//     all += i.total;
//   }
//   if (item.budget - (calcnalog + all) > 0) {
//     lucky.push(item);
//   } else {
//     unlucky.push(item);
//   }
// }

// console.log(lucky);
// console.log(unlucky);

//  let password = 7777;
//  let count = 3;
//  let ale;

//  do {
//    ale = +prompt(`Введите пароль осталось ${count} попытки`);
//    count--;

//  } while (ale !== password && count != 0);

// // Отфильтровать задачи в переменные а и b
// // Сохранить количество в ключе count
// // Сохранить сами задачи в массиве-ключе arr
// let arr = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut au`tem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",

//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true,
//   },
//   {
//     userId: 1,

//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true,
//   },
// ];
// let a = {
//   count: 0,
//   arr: [],
// };

// let b = {
//   count: 0,
//   arr: [],
// };

// arr.forEach((i) => {
//   if (i.completed === true) {
//     a.arr.push(i);
//     a.count++;
//   } else {
//     b.arr.push(i);
//     b.count++;
//   }
// });

// console.log(a);
// console.log(b);

// // Раскидать людей в разные массивы в зависимости от их почты
// let users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];
// let emails = {
//   org: [],
//   net: [],
//   info: [],
// };
// let other = [];

// let filt2 = users.filter((i)=> {
//     if(i.email.includes('org')){
//         emails.org.push(i)
//     }else if(i.email.includes('net')){
//         emails.net.push(i)
//     }else if(i.email.includes('info')){
//         emails.info.push(i)
//     }else {
//         other.push(i)
//     }
// })

// console.log(emails);
// console.log(other);

// let types = {
//   number: [],
//   string: [],
//   boolean: [],
//   object: [],
// };

// const obj1 = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   hobbies: ["reading", "swimming"],
// };

// const obj2 = {
//   address: "123 Main St",
//   phone: "555-555-5555",
//   isAdmin: true,
//   job: {
//     title: "Developer",
//     company: "ABC Corp",
//   },
// };

// // 1. Соеденить два объекта в одно целое но не изменяя исходные данные
// let obj = { ...obj1, ...obj2 };

// // 2. Из этого объекта вытащить все клюи в отдельную переменную (ключи)
// let keys = Object.keys(obj);

// // 3. Из этого объекта вытащить все значени в отдельную переменную (значения)
// let values = Object.values(obj);

// // 4. Эти два полученных массива вы должны соеденить
// let arr = keys.concat(values);

// arr.forEach((item) => {
//   let type = typeof item;
//   if (type === "number") {
//     types.number.push(item);
//   } else if (type === "string") {
//     types.string.push(item);
//   } else if (type === "boolean") {
//     types.boolean.push(item);
//   } else if (type === "object") {
//     if (Array.isArray(item)) {
//       types.object = types.object.concat(item);
//     } else {
//       types.object.push(item);
//     }
//   }
// });

// console.log(types);

// let popArtists = [
//   "usmonova",
//   "morgenshtern",
//   "baskov",
//   "eldzhey",
//   "50cent",
//   "eminem",
//   "oxy",
// ];
// let long = popArtists[0];
// popArtists.forEach((nam) => {
//   if (nam.length < long.length) {
//     long = nam;
//   }
// });
// console.log(long);

// let cars = [
//   {
//     name: "malibu",
//     price: 31000,
//   },
//   {
//     name: "nexia",
//     price: 12000,
//   },
//   {
//     name: "onix",
//     price: 21000,
//   },
//   {
//     name: "tahoe",
//     price: 100000,
//   },
//   {
//     name: "cobalt",
//     price: 13000,
//   },
//   {
//     name: "tracker",
//     price: 26000,
//   },
//   {
//     name: "kia k5",
//     price: 43000,
//   },
//   {
//     name: "santafe",
//     price: 50000,
//   },
//   {
//     name: "elantra",
//     price: 35000,
//   },
//   {
//     name: "tico",
//     price: 2500,
//   },
// ];

// let max = 0
// cars.forEach((cel)=> {
//   if(cel.price > max){
//     max = cel.price
//   }
// })
// console.log(max);

// let ever = 0
// cars.forEach((cel)=> {
//   ever += cel.price
// })
// ever /= cars.length
// console.log(ever);

// //  +prompt("Введите число мин ${arr.map((arr) => arr.n)")}\n //
// let from = +prompt("Введите число мин"); // 10000
// let up = +prompt("Введите число мак"); // 40000

// let arr = cars.filter((car) => car.price >= from && car.price <= up);

// if (arr.length === 0) {
//   alert("Нет машины с такой ценой.");
// } else if (arr.length === 1) {
//   let Car = arr[0];
//   let inf = confirm(
//     `Вы выбрали ${Car.name} за ${Car.price}. Хотите купить? Да/Нет`
//   );
//   if (inf === true) {
//     let payment = prompt(`Введите сумму для оплаты ${Car.price}:`);
//     if (payment == Car.price) {
//       alert(`Спасибо за покупку ${Car.name}!`);
//     } else {
//       alert("Не достаточно денег");
//     }
//   } else {
//     alert("Приходите еще");
//   }
// } else {
//   alert("Выберите машину из списка:");
//   arr.forEach((car, index) => {
//     alert(`${index + 1}. ${car.name} за ${car.price}`);
//   });
//   let choice = prompt("Введите номер машины:");
//   if (choice >= 1 && choice <= arr.length) {
//     let Car = arr[choice - 1];
//     let inf = confirm(
//       `Вы выбрали ${Car.name} за ${Car.price}. Хотите купить? Да/Нет`
//     );
//     if (inf === true) {
//       let payment = prompt(`Введите сумму для оплаты ${Car.price}:`);
//       if (payment == Car.price) {
//         alert(`Спасибо за покупку ${Car.name}!`);
//       } else {
//         alert("Оплата не принята.");
//       }
//     } else {
//       alert("Приходите еще");
//     }
//   } else {
//     alert("Приходите еще.");
//   }
// }

// какую вы из этих машин купите ?

// если выбирает конкретную машину то следующий промпт с просьбой оплатить стоимость этой машины

// let arr = [
//   "ruxshona",
//   "jojo",
//   "ulmas",
//   "shoxrux",
//   "javohir",
//   "samir",
//   "damir",
//   "jasmina",
// ].find((name) => name.length % 2 === 0);
// console.log(arr);

//  let nam = prompt('Ваше имя')

//  if(nam.length % 2 == 0){
//      alert('проходите')
//  }else{
//      alert('нет')
//  }

//  let num = +prompt('Четность числа')

//  if( num % 2 == 0){
//      alert('четно')
//  }else{
//      alert('нет')
//  }

//  let chislo = +prompt('числа')
//  let znak = prompt('+/-/*/ : через знак /')
//  let chislo1 = +prompt('числа')

//  if(znak == '+'){
//      alert(chislo + chislo1)
//  }else if(znak == '-'){
//      alert(chislo - chislo1)
//  }else if(znak == '*'){
//      alert(chislo * chislo1)
//  }else if(znak == '/'){
//      alert(chislo / chislo1)
//  }else {
//      alert('нет')
//  }

// let month = +prompt('сезон')
// if(month >= 3 && month <= 6){
//     alert('Весна')
// }else if(month >= 6 && month <= 9){
//     alert('Лето')
// }else if(month >= 9 && month <= 11){
//     alert('Осень')
// }else if(month >= 2){
//     alert('Зима')
// }else if(month == 12){
//     alert('Зима')
// }else {
//     alert('Нет')
// }

//  let myv = 123
//  console.log(myv instanceof String);
//  console.log(typeof myv);
//  let myv2 = myv
// console.log(myv2);

// let m = Math.random()
// m = String(m).slice(2)
// m = Number(m)
// console.log(m);

// // let nam = prompt('Введите имя')
// // let n = nam.slice(0,1).toUpperCase()  + nam.slice(1).toLowerCase()
// // console.log(n);

// let ran = Math.ceil(Math.random() * 899) + 100
// console.log(ran);

// let hell = "hELLOwORLD"
//   let h = hell.slice(0, 1).toUpperCase() + hell.slice(1, 5).toLowerCase()
//   let w = hell.slice(5, 6).toUpperCase() + hell.slice(6).toLowerCase()
//    w = w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()
//    hell = `${h} ${w}`
//    console.log(hell)

//  let a = prompt('Введите дробное число через .')
//  let b = prompt('Введите на какую степень хотите возвести')
//  let c = a ** b
//  let str = c.toString()
//  console.log(c);
//  console.log(str);
//  alert(Math.ceil(c));

// let a = +prompt('Введите дробное число через .')
// let b = +prompt('Введите натуральное число')
// let c = +prompt('На какю степень хотите воздвигнуть')
// let result = (a + b) **c

// alert(Math.ceil(result),);

//  let hotel = [

//       // 1 этаж //

//       [
//       {
//       room: 1,
//       price: 300,
//       brand: "Luxe",
//       children: false,
//       },
//       {
//       room: 2,
//       price: 4000,
//       brand: "Deluxe",
//      children: true,
//       },
//       {
//       room: 3,
//       price: 1000,
//       brand: "Deluxe",
//       children: false,
//       },
//       {
//      room: 4,
//       price: 900,
//      brand: "Luxe",
//       children: true,
//       },
//       ],

//       // 2 этаж //

//       [
//       {
//       room: 5,
//       price: 700,
//       brand: "Luxe",
//       children: true,
//      },
//       {
//      room: 6,
//       price: 79000,
//       brand: "President",
//       children: true,
//       },
//      {
//       room: 7,
//       price: 600,
//       brand: "Luxe",
//       children: false,
//      },
//       {
//       room: 8,
//       price: 950,
//       brand: "Luxe",
//       children: true,
//       },
//       ],

//        // 3 этаж //

//       [
//       {
//       room: 9,
//       price: 1900,
//       brand: "Deluxe",
//       children: false,
//       },
//      {
//       room: 10,
//       price: 5000,
//      brand: "Deluxe",
//       children: true,
//       },
//       {
//       room: 11,
//       price: 1000,
//       brand: "Deluxe",
//       children: false,
//       },
//      {
//       room: 12,
//       price: 250,
//       brand: "Luxe",
//       children: false,
//       },
//       ],

//        // 4 этаж //

//       [
//       {
//       room: 13,
//       price: 10000,
//       brand: "President",
//       children: true,
//       },
//       {
//       room: 14,
//       price: 8000,
//       brand: "President",
//       children: false,
//       },
//       ],
//      ];

//      let rooms = {
//       all_roms: [],
//      rooms: 0,
//      };
//      let brands = {
//       president: [],
//       deluxe: [],
//       luxe: [],
//      };

//      let room_level = {
//       perviy: 0,
//       vtoroy: 0,
//       tretiy: 0,
//       chetvertiy: 0,
//      };

//  let fun = function(){
//      let child_room = []

//      // 1 задание //
//  for(let item of hotel){
//     for(let i of item){
//      let branding = i.brand
//      if(branding == "President"){
//          brands.president.push(branding)
//      }else if(branding == "Deluxe"){
//      brands.deluxe.push(branding)
//  }else if(branding == "Luxe"){
//      brands.luxe.push(branding)
//  }else{
//      break
//  }
//  }

//  // 2 задание //
//  for(let eat of item){
//      eat.eating = true
//  }

//  // 3 задание //
//  for(let rum of item){
//      rooms.all_roms.push(rum.room)
//      rooms.all_roms.sort((a, b)=> a - b)
//      rooms.rooms++
//  }

//  // 7 задание //

//      for(let chl of item){
//          if(chl.children == true){
//              child_room.push(chl)
//          }else{

//          }
//      }

//  }

//  // 4 задание //
//  let max_price = hotel.flat().sort((a, b) => a.price - b.price );
//  let ma_price = max_price.pop()

//  // 5 задание //

//  for (let item = 0; item < hotel.length; item++) {
//       let floor_price = 0;
//      for (let i = 0; i < hotel[item].length; i++) {
//       floor_price += hotel[item][i].price;
//       }
//       if (item === 0) {
//       room_level.perviy = floor_price;
//       } else if (item === 1) {
//      room_level.vtoroy = floor_price;
//       } else if (item === 2) {
//       room_level.tretiy = floor_price;
//       } else if (item === 3) {
//      room_level.chetvertiy = floor_price;
//       }else{
//          break
//      }
//      }

//      // 6 задание //
//   let all_price = hotel.flat().reduce((a, b) => a + b.price, 0)

//  console.log(room_level);
//  console.log(brands);
//  console.log(rooms);
//  console.log(child_room);
//  console.log(all_price);
//  console.log(ma_price);
//  }
//  console.log(fun())

// Задача 1 //
//  let c = 'first'
//  let e = 'second'

//  function reverse() {
//     c = 'second'
//     console.log(c)
//  }
//     reverse()
//  function reverse1() {
//     e = 'first'
//     console.log(e)
//    }
//    reverse1()

//  // Задача 2 //
//  function max_name(name1,name2,name3) {
//     let longest_name = '';

//     if(name1.length >= name2.length && name1.length >= name3.length) {
//         longest_name = name1;
//     } else if(name2.length >= name1.length && name2.length >= name3.length) {
//         longest_name = name2;
//     } else {
//         longest_name = name3;
//     }
//     return longest_name // как это работает ? //
//  }

//  console.log( max_name('Alex', 'George', 'Michael'))

// // Задача 3 //
//  function email_machine() {
//     let user_name = prompt('Введите имя')
// let user_sername = prompt('Введите Фамилию')
//     let casino = Math.floor(Math.random() * 3) + 1
//     if (casino == 1) {
//         alert(`${user_name}${user_sername}@gmail.com`)
//     }else if(casino == 2) {
//         alert(`${user_sername}${user_name}@gmail.com`)
//     }else {
//         alert(`@gmail.com${user_sername}${user_name}`)
//     }
//  }

//  email_machine()

//  // Задача 4 //
//  let fun = () => {
//     return 'Привет мир'
//  }
//  console.log(fun());

//  let fun1 = () => {
//     console.log('Привет мир');
//  }
//  fun1()

// // Задача 5 //

// let time = setTimeout(() => {
//     console.log('Привет мир!')
// }, 15000)

//     let i = 1
//     let time1 = setInterval(() => {
//        console.log(`Сообщение ${i}`)
//        i++;
//        if(i > 4){
//            clearInterval(time1)
//        }
//        }, 2000)
//        let time2 = setTimeout(() => {
//         console.log('Сообщение 5')
//     }, 10000)

// // Задача 6 //
// function weatherForecast(city, weather) {
// if(weather == '' || weather == undefined){
//     console.log('Прогноз погоды для города' + city+ ':'+ 'Отличная погода')
// }else {
//     console.log('Прогноз погоды для города' + city+ ':'+ weather)
// }
// }
// weatherForecast('Dubai', 'Солнечно')
// weatherForecast('France')

// // Задача 7 //
// function createGreeting() {
//     let greetingString = "Hey, this is"

//     function greet(imya){
//     return `${greetingString} ${imya}`
// }
//     function changeGreeting(change) {
//     greetingString = change
// }
// return {
//     greet,
//     changeGreeting,
// };
// }

// let greeting1 = createGreeting()

// console.log(greeting1.greet('Bob'))

// // Задача 8 //

// let week = ['Суббота', 'Панидельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Воскрксенье',]

// let today = new Date().getDay()

// console.log(`Сегодня ${week[today]}`)

//   let lines = +prompt('Елка');
//   let str = ""

//   for (let item of Array(lines)){
//       str += "*"
//       console.log(str)

//   }

//   let lines1 = +prompt('Елка-')
//   let str1 = "*"
//   let star = str1

//   for (let item = 0; item < lines1; item++){
// console.log(star)

// star = star + str1
// if(item == lines1 - 1){
//  for(let item = lines1; item > 0; item--){
//    star = star.slice(0, -1)
//    console.log(star)
//  }
// }
//   }

//  let n_arr = [[1,2,3],4,5,[[6,7],10],8,9]
//  n_arr = n_arr.flat(Infinity)
//  n_arr.sort((a, b) => a- b)
//  console.log(n_arr)

// let arr1 = [[{a: {price: 20}}],[{a: {price: 35}}],[{a: {price: 44}}]]

// let total1 = 0;

// for (let item of arr1){
//     for(let i of item){
//         let inn = i.a.price
//         total1 += inn;
//     }
// }
// console.log(total1)

//  let discount = +prompt('Какая скидка?')

//  let totalSale = 0

//  let total = 0

//  let max = {
//      name: '',
//      price: 0,
//  }

//  let min = {
//      name: '',
//      price:Infinity,
//  }

//  let average = 0

//  let arr = [

//  {

//  name: 'Milk',

//  price: 3.25

//  },

//  {

//  name: 'Coffee',

//  price: 1.5

//  },

//  {

//  name: 'Ice Cream',

//  price: 7.85

//  },

//  {

//  name: 'Tomatos',

//  price: 4.14

//  },

//  {

//  name: 'Onion',

//  price: 2.25

//  }

//  ]

//  let arr_sale = []

//  for(let item of arr){
//      if(item.price > max.price){
//          max = item
//      }
//  }
//  console.log(max)

//  for(let item of arr){
//      if(item.price < min.price){
//          min = item
//      }
//  }
//  console.log(min)

//  for(let item of arr){
//      total += item.price
//  }
//  console.log(total)

//  for(let item of arr){
//      let scitca = item.price-(item.price / 100 * discount)
//      totalSale += scitca
//  }
//  console.log(totalSale)
//  for(let item of arr){
//      let scidka = item.price -(item.price / 100 * discount)

//    arr_sale.push(`Цена со скидкой ${scidka}`);

//  }

//  console.log(arr_sale);

//  for(let item of arr){
//      average += item.price
//  }
//  average /= arr.length;

//  console.log(average);

// 1 Задание //
// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed":
//             true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].completed == false) {
//         a.arr.push(arr[i]);
//     } else if (arr[i].completed == true) {
//         b.arr.push(arr[i]);
//     }
// }
// a.count = a.arr.length;
// b.count = b.arr.length;
// console.log(a);
// console.log(b);

// // 2 Задание //

// let arr1 = [4, 16, 19, 22, 11, 144, 967, 19124]

// let even = []
// let odd = []

// for (let i1 = 0; i1 < arr1.length; i1++) {
//     if (arr1[i1] % 2 == 0) {
//         even.push(arr1[i1])
//     } else {
//         odd.push(arr1[i1])
//     }
// }

// console.log(even);
// console.log(odd);

// // 3 Задание //

// let cheap = []

// let cars = [{
//     carBrand: "BMW",
//     price: 25000,

// },
// {
//     carBrand: "Audy",
//     price: 40000,

// }]

// for (let i2 = 0; i2 < cars.length; i2++) {
//     if (cars[i2].price < 35000) {
//         cheap.push(cars[i2])
//     }
// }

// console.log(cheap)

// // 4 Задание //

// let arr2 = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];
// let index = prompt('Введите индекс который хотите удалить ');

// if(index <= arr2.length -1){
//     arr2.splice(index,1)
// }else{
//     alert('Не коректно')
// }
// console.log(arr2)

// // 5 Задание //

// let arr3 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];
// let number_c = 0;

// for (let i3 = 0; i3 < arr3.length; i3++) {
//     if (typeof arr3[i3] == 'number') {
//         number_c++;
//     }
// }

// if (number_c > 5) {
//     console.log('Гуд');
// } else {
//     console.log('Не гуд');
// }

// // 6 Задание //

// let scoole4 = ["Alex", "John", "Mary"];

// scoole4.push("Marj", "Kayt", "Luci")

// console.log(scoole4)

// // 7 Задание //

// let cars1 = [
//     {
//         carBrand: "Toyota",
//         price: 25000,
//         isAvailableForSale: true
//     },
//     {
//         carBrand: "BMW",
//         price: 35000,
//         isAvailableForSale: false
//     },
//     {
//         carBrand: "Malibu",
//         price: 20000,
//         isAvailableForSale: true
//     }
// ];

// cars1.push({
//     carBrand: "Ford",
//     price: 30000,
//     isAvailableForSale: true
// });

// console.log(cars1)

// // 8 Задание //

// let myCities = ["London", "New York", "Paris", "Moscow"];

// for (let i4 = 0; i4 <  myCities.length; i4++){
//     let cityInfo = myCities[i4] + `под индексом   ${i4}  в массиве myCities`;
//     console.log(cityInfo);
// }

// // 1 Задание //
// let scoole1 = {
//     name: ["Alex", "Bob", "Jin"]
// }

// let scoole2 = {
//     name: ["Andrew", "Jams", "Alee"]
// }

// let scoole3 = {
//     name: ["Frank", "Mag", "Lusi"]
// }

// let arr1 = scoole1.name
// let arr2 = scoole2.name
// let arr3 = scoole3.name
// arr1 = arr1.concat(arr2, arr3)

// console.log(arr1)

// // 2 Задание //
// let people_name = ["Alex", "Bob", "Jin", "Andrew", "Jams", "Alee", "Frank", "Mag", "Lusi"]
// let delate_name = prompt('Введите имя которое хотите удалить')
// delate_name = delate_name.slice(0, 1).toLocaleUpperCase() + delate_name.slice(1).toLocaleLowerCase()
// let index_name = people_name.indexOf(delate_name)

// if (index_name !== -1) {
//     people_name.splice(index_name, 1)
//     alert(`Имя ${delate_name} удалено оставшиеся имена ${people_name}`)
// } else if ((index_name == -1)) {
//     alert(`Имя ${delate_name} не найденно`)
// } else {
//     alert('Не коректно')
// }

// // 3 Задание //
// let array = [1, 2, 3, 4, 5, 6]
// console.log(array[4])

// let array_first = array[0]
// let array_last = array[array.length - 1]
// console.log(array_first, array_last)

// array.pop(5)
// console.log(array)

// array.shift(0)
// console.log(array)

// array.push(10)
// console.log(array)

// array.unshift(0)
// console.log(array)

// let poisk = array.includes(10)
// console.log(poisk)

// let spin = array.reverse()
// console.log(spin)

// let inf = confirm('Ходите зарегистрироваться')

// if (inf == true) {
//     let user_nmae = prompt('Введите имя')
//     user_nmae = user_nmae.slice(0).toLowerCase()
//     console.log(user_nmae)
//     let user_code = +prompt('Введите код')
//     console.log(user_code)
//     let user_summe = +prompt('Введите Сумму вашего счета')
//     console.log(user_summe)
//     let inf1 = confirm('Ходите Войти')
//     if (inf1 == true) {
//         let user_nmae1 = prompt('Введите имя')
//         if (user_nmae == user_nmae1) {
//             alert('Праходите')
//             let user_code1 = +prompt('Введите код')
//             if (user_code == user_code1) {
//                 alert('Праходите')
//                 let user_summe1 = +prompt(`Ваш баланс составляет ${user_summe}`)
//                 if (user_summe - user_summe1 >= user_summe * 0.5 && user_summe - user_summe1 <= user_summe * 1) {
//                     alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${user_summe - user_summe1 - user_summe1 * 0.05}`)
//                 } else if (user_summe - user_summe1 >= user_summe * 0.3 && user_summe - user_summe1 <= user_summe * 0.5) {
//                     alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${money - user_summe1 - user_summe1 * 0.03}`)
//                 } else if (user_summe - user_summe1 >= user_summe * 0 && user_summe - user_summe1 <= user_summe * 0.3) {
//                     alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${user_summe - user_summe1 - user_summe1 * 0.00}`)
//                 } else if (user_summe1 > user_summe) {
//                     alert('Не достаточно средств')
//                 }else {
//                     alert('Не коректно')
//                 }
//             }else {
//                 alert('Не коректно')
//             }
//         } else {
//             alert('Не коректно')
//         }
//     } else if (inf1 == false) {
//         alert('Приходите еще')
//     } else {
//         alert('Не коректно')
//     }
// } else if (inf == false) {
//     alert('Приходите еще')
// } else {
//     alert('Не коректно')
// }

// let objact = {
//     name: "Alex",
//     money: 10000,
//     account: 7777,
// }
// let objact1 = {
//     name: "Jeen",
//     money: 40000,
//     account: 2424,
// }
// let objact2 = {
//     name: "Bred",
//     money: 20000,
//     account: 8921,
// }
// let user_name = prompt('Введите имя')

// if (user_name == objact.name) {
//     alert('Проходите')
//     let password = +prompt('Введите номер счета')
//     if (password == objact.account) {
//         alert('Проходите')
//         let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${objact.money}`)
//         if (objact.money - kamisiya >= objact.money * 0.5 && objact.money - kamisiya <= objact.money * 1) {
//             alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${objact.money - kamisiya - kamisiya * 0.05}`)
//         } else if (objact.money - kamisiya >= objact.money * 0.3 && objact.money - kamisiya <= objact.money * 0.5) {
//             alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${objact.money - kamisiya - kamisiya * 0.03}`)
//         } else if (objact.money - kamisiya >= objact.money * 0 && objact.money - kamisiya <= objact.money * 0.3) {
//             alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${objact.money - kamisiya - kamisiya * 0.00}`)
//         } else if (kamisiya > objact.money) {
//             alert('Не достаточно средств')
//         } else if (password !== objact.account) {
//             alert('Не коректно')
//         }

//     } else {
//         alert('Не коректно')
//     }
// } else if (user_name !== objact.name && user_name == objact1.name) {
//     alert('Проходите')
//     let password = +prompt('Введите номер счета')
//     if (password == objact1.account) {
//         alert('Проходите')
//         let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${objact1.money}`)
//         if (objact1.money - kamisiya >= objact1.money * 0.5 && objact1.money - kamisiya <= objact1.money * 1) {
//             alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${objact1.money - kamisiya - kamisiya * 0.05}`)
//         } else if (objact1.money - kamisiya >= objact1.money * 0.3 && objact1.money - kamisiya <= objact1.money * 0.5) {
//             alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${objact1.money - kamisiya - kamisiya * 0.03}`)
//         } else if (objact1.money - kamisiya >= objact1.money * 0 && objact1.money - kamisiya <= objact1.money * 0.3) {
//             alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${objact1.money - kamisiya - kamisiya * 0.00}`)
//         } else if (kamisiya > objact1.money) {
//             alert('Не достаточно средств')
//         } else if (password !== objact1.account) {
//             alert('Не коректно')
//         }
//     } else {
//         alert('Не коректно')
//     }
// }
// else if (user_name !== objact1.name && user_name == objact2.name) {
//     alert('Проходите')
//     let password = +prompt('Введите номер счета')
//     if (password == objact2.account) {
//         alert('Проходите')
//         let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${objact2.money}`)
//         if (objact2.money - kamisiya >= objact2.money * 0.5 && objact2.money - kamisiya <= objact2.money * 1) {
//             alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${objact2.money - kamisiya - kamisiya * 0.05}`)
//         } else if (objact2.money - kamisiya >= objact2.money * 0.3 && objact2.money - kamisiya <= objact2.money * 0.5) {
//             alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${money - kamisiya - kamisiya * 0.03}`)
//         } else if (objact2.money - kamisiya >= objact2.money * 0 && objact2.money - kamisiya <= objact2.money * 0.3) {
//             alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${objact2.money - kamisiya - kamisiya * 0.00}`)
//         } else if (kamisiya > objact2.money) {
//             alert('Не достаточно средств')
//         } else if (password !== objact1.account) {
//             alert('Не коректно')
//         }
//     } else {
//         alert('Не коректно')
//     }
// } else {
//     alert('Не коректно')
// }

// let car = confirm('Хотите узнаить о машиннах')
// switch (car) {
//     case false:
//         alert('Приходите еще')
//         break;
//     case true:
//         let car1 = +prompt('Введите номер 1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt');
//         switch (car1) {
//             case 1:
//                 alert('110 лошадиных сил');
//                 break;
//             case 2:
//                 alert('85 лошадиных сил');
//                 break;
//             case 3:
//                 alert('122 лошадиных сил');
//                 break;
//             case 4:
//                 alert('200 лошадиных сил');
//                 break;
//             case 5:
//                 alert('105 лошадиных сил');
//                 break;
//             default:
//                 alert('Что ты Вел');
//                 break;
//         }
//         let buy_car = confirm(`Хотите купить машинну под номером-${car1}`);
//         switch (buy_car) {
//             case true:
//                 alert(`Поздравляем с покупкой машины под номером-${car1}`);
//                 break;
//             case false:
//                 alert('Приходите еще');
//                 break;
//             default:
//                 alert('Что ты Вел');
//                 break;
//         }
//         break;
//     default:
//         alert('Приходите еще');
//         break;
// }

// let random = Math.floor(Math.random() * 3) + 1;
// let use_num = prompt('Введите имя');
// let ser_num = prompt('Введите фамилию');
// let data = +prompt('Введите цифру');

// switch (random) {
//     case 1:
//         alert(`${use_num}${ser_num}${data}gmail.com`);
//         break;

//     case 2:
//         alert(`${use_num}${data}${ser_num}gmail.com`);
//         break;

//     case 3:
//         alert(`${data}${use_num}${ser_num}gmail.com`);
//         break;

//     default:
//         alert('нет');
//         break;
// }

// let date = new Date()
// let day = date.getDay()

// switch (day) {
//     case 0:
//         console.log('Воскресенье')
//         break;
//     case 1:
//         console.log('Понедельник')
//         break;
//     case 2:
//         console.log('Вторник')
//         break;
//     case 3:
//         console.log('Среда')
//         break;
//     case 4:
//         console.log('Четверг')
//         break;
//     case 5:
//         console.log('Пятница')
//         break;
//     case 6:
//         console.log('Суббота')
//         break;
// }

//  let name = "Alex"
//  let money = 10000
//  let account = 7777

//  let user_name = prompt('Введите имя')

//  if (user_name == name) {
//      alert('Проходите')
//      let password = +prompt('Введите номер счета')
//      if (password == account) {
//          alert('Проходите')
//          let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${money}`)
//          if (money - kamisiya >= money * 0.5 && money - kamisiya <= money * 1) {
//              alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${money - kamisiya - kamisiya * 0.05}`)
//          } else if (money - kamisiya >= money * 0.3 && money - kamisiya <= money * 0.5) {
//              alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${money - kamisiya - kamisiya * 0.03}`)
//          } else if (money - kamisiya >= money * 0 && money - kamisiya <= money * 0.3) {
//              alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${money - kamisiya - kamisiya * 0.00}`)
//          } else if (kamisiya > money) {
//              alert('Не достаточно средств')
//          }
//      }else if (password !== account) {
//          alert('Не коректно')
//      }
//  } else {
//      alert('Не коректно')
//  }

//  let car = confirm('Хотите узнаить о машиннах')

//  if (car === true) {
//      let car1 = +prompt(`Введите номер  1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt`)
//      if (car1 === 1) {
//          alert('110 лошадиных сил')
//      } else if (car1 === 2) {
//          alert('85 лошадиных сил')
//      } else if (car1 === 3) {
//          alert('122 лошадиных сил')
//      } else if (car1 === 4) {
//          alert('200 лошадиных сил')
//      } else if (car1 === 5) {
//          alert('105 лошадиных сил')
//      } else {
//          alert('Что ты Вел')
//      }
//      let buy_car = confirm('Хотите купить машинну')
//      if (buy_car === true) {
//          alert(`Поздравляем c покупкой машины под номером-${car1}`)
//      } else if (buy_car === false) {
//          alert('Приходите еще')
//      } else {
//          alert('Что ты Вел')
//      }

//  } else {
//      alert('Приходите еще')
//  }

// let random = Math.floor(Math.random() * 3) + 1

// let use_num = prompt('Введите имя')
// let ser_num = prompt('Введите фмилию')
// let data = +prompt('Введите дату рождения')

// if (random === 1) {
//     alert(`${use_num}${ser_num}${data}gmail.com`)
// } else if (random === 2) {
//     alert(`${use_num}${data}${ser_num}gmail.com`)
// } else if (random === 3) {
//     alert(` ${data}${use_num}${ser_num}gmail.com`)
// } else {
//     alert('нет')
// }

// !== не равно, || = или или, && = и то и то, else if = ? ;//

// Кондитерская //

//  let cond = +prompt("Время работы")

//  if(cond >= 8 && cond < 13){
//      alert('1 смена')
//  }else if(cond >= 13 && cond < 15){
//      alert('Обед')
//  }else if(cond >= 15 && cond < 23){
//      alert('2 смена')
//  }else if(cond <= 24 || cond <= 7){
//      alert('Отдых')
//  }else {
//      alert('Че ты написал')
//  }

// // Циферблат //

// let chas = +prompt('Ведите час')
// let chas1 = chas+1
//  let minut = +prompt('Ведите минуты')

// if((chas >= 0 && chas <=23) && (minut >=0 && minut <=5)){
//     alert(`Пять минут-${chas1} Точное время ровно-${chas}:0${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=5 && minut <=9)){
//     alert(`Десять минут-${chas1} Точное время ровно-${chas}:0${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=10 && minut <=15)){
//     alert(`Пятнадцать минут-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=15 && minut <=20)){
//     alert(`Дватцать минут-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=20 && minut <=25)){
//     alert(`Дватцать-пять минут-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=25 && minut <=30)){
//     alert(`Пол-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=30 && minut <=35)){
//     alert(`Без-двадцатипяти-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=35 && minut <=40)){
//     alert(`Без-двадцати-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=40 && minut <=45)){
//     alert(`Без-Пятнадцати-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=45 && minut <=50)){
//     alert(`Без-Десяти-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=50 && minut <=59)){
//     alert(`Без-Пяти-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas == 0 ) && (minut == 0)){
//     alert(`Полноч`)

// }else{
//     alert('Что ты ввел')
// }

// // Задание 0 //

// let hell = "HELLOWORLD"
// let h = "HELLO"
// h = h.slice(0, 1).toUpperCase() + h.slice(1).toLowerCase()
// let w = "WORLD"
// w = w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()
// hell = `${h} ${w}`
// console.log(hell)

// // Задание 1 //

// // 1 окно //
// let a = 24
//     b = 49
// let windmax = Math.max(a, b)
// let windmin = Math.min(a, b)

// // 2 окно //
// let a1 = 15
//     b1 = 82
// let windmax1 = Math.max(a1, b1)
// let windmin1 = Math.min(a1, b1)
// let max = Math.max(windmax, windmax1)
// console.log(max)

// // Задание 2 //

// let maximus = Math.max(windmax, windmax1)
// let minimus = Math.min( windmin,  windmin1)
// let difirent = maximus - minimus
// console.log(difirent)

// // Задание 3-5 //

// let numb = prompt(Math.floor(Math.random() * 10) + ".com");
// let result = numb + ".com";

// alert(result);

// // Задание 4 //
// let str = "O.34"
// let num = parseFloat("O.34")
// if(typeof num === "number"){
// console.log("well")
// }else{
//     console.log("bad")
// }

// Задача 1 //

// let numb = +prompt("Четное Нечотое")
// if (numb % 2 == 0) {
//     alert("Четное")
// } else {
//     alert("Нечотное")
// }

// // Задача 2 //
// let car = prompt(`Ведите название машины 1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt`)

// if (car == "Gentra") {
//     alert('110 лошадиных сил')
// } else if (car == "Spark") {
//     alert('85 лошадиных сил')
// } else if (car == "Laseti") {
//     alert('122 лошадиных сил')
// } else if (car == "Malibu") {
//     alert('200 лошадиных сил')
// } else if (car == "Cobalt") {
//     alert('105 лошадиных сил')
// } else {
//     alert('Что ты Вел')
// }

// // Задача 3 //
// let a = +prompt("Ведите первое число")
// let plus = +prompt("Ведите знак +")
// let b = +prompt("Ведите второе число")

// if (a + b) {
//     alert(a + b)
// } else {
//     alert("Ошибка")
// }

// let a1 = +prompt("Ведите первое число")
// let plus1 = +prompt("Ведите знак -")
// let b1 = +prompt("Ведите второе число")

// if (a1 - b1) {
//     alert(a1 - b1)
// } else {
//     alert("Ошибка")
// }

// let a2 = +prompt("Ведите первое число")
// let plus2 = +prompt("Ведите знак *")
// let b2 = +prompt("Ведите второе число")

// if (a2 * b2) {
//     alert(a2 * b2)
// } else {
//     alert("Ошибка")
// }

// let a3 = +prompt("Ведите первое число")
// let plus3 = +prompt("Ведите знак /")
// let b3 = +prompt("Ведите второе число")

// if (a3 / b3) {
//     alert(a3 / b3)
// } else {
//     alert("Ошибка")
// }

// // задача 4 //

// let name = prompt("Ведите имя")
// name = name.slice(0, 1)

// if (name == "Р") {
//     alert("Красавчик")
// } else if (name == "О") {
//     alert("Соболезную")
// } else {
//     alert("Молодец")
// }

// // 1 Задача //
// let my_country = "Uzbekistan"
// console.log(my_country)

// // 2 Задача //
// let is_student;
// is_student = true
// console.log(is_student)

// is_student = false
// console.log(is_student)

// // 3 Задача //
// let x = "7"
// let y = "12"
// let z = x*y
// console.log(z)

// // Задача 4 //
// let Name = "Azim"
// let Surname = "Turdiyev"
// let Job = "Student"

// let message = `Меня зовут ${Name} ${Surname} и я ${Job}`;

// console.log(message);

// // Задача 6 //
// let string = "Строка"
// let number = 13
// let logics = true
// let Null = null
// let Undefined;

// console.log(typeof string);
// console.log(typeof number);
// console.log(typeof  logics);
// console.log(typeof Null);
// console.log(typeof Undefined);

// // Баланс //
// let Balance =25000
// // Траты //
// let car =4480
// let food =890
// // Доход //
// let invoice =5500
// let stock =4200
// // Итог //
// let total_balance = Balance - (car + food) + (invoice + stock)

// console.log(total_balance);

// // Random //
// let casino = Math.floor(Math.random() * 8999) + 1000;
// console.log(casino)
