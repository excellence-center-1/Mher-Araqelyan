#include <iostream>
using namespace std;
int minPos(int x[],int pos,int n){
    int min=x[pos];
    int j;
    for (int i=pos;i<n;i++){
        if(x[i]<=min){
            min=x[i];
            j=i;
        }
    
    }
return j;

}
int main(){
int x[5]={8,7,6,9,12};
for(int i=0;i<5;i++){
        cout<<x[i]<<endl;

    }
    for(int i=0;i<5;i++){
       int temp=x[i];
        x[i]=x[minPos(x,i,5)];
        x[minPos(x,i,5)]=temp;
    }
    for(int i=0;i<5;i++){
        cout<<x[i]<<endl;

    }
    return 0;
}