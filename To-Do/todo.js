$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

//for login

 function valid(check) {
    var u=document.forms["myform"]["user"].value;
    var p=document.forms["myform"]["pwd"].value;
    if(u == 'admin' && p == '12345') {
    alert("Welcome");
    check()
    return false;
    }
    else
    {
    alert("Please Try again!");
    window.location="index.html";
    return false;
    }
    }
    function redirect(){
        window.location="to-do.html"
    }

    //todo

    // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
var ul=document.getElementById('myUL');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

      if(ul.getElementsByClassName('checked').length>5){
      ev.target.classList.toggle('checked');
      alert("Congrats. 5 Tasks have been Successfully Completed");
      
      }

  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

    //json

    function ajax(){

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
                var response = JSON.parse(this.responseText);
               var output ="";
               for(var i=0;i<response.length;i++){
                   output += "<li>"+ response[i].title +"</li>";
                }
                 document.getElementById("myUL").innerHTML = output;
               
            }
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
        }

   
