#include <bits/stdc++.h>
using namespace std;

void Print(vector<vector<int>> matrix){
    int col=sizeof(matrix)/sizeof(int)-2;
    int row=sizeof(matrix[0])/sizeof(int)-2;
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            cout<<setw(10);
            cout<<matrix[i][j]<<" ";
        }
        cout<<endl;
    }
}
void add_matrix (vector<vector<int>> matrix_A,vector<vector<int>> matrix_B,vector<vector<int>>& matrix_C,int split_index){
    for(int i=0;i < split_index;i++){
        for(int j=0;j < split_index;j++){
        matrix_C[i][j] = matrix_A[i][j] + matrix_B[i][j];
        }
    }
}
vector<vector<int>> multiply(vector<vector<int>> matrix_A,vector<vector<int>> matrix_B){
    int col_1 = matrix_A[0].size();
    int row_1 = matrix_A.size();
    int col_2 = matrix_B[0].size();
    int row_2 = matrix_B.size();
 
    if (col_1 != row_2) {
        cout << "\nError: The number of columns in Matrix "
                "A  must be equal to the number of rows in "
                "Matrix B\n";
        return {};
    }
    vector<int> result_matrix_row (col_2,0);
    vector<vector<int>> result_matrix (row_1,result_matrix_row);
    if (col_1 == 1){
        result_matrix[0][0] = matrix_A[0][0] * matrix_B[0][0];
    }
    else{
        int split_index=col_1/2;
        vector<int> row_vector(split_index, 0);
        vector<vector<int>> result_matrix_00(split_index,row_vector);
        vector<vector<int>> result_matrix_01(split_index,row_vector);
        vector<vector<int>> result_matrix_10(split_index,row_vector);
        vector<vector<int>> result_matrix_11(split_index,row_vector);

        vector<vector<int> > a00(split_index, row_vector);
        vector<vector<int> > a01(split_index, row_vector);
        vector<vector<int> > a10(split_index, row_vector);
        vector<vector<int> > a11(split_index, row_vector);
        vector<vector<int> > b00(split_index, row_vector);
        vector<vector<int> > b01(split_index, row_vector);
        vector<vector<int> > b10(split_index, row_vector);
        vector<vector<int> > b11(split_index, row_vector);
        for (auto i = 0; i < split_index; i++)
            for (auto j = 0; j < split_index; j++) {
                a00[i][j]=matrix_A[i][j];
                a01[i][j]=matrix_A[i][j+split_index];
                a10[i][j]=matrix_A[i+split_index][j];
                a11[i][j]=matrix_A[i+split_index][j+split_index];

                b00[i][j]=matrix_B[i][j];
                b01[i][j]=matrix_B[i][j+split_index];
                b10[i][j]=matrix_B[i+split_index][j];
                b11[i][j]=matrix_B[i+split_index][j+split_index];
                

            }
        add_matrix(multiply(a00,b00),multiply(a01,b10),result_matrix_00,split_index);
        add_matrix(multiply(a00,b01),multiply(a01,b11),result_matrix_01,split_index);    
        add_matrix(multiply(a10,b00),multiply(a11,b10),result_matrix_10,split_index);
        add_matrix(multiply(a10,b01),multiply(a11,b11),result_matrix_11,split_index);

        for (auto i = 0; i < split_index; i++)
            for (auto j = 0; j < split_index; j++) {
                result_matrix[i][j]=result_matrix_00[i][j];
                result_matrix[i][j+split_index]=result_matrix_01[i][j];
                result_matrix[i+split_index][j]=result_matrix_10[i][j];
                result_matrix[i+split_index][j+split_index]=result_matrix_11[i][j];
            }
        result_matrix_00.clear();
        result_matrix_01.clear();
        result_matrix_10.clear();
        result_matrix_11.clear();
        a00.clear();
        a01.clear();
        a10.clear();
        a11.clear();
        b00.clear();
        b01.clear();
        b10.clear();
        b11.clear();
    }
    return result_matrix;    

}
int main(){
     vector<vector<int> > matrix_A = { { 1, 1, 1, 1 },
                                      { 2, 2, 2, 2 },
                                      { 3, 3, 3, 3 },
                                      { 2, 2, 2, 2 } };
    cout<<"A=>"<<endl;
    Print(matrix_A);
    
    vector<vector<int> > matrix_B = { { 1, 1, 1, 1 },
                                      { 2, 2, 2, 2 },
                                      { 3, 3, 3, 3 },
                                      { 2, 2, 2, 2 } };
    cout<<"B=>"<<endl;
    Print(matrix_B);
    vector<vector<int> > result_matrix(multiply(matrix_A, matrix_B));
    cout<<"C=>"<<endl;
    Print(result_matrix);
    return 0;   
}