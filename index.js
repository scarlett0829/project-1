var hello = $('.yup');
var scarlett = $('#my-name');
var question = $('h2');

console.log(hello);
console.log(scarlett);
console.log(question);

var header = $('h1');
header.text ("what up dude");

var input = $('button').val();

var button = $('button')
button.on("click", goAway);

//var name= &('/name-input'). val


function goAway(){
  var input = $('button').val();
  scarlett.text(`Go Away! ${input}`);
  hello.text('no body likes u');
  button.css ('backgroundColor','yellow');
}
