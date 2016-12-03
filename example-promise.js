function getTempCallback(location,callback){
  callback(null,78);
  callback("city not found");

}
getTempCallback('philadelphia',function(err,temp){
  if(err){
      console.log('error',err);
  }else{
      console.log('success',temp)
  }
})

function getTempPromise(location){
  return new Promise(function(resolve,reject){
    resolve(79);
    reject('city not found');
  })
}

getTempPromise('philadelphia').then(function(temp){
  console.log("promise sucess",temp);
},function(err){
  console.log("promise error",err);
})

function addPromise(a,b){

}
