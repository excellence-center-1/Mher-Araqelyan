class LeftParagraph:
    def __init__(self,length):
       self.length=length
       self.lword=[]
    def add_word(self,word):
       self.lword.append(word)
    def end(self):
       i=0
       while i < len(self.lword):
          if i+1<len(self.lword):
            if (len(self.lword[i]+self.lword[i+1])+1)<=self.length:
               print('{:<8}'.format(self.lword[i]+' '+self.lword[i+1]))
               i+=2
            else:
               print('{:<8}'.format(self.lword[i]))
               i+=1
          else:
            print('{:<8}'.format(self.lword[i]))
lp = LeftParagraph(8)
lp.add_word('abc')
lp.add_word('defg')
lp.add_word('hi')
lp.add_word('jklmnopq')
lp.add_word('r')
lp.add_word('stuv')
lp.end()
print()
class RightParagraph:
    def __init__(self,length):
       self.length=length
       self.lword=[]
    def add_word(self,word):
       self.lword.append(word)
    def end(self):
       i=0
       while i < len(self.lword):
          if i+1<len(self.lword):
            if (len(self.lword[i]+self.lword[i+1])+1)<=self.length:
               print('{:>8}'.format(self.lword[i]+' '+self.lword[i+1]))
               i+=2
            else:
               print('{:>8}'.format(self.lword[i]))
               i+=1
          else:
            print('{:>8}'.format(self.lword[i]))
rp = RightParagraph(8)
rp.add_word('abc')
rp.add_word('defg')
rp.add_word('hi')
rp.add_word('jklmnopq')
rp.add_word('r')
rp.add_word('stuv')
rp.end()
print()
