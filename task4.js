var generator = require ('generate-password');
function generates(){
password = generator.generate({
    length: 5,
    number: true,
});
return password;
}
generates();
console.log(password);