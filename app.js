let textField;
 htmlText=document.getElementById("html-content");
function myFunction()
{
       textField=document.getElementById("txt-field").value;
  document.getElementById("html-content").innerHTML=textField;
  document.getElementById("html-content1").innerHTML=""; 
}

function clearFunction()
{
    document.getElementById("html-content").innerHTML=" "; 
    document.getElementById("html-content1").innerHTML="FUCK OFF"; 

}