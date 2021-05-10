// Arrays

let names = ['gökalp','sena','ada','yiğit'];
let years = [2017,1970,1990,1998];
let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];



// // get array item
// console.log(names[0]);
// console.log(names[3]);

// // set array item
// names[names.length]="emel";

// // add item
// years.push(1986); // dizinin sonuna ekler
// years.unshift(1986);

// // remove item
// years.pop();
// years.shift();

// // indexof
// let index = names.indexOf("ada");
// console.log("index :"+index);

// // reverse
// names.reverse();

// // sort (Dizi sıralama)
 // years.sort();

// // concat (Dizi birleştirme)
 // let val = years.concat(names);
 // console.log(val);

 // // splice
 // console.log(names);
 // names.splice(0,1);

 // find
 // let val = years.find(over18);




 //function over18(year){
  //  let age = 2018 - year;
   // return age>=18;
//}

// let val = years.find(over18);

 // // filter
 // let val = years.filter(over18);


//console.log(val);

//console.log(names);
//console.log(names.length);
//console.log(typeof names);

// console.log(years);
// console.log(mix);




// Demo: Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
 
var car=["Bmw","Mercedes","Opel","Mazda"];
var car2 = new Array("Bmw","Mercedes","Opel","Mazda");

console.log(car);
console.log(car2);

// Dizi kaç elemanlıdır ?
console.log(car.length);

//Dizinin ilk ve son elemanı nedir?
console.log(car[0]);
console.log(car[3]);
console.log(car[car.length-1]); // dizinin top. eleman sayısından son bir çıkar


// "Renault" değerini dizinin sonuna ekleyin
// car[4] = "Renault";
car[car.length] = "Renault"; // ya da böyle de yapılabilir
car[car.length] = "Ferrari";

car.push("Toyota")


// "Toyota" değerini dizinin başına ekleyin.

car.unshift("Seat");

// Seat değerini siliniz.
car.shift("Seat");

// Toyota değerini siliniz.
car.pop("Toyota");

// Dizi elemanlarını ters çevirin.
car.reverse();

// Alfabetik sıralayın
car.sort();
//console.log(car);

// [1,2,5,80] dizisini sıralayın.
var numbers =[1,2,5,80,15];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if (a<b) return -1;
}

console.log(numbers.sort(compare));


// "Opel" değeri dizinin bir elemanımıdır ?
console.log(car);
console.log(car.indexOf('Opel'));
console.log(car.includes('Opel'));

// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.

var str = "Chevrolet,Dacia";
var car2 = str.split(',');
console.log(car2)

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

var car3 = car.concat(car2);
console.log(car3);

// Oluşturulan diziden son 2 elemanı siliniz.

// console.log(car3.pop());
// console.log(car3.pop());

// console.log(car3.splice(6,2));
console.log(car3.slice(6,8));

console.log(car3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

var studentA =["Yiğit","Bilgi",2010];
var studentB =["Sena","Turan",1999];
var studentC =["Ahmet","Turan",1998];

var students =[studentA,studentB,studentC]

console.log(students[0]);

console.log(students[0][0]); //Yiğit
console.log(students[0][1]); //Bilgi
console.log(students[0][2]); //2010

console.log(students[1][0]); //Sena
console.log(students[1][1]); //Turan
console.log(students[1][2]); //1999

console.log(students[2][0]); //Ahmet
console.log(students[2][1]); //Turan
console.log(students[2][2]); //1998

console.log(students)


