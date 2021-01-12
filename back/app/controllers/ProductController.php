<?php

namespace App\Controllers;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Firebase\JWT\JWT;
use Product;

require_once "bootstrap.php";

const JWT_SECRET = "test123";

class ProductController
{

  public function getProducts($request, $response, $args) {
    global $em;

    $repository = $em->getRepository('Product');
    $products = $repository->findAll();

    if ($products) {
      $data = array();

      foreach ($products as $product) {
        $dataProduct = array('id' => $product->getId(), 'nom' => $product->getName(), 'prix' => $product->getPrice(), 'url' => $product->getImgUrl());
        array_push($data, $dataProduct);
      }
      $response->getBody()->write(json_encode($data));
    } else {
      $response->getBody()->write(json_encode(["success" => false]));
    }
    return $response->withHeader("Content-Type", "application/json");
  }
}
?>
