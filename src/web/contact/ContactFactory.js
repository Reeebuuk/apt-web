contactModule.factory('ContactFactory', ['DataService', '$log',
    function (DataService, $log) {
        function createSendContact(payload) {
            return DataService.executePostRequest('http://localhost:9001/v1/contact', payload)
        }

        return {
            sendContact: function (payload) {
                return createSendContact(payload);
            }
        };
    }]);
