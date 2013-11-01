function AppCtrl($scope){

	$scope.setActive = function(type){
		
		$scope.homeActive = '';
		$scope.coursesActive = '';
		$scope.contactActive = '';
		
		$scope[type+'Active'] = 'active';
	}
	
	$scope.about = {
		"companyName" : "abc corp",
		"moto":"Education is what remains after one has forgotten what one has learned in school.",
		"quoteby":"Albert Einstein",
		"about" : "We are the leading Software solutions company for all the learning managemnet system.We provide the ease and fun of learning with technologyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		"phoneNumber":"123456789",
		"address" :"abc corp, 123 apartment sydney nsw ",
		"email" : "abc@yahabc.com"
	}
	
	

}