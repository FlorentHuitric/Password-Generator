document.body.style.backgroundColor = "black";
var result = document.getElementById("result");
var click = document.getElementById('click');

const allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789~`!@#$%^&*()_-+={[}]|:;"/'
var password = '';
const password_length = 16;

function generate(password_length) {
    for (let i=0; i<password_length; i++){
        password += allCharacters.charAt(Math.floor(Math.random()*allCharacters.length));
    }
    return password;
  }

click.addEventListener(onclick, function(){
    result.innerHTML = password;
});

