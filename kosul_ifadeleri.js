// if/else statements

const firstName="Gökalp";
const age= 21;
const isStudent= true;
const school="university";

// if(firstName == "Gökalp"){
//     console.log("Merhaba Gökalp");
// }

// if(age ==21){
//     console.log("yaşınız 21");
// }

// if(isStudent){
//     console.log("Merhaba öğrenci");
// }else{
//     console.log("Merhaba işler nasıl");
// }


// if(age>=18){

//     if((school =="university") || (school == "high school")){
//         console.log("Ehliyet alabilirsiniz");
//     }else{
//         console.log("Eğitim durumunuz yetersiz");
//     }

    

// }else{
//     console.log("Ehliyet alamazsınız");
// }



//undefined

// if (typeof id !== 'undefined'){
//     console.log('id: '+id);
// }else{
//     console.log('no id');
// }


// 2.DERSSSSSSSS!!!!!!!!------!!!!!!

// switch statements (koşullarımız çok fazlaysa switch yapısını kullanmak bize daha fazla fayda sağlar)

// let category ="beyaz eşya";

// switch(category){
//     case "telefon":
//         console.log("telefon kategorisi");
//     break;

//     case "bilgisayar":
//         console.log("bilgisayar kategorisi");
//     break;
    
//     default:
//         console.log("yanlış kategori");
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day="Pazar";
//     break;

//     case 1:
//         day="Pazartesi";
//     break;

//     case 2:
//         day="Salı";
//     break;

//     case 3:
//         day="Çarşamba";
//     break;

//     case 4:
//         day="Perşembe";
//     break;

//     case 5:
//         day="Cuma";
//     break;

//     case 6:
//         day="Cumartesi";
//     break;
// }
// console.log(`bugün ${day}`);

// !!!---------------------------!!!!

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = 'Hafta Sonu';
//         break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:       
//         day = 'Hafta içi';
//         break;
// }

// console.log(`bugün ${day}`);


////const age = 9;
//const firstName ='Gökalp';

//switch(true){
  //  case age>=0 && age<=12:
    //   console.log(`${firstName} is a child`);
    //break;
    //case (age >=13 && age <=19):
      // console.log(`${firstName} is a teenager`);
    //break;
    //default:
      // console.log(`${firstName} is an adult`);
//}


 //20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri verilmiştir. Bu bilgilere göre servis uyarısını veriniz.
 //1.Bakım: 1 yıl 
 //2.Bakım: 2 yıl 
 //3.Bakım: 3 yıl

//  var trafigeCikis = new Date("04/20/2019");
//  trafigeCikis.setHours(0,0,0,0);
//  var trafiktekiMs = Date.now() - trafigeCikis.getTime();
//  var trafiktekiGun = Math.floor (trafiktekiMs/(1000*60*60*24));


// if(trafiktekiGun<=365){
//    console.log("1. servis bakım süreniz geldi");
// }else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
//    console.log("2.servis bakım süreniz geldi");
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//    console.log("3. servis bakım süreniz gelmiştir.")
// }else{
//    console.log("Bilinmeyen bir süre");
// }

//  console.log(trafiktekiMs);

var result = prompt("who's here?");

console.log(result);

if(result == "cancel"){
   console.log("cancelled");
}else if(result =="Admin"){
   console.log("Welcome Admin");

   var password = prompt('enter your password : ');

    if(password =='cancel'){
        console.log('cancelled');
    }else if(password== '1234'){
        console.log('welcome Admin');
    }else{
        console.log('wrong password');
    }
}else{
   console.log("I dont know you");
}
