// Date Object

let d = new Date();
let birthday = new Date(1999,2,27);

// Set Methods
d.setFullYear(2020);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(45);









// Get Methods

console.log(d.getDate()); // Bugün ay'ın kaçıncı günü
console.log(d.getDay()); // haftanın kaçıncı günü 0-6'ya kadar gider 0.gün=Pazar
console.log(d.getFullYear()); // yıl bilgisi
console.log(d.getHours()); // saat bilgisi
console.log(d.getMonth()); // ay bilgisi
console.log(d.getMinutes()); // dakika bilgisi
console.log(d.getSeconds()); // kaçıncı saniye

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());

console.log(d);
console.log(typeof d);