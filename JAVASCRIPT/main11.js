function validateForm(){
  var fname=document.forms["myform"]["firstname"].value;
  var lname=document.forms["myform"]["lastname"].value;
  var mobile=document.forms["myform"]["mobile"].value;
  var email=document.forms["myform"]["email"].value;
  document.getElementById('checkvalue').innerHTML="FirstName: "+fname+"<br>Last Name: "+lname+"<br>"+indexOfAt;

//  if (mobile.length!=10) {
//    alert("enter valid mobile number")
//  }
//  var indexOfAt=email.indexOf("@")
//  document.getElementById('check').innerHTML=indexOfAt;
//  var emailDomain=email.subtring(indexOfAt+1);
//  if(emailDomain!="gmail.com" || emailDomain!="gmail.co.in" || email.com!="google.com"){
//    alert("enter valid email address")
//  }

}
