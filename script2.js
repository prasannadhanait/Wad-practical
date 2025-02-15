$(document).ready(function() {
    
    const users = JSON.parse(localStorage.getItem("users"));

    
    if (users.length === 0) {
        
        $("#userlist").append("<li>No users registered yet.</li>");
    } else {
       
        users.forEach(function(user) {
            const userListItem = `<li>Name: ${user.name}, Email: ${user.email}, Phone: ${user.number}</li>`;
            $("#userlist").append(userListItem);
        });
    }
});
