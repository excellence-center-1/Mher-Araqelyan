#include<iostream>
using namespace std;
class Node{
    public:
    int value;
    Node* next=NULL;
    Node* prev=NULL;
};
class list{
    public:
    Node* first=NULL;
    Node* last=NULL;
    void push_back(int value){
         Node* temp;
         if(first==NULL){
            first=new Node();
            first->value=value;
            last=first;
         }
         else{
            temp=new Node();
            temp->value=value;
            last->next=temp;
            temp->prev=last;
            last=temp;
         }
    }
    void push_front(int value){
        Node* temp;
         if(temp==NULL){
            first=new Node();
            first->value=value;
            last=first;
         }
         else{
            temp=new Node();
            temp->value=value;
            temp->next=first;
            first=temp;
            }
    }
    void pop_front(){
        if(empty()){
            cout<<"POP_FRONT::::the list is empty"<<endl;
            return;
        }
        Node* temp;
        temp=first->next;
        delete first;
        first=temp;
        first->prev=NULL;
    }
    void pop_back(){
        if(empty()){
            cout<<"POP_BACK::::the list is empty"<<endl;
            return;
        }
        Node* temp;
        temp=last->prev;
        delete last;
        last=temp;
        last->next=NULL;
    }
    void insert(int pos,int value){
        int i=1;
        Node* temp=first;
        Node* temp2;
        Node* temp3;
        while(i<pos){
            temp=temp->next;
            i++;
        }
        temp3=temp->next;
        temp2=new Node();
        temp->next=temp2;
        temp2->value=value;
        temp2->prev=temp;
        temp2->next=temp3;
        temp3->prev=temp2;
        }
    void clear(){
        Node* temp1=first;
        Node* temp2;
        while(temp1!=last){
            temp2=temp1->next;
            delete temp1;
            temp1=temp2;
        }
        delete last;
        first=NULL;
        last=NULL;
    }  
    unsigned int size(){
        Node* temp=first;
        int i=1;
        if(temp==NULL){
        return 0;
        }
        while(temp->next!=NULL){
            i++;
            temp=temp->next;
        }
        return i++;
    } 
    bool empty(){
        if (first==NULL){
            return true;
            }
            else{
                return false;
            }
        }
};
int main(){
    list a;
    a.pop_back();
    a.push_back(12);
    a.push_back(18);
    a.push_back(100);
    a.push_back(121);
    a.push_front(1111);
    a.insert(2,66);
    // a.pop_front();
    // a.pop_back();
    Node* temp=a.first;
    while(temp->next!=NULL){
        cout<<temp->value<<endl;
        temp=temp->next;
    }
    cout<<temp->value<<endl;
    //a.clear();
    cout<<"The size of list is:"<<a.size()<<endl;
    return 0;
}
