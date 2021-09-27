const dateOfBirth = document.querySelector("#IDoB");
const luckyNumber = document.querySelector("#ILN");
const submit = document.querySelector("#submit");
const outputText = document.querySelector("#outputText");
const outputGif = document.querySelector("#outputGif");


function compareValues(sum,luckyNumber)
{
  if(sum%luckyNumber===0){
    outputText.innerText="You have a Lucky Birthday";
    outputGif.src ="/gif/lucky.gif";
  }else
  {
   outputText.innerText="You have a Unlucky Birthday";
   outputGif.src ="/gif/unlucky.gif";
  }
}


function checkLuckyBirthday(){
  const dob =dateOfBirth.value
  const sum = calcSum(dob);
  if(sum&&dob)
  compareValues(sum,luckyNumber.value)
  else{
  outputText.innerText="Please enter both the fields";
  outputGif.src ="/gif/incomplete.gif";
  }
}
function calcSum(dob){
  dob = dob.replaceAll("-","")
  let sum=0;
  for(let i=0;i<dob.length;i++){
    sum = sum+Number(dob.charAt(i))
  }
  return sum
}


submit.addEventListener("click",function getValues(){
  checkLuckyBirthday()
})