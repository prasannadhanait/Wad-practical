$(document).ready(function() {
    $("#btn-1").click(function() {
        const name = $("#name").val();
        const email = $("#email").val();
        const number = $("#number").val();

      

        
        const obj = { name: name, email: email, number: number };

        
        let users = JSON.parse(localStorage.getItem("users")) || [];

        
        users.push(obj);

        
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registered Successfully");

        $("#name").val("");
        $("#email").val("");
        $("#number").val("");

    
    });
});