angular.module('wechat.services', [])

.factory("userService", function($http) {
    var users = [];
    return {
        getUsers: function() {
            return $http.get("https://randomuser.me/api/?results=10").then(function(response) {
                users = response.data.results;
                return response.data.results;
            });
        },
        getUser: function(index) {
            return users[index];
        }
    };
})

.factory('localStorageService', [function() {
    return {
        get: function localStorageServiceGet(key, defaultValue) {
            var stored = localStorage.getItem(key);
            try {
                stored = angular.fromJson(stored);
            } catch (error) {
                stored = null;
            }
            if (defaultValue && stored === null) {
                stored = defaultValue;
            }
            return stored;
        },
        update: function localStorageServiceUpdate(key, value){
            if(value){
                localStorage.setItem(key, angular.toJson(value));
            }
        },
        clear: function localStorageServiceClear(key){
            localStorage.removeItem(key);
        }
    };
}])
.factory('dateService', [function(){
    return{
        handleMessageDate: function(messages){
            var i = 0;
            var length = messages.length();
            for(i = 0; i < length; i++){

            }
        },
        getNowDate: function(){
            var nowDate = {};
            var date = new Date();
            nowDate.year = date.getFullYear();
            nowDate.month = date.getMonth();
            nowDate.day = date.getDate();
            nowDate.week = date.getDay();
            nowDate.hour = date.getHours();
            nowDate.minute = date.getMinutes();
            nowDate.second = date.getSeconds();
            return nowDate;
        }
    };
}])
