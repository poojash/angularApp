angular.module('lms',[]).config(lmsRouter);

function lmsRouter($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'partials/home.html',
			controller: function($scope){
				$scope.setActive('home');
			}
		})
		.when('/courses',{templateUrl:'partials/viewCourses.html',
			controller: function($scope){
				$scope.setActive('courses');
			}
		})
		.when('/contact',{templateUrl:'partials/contact.html',
			controller: function($scope){
				$scope.setActive('contact');
			}
		})

}