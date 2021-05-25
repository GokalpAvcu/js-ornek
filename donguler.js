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

let val="";
for(let i=0; i<10; i++){
    for(let j=0; j<8; j++){
        val +="*"
    }
    val+="\n";
}
console.log(val);