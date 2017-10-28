var data=200;//gloabal variable

function printvalue(){
var name=document.form1.nam.value;
alert("Welcome: "+name);
}
function cube(){
  var data=document.getElementById('number').value;
  alert(data*data*data);
}
function square(){
  var data=document.getElementsByName("nam");
  alert(data.value);
}

function name(){
  alert("hi...............");
}
function msg(){
  alert("Welcom");
}
function a(){
document.writeln(data);
}
function b(){
document.writeln(data);
}
function swich(value){
var grade=value;
var result;
switch(grade){
case 'A':
result+=" A Grade";
case 'B':
result+=" B Grade";
case 'C':
result+=" C Grade";
default:
result+=" No Grade";
}
document.write(result);
}

function emp(id,name,salary){
 this.id=id;
 this.name=name;
this.salary=salary;

this.changeSalary=changeSalary;
function changeSalary(otherSalary){
this.salary=otherSalary;
}
}
e=new emp(103,"Sonoo Jaiswal",30000);
document.write(e.id+" "+e.name+" "+e.salary);
e.changeSalary(45000);
document.write("<br>"+e.id+" "+e.name+" "+e.salary);
