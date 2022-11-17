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
        if(low<=high && value>=low && value<=high){
            int mid=(low+high)/2;
            if(x[mid]==value){
            return mid;
            }
            if(x[mid]>value){
              return bin_srch(x,low,mid-1,value);
            }
            if(x[mid]<value){
              return bin_srch(x,mid+1,high,value);
            }
        }
        return -1;
    }
        int main(){
            int fn,n;
            cout<<"Enter Number of array elements: ";
            cin>>n;
            int x[n];
            input(x,n);
            cout<<"Enter element for search: ";cin>>fn;
            cout<<"Index of element is: "<<bin_srch(x,0,n-1,fn)<<endl;
            return 0;
            //print(x);

        }
    