// Json Object contains title, Description and id for c and Java codes. I've used this way to reduce the line of html codes
var data = '[{"title": "1. Write a program to find whether a number is palindrome or not.","description": "A number is called Palindrome if it remains same when its digits are reversed. So first we have to reverse the number and then check it with the original one. ","c": "","java": ""},{"title": "2. Write a program to print Fibonacci Series","description": "Fibonacci series is a series of numbers in which the sum of previous two numbers becomes the next number. The first two numbers are 0 & 1. In this problem t1 and t2 is taken as first & second number respectively. And the nextNo is assigned as the sum of the previous two numbers. Here the user gives the input that how many Fibonacci numbers to be printed. ","c": "c code 2","java": "jcode2"},{"title": "3. Write a program to calculate factorial of a number","description": "Factorial of a number n is the product of all integers less than or equal to n. This can be achieved by multiplying the number with its decrementing values with the help of a loop.","c": "c code 3","java": "jcode3"},{"title": "4. Write a program to perform Bubble Sort on an array.","description": "Bubble sort is a sorting algorithm used to sort an array in the ascending order. In this algorithm two loops are used. In the inner loop element is one index is compared with the element of next index and the larger number is Bubbled up to a higher index.","c": "c code 4","java": "jcode4"},{"title": "5. Write a program to find out Third Largest Number in an Array","description": "In this problem the array is first sorted using the Bubble sort Algorithm. The third largest number is then printed using the third index number from the last in that sorted array.","c": "c code 5","java": "jcode5"}]';


let questionNo = 1;
var lang = 'c';
var isLight = true;

jsonLoad(questionNo);

  $(".btn-success").on('click',function() {
    lang =  $(this).find('input').attr('id'); //this finds language id when clicked
    jsonLoad(questionNo);
    // console.log(lang);       // TODO: LOG
  });


function previousClicked(){
  if (questionNo>1) {
    questionNo--;
  }
  jsonLoad(questionNo);
  // console.log("Previous" + questionNo);
}

function nextClicked(){
  if (questionNo<5) {
    questionNo++;
  }
  jsonLoad(questionNo);
  // console.log("Next" + questionNo);
}

function backgroundChanged() {
   var editor =  document.getElementById('editor');
   var small = document.getElementById('small');
   var big = document.getElementById('big');
   var text = document.getElementsByClassName('drk');
   if (isLight) {
     editor.style.background = 'black';
     small.style.background = '#ffffff';
     big.style.background = 'black';
     for (var i = 0; i < text.length; i++) {
       text[i].style.color = '#ffffff';
     }

     isLight = false;
   }else {
     editor.style.background = '#dbe0d7';
     small.style.background = 'black';
     big.style.background = '#ffffff';
     for (var i = 0; i < text.length; i++) {
       text[i].style.color = 'black';
     }
     isLight = true;
   }

}



function jsonLoad(questionNo){
  var myData = JSON.parse(data);
  document.getElementById('question').innerHTML = myData[questionNo-1].title ;  //To fetch title and description from JSON
  document.getElementById('description').innerHTML = myData[questionNo-1].description ;
  var element = document.getElementById(questionNo.toString()+lang);
  var eleByClass = document.getElementsByClassName('result');
  // console.log(questionNo.toString()+lang);
  let codeId = questionNo.toString()+lang;
  for (var i = 0; i < eleByClass.length; i++) {
    eleByClass[i].style.display = 'none';  //By default all codes are Hidden
}

  if(codeId){
    element.style.display = 'block';  // If MATCHES with json id, display code
  }

  // console.log(myData[questionNo-1].title);
}
