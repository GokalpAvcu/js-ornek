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

// Demo : Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// cümle kaç karakterlidir ?
console.log(sentence.length);

// kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(' ').length);

// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());

// '-' karakterini silin.
console.log(sentence.replace('-',''));

// url'nin içinden str kısmını çıkarınız.
var str = 'http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz.

console.log(url.toLowerCase()
               .replace(/ /g,'-') 
               .replace(/ı/g,'i')
               .replace(/ü/g,'u')
               .replace(/ö/g,'o')
               .replace(/ş/g,'s')
               .replace(/ç/g,'c')
);