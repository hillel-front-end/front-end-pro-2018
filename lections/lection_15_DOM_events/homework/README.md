# Изучить материал
+ https://learn.javascript.ru/attributes-and-custom-properties
+ https://learn.javascript.ru/traversing-dom
+ https://learn.javascript.ru/events-and-timing-depth
+ https://learn.javascript.ru/obtaining-event-object
+ https://learn.javascript.ru/mouse-clicks
+ https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave

# Практика
1) Изучить работу событий input, change, focus, blur

2) 
    Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).

    Изменяя состояние range меняется состояние поля ввода number. И наоборот.

    Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
    Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

    ![Alt Text](/src/images/img_3.png)

    Красный блок - количество комиссии. Комиссия вычисляется по формуле:

    (range < 20) -> 2%
    (20 - 50)  -> 4%
    (50 - 75)  -> 6%
    (75 - 100)  -> 8%

    Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px
