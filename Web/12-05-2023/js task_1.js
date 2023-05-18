const func=(arr)=>{
    sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(func([1,2,3,45,5]))
