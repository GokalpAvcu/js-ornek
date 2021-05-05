// Strings  

const firstName = "Gökalp";
const lastName = "Avcu";
let hobbies="spor,sinema,kitap,felsefe,yazılım";
const age=21;

let val;

// string concatenation (birlestirme)

val = firstName +" "+ lastName; //string arası boşluk için +" "+
val = "Gökalp";
val += " Avcu";

val = "Benim adım " +firstName+" "+ lastName+ " ve yaşım " + 
age + " Antalya'da yaşıyorum.";

// string concat (birlestirme)
val = firstName.concat(" ",lastName);

//string uppercase - lowercase
val= val.toUpperCase();
val= val.toLowerCase();

// string replace
val = '  '+val.replace('gökalp','çınar')+'     ';

//trim
val= val.trim();

// substring
// val= val.substring(3,8);

//slice
// val = val.slice(5);



// val = val[0];
// val= val.indexOf("a");

// string length
// val= val.length;

val=hobbies.split(",")




console.log(val);
console.log(typeof val);