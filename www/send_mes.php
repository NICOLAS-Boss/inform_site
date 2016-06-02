<?php
if ($_POST) { 
	$name = htmlspecialchars($_POST["name"]); 
	$email = htmlspecialchars($_POST["email"]);
	$subject = htmlspecialchars($_POST["subject"]);
	$message = htmlspecialchars($_POST["message"]);
	$json = array(); 
	if (!$name or !$email or !$subject or !$message) { 
		$json['error'] = 'Вы заполнили не все поля!'; 
		echo json_encode($json); 
		die(); 
	}
	if(!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) { 
		$json['error'] = 'Не верный формат email! >_<'; 
		echo json_encode($json); 
		die(); 
	}

	mail('mymail@gmail.com',$subject,$name.' '.$email);
	$json['error'] = 0; 

	echo json_encode($json); 
} else { 
	echo 'GET LOST!'; 
}
?>