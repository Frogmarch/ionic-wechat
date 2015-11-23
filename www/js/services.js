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
            update: function localStorageServiceUpdate(key, value) {
                if (value) {
                    localStorage.setItem(key, angular.toJson(value));
                }
            },
            clear: function localStorageServiceClear(key) {
                localStorage.removeItem(key);
            }
        };
    }])
    .factory('messageService', ['localStorageService', function(localStorageService) {
        return {
            init: function(messages) {
                var i = 0;
                var length = 0;
                var messageID = new Array();
                if (messages) {
                    length = messages.length;
                    for (; i < length; i++) {
                        messageID[i] = {
                            id: messages[i].id
                        };
                    }
                    localStorageService.update("messageID", messageID);
                    for (i = 0; i < length; i++) {
                        localStorageService.update("message_" + messages[i].id, messages[i]);
                    }
                }
            },
            getAllMessages: function() {
                var messages = new Array();
                var i = 0;
                var messageID = localStorageService.get("messageID");
                var length = 0;
                if (messageID) {
                    length = messageID.length;

                    for (; i < length; i++) {
                        messages[i] = localStorageService.get("message_" + messageID[i].id);
                    }
                    return messages;
                }
                return null;

            },
            updateMessage: function(message) {
                var id = 0;
                if(message){
                    id = message.id;
                    localStorageService.update("message_" + id, message);
                }

            }
        };
    }])
    .factory('dateService', [function() {
        return {
            handleMessageDate: function(messages) {
                var i = 0;
                var length = messages.length();
                for (i = 0; i < length; i++) {

                }
            },
            getNowDate: function() {
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
