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


//*** */ 2.DERSSSSSSSS!!!!!!!!------!!!!!!

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


 //////*** 20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri verilmiştir. Bu bilgilere göre servis uyarısını veriniz.
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




//////////**** */ var result = prompt("who's here?");

// console.log(result);

// if(result == "cancel"){
//    console.log("cancelled");
// }else if(result =="Admin"){
//    console.log("Welcome Admin");

//    var password = prompt('enter your password : ');

//     if(password =='cancel'){
//         console.log('cancelled');
//     }else if(password== '1234'){
//         console.log('welcome Admin');
//     }else{
//         console.log('wrong password');
//     }
// }else{
//    console.log("I dont know you");
// }



/////** */ Object Literals

// let val;

// let person = {
//     firstName : 'Çınar',
//     lastName : 'Turan',
//     age : 7,
//     hobbies : ['music','game'],
//     address : {
//         city : 'Kocaeli',
//         country : 'Türkiye'
//     },
//     getBirthYear : function(){
//         return 2018- this.age;
//     }
// };

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city'];
// val = person.getBirthYear();




// let people = [
//                 {firstName : 'Çınar',lastName:'Turan'},
//                 {firstName : 'Sena',lastName:'Turan'},
//                 {firstName : 'Seda',lastName:'Turan'}
//              ];


// val = people[2];
// val = people[2].firstName;

// for(let i =0; i<people.length;i++){
//     console.log(people[i].firstName);
// }

// console.log(val);
// console.log(typeof people);



/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/


var aracBilgileri = [
  {
      id : 'bmw116d_123',
      model : 'bmw 116d',
      yil : 2015,
      renk : 'Beyaz',
      servisKayitlari : [
      {
          id : 'bmw116d_123_1',
          tarih : '20.01.2016',
          km : '13000',
          ucret : 900,
          detay :[
                  { id : 'bmw116d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                  { id : 'bmw116d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                  { id : 'bmw116d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
                 ]
          },
          {
              id : 'bmw116d_123_2',
              tarih : '10.01.2017',
              km : '28000',
              ucret : 1800,
              detay : [
                      { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                      { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                      { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                      { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
              ]
          }
      ]
  },
  {
      id : 'bmw118i_123',
      model : 'bmw 118i',
      yil : 2015,
      renk : 'Beyaz',
      servisKayitlari : [
      {
          id : 'bmw118i_123_1',
          tarih : '20.01.2016',
          km : '13000',
          ucret : 900,
          detay :[
                  { id : 'bmw118i_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                  { id : 'bmw118i_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                  { id : 'bmw118i_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
                 ]
          },
          {
              id : 'bmw116d_123_2',
              tarih : '10.01.2017',
              km : '28000',
              ucret : 1800,
              detay : [
                      { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                      { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                      { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                      { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
              ]
          }
      ]
  },
  {
      id : 'bmw320d_123',
      model : 'bmw 320d',
      yil : 2015,
      renk : 'Beyaz',
      servisKayitlari : [
      {
          id : 'bmw320d_123_1',
          tarih : '20.01.2016',
          km : '13000',
          ucret : 900,
          detay :[
                  { id : 'bmw320d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                  { id : 'bmw320d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                  { id : 'bmw320d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
                 ]
          },
          {
              id : 'bmw116d_123_2',
              tarih : '10.01.2017',
              km : '28000',
              ucret : 1800,
              detay : [
                      { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                      { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                      { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                      { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
              ]
          }
      ]
  }
];



console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[0]);

console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[0].ucret);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);

// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);





