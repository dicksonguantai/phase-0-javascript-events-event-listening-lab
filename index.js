const input = document.getElementById("input")
input(addingEventListener());

function addingEventListener() {
     input.addEventListener('click', function (){
        alert("I was clicked")
    } );
   

}
