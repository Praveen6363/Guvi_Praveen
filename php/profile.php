<?php
	include 'database.php';
	$uname = $_COOKIE["uname"];
	$name=$_POST['fname'];
	$email=$_POST['lname'];
	$mn=$_POST['Mnumber'];
    $dob=$_POST['dob'];
    $age=$_POST['age'];
    $state=$_POST['state'];
    $city=$_POST['city'];
    $pc=$_POST['pincode'];
	$sql = "INSERT INTO profiles (fname,lname,mnumber,dob,age,states,city,pincode,names) VALUES ('$name','$email','$mn','$dob','$age','$state','$city','$pc','$uname')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
	setcookie("uname", "", time() - 3600);
	//header('Location: display.html');
?>