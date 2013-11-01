function courseCtrl($scope){
		$scope.courses = [
		{
			code:"c1",
			name:"HTML5 Fundamentals",
			author:"John Doe",
			lectures:["a1","a2","a3","a4"],
			description:"HyperText Markup Language (HTML) is the main markup language for creating web pages and other information that can be displayed in a web browser."
		},
		{
			code:"c2",
			name:"JavaScript",
			author:"Jack Doe",
			lectures:["a1","a2"],
			description:"JavaScript (JS) is an interpreted computer programming language"
		},
		{
			code:"c3",
			name:"Php Fundamentals",
			author:"Rose Doe",
			lectures:["a1","a2","a3","a4","a5"],
			description:"PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."
		},
		{
			code:"c4",
			name:"Sass Fundamentals",
			author:"Rose Doe",
			lectures:["a1","a2","a3","a4","a5"],
			description:"PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."
		},
		{
			code:"c5",
			name:"Jquery Fundamentals",
			author:"Rose Doe",
			lectures:["a1","a2","a3","a4","a5"],
			description:"PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."
		},
		{
			code:"c6",
			name:"Angular Fundamentals",
			author:"Rose Doe",
			lectures:["a1","a2","a3","a4","a5"],
			description:"PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."
		},
		{
			code:"c7",
			name:"MySql Fundamentals",
			author:"Rose Doe",
			lectures:["a1","a2","a3","a4","a5"],
			description:"PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."
		}
	
	];
	
		$scope.author = {
		"John Doe" :{
			"name":"John Doe",
			"biography" : "John Doe is author of HTML5 Fundamentals",
			"email":"john@123.com"
		},
		"Jack Doe" :{
			"name":"Jack Doe",
			"biography" : "Jack Doe is author of HTML5 Fundamentals",
			"email":"Jack@123.com"
		},
		"Rose Doe" :{
			"name":"Rose Doe",
			"biography" : "Rose Doe is author of HTML5 Fundamentals",
			"email":"Rose@123.com"
		}
	};
	
	$scope.authorInfo = function(author){
	console.log("authorInfo" + author);
		$scope.currentAuthor = $scope.author[author];	
	console.log("$scope.currentAuthor" + $scope.currentAuthor);		
	};

	$scope.setCurrentValues = function(index){
		$scope.currentIndex = index;
		$scope.code = $scope.courses[index].code;
		$scope.name = $scope.courses[index].name;
		$scope.author = $scope.courses[index].author;
		$scope.description = $scope.courses[index].description;
	};

	$scope.editCourses = function(){
		//pushing new data 
		console.log($scope.code);
		$scope.courses[$scope.currentIndex].code = $scope.code;
		$scope.courses[$scope.currentIndex].name = $scope.name;
		$scope.courses[$scope.currentIndex].author = $scope.author;
		$scope.courses[$scope.currentIndex].description = $scope.description;
		
		//closing modal
		$('#authorEdit').modal('hide');
		
	}
	
	$scope.deleteCourse = function(){
		if($scope.currentIndex != null){
			$scope.courses.splice($scope.currentIndex,1);
			
		}
	};
}