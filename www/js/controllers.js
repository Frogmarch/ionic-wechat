angular.module('wechat.controllers', [])

.controller('findCtrl', function($scope, $state) {
    $scope.onSwipeLeft = function() {
        $state.go("tab.setting");
    };
    $scope.onSwipeRight = function() {
        $state.go("tab.friends");
    };
})

.controller('messageCtrl', function($scope, $state, $ionicPopup, localStorageService) {
	$scope.popup = {
		isPopup: false,
	};
	$scope.messages = localStorageService.get("messages");
    $scope.onSwipeLeft = function() {
        $state.go("tab.friends");
    };
    $scope.popupMessageOpthins = function() {
        $scope.popup.optionsPopup = $ionicPopup.show({
            templateUrl: "templates/popup.html",
            scope: $scope,
        });
        $scope.popup.isPopup = true;
    };
    $scope.itemClick = function() {
        $scope.popup.optionsPopup.close();
        $scope.popup.isPopup = false;
    };

})

.controller('friendsCtrl', function($scope, $state) {
    $scope.onSwipeLeft = function() {
        $state.go("tab.find");
    };
    $scope.onSwipeRight = function() {
        $state.go("tab.message");
    };
})

.controller('settingCtrl', function($scope, $state) {
    $scope.onSwipeRight = function() {
        $state.go("tab.find");
    };
})
