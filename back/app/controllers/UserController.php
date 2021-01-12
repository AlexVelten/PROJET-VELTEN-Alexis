<?php

namespace App\Controllers;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Firebase\JWT\JWT;
use User;

require_once "bootstrap.php";

const JWT_SECRET = "test123";

class UserController
{

  public function addUser($request, $response, $args) {
    global $em;

    $body = $request->getParsedBody();
    $login = $body['login'] ?? "";

    $userRepo = $em->getRepository('User');
    $user = $userRepo->findOneBy(array('login' => $login));

    if($user){
      $response->getBody()->write(json_encode(["success" => false]));
      return $response->withHeader("Content-Type", "application/json");
    }

    $civility = $body['civility'] ?? "";
    $password = password_hash($body['password'],PASSWORD_DEFAULT);
    $firstName = $body['firstName'] ?? "";
    $lastName = $body['lastName'] ?? "";
    $address = $body['address'] ?? "";
    $postalCode = $body['postalCode'] ?? "";
    $city = $body['city'] ?? "";
    $mail = $body['mail'] ?? "";
    $country = $body['country'] ?? "";
    $phoneNumber = $body['phoneNumber'] ?? "";

    $user = new User();
    $user->setLogin($login);
    $user->setPassword($password);
    $user->setFirstname($firstName);
    $user->setLastname($lastName);
    $user->setAddress($address);
    $user->setPostalcode($postalCode);
    $user->setCity($city);
    $user->setCivility($civility);
    $user->setMail($mail);
    $user->setPhonenumber($phoneNumber);
    $user->setCountry($country);
    $em->persist($user);
    $em->flush();

    $response->getBody()->write(json_encode(["success" => true, "User" => $body]));

    return $response->withHeader("Content-Type", "application/json");
  }

  public function getUser($request, $response, array $args){
    global $em;

    $login = $args['login'];
    $userRepo = $em->getRepository('User');
    $user = $userRepo->findOneBy(array('login' => $login));

    if ($user) {
      $data = array('login' => $user->getLogin(),           'lastName' => $user->getLastname(),
                    'firstName' => $user->getFirstname(),   'civility' => $user->getCivility(),
                    'address' => $user->getAddress(),       'city' => $user->getCity(),
                    'postalCode' => $user->getPostalCode(), 'country' => $user->getCountry(),
                    'mail' => $user->getMail(),             'phoneNumber' => $user->getPhoneNumber());
      $response->getBody()->write(json_encode($data));
    } else {
      $response->getBody()->write(json_encode(["success" => false]));
    }
    return $response->withHeader("Content-Type", "application/json");
  }

  public function login($request, $response, $args) {
    global $em;

    $parsedBody = $request->getParsedBody();

    $login = $parsedBody["login"];
    $password = $parsedBody["password"];

    $issuedAt = time();

    $payload = [
      "user" => [
        "login" => $login,
        "password" => $password
      ],
      "iat" => $issuedAt,
      "exp" => $issuedAt + 60
    ];

    $token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", $token_jwt);

    $userRepo = $em->getRepository('User');
    $user = $userRepo->findOneBy(array('login' => $login));

    if($user){
      if(!password_verify($password, $user->getPassword())){
        $response->getBody()->write(json_encode(["success" => false]));
        return $response->withHeader("Content-Type", "application/json");
      }
    } else {
      $response->getBody()->write(json_encode(["success" => false]));
      return $response->withHeader("Content-Type", "application/json");
    }

    $response->getBody()->write(json_encode(["success" => true, "login" => $login]));

    return $response->withHeader("Content-Type", "application/json");
  }
}
?>
