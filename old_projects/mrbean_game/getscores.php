<?php

$host="localhost"; // Host name 
$username="vriesman"; // Mysql username 
$password="G3he1mV00rM1j!@"; // Mysql password 
$db_name="vriesman"; // Database name 
$tbl_name="scores"; // Table name

// Connect to server and select database.
$link = mysqli_connect("$host", "$username", "$password", "$db_name");

// Retrieve data from database
$sql="SELECT * FROM scores ORDER BY score ASC LIMIT 10";// The 'LIMIT 10' part will only read 10 scores. Feel free to change this value
$result=mysqli_query($link, $sql);


// Start looping rows in mysql database.
 while($rows=mysqli_fetch_array($result)){
	echo $rows['name'] . "|" . $rows['score'] . "|";
	
// close while loop 
 }

// close MySQL connection 
 mysqli_close();
?>