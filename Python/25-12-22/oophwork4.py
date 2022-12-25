class Table:
    def __init__(self,row,col):
        self.row=row
        self.col=col
        self.rows=[[] for i in range(row)]
        for i in range(row):
            self.rows[i]=[0 for i in range(col)]
    def get_value(self,row,col):
        if row <= self.row and col <= self.col:
            return self.rows[row][col]
        else:
            return None
    def set_value(self,row,col,value):
        self.rows[row][col]=value 
    def n_rows(self):
        return self.row
    def n_cols(self):
        return self.col
a=Table(3,4)
print(a.get_value(0,1))
a.set_value(0,1,10)
print(a.get_value(0,1))    
