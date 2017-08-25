bookingsModule.factory('BookingsFactory', ['DataService',
    function (DataService) {
        function createGetAllBookings() {
            return DataService.executeGetRequestWithoutParams('http://localhost:9001/v1/booking')
        }

        return {
            getAllBookings: function () {
                return createGetAllBookings();
            }
        };
    }]);
