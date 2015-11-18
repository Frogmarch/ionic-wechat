angular.module('wechat.controllers', [])

.controller('findCtrl', function($scope, $state) {

	$scope.onSwipeLeft = function(){
		$state.go("tab.setting");
			console.log("ok");
	};
	$scope.onSwipeRight = function(){
		$state.go("tab.friends");
	};
})

.controller('messageCtrl', function($scope, $state) {
	$scope.onSwipeLeft = function(){
		$state.go("tab.friends");
	};
})

.controller('friendsCtrl', function($scope, $state) {
	$scope.onSwipeLeft = function(){
		$state.go("tab.find");
	};
	$scope.onSwipeRight = function(){
		$state.go("tab.message");
	};
})

.controller('settingCtrl', function($scope, $state) {
	$scope.onSwipeRight = function(){
		$state.go("tab.find");
	};
})
