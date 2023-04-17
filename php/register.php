<?php
	include 'database.php';
	$name=$_POST['name'];
	$email=$_POST['emailid'];
	$pass=$_POST['pass'];
	setcookie("uname", "", time() - 3600);
	setcookie("uname",$email , time() + (86400 * 20), "/");
	$sql = "INSERT INTO Multiples (names,email,passw) VALUES ('$name','$email','$pass')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
	header('Location: profile.html');
?>