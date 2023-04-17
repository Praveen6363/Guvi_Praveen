
var email = document.getElementById('email');
var password = document.getElementById('password');
var emailValue;
email.addEventListener('focusout', e => {
    e.preventDefault();
    
    
    emailValidate();
});


function emailValidate(){
    emailValue = email.value.trim();
    alert(emailValue);

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
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
$(document).ready(function() {
	$('#butsave').on('click', function() {
	$("#butsave").attr("disabled", "disabled");
	

   // document.cookie = "uname:"||username;
	if( emailValue!=""){
        alert(emailValue);
		$.ajax({
			url: "./php/login.php",
			type: "POST",
			data: {
				emailid: emailValue
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

