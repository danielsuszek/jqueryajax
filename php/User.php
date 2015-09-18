<?php

class User {
    public $name = "foo";
    public $surname = "bar";        
}
$user = new User();
$user->name = "foo";
$user->surname = "bar";
echo json_encode($user);
