function myFunction(){
    document.getElementById('result').innerHTML = '';
    var a = document.getElementById('base').value;
    var h = document.getElementById('height').value;

    var triangleArea = a*h/2;

    document.getElementById('result').innerHTML = triangleArea;
    
//    alert('The triangle area is: ' + triangleArea);
    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
    }
var name= prompt('Enter your name: ');

alert('Hello ' + name);

document.getElementById('name').innerHTML = name;

