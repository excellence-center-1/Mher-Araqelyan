class MathUtils{
    static sum(x){
        let sum=0;
        for (let i=0; i<x.length; i++){
            sum+=x[i];    
        }
        return sum;
    }
    static average(x){
        return MathUtils.sum(x)/x.length;
    }
    static max (x){
        let max=x[0];
        for(let i=1;i<x.length;i++){
            if(x[i]>max){
                max=x[i];
            }
        }
        return max;
    }
    static min (x){
        let min=x[0];
        for(let i=1;i<x.length;i++){
            if(x[i]<min){
                min=x[i];
            }
        }
        return min;
    }
}
console.log(MathUtils.sum([2,5,6]));
console.log(MathUtils.average([2,5,6]));
console.log(MathUtils.max([2,5,6]));
console.log(MathUtils.min([2,5,6]));