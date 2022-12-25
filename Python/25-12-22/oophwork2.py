class AmericanDate:
   def  __init__(self,yy,mm,dd):
    self.yy=str(yy)
    self.mm=str(mm)
    self.dd=str(dd)
   def format(self):
    if int(self.dd)<10:
        if int(self.mm)<10:
          return '0'+self.mm+'.'+'0'+self.dd+'.'+self.yy
        else:
          return self.mm+'.'+'0'+self.dd+'.'+self.yy
    else:
        if int(self.mm)<10:
          return '0'+self.mm+'.'+self.dd+'.'+self.yy
        else:
          return self.mm+'.'+self.dd+'.'+self.yy
class EuropeanDate:
   def  __init__(self,yy,mm,dd):
    self.yy=str(yy)
    self.mm=str(mm)
    self.dd=str(dd)
   def format(self):
    if int(self.dd)<10:
        if int(self.mm)<10:
          return '0'+self.dd+'.'+'0'+self.mm+'.'+self.yy
        else:
          return '0'+self.dd+'.'+self.mm+'.'+self.yy
    else:
        if int(self.mm)<10:
          return self.dd+'.'+'0'+self.mm+'.'+self.yy
        else:
          return self.dd+'.'+self.mm+'.'+self.yy

american = AmericanDate(2000, 4, 10)
european = EuropeanDate(2000, 4, 10)
print(american.format())
print(european.format())
