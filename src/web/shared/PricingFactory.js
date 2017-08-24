sharedModule.factory('PricingFactory', ['DataService',

    function (DataService) {
        function createGetPricingList() {
            return DataService.executeGetRequestWithoutParams('http://localhost:9001/v1/price')
        }

        function fetchPriceForRange(id, from, to) {
            from.setHours(12);
            from.setMinutes(0);
            from.setSeconds(0);
            from.setMilliseconds(0);

            to.setHours(12);
            to.setMinutes(0);
            to.setSeconds(0);
            to.setMilliseconds(0);
            var payload = {
                from: from.getTime(),
                to: to.getTime(),
                unitId: id,
                userId: "user"
            };

            return DataService.executePostRequest('http://localhost:9001/v1/price/calculate', payload)
        }

        return {
            getPricingList: function () {
                return createGetPricingList();
            },

            getPriceForRange: function (id, from, to) {
                return fetchPriceForRange(id, from, to);
            }
        };
    }]);

