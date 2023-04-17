<?php
   include 'database.php';
   //$name=$_GET['fname']; 
   $uemail = $_POST["emailid"];
   
    // if error occurs 
    if ($conn -> connect_errno)
    {
       echo "Failed to connect to MySQL: " . $conn -> connect_error;
       exit();
    }
    
    $sql = $conn->prepare("select * from profiles where names=?");
    $sql->bind_param("s",$uemail);
    $sql->execute();

    $result = $sql->get_result();
    //declare array to store the data of database
    $row = []; 
  
    if ($result->num_rows > 0) 
    {
        // fetch all data from db into array 
        $row = $result->fetch_all(MYSQLI_ASSOC);  
    }   
?>
<!DOCTYPE html>
<html>
<head>
    <style>
        td,th {
            border: 1px solid black;
            padding: 10px;
            margin: 5px;
            text-align: center;
        }
    </style>
</head>
  
<body>

    <table>
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastNmae</th>
                <th>MobileNumber</th>
                <th>Date Of Birth</th>
                <th>Age</th>
                <th>State</th>
                <th>City</th>
                <th>PinCode</th>
                <th>UserName</th>
            </tr>
        </thead>
        <tbody>
            <?php
               if(!empty($row))
               foreach($row as $rows)
              { 
            ?>
            <tr>
  
                <td><?php echo $rows['fname']; ?></td>
                <td><?php echo $rows['lname']; ?></td>
                <td><?php echo $rows['mnumber']; ?></td>
                <td><?php echo $rows['dob']; ?></td>
                <td><?php echo $rows['age']; ?></td>
                <td><?php echo $rows['states']; ?></td>
                <td><?php echo $rows['city']; ?></td>
                <td><?php echo $rows['pincode']; ?></td>
                <td><?php echo $rows['names']; ?></td>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>
  
<?php   
    mysqli_close($conn);
?>