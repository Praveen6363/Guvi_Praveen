const form = document.getElementById('form');
const username = document.getElementById('uname');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const password2 = document.getElementById('password2');

username.addEventListener('input', e => {
    e.preventDefault();
    
    userNameValidate();
});

email.addEventListener('focusout', e => {
    e.preventDefault();
    
    emailValidate();
});

password.addEventListener('input', e => {
    e.preventDefault();
    
    passwordValidate();
});

password2.addEventListener('input', e => {
    e.preventDefault();
    
    reEnterPassword();
});

function userNameValidate(){
    const usernameValue = username.value.trim();
    const validUserName =   /^[a-zA-Z].+$/;
    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else if(!validUserName.test(usernameValue)){
        
        setErrorFor(username,"Enter Valid Username");
    }else{
        setSuccessFor(username);
    }
}

function emailValidate(){
    const emailValue = email.value.trim();


    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
}

function passwordValidate(){
    const passwordValue = password.value.trim();
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if(strongRegex.test(passwordValue)){
        
         setErrorForPassStrength(password,"Strong Password");
        
    } else{
        setErrorFor(password,"Password must have atleast 8 characters that include 1 lowercase ,1 uppercase, 1 number and 1 special character.");
    } 
    
}


function reEnterPassword() {
    // trim to remove the whitespaces
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else{
        setSuccessFor(password2);
    }
}

function setErrorForPassStrength(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control success';
    small.innerText = message;
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function check(){
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(passwordValue!=password2Value){
        alert("password not match");
        // return false;
    // }else{
    //     return true;
    // }
    }
}

$(document).ready(function() {
	$('#butsave').on('click', function() {
	$("#butsave").attr("disabled", "disabled");
	var username = $('#uname').val();
	var useremail = $('#email').val();
	var userpass = $('#pass').val();
   // document.cookie = "uname:"||username;
	if(username!="" && useremail!="" && userpass!=""){
		$.ajax({
			url: "./php/register.php",
			type: "POST",
			data: {
				name: username,
				emailid: useremail,
				pass: userpass			
			},
			cache: false,
			success: function(dataResult){
				var dataResult = JSON.parse(dataResult);
				if(dataResult.statusCode==200){
					$("#butsave").removeAttr("disabled");
					$('#fupForm').find('input:text').val('');
					$("#success").show();
					$('#success').html('Data added successfully !'); 
                    					
				}
				else if(dataResult.statusCode==201){
					alert("Error occured !");
				}
				
			}
		});
		}
		else{
			alert('Please fill all the field !');
		}
	});
	});


  

