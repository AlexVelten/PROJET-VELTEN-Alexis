<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
//date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'nas.fuchsh.fr',
'driver' => 'pdo_mysql',
'user' => 'Cours_DB1',
'password' => 'rgUYuAEr7qLQogmA*',
'dbname' => 'Cours_DB1',
'port' => '3306'
);

$em = EntityManager::create($conn, $config);
