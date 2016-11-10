# Стартовый набор для ScssPhp



### Минимальные требования

* PHP >= 5.4



### Начало работы

1. Скопировать репозиторий в папку стилей

2. Подключить стили следующим образом:
```html
<link rel="stylesheet" href="/stylesDir/style.php/main.scss" />
```

3. Вести работу в ``scss/main.scss``, в нем же можно подключать / отключать модули.

4. Если есть необходимость, можно редактировать модули в ``scss/modules/moduleName``.

5. Пример того, как все это работает, можно посмотреть в ``index.html``.



### Модули


#### [Bootstrap](http://getbootstrap.com/css/#sass)

Подключает Bootstrap 3 с возможностью кастомизации.

Изначально в директории доступно:
* редактирование переменных в файле ``variables``
* настройка сетки в файле ``grid``

Модуль подключается с помощью файла ``bootstrap_full`` для полной версии Bootstrap, ``bootstrap_grid`` только для сетки.
Пример подключения части модулей можно посмотреть в этих 2 файлах.


#### [Bourbon Neat](http://neat.bourbon.io/examples/)

SCSS сетка с возможностью использовать любое количество колонок.
Можно настраивать отступы сетки, направление и многое другое - [см. документацию](http://thoughtbot.github.io/neat-docs/latest/).

Модуль подключается с помощью файла ``library``. В файле ``example`` можно посмотреть пример.
