angular.module('wechat.controllers', [])

.controller('findCtrl', function($scope, $state) {
    $scope.onSwipeLeft = function() {
        $state.go("tab.setting");
    };
    $scope.onSwipeRight = function() {
        $state.go("tab.friends");
    };
})

.controller('messageCtrl', function($scope, $state, $ionicPopup, localStorageService, messageService) {
    $scope.popup = {
        isPopup: false,
        index: 0
    };
    $scope.messages = messageService.getAllMessages();
    console.log($scope.messages);
    $scope.onSwipeLeft = function() {
        $state.go("tab.friends");
    };
    $scope.popupMessageOpthins = function($index) {
        $scope.popup.index = $index;
        $scope.popup.optionsPopup = $ionicPopup.show({
            templateUrl: "templates/popup.html",
            scope: $scope,
        });
        $scope.popup.isPopup = true;
    };
    $scope.markMessage = function() {
    	var index = $scope.popup.index;
    	var message = $scope.messages[index];
    	if (message.showHints) {
    		message.showHints = false;
    		message.noReadMessages = 0;
    	}else{
    		message.showHints = true;
    		message.noReadMessages = 1;
    	}
        $scope.popup.optionsPopup.close();
        $scope.popup.isPopup = false;
        messageService.updateMessage(message);
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
