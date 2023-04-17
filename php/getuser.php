<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = $_GET['q'];
$con = mysqli_connect('localhost','root','');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"sriram");
$sql="SELECT * FROM persons WHERE emailid = '".$q."'";
//$sql="SELECT * FROM persons";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Firstname</th>
<th>Email</th>
<th>DoB</th>
<th>P-no</th>
<th>Address</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
//$name=$row['name'];
  echo "<tr>";
  echo '<td><input type="text" value='.$row['name'].' disabled></td>';
  echo "<td>" . $row['emailid'] . "</td>";
  echo "<td>" . $row['phno'] . "</td>";
  echo "<td>" . $row['dob'] . "</td>";
  echo "<td>" . $row['addr'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>