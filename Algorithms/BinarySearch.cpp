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
        
    int  bin_srch(int x[],int low,int high, int value){
        int mid=(low+high)/2;
        if(x[mid]==value){
            return mid;
        }
        if(x[mid]>value){
            bin_srch(x,low,mid-1,value);
        }
        else{
            bin_srch(x,mid+1,high,value);
        }
    }
        int main(){
            int n;
            cout<<"Enter Number of array elements: ";
            cin>>n;
            int x[n];
            input(x,n);
            cout<<bin_srch(x,0,n-1,45)<<endl;
            //print(x);


        }
    