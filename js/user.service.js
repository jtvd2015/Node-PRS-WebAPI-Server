$().ready(function() {

	function get(id) {
		$.getJSON("http://localhost:5000/Users/Get/"+id)
			.done(function(res) {
				display(res.data);  //displays data on UI after it is updated
				console.log(res);
			})
			.fail(function(err) {
				console.error(err);  //shows error in console.log
			});
	}

	function display(user) {  //passes a single user instance when function display is called
		$("#idx").val(user.Id);
		$("#firstname").val(user.FirstName);
		$("#lastname").val(user.LastName);
		$("#username").val(user.UserName);
		$("#password").val(user.Password);
		$("#phone").val(user.Phone);
		$("#email").val(user.Email);
		$("#reviewer").prop("checked", user.IsReviewer); //based on the user data entered for IsReviewer
		$("#admin").prop("checked", user.IsAdmin);  //based on the user data entered for IsAdmin
	}

	$("#getId").click(function() {
		var id = $("#theId").val(); //val gets value entered in input box
		get(id);
	});

	function change(user) {
		$.post("http://localhost:5000/Users/Change", user)
			.done(function(res) {
				console.log(res);
			})
			.fail(function(err) {
				console.log(err);
			});			
	}

	/*
	function add(user) {
		$.post("http://localhost:5000/Users/Create", user)
			.done(function(res) {
				console.log(res);
			})
			.fail(function(err) {
				console.log(err);
			});			
	}
	*/

	$("#chg").click(function() {  //fully formed object
		var user = {
			Id: $("#idx").val(),  //this is usually 0 because we cannot pass 1 of the already generated id #'s
			FirstName: $("#firstname").val(),
			LastName: $("#lastname").val(),
			UserName: $("#username").val(),
			Password: $("#password").val(),
			Phone: $("#phone").val(),
			Email: $("#email").val(),
			IsReviewer: $("#reviewer").prop("checked"),
			IsAdmin: $("#admin").prop("checked"),
		};
		change(user);
	});

	/*
	$("#add").click(function() {  //fully formed object
		var user = {
			Id: 0,  //this is usually 0 because we cannot pass 1 of the already generated id #'s
			FirstName: $("#firstname").val(),
			LastName: $("#lastname").val(),
			UserName: $("#username").val(),
			Password: $("#password").val(),
			Phone: $("#phone").val(),
			Email: $("#email").val(),
			IsReviewer: $("#reviewer").prop("checked"),
			IsAdmin: $("#admin").prop("checked"),
		};
		add(user);
	});
	*/

});