var a =[1,2,3,4,5,6,7,8,9,10]

console.log('Even Numbers:')
for(count=0;count<10;count=count+1)
{
   if (a[count]%2 == 0)
   {
    console.log(a[count])
   }
}

console.log('Odd Numbers:')
for(count=0;count<10;count=count+1)
{
   if (a[count]%2 == 1)
   {
    console.log(a[count])
   }
}