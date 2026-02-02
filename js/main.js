function sum1_100(){
  let sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}

console.log(sum1_100())