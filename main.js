document.body.style.backgroundColor = "black";
var result = document.getElementById("result");
var click = document.getElementById('click');
var length = document.getElementById('length');

// const & var necessary to the generate function
const allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789~`!@#$%^&*()_-+={[}]|:;"/'

//function that will generate password_length random password
function generate(length) {
    let password = '';
    for (let i=0; i<length; i++){
        password += allCharacters.charAt(Math.floor(Math.random()*allCharacters.length));
    }             
    return password;
  }
  //event that turns the generated password into text
click.addEventListener("click", function(){
    result.innerHTML = generate(length.value);
});


