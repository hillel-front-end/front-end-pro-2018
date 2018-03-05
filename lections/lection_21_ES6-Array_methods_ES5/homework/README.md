# Изучить материал

+ https://learn.javascript.ru/array-iteration
+ http://es6-features.org

# Практика
 

 1) Напиши функцию fmap(do, list), которая принимает на вход функцию и массив, `do, list`, где `list` - массив элементов, на которые применится функция `do`. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из `list` и пропускает его через функцию `do`. Пример:

  
        function square(x) { return x * x; }
        var list = [1, 2, 3]
        var squareGen = fmap(square, list);

        console.log(squareGen.next()); // 1
        console.log(squareGen.next()); // 4
        console.log(squareGen.next()); // 9
        console.log(squareGen.next()); // undefined