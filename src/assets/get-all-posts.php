<?php

  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');
  header("Access-Control-Allow-Headers: X-Requested-With");

	$servername = "mysql8049.xserver.jp";
	$username   = "yk449_wp3";
	$password   = "2wy7i8zbdr";
	$dbname     = "yk449_wp3";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}

	// echo "Connected successfully";
	$sql = "SELECT * FROM wp_posts WHERE post_type = 'code-snippets'";
	$result = mysqli_query($conn,$sql);
	$myArray = array();

	if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
	  $myArray[] = $row;
	}

	print json_encode($myArray);
	}
	else
	{
	echo "0 results";
	}
?>
