<?php

require_once ($_SERVER['DOCUMENT_ROOT'] . '/graphql/vendor/autoload.php');

use GraphQL\Server\StandardServer;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;

error_reporting(E_ALL ^ E_WARNING);


$catsArray = array("Cat 1","Cat 2","Cat 3");

try {

    $queryType = new ObjectType([
        'name' => 'Query',
        'fields' => [
            'cat' => [
                'type' => Type::string(),
                'args' => [
                    'id' => ['type' => Type::int()],
                ],
                'resolve' => function ($root, $args) {
                    global $catsArray;
                    return $catsArray[$args['id']-1];
                },
            ],
            'cats' => [
                'type' => Type::string(),
                'fields' => [
                    'id' => Type::nonNull(Type::id()),
                    'name' => Type::string(),
                ],
                'resolve' => function ($root, $args) {
                    global $catsArray;
                    // Sa se completeze codul lipsa
                },
            ],
        ],
    ]);

    $mutationType = new ObjectType([
        'name' => 'Mutation',
        'fields' => [
            'create_cat' => [
                'type' => Type::int(),
                'args' => [
                    'id' => ['type' => Type::int()],
                ],
                'resolve' => function ($root, $args) {
                    return $args['id'];
                    // Sa se completeze codul lipsa
                }
            ],
//            'update_cat' => [
//                  // Sa se completeze codul lipsa
//            ],
//            'delete_cat' => [
//                  // Sa se completeze codul lipsa
//            ]
        ],
    ]);


    $schema = new Schema([
        'query' => $queryType,
        'mutation' => $mutationType,
    ]);



    $server = new StandardServer([
        'schema' => $schema
    ]);

    $server->handleRequest();
} catch (Exception $e) {
    StandardServer::send500Error($e);
}