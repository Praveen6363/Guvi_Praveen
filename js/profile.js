const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const mobileNum = document.getElementById("MobileNumber");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");
const age = document.getElementById("age");
const state = document.getElementById("state");
const city = document.getElementById("city");
//const uname= document.cookie.uname;
const pinCode = document.getElementById("pin");

fname.addEventListener('input', e => {
    e.preventDefault();
    fNameValidate();
});

lname.addEventListener('input', e => {
    e.preventDefault();
    
    lNameValidate();
});

mobileNum.addEventListener('input',e => {
    e.preventDefault();
    mobileNumberValidate();
});

age.addEventListener('input', e => {
    e.preventDefault();
    
    ageValidate();
});

state.addEventListener('input', e => {
    e.preventDefault();
    
    stateValidate();
});

city.addEventListener('input', e => {
    e.preventDefault();
    
    cityValidate();
});

pinCode.addEventListener('input', e => {
    e.preventDefault();
    
    pinCodeValidate();
});

function fNameValidate(){
    const usernameValue = fname.value.trim();
    const validUserName =   /^[A-Z]+$/i;
    if(usernameValue === '') {
        setErrorFor(fname, 'Username cannot be blank');
    } else if(!validUserName.test(usernameValue)){
        
        setErrorFor(fname,"Enter Valid First Name");
    }else{
        setSuccessFor(fname);
    }
}

function lNameValidate(){
    const usernameValue = lname.value.trim();
    const validUserName =   /^[A-Z]+$/i;
    
    if(usernameValue === '') {
        setErrorFor(lname, 'Username cannot be blank');
    } else if(!validUserName.test(usernameValue)){
        
        setErrorFor(lname,"Enter Valid Last Name");
    }else{
        setSuccessFor(lname);
    }
}

function mobileNumberValidate(){
    const phoneNo = mobileNum.value;
    if(isNaN(phoneNo)){
        setErrorFor(mobileNum,'Enter a valid number');
    }else{
    
    const validNumber = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phoneNo == "") {
        setErrorFor(mobileNum,'mobile number cannot be blank');
      }else if (!validNumber.test(phoneNo)) {
        setErrorFor(mobileNum,'Enter a valid mobile number');
      }else{
        setSuccessFor(mobileNum);
      } 
    }
}

function ageValidate(){
    const userageValue = parseInt(age.value.trim());
    const validAge =    /^[1-9]?[0-9]{1}$|^100$/;
    
    if(userageValue === '') {
        setErrorFor(age, 'Age blank');
    } else if(!validAge.test(userageValue)){
        
        setErrorFor(age,"Enter Valid age");
    }else{
        setSuccessFor(age);
    }
}

function stateValidate(){
    const statenameValue = state.value.trim();
    const validStateName =  /^[A-Z]+$/i;
    
    if(statenameValue === '') {
        setErrorFor(state, 'state cannot be blank');
    } else if(!validStateName.test(statenameValue)){
        
        setErrorFor(state,"Enter Valid state name");
    }else{
        setSuccessFor(state);
    }
}

function cityValidate(){
    const citynameValue = city.value.trim();
    const validcityName =   /^[A-Z]+$/i;
    
    if(citynameValue === '') {
        setErrorFor(city, 'city cannot be blank');
    } else if(!validcityName.test(citynameValue)){
        
        setErrorFor(city,"Enter Valid city name");
    }else{
        setSuccessFor(city);
    }
}

function pinCodeValidate(){
    const pinCodeValue = pinCode.value.trim();
    const validpinCode =    /^(\d{6})$/;
    
    if(pinCodeValue === '') {
        setErrorFor(pinCode, 'pin code cannot be blank');
    } else if(!validpinCode.test(pinCodeValue)){
        
        setErrorFor(pinCode,"Enter Valid pin code");
    }else{
        setSuccessFor(pinCode);
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



$(document).ready(function() {
	$('#butsave').on('click', function() {
	$("#butsave").attr("disabled", "disabled");

	var userfname = $('#fname').val();
	var userlname = $('#lname').val();
	var usermn = $('#MobileNumber').val();
    var userdob = $('#dob').val();
    var userage = $('#age').val();
    var userstate = $('#state').val();
    var usercity = $('#city').val();
    var userpin = $('#pin').val();
    //alert(uname);
	if(userfname!="" && userlname!="" && usermn!=""  && userdob!="" && userage!="" && userstate!="" && usercity!="" && userpin!="" ){
        $.ajax({
            url: "./php/profile.php",
			type: "POST",
			data: {
				fname: userfname,
				lname: userlname,
				Mnumber: usermn,
                dob: userdob,
                age: userage,
                state: userstate,   
                city: usercity,
                pincode: userpin
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


