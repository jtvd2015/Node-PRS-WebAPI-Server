$().ready(function() {

    var users;
    var user;


function list() {
    //list of all users
    $.getJSON("http://localhost:5000/Users/List")
            .done(function(res) {                
                users = res.data;                
                //function to build UI
                renderTable(users); //shows all the users
                console.log(res);
        })
            .fail(function(err) {
                console.error(err);
        });

}

function get(id) {
        
        //get a single user by id
        $.getJSON("http://localhost:5000/Users/Get/"+id)
            .done(function(res) {
                user = res.data;
                renderDetailTable(user);  //shows just the user by user id
                console.log(res);
        })
            .fail(function(err) {
                console.error(err);
        });

}

    //list(); //call that returns list of data
    get(3);  //call that returns single user by id

    function renderTable(users) {  //array of users instances and will build the table data dynamically
        var tbody = $("tbody")
        for(var user of users) { //to run through the array of users(foreach loop, in JS, it's a for loop)
            var tr = "<tr>";  //created var tr and concatenating
            tr += "<td>" + user.FirstName +  " " + user.LastName + "</td>";  //this will output the FN & LN in the table Name column
            tr += "<td>" + user.UserName + "</td>";
            tr += "<td>" + user.Email + "</td>";
            tr += "<td>" + user.IsAdmin + "</td>";
            tr += "</tr>";  //adding closing tr tag to string
            tbody.append(tr);  
    }
}

    $("#getId").click(function() {
        var id = $("#theId").val();
        get(id);
    });

    function renderDetailTable(user) {
        $("#name").text(user.FirstName + " " + user.LastName);  //text will show the text for the user.FN & user.LN
        $("#username").text(user.UserName);
        $("#email").text(user.Email);
        $("#admin").text(user.IsAdmin);
    }
    
});