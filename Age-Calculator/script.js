const dobInput=document.getElementById("dob");
const CalBtn=document.getElementById("Calculator-btn");
const resultdiv=document.getElementById("result");

CalBtn.addEventListener("click",function()
{
const dob=new Date(dobInput.value);
const ageIns=Date.now()-dob.getTime();
const ageDate=new Date(ageIns);
const age=Math.abs(ageDate.getUTCFullYear()-1970);

resultdiv.innerHTML=`Your age is ${age}years.`



});