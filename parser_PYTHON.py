# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import csv
import numpy as np
Array = [] #a python List
Array1 = []
Array2 = []
Array3 = []
Array4 = []
Array5 = []
Array6 = []
Array7 = []
Array8 = []
Array9 = []
k =0
with open('Data_SMU_Latest_edited_CSV.csv','r') as csvfile:
    csv_reader = csv.reader(csvfile)
    next(csv_reader)
    for line in csv_reader:
        Array.append(line[1])
        Array1.append(line[4])
        Array2.append(line[5])
        Array3.append(line[6])
        Array4.append(line[7])
        Array5.append(line[8])
        Array6.append(line[9])
        Array7.append(line[10])
        Array8.append(line[11])
        Array9.append(line[12])







Array = np.array(Array)  #convert list to numpy array
Array1 = np.array(Array1)
Array2 = np.array(Array2)
Array3 = np.array(Array3)
Array4 = np.array(Array4)
Array5 = np.array(Array5)
Array6 = np.array(Array6)
Array7 = np.array(Array7)
Array8 = np.array(Array8)
Array9 = np.array(Array9)

print(Array)
 
for x in range(0,len(Array1)):
    if Array1[x]=='':
        Array1[x]=19148  
for x in range(0,len(Array2)):
    if Array2[x]=='':
        Array2[x]=19148
for x in range(0,len(Array3)):
    if Array3[x]=='':
        Array3[x]=19148
for x in range(0,len(Array4)):
    if Array4[x]=='':
        Array4[x]=19148
for x in range(0,len(Array5)):
    if Array5[x]=='':
        Array5[x]=19148
for x in range(0,len(Array6)):
    if Array6[x]=='':
        Array6[x]=19148
for x in range(0,len(Array7)):
    if Array7[x]=='':
        Array7[x]=19148
for x in range(0,len(Array8)):
    if Array8[x]=='':
        Array8[x]=19148   
for x in range(0,len(Array9)):
    if Array9[x]=='':
        Array9[x]=19148   
        
        
        
        
        
Array = map(int,Array)
Array1 = map(int,Array1)
Array2 = map(int,Array2)
Array4 = map(int,Array4) 
Array5 = map(int,Array5)        
Array6 = map(int,Array6)        
Array7 = map(int,Array7)     
Array8 = map(int,Array8) 
Array9 = map(int,Array9)        
Array3 = map(int,Array3)        
       
       
        
#Array.astype(int)  
#Array1.astype(int)        
#Array2.astype(int) 
#Array3.astype(int) 
#Array4.astype(int) 


print(len(Array))
#print(len(Array1))



#print(Array1.dtype)
Rating = np.zeros(shape = (5407,59251), dtype = float)

for x in range(0,len(Array))  :
    Rating[Array[x],Array1[x]] = Rating[Array[x],Array1[x]]+1
    #try:
    Rating[Array[x],Array2[x]] = Rating[Array[x],Array2[x]]+1
    #except:
     #   pass
    #try:
    Rating[Array[x],Array3[x]] = Rating[Array[x],Array3[x]]+1
    #except:
     #   pass
    #try:
    Rating[Array[x],Array4[x]] = Rating[Array[x],Array4[x]]+1
    #except:
     #   pass
    Rating[Array[x],Array5[x]] = Rating[Array[x],Array5[x]]+1
    Rating[Array[x],Array6[x]] = Rating[Array[x],Array6[x]]+1
    Rating[Array[x],Array7[x]] = Rating[Array[x],Array7[x]]+1
    Rating[Array[x],Array8[x]] = Rating[Array[x],Array8[x]]+1
    Rating[Array[x],Array9[x]] = Rating[Array[x],Array9[x]]+1
    
Normalized_Rating = np.zeros(shape = (5407,59251), dtype = float)    

for x in range(0,5406):
    for y in range(0,59251):
        if np.sum(Rating[x,:])==0 :
            Normalized_Rating[x,y] =0
        else:            
            Normalized_Rating[x,y] = int(round((Rating[x,y]/np.sum(Rating[x,:]))*4 + 1))
        
userid = []
itemid = []
rating = []

for x in range(len(Rating[:,1])):
    for y in range(len(Rating[1,:])):
        if Normalized_Rating != 0:
            userid.append(x)
            itemid.append(y)
            rating.append(Normalized_Rating[x,y])
         
        
        
        
        
        
        
        