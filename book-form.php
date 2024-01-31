<?php
$coonection=mysqli_connect('localhost','root','','book_do');

if(isset($_post['send'])){
    $name=$_post['name'];
    $email=$_post['email'];
    $phone=$_post['phone'];
    $address=$_post['address'];
    $location=$_post['location'];
    $guests=$_post['guets'];
    $arrivals=$_post['arrivals'];
    $leaving=$_post['leaving'];

  $request= "insert into book_form(name,	email,	phone,	address, location,	guests,	arrivals,	leaving	
  ) values('$name',	'$email', '$phone',	'$address',	'$location',	'$guests',	'$arrivals',	'$leaving'	
  )";
  mysqli_query($connection,$request);

  header('location:book.php');

}else{
    echo 'something went wrong try again';
}


?>