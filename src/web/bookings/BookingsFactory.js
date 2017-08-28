bookingsModule.factory('BookingsFactory', ['DataService',
    function (DataService) {

        function createGetAllBookings(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/booking', filters)
        }

        function createGetAllUnapprovedEnquiries(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/enquiry/unapproved', filters)
        }

        function createGetAllApprovedEnquiries(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/enquiry/approved', filters)
        }

        function createPutApproveEnquiry(bookingId) {
            return DataService.executePutRequestWithoutPayload('http://localhost:9001/v1/booking/' + bookingId + '/authorize')
        }

        return {
            getAllBookings: function (year) {
                return createGetAllBookings(year);
            },
            getAllUnapprovedEnquiries: function (year) {
                return createGetAllUnapprovedEnquiries(year);
            },
            getAllApprovedEnquiries: function (year) {
                return createGetAllApprovedEnquiries(year);
            },
            approveEnquiry: function (bookingId) {
                return createPutApproveEnquiry(bookingId);
            }
        };
    }]);
