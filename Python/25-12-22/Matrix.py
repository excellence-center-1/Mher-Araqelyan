from random import randint
class Matrix:
    def __init__(self,rownum=0,colnum=0):
        self.rownum=rownum
        self.colnum=colnum
        self.matrix=[[] for i in range(self.rownum)]
        for i in range(self.rownum):
            self.matrix[i]=[randint(1,9) for j in range(self.colnum)]    
    def print_Matrix(self):
      for i in range(self.rownum):
        print(self.matrix[i])
    def get_transpose(self,Ma):
        Ma=Matrix(self.colnum,self.rownum)
        Ma.matrix=[[] for i in range(self.colnum)]
        for i in range(self.colnum):
            Ma.matrix[i]=[self.matrix[j][i] for j in range(self.rownum)]
        return Ma
    
aa=Matrix(rownum=4,colnum=5)
aa.print_Matrix()
print()
b=0
b=aa.get_transpose(b)
b.print_Matrix()
