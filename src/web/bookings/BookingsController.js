bookingsModule.controller('BookingsController', ['$scope', 'BookingsFactory', '$q',
    function ($scope, BookingsFactory, $q) {

        $scope.fetchBookings = function(){
                var deferred = $q.defer();
                var promise = deferred.promise;
                deferred.resolve(BookingsFactory.getAllBookings());

                promise.then(function (data) {
                        $scope.bookings = cleanData(data.bookings);
                    },
                    function () {
                        $scope.bookings = [];
                    });
        };

        function cleanData(bookings){

            for(var i = 0; i<bookings.length;i++){
                var b = bookings[i];

                b.dateFrom = new Date(b.dateFrom).toDateString();
                b.dateTo = new Date(b.dateTo).toDateString();
                b.timeSaved = new Date(b.timeSaved).toLocaleString();

                if (b.depositWhen > 0)
                    b.depositWhen = new Date(b.depositWhen).toLocaleString();
                else
                    b.depositWhen = "";

                if (b.unitId === 1) {
                    b.unit = "Kruno"
                }
                else if (b.unitId === 2) {
                    b.unit = "Blanka"
                }
                else if (b.unitId === 3) {
                    b.unit = "Djuro"
                }

            }

            return bookings;
        }

        $scope.fetchBookings();

    }
]);