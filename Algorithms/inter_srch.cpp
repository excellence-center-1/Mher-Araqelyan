#include <iostream>
using namespace std;
void print(int x[]){
    int n=sizeof(x)/sizeof(x[0]);
    for(int i=0;i<n;i++){
        cout<<"x["<<i<<"]="<<x[i]<<endl;
    }
}
void input(int x[],int n){
        for(int i=0;i<n;i++){
            cout<<"x["<<i<<"]=";
            cin>>x[i];
        }
}
int inter_srch(int x[],int low,int high,int value){
    if(low<=high && value>=low && value<=high){
        int mid=low+((value-x[low])*(high-low))/(x[high]-x[low]);
        if(x[mid]==value){
        return mid;
        }
        if(x[mid]>value){
        return inter_srch(x,low,mid-1,value);
        }
        else{
        return inter_srch(x,mid+1,high,value);
        }
    }
    return -1;
}
int main(){
    int n,fn;
    cout<<"enter n: ";cin>>n;
    int x[n];
    input(x,n);
    cout<<"enter element for search: ";cin>>fn;
    cout<<"Index of element is: "<<inter_srch(x,0,n-1,fn)<<endl;
    return 0;
    
}