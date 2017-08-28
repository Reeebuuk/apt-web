bookingsModule.controller('BookingsController', ['$scope', 'BookingsFactory', '$q',
    function ($scope, BookingsFactory, $q) {


        $scope.types = [
            {
                id: 0,
                name: "Unapproved enquiries",
                call: BookingsFactory.getAllUnapprovedEnquiries

            },
            {
                id: 1,
                name: "Approved enquiries",
                call: BookingsFactory.getAllApprovedEnquiries
            },
            {
                id: 2,
                name: "Bookings",
                call: BookingsFactory.getAllBookings
            }

        ];

        $scope.type = $scope.types[0];


        $scope.year = 2017;

        $scope.fetchBookings = function(fetchFunction){
            var deferred = $q.defer();
            var promise = deferred.promise;
            deferred.resolve(fetchFunction($scope.year));

            promise.then(function (data) {
                    $scope.bookings = cleanData(data.enquiries);
                },
                function () {
                    $scope.bookings = [];
                });
        };

        $scope.selectType = function(type){
            $scope.type = type;
            $scope.fetchBookings(type.call);
        };

        $scope.approve = function(enquiryId){
            BookingsFactory.approveEnquiry(enquiryId);
        };

        function cleanData(bookings){

            for(var i = 0; i<bookings.length;i++){
                var b = bookings[i];

                b.dateFrom = new Date(b.enquiry.dateFrom).toDateString();
                b.dateTo = new Date(b.enquiry.dateTo).toDateString();
                b.enquiryDttm = new Date(b.enquiryDttm).toLocaleString();

                if(b.approvalDttm)
                    b.approvalDttm = new Date(b.approvalDttm).toLocaleString();

                if (b.depositWhen)
                    b.depositWhen = new Date(b.depositWhen).toLocaleString();

                if (b.enquiry.unitId === 1) {
                    b.unit = "Kruno"
                }
                else if (b.enquiry.unitId === 2) {
                    b.unit = "Blanka"
                }
                else if (b.enquiry.unitId === 3) {
                    b.unit = "Djuro"
                }

            }

            return bookings;
        }

        $scope.fetchBookings($scope.type.call);

    }
]);