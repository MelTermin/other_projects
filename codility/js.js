// function solution(A) {
//   let array=[]

//   for (let i=0; i<A.length; i++) {
//       if(0<=A[i]) {
//         console.log(array[A[i]]);
//         array[A[i]]=true
//       }
//   }
//   for(let i=1; i<array.length; i++) {
//     if(undefined===array[i]) {
//       return i
//     }
//   }
//   return 1
// }



// console.log(solution([1, 3, 6, 4, 1, 2]));


// function solution(A) {
//   const sortedA = A.sort((a,b) => a - b);
//   console.log(sortedA)
//   let result = 1;
//   for (let i=0; i < sortedA.length; i++) {
//       let iPlus = sortedA[i]+1;
//       console.log( iPlus, " iPlus")
//       let iPlusEqual = sortedA[i+1];
//       console.log(sortedA[i+1],"iPlusEqual")
//       console.log(sortedA[i],"sortedA[i]")
//       if (iPlus > 0) {
//           if(sortedA[i] !== iPlusEqual) {
//               if (iPlus !== iPlusEqual ) {
//                   return iPlus;
//               }
//           }
//       }        
//   }
//   return result;
// }

// console.log(solution([1, 3, 6, 4, 1, 2]));

//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

function arrayOfMultiples(num,leng) {
  let array= [];
  let multiple = 0;
  for(let i=1; i<leng+1; i++) {
    console.log(leng)
    multiple = num * i;
   
    array.push(multiple)
  }
  return array
}
  
//console.log(arrayOfMultiples(7,5));

function cardHide(card) {

  let hideNum=[];
  for(let i = 0; i < card.length; i++){
    console.log(card.length-4)
    if(i < card.length-4){
      hideNum.push("*");
    }else{
      hideNum.push(card[i]);
    }
  }
  return hideNum.join("");
  
	// let distance= JSON.stringify(card.substr(card.length-4,4))
	// console.log(distance)

}

console.log(cardHide("35123413355523"))


function circuitPower(voltage, current) {
  return voltage * current;
   
 }
//  circuitPower(230, 10) ➞ 2300


function giveMeSomething(a) {
 let add="something "
 let result= add.concat(a)
  console.log(result)

}

//console.log(giveMeSomething("is better than nothing"));

function dashed( argument ) {
let result= argument.replace(/[aeiouAEIOU]/g,'-$&-')

console.log(result)
  



}

//console.log(dashed("Carpe Diem")) 
//➞ "C-a-rp-e- D-i--e-m"
	

function encrypt( word ) {
  let split= word.split("");
  let reverse=split.reverse()
  console.log(reverse)
  let vowels= {   
    a:0,
    e :1,
    i : 2,
    o : 2,
    u : 3}
 
  
  console.log(vowels)

  for(const vowel in vowels) {
    console.log(vowels[vowel])

  }
  
}

//console.log(encrypt("banana")) 
//➞ "0n0n0baca"




function findNemo(sentence) {

  let findIndex= sentence.split(' ').indexOf('Nemo') + 1
  console.log(findIndex)

  if(findIndex >= 0){
		return `I found Nemo at ${findIndex}!`;
	}
	return ("I can't find Nemo :(");
}

console.log(findNemo("I Nemo am"))