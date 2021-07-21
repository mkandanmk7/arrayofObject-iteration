var obj = [
   { person: "Name 1", age: "2", company: "GUVI" },
   { person: "Name 2", age: "5", company: "GUVI geek" },
   { person: "Name 3", age: "8", company: "GUVI geek network" },
 ];

 //************** for loop iteration***********************:

 for(let i=0;i<obj.length;i++)
{
   console.log(obj[i].person,"age:",obj[i].age,obj[i].company);
};
/*  expected:

Name 1 age: 2 GUVI
Name 2 age: 5 GUVI geek
Name 3 age: 8 GUVI geek network
*/

// ******************for in iteration**********************;

 for(let key in obj)
 {
    console.log(obj[key].person,",","age:",obj[key].age,",",obj[key].company);
 };
/* expected->
 Name 1 , age: 2 , GUVI
 Name 2 , age: 5 , GUVI geek
 Name 3 , age: 8 , GUVI geek network
*/

//*******************for of Iteration********************
 for(let key of obj)
 {
    console.log(key.person,"age:",key.age,key.company);
 };
 /* expected:
Name 1 age: 2 GUVI
Name 2 age: 5 GUVI geek
Name 3 age: 8 GUVI geek network 
*/

//*******************forEach Iteration*****************;
 obj.forEach((key)=>
 {
    console.log(key.person,"age:",key.age,"company",key.company);
 });
 
 
 /* expected output

 Name 1 age: 2 company GUVI
Name 2 age: 5 company GUVI geek
Name 3 age: 8 company GUVI geek network
  */
