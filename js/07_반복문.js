/* 12345 출력하기 */

function check1(){

  for(let num = 1; num <= 5; num++){
    console.log(num);
  }

}


/* 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){

  for(let num = 1; num < 11; num++){
    console.log(num);
  }

}


/* 5부터 13 까지 1씩 증가하며 출력하기 */
function check3(){

  for(let num = 5; num < 14; num++){
    console.log(num);
  }
}

/* 1부터 5 까지 1씩 증가한 숫자를 한 줄로 출력하기 */
function check4(){

  let result = ''; // 결과 저장용 변수에 빈칸

  for(let num = 1; num <= 5; num++){
    
    result += num;
   }
   console.log(result);
}


// 1부터 10까지 1씩 증가한 숫자의 합을 출력하기
function check5(){

  let sum = 0;

  for(let num = 1; num < 11; num++){
    sum += num;
  }
  console.log(sum);
} 


/* 1부터 10까지 2씩 증가하며 출력하기 */
function check6(){


  for(let num = 1; num <= 10; num += 2){
    console.log(num);}
}

/* 3부터 30까지 3의 배수만 출력하기 */
function check7(){

  for(let num = 3; num <= 30; num += 3){
    console.log(num);
  }
}