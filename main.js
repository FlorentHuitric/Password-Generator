document.body.style.backgroundColor = "black";
var result = document.getElementById("result");
var click = document.getElementById('click');

// const & var necessary to the generate function
const allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789~`!@#$%^&*()_-+={[}]|:;"/'

//function that will generate password_length random password
function generate(Length) {
    let password = '';
    for (let i=0; i<Length; i++){
        password += allCharacters.charAt(Math.floor(Math.random()*allCharacters.length));
    }             
    return password;
  }
  //event that turns the generated password into text
click.addEventListener("click", function(){
    result.innerHTML = generate(16);
});


