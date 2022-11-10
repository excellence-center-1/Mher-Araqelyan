#include <iostream>
#include <queue>
using namespace std;
class stack{
     public:
     queue <int> a1,a2;
     void push(int value){
         a2.push(value);
         while(!a1.empty()){
            a2.push(a1.front());
            a1.pop();
         }
queue<int> a=a1;
a1=a2;
a2=a;  
     }
     void pop(){
        if(a1.empty()){
        return;
        }
        a1.pop();
     }
     int top(){
        if(a1.empty()){
        return -1;
        }
        return a1.front();
     }
};

int main(){
  stack a;
  a.push(15);
  a.push(25);
  a.push(35);
  cout<<a.top()<<endl;
  a.pop();
  cout<<a.top()<<endl;
  a.pop();
  cout<<a.top()<<endl;
  a.pop();
  

  
return 0;
}