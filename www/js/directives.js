angular.module('wechat.directives', [])
    .directive('rjHoldActive', ['$ionicGesture', '$timeout', '$ionicBackdrop',
        function($ionicGesture, $timeout, $ionicBackdrop) {
            return {
                scope: false,
                restrict: 'A',
                replace: false,
                link: function(scope, iElm, iAttrs, controller) {
                    $ionicGesture.on("hold", function() {
                        iElm.addClass('active');
                        $timeout(function() {
                            iElm.removeClass('active');
                        }, 300);
                    }, iElm);
                }
            };
        }
    ])
    .directive('rjCloseBackDrop', [function() {
        return {
            scope: false,
            restrict: 'A',
            replace: false,
            link: function(scope, iElm, iAttrs, controller) {
                var htmlEl = angular.element(document.querySelector('html'));
                htmlEl.on("click", function(event) {
                    if (event.target.nodeName === "HTML" &&
                        scope.popup.optionsPopup &&
                        scope.popup.isPopup) {
                        scope.popup.optionsPopup.close();
                        scope.popup.isPopup = false;
                    }
                });
            }
        };
    }]);
