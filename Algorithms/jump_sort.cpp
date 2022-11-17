#include <iostream>
#include <cmath>
using namespace std;
int jump_srch(int x[],int size,int value){
      int step=sqrt(size);
      int t=0;

    t=step;
    while(t<size){
        if(x[t]==value){
            return t;
        }   
        if(x[t]>value){
            for(int i=t;i>(t-step);i--){
                if(x[i]==value){
                    return i;
                }
            }
        }
        else{
            if((t+step)<=size){
            t+=step ;
            }
            else{
                for(int i=size-1;i>t;i--){
                    if(x[i]==value){
                    return i;
                    }
                }
            }
        }
    }
    cout<<"Element not found";
    return -1;

}

int main(){
     cout<<"Enter number n: ";
     int n,fnum;
     cin>>n;
     int a[n];
     for(int i=0;i<n;i++){
        cout<<"a["<<i<<"]=";
        cin>>a[i];
     } 
     cout<<"Input the number you are interested in: ";
     cin>>fnum;
     cout<<"The index of number is: "<<jump_srch(a,n,fnum)<<endl;  
     return 0;
}