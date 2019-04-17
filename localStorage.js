myStorage = localStorage;

var time = Date();
var name = 'Mykhailo' ;
var surname = 'Shtefanitsa' ;
var currentPage = document.URL;


localStorage.setItem('time', time)
localStorage.setItem('name', name);
localStorage.setItem('surname', surname);
localStorage.setItem('page', currentPage);

console.log(localStorage)