//Question 1
// for(let i=1;i<=100;i++)
// {
//     if(i%3==0 && i%5==0)
//     {
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0)
//     {
//         console.log("Fizz");
//     }
//     else if(i%5==0)
//     {
//         console.log("Buzz");
//     }
//     else
//     {
//         console.log(i);
//     }
// }


//Question 2
// let str1="madam";
// let flag=0;
// for(let i=0,j=(str1.length-1);i<str1.length;i++,j--)
// {
//     if(str1.charAt(i)!=str1.charAt(j))
//     {
//         console.log(str1);
//         console.log("Not Palindrome");
//         break;
//     }
//     else
//     {
//         flag=flag+1;
//     }
// }
// if(flag!=0)
// {
//     console.log(str1);
//     console.log("Palindrome")
// }


//Question 3
// let arr=[20,40,50,19,2,100,56,23,67];
// let max=0;
// for(let i=0;i<arr.length;i++)
// {
//     max=Math.max(max,arr[i]);
// }
// console.log(arr);
// console.log("The largest no is "+max);


// //Question 4
// let str="HelloGuys";
// let c=0,i,j;
// let charcount={

// };
// for(let i=0;i<str.length;i++)
// {
//     s=str.charAt(i);
//     c=0;
//     for(let j=0;j<str.length;j++)
//     {
//         if(str.charAt(i)==str.charAt(j))
//         {
//             c=c+1;
//         }
//     }
//     charcount.s=c;
// }
// console.log(charcount);


//Question 5
// let str="hello guys welcome to mychannel ";
// let str2="";
// let c=0,i,j=0,m=0;
// for(i=0;i<str.length;i++)
// {
//     if(str.charAt(i)==" ")
//     {
//         m=Math.max(m,c);
//         c=0;
//     }
//     else
//     {
//         c=c+1;
//     }
// }
// for(i=0;i<str.length;i++)
// {
//     if(m==j)
//     {
//         break;
//     }
//     else if(str.charAt(i)==" ")
//     {
//         j=0;
//         str2="";
//     }
//     else
//     {
//         str2=str2.concat(str.charAt(i));
//         j=j+1;
//     }
// }
// console.log(str);
// console.log(str2);


//Question 6
// let n=5;
// let sum=1;
// for(let i=1;i<=n;i++)
// {
//     sum=sum*i;
// }
// console.log(n);
// console.log(sum);


//Question 7
// let c=100;
// let f=(9/5)*c+32;
// console.log("Celsius="+c);
// console.log("Fahrenheit="+f);

//Question 8
// let arr=[0,1,3,4,5,6,7,9,10];
// let n=arr.length;
// console.log(arr);
// for(let i=0,j=0;i<arr.length;i++,j++)
// {
//     if(arr[i]!=j)
//     {
//         console.log(j);
//         j=j+1;
//     }
// }