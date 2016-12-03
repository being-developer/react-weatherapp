var color= ["red","green","blue"];

color.forEach(function(ele,idx,arr){
  console.log("foreach ==> ",ele);
})
color.forEach((ele,idx,arr)=>{
  console.log("Arrow Function ===>",ele)
})

var returnColor = (color)=>color+"!";
console.log(returnColor('red'));
var person = {
  name:"subahsh",
  greet:function(){
    color.forEach(function)
  }

}
