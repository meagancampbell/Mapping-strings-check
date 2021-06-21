let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials  = names.map(function(n){
  for (let i = 0; i < n.length; i++){
    return n[i];
  }
});  

console.log(firstInitials);
