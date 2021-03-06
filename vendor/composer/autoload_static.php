<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite09cca0cc978bdda58c86c347c30dc1b
{
    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'Leafo\\ScssPhp\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Leafo\\ScssPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/leafo/scssphp/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite09cca0cc978bdda58c86c347c30dc1b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite09cca0cc978bdda58c86c347c30dc1b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
