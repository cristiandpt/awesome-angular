// Maneras de declarar un array en Javascript
// 1. Mediante la notacion de un objeto
var myArray = new Array();
//2. Mediante un notacion mas sencillas usando corchetes, llamado Array literal
var myArray = [];
var myArray
myArray = [];

var myFilledArray = [12, 'texto', 23, 'otro texto'];

var myArray = [];
myArray[0] = 12;
myArray[1] = 'texto';
myArray[2] = 23;
myArray[3] = 'otro texto';

//Array multidimensional
var myMArray = [];

//Definiendo que un elemento en particular va a ser un array
myMArray[0] = [];
// Llenado el array definido dentro del primer elemento
myMArray[0][0] = 1;
myMArray[0][1] = 2'
...
myMArray[0][n] = x;
 
