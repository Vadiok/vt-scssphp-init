<?php
require_once __DIR__ . '/vendor/autoload.php';

use \Leafo\ScssPhp\Server;
use \Leafo\ScssPhp\Compiler;

$config = [];
$config['dir'] = 'scss';

$scssCompiler = new Compiler();
$scssCompiler->setImportPaths($config['dir']);
$scssCompiler->setFormatter('\Leafo\ScssPhp\Formatter\Crunched');

$scssServer = new Server($config['dir'], null, $scssCompiler);
$scssServer->serve();