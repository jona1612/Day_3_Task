var arr = [{"Name": "John", "dept": "cs", "College": "Anna university"}];

for(var i=0;i<arr.length;i++){
    var obj = arr[i]
    console.log(obj);
}


for (var i in arr) {
    console.log(arr[i]);
};


for (var i of arr){
    console.log(i);
}


arr.forEach(obj => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });
});
