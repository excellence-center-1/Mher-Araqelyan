const capitalized=(arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    return arr;
}
console.log(capitalized(["aram","mher"]))