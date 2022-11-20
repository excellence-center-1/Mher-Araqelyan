#include<iostream>
using namespace std;
int tern_srch(int arr[],int l,int r,int value){
    if(l<value && r>value){
    int mid1=l+(r-l)/3;
    int mid2=r-(r-l)/3;
    if(value==arr[mid1]){
        return mid1;
    }
    if(value==arr[mid2]){
        return mid2;
    }
    if(value<arr[mid1]){
        return tern_srch(arr,l,mid1,value);
    }
    if(value>arr[mid1] && value<arr[mid2]){
        return tern_srch(arr,mid1,mid2,value);
    }
    if(value>mid2){
        return tern_srch(arr,mid2,r,value);
    }
    }
    return -1;
}
int main(){
    int n;
    cout<<"Enter number elements of array: ";cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cout<<"a["<<i<<"]=";
        cin>>a[i];
    }
    int num;
    cout<<"enter number for search: ";cin>>num;
    cout<<"the index of number is: "<<tern_srch(a,0,n-1,num)<<endl;

}