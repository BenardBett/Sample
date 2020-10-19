$("button").click(function(){
    var name=document.getElementById("name").value;
    var messages = document.getElementById("message").value;
    if(name,messages === ""){
        alert("Make sure all field are filled")
    }
    else{
    alert("Thank you for reaching out to us. We have received your message" + ' ' + name );
    }
    });