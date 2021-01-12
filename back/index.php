<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Container\ContainerInterface;
use Slim\Factory\AppFactory;
use App\Controllers\UserController;
use App\Middlewares\CorsMiddleware;
use App\Middlewares\JwtMiddleware;
use Tuupola\Middleware\JwtAuthentication;
use Slim\Routing\RouteCollectorProxy;

require __DIR__ . '/vendor/autoload.php';
require "bootstrap.php";

const JWT_TOKEN = "test123";

$test = $conn;
$app = AppFactory::create();

$app->options('/{routes:.*}', function (Request $request, Response $response) {
  return $response;
});

$app->add(new CorsMiddleware);

$jwt = new Tuupola\Middleware\JwtAuthentication([
  "path" => "/api",
  "secure" => false,
  "secret" => JWT_TOKEN,
  "passthrough" => ["/login"],
  "attribute" => "decoded_token_data",
  "algorithm" => ["HS256"],
  "error" => function($response, $arguments) {
    $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'AUTO');
    return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
  }
]);

$app->add($jwt);

$app->group('/user', function (RouteCollectorProxy $group) {
  $group->post('/add', 'App\Controllers\UserController:addUser');
  $group->get('/{login}', 'App\Controllers\UserController:getUser');
  $group->post('/login', 'App\Controllers\UserController:login');
});

$app->group('/product', function (RouteCollectorProxy $group) {
  $group->get('/get/all', 'App\Controllers\ProductController:getProducts');
});

$app->run();
?>
