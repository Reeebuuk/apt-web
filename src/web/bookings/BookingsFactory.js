bookingsModule.factory('BookingsFactory', ['DataService',
    function (DataService) {

        function createGetAllBookings(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/enquiry/booked', filters)
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

        function createPutApproveEnquiry(enquiryId) {
            return DataService.executePutRequestWithoutPayload('http://localhost:9001/v1/enquiry/' + enquiryId + '/authorize')
        }

        function createPostSaveDeposit(payload) {
            return DataService.executePostRequest('http://localhost:9001/v1/enquiry/depositPaid', payload)
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
            approveEnquiry: function (enquiryId) {
                return createPutApproveEnquiry(enquiryId);
            },
            saveDeposit: function (payload){
                return createPostSaveDeposit(payload);
            }
        };
    }]);
