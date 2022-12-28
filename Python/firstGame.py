#Это игра по угаданию чисел.
import random
guessesTaken = 0

print('Привет! как тебя зовут?')
mmyName=input()
number=random.randint(0,20)
print('Что ж, '+myName+',я загадываю число от 1 до 20.')
for guessesTaken in range(6):
    print('Попробуй угадать.')
    guess = input()
    guess=int(guess)
    if guess<number:
        print('Твоё число слишком маленькое.')
    if guess>number:
        print('Твоё число слишком большое.')
    if guess==number:
        break
    if guess == number:
        break
if guess == number:
    guessesTaken=str(guessesTaken+1)
    print('Молодец, '+myName+' Ты справился за '+guessesTaken+' попытки!')
if guess != number:
    number = str (number)
    print('Увы. Я загадала число '+number+'.')
