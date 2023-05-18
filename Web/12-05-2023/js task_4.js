const check_win=(arr,move)=>
          ((arr[0][0]==arr[0][1] && arr[0][0]==arr[0][2] && arr[0][0]==move) || 
           (arr[1][0]==arr[1][1] && arr[1][0]==arr[1][2] && arr[1][0]==move) ||
           (arr[2][0]==arr[2][1] && arr[2][0]==arr[2][2] && arr[2][0]==move) ||
           (arr[0][0]==arr[1][0] && arr[0][0]==arr[2][0] && arr[0][0]==move) || 
           (arr[0][1]==arr[1][1] && arr[0][1]==arr[2][1] && arr[0][1]==move) || 
           (arr[0][2]==arr[1][2] && arr[0][2]==arr[2][2] && arr[0][2]==move) || 
           (arr[0][0]==arr[1][1] && arr[0][0]==arr[2][2] && arr[0][0]==move) ||
           (arr[0][2]==arr[1][1] && arr[0][2]==arr[2][0] && arr[0][2]==move));
const check_move=(a,b,arr)=>((a>=0 && a<=2) && (b>=0 && b<=2) && (arr[a][b]!='x' && arr[a][b]!='0'))               
arr=[["*","*","*"],["*","*","*"],["*","*","*"]]
for(let i=0;i<arr.length;i++){
    console.log(arr[i].join(" "));
}
let a;
let b;
let move;
console.log("The first player's turn in the format a then b");
move='x';
a=prompt("enter a: ");
b=prompt("enter b: ");
if (check_move(a,b,arr)){
    arr[a][b]=move;
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].join(" "));
    }
}
else {
    while(!check_move(a,b,arr)){
        a=prompt("enter a: ");
        b=prompt("enter b: ");
    }
    arr[a][b]=move;
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].join(" "));
    }
}
first_second=false; // first-true -x , second=false - 0
while(!check_win(arr,move)){
    if(first_second){
        console.log("1st players turn: ");
        move='x';
        first_second=false;
    } else {
            console.log("2st players turn: "); 
            move='0'
            first_second=true;
      }
    a=prompt("enter a: ");
    b=prompt("enter b: ");
    if(check_move(a,b,arr)){
        arr[a][b]=move;
        for(let i=0;i<arr.length;i++){
            console.log(arr[i].join(" "));
        }
    } else {
            while(!check_move(a,b,arr)){
                a=prompt("enter a: ");
                b=prompt("enter b: ");
            }
            arr[a][b]=move;
            for(let i=0;i<arr.length;i++){
                console.log(arr[i].join(" "));
            }
      }
}
if(!first_second){
    console.log("First win");
}
else{
    console.log("Second win")
}


