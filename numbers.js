// // Numbers

// let val;

// // val= Number('10');
// // val = parseInt("10");
// // val = parseFloat("10.5");
// // val = isNan("10");
// // val = isNan("a10");

// // var num= 10.123456789;
// // val = num.toPrecision(4);
// // val = num.toFixed(4);

// val = Math.PI;
// val = Math.round(2.4);
// val = Math.round(2.7);
// val = Math.ceil(2.4);
// val = Math.ceil(2.6);
// val = Math.floor(2.4);
// val = Math.floor(2.7);
// val = Math.sqrt(64);
// val = Math.pow(2,4);
// val = Math.abs(-100);
// val = Math.min(1,2,3,2,4,9);
// val = Math.max(4,5,6,4,98,7);
// val = Math.floor(Math.random()*100+1);

// console.log(val);
// console.log(typeof val);

var num = 15.123456789;

// toplamda 3 basamaklı sayı kullan

console.log(num.toPrecision(3));

// ondalık kısmı 3 basamakta sınırla

console.log(num.toFixed(3));

// en yakın sayıya yuvarla

console.log(Math.round(num));

// aşağı yuvarla

console.log(Math.floor(num));

// yukarı yuvarla

console.log(Math.ceil(num));

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

// sayı aralığını kullanıcının belirleyeceği rastgele sayı üretin.

var min = 50;
var max = 100;

console.log(Math.floor(min+Math.random()*(max-min)))

/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas*0.25

console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2));
