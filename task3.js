const fs = require ('fs');
// creact a file
// console.log (fs)
fs.writeFile('./welcome.txt' , "hello Node", (err)=>{
   if (err) return console.log('this error');
    console.log('file created')
})

//async axait for sync
// reading an existing file 
fs.readFile('./welcome.txt', 'utf-8' , (err, data)=>{
    if (err)return console.log('Error:', err);
    console.log(data)
})