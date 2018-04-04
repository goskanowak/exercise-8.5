function calculateTriangleArea () {
    document.getElementById('result').innerHTML = '';
    var a = document.getElementById('base').value;
    var h = document.getElementById('height').value;

    var triangleArea = a * h / 2;

    document.getElementById('result').innerHTML = triangleArea;

    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
    }

calculateTriangleArea();
