#include <iostream>
using namespace std;
int main(){
   int temp;
   int a[5]={8,7,6,9,12};
   for(int i=0;i<5;i++){
       for(int j=i;j>=0;j--)
       if(a[j+1]<a[j]) {
       temp=a[j];
       a[j]=a[j+1];
       a[j+1]=temp;
      }
   }
   for(int i=0;i<5;i++)
   cout<<a[i]<<endl;
   }



