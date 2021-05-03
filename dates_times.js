// // Date Object

// let d = new Date();
// let birthday = new Date(1999,2,27);

// // Set Methods

// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);
// d.setMinutes(45);



// // Get Methods

// console.log(d.getDate()); // Bugün ay'ın kaçıncı günü
// console.log(d.getDay()); // haftanın kaçıncı günü 0-6'ya kadar gider 0.gün=Pazar
// console.log(d.getFullYear()); // yıl bilgisi
// console.log(d.getHours()); // saat bilgisi
// console.log(d.getMonth()); // ay bilgisi
// console.log(d.getMinutes()); // dakika bilgisi
// console.log(d.getSeconds()); // kaçıncı saniye

// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());

// console.log(d);
// console.log(typeof d);

// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

var dt = new Date();
console.log(dt);
console.log(dt.getMonth()+1); //bulundugun ayın 1 fazlası
console.log(dt.getDate());
console.log(dt.getFullYear());



// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dtA = new Date('5/3/2021 18:39:10');
var dtB = new Date(2010,7,24,14,50,10)

console.log(dtA)
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('2/10/1992');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log('milisecond :'+milisecond)
console.log('saniye : '+ saniye);
console.log('dakika :'+ dakika);
console.log('saat :' + saat);
console.log('gun : '+gun);


// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);
// console.log(birthday.getTime());
// console.log(Date.now())


