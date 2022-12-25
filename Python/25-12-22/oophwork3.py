class Selector:
    def __init__(self,a):
        self.a=a
    def get_odds(self):
        ak=[]
        for i in self.a:
            if i%2==1:
               ak.append(i)
        return ak
    def get_evens(self):
        az=[]
        for i in self.a:
            if i%2==0:
                az.append(i)
        return az
mylist=[58,25,34,61,5,6,7,8]
myselector=Selector(mylist)
print(myselector.get_odds())
print(myselector.get_evens())     
