//// 1-LOOPS

// for loop

// for(let i =1; i<=10; i++){
   
//   if(i==3){
//       console.log("en sevdiğim rakam :"+i);
//       continue; // döngü burda durur kendini tekrar etmez
//   }
//   if (i==6){
//       console.log("en sevmediğim rakam:6");
//       break; //6'dan sonrası devam etmez. for döngüsü break'i gördüğü an sonlanır.
//   }

//   console.log(i);


// }


////// 2-WHİLE LOOP

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;

// }


//// 3- DO-WHİLE LOOP

// let i=0;
// do{
// console.log(i);
// i++;
// }while(i<10)


// let toplam=0;
// for(let i=10;i>0;i--){
//     toplam+=i;
// }

// console.log(toplam);

// let  sonuc=1;
// for(let i=10;i>0;i--){ // 10 ile 1 arasında sadece çift sayıların çarpımı
//     if(i%2==0){        // (i mod 2) 
//         sonuc*=i;      // tek sayıları istiyorsak if(i%2==1) olarak yazarız
//     }
// }
// console.log(sonuc);

// let val="";
// for(let i=0; i<10; i++){
//     for(let j=0; j<8; j++){
//         val +="*"
//     }
//     val+="\n";
// }
// console.log(val);


//----------------------------------------------------------------//

// LOOPS IN ARRAY & OBJECTS

 let cars =["Bmw", "Mercedes","Toyota"];
 let people =[
    {firstName:'Ada',lastName:'Bilgi'},
    {firstName:'Yiğit',lastName:'Bilgi'},
    {firstName:'Çınar',lastName:'Turan'}
 ];

///// ARRAYS

//  for(let i=0;i<cars.length;i++){
//  console.log(cars[i]);
//  }

//// OBJECTS

// for (let i=0; i<people.length;i++){
//     console.log(people[i].firstName);
// }


//// FOR-IN

// Arrays

//  for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }
//  console.log(cars);



//// Objects
// for(let i in people){
//     console.log(`index : ${i} value : ${people[i].firstName}`);
// }





//// FOREACH

// cars.forEach(function(item){
//       console.log(item);
//   });

// people.forEach(function(item){
//    console.log(item.firstName);
// });



////// map : returns an array


// let val = people.map(function(item){
//      return item.firstName + ' ' + item.lastName;
// });

// console.log(val);

// let numbers = [1,5,6,8,10];

// let num = numbers.map(function(n){
//     return n*n;
// });

// console.log(num);

// ----------------------------------------------------------------------------------------------------------------------

/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak = 5;
var tahmin,sayac;
var sayi = Math.floor((Math.random()*10));

console.log(sayi);

while(hak>0){
    hak--;

    tahmin = Number(prompt("bir sayı giriniz"));

    if(sayi == tahmin){
        console.log("Tebrikler bildiniz.");
        break;
    }else if (sayi>tahmin){
        console.log("yukarı");

    }else{
        console.log("aşağı");
    }
   
    if(hak==0){
        console.log("hakkınız bitti.");
    }


}




