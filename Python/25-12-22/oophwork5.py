class Rectangle:
    def __init__(self,x,y,w,h):
        self.x=x
        self.y=y
        self.w=w
        self.h=h
        self.A=(x,y)
        self.B=(x,y+h)
        self.C=(x+w,y+h)
        self.D=(x+w,y)
        self.Points=[self.A,self.B,self.C,self.D] 
    def intersection(self,rect2):
        is_in=False
        for p in rect2.Points:
            if  ( p[0]>=self.A[0] and p[0]<=self.C[0]) and (p[1]>=self.A[1] and p[1]<=self.C[1]): 
                is_in=True
                break
        if is_in:
           new_rect=Rectangle(p[0],self.A[1],self.C[0]-rect2.A[0],rect2.B[1]-self.A[1])
           return new_rect
        else:
           return None
rect1=Rectangle(2,3,4,2)
rect2=Rectangle(5,1,6,3)
rect3=rect1.intersection(rect2)    
print(rect3.A,rect3.B,rect3.C,rect3.D)   
rect1 = Rectangle(0, 0, 10, 10)
rect2 = Rectangle(5, 5, 10, 10)
rect3 = rect1.intersection(rect2) 
print(rect3.A,rect3.B,rect3.C,rect3.D)
        
