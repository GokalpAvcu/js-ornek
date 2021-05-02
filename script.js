// // console.log("merhaba");
// console.log("1234");
// console.log(true);
// console.log([1,2,3]);
// console.error("hata oluştu");
// console.warn("bir uyarı oluştu");

// // tek satırlık yorum satırı


// /*

// yorum satırları birden fazla yer kaplıyorsa


// */

// concole.clear()
// ****************************

// Ders 2: Değişkenler

// var age;
// console.log(age);

// age=23;
// console.log(age);

// var fullname="Gökalp Avcu";
// console.log(fullname);

// fullname="Zeki Avcu"
// console.log(fullname);

// // Değişken Tanımlama Kuralları

// // Sayısal ifade başlayamaz

// var yas1;
// var _yas2;
// var $yas3;

// // Komut isimleriyle tanımlama yapılamaz.
// // Birden fazla kelime

// var ad="Gökalp";
// var soyad="Avcu";

// var ad_soyad="Gökalp Avcu";
// var adSoyad="Gökalp Avcu";

// // case sensitive (büyük küçük harf duyarlılığı)

// var firstName="Gökalp";
// var FirstName="Zeki";

// console.log(firstName);
// console.log(FirstName);

// // var , let , const

// let city="Antalya";
// console.log(city);


// const email="avcu219@gmail.com";
// console.log(email);


// ****************************

// Ders 3 : Değişken Tipleri

// //Primitive Types

//    // String
//    let firstName="Gökalp";

//    // Number
//    let age=23;
//    let money= 100.5;

//    //Boolean
//    let isActive = true;

//    //null
//    let job=null;

//    //undefined
//    let car;



// // Reference Types - Objects

// // Array

// let names=["Gökalp","Ahmet","Can"];

// // Object

// let address = {
//     city:"Antalya",
//     country:"Türkiye"
// }

// // Function

// var calculateAge = function(){
//     return 0;
// }

// console.log(typeof calculateAge);

// let num1="10";
// let num2="20";

// let total= num1+num2;

// ****************************

// Ders 4 : Tür Dönüşümü

let val;

// number to string

val = String(10);

// bool to string

val = String(true);

//date to string

val= String(new Date());

//array to string
val=String([1,2,3,4]);

// toString()

val=(10).toString();
val=(false).toString();

// String to number

val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");
val = Number([1,2,3,4]);

// parseInt
// parseFloat

val = parseInt("10");
val = parseInt("10.5");
val = parseFloat("10.5");




console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
