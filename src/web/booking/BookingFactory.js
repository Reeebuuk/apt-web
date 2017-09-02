bookingModule.factory('BookingFactory', ['DataService',
    function (DataService) {
        function createSendBooking(payload) {
            return DataService.executePostRequest('http://localhost:9001/v1/enquiry', payload)
        }

        function createGetBookedDays(apartmentId) {

            var filters = {};
            filters["unitId"] = apartmentId;

            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/booking/bookedDates', filters)
        }

        function mmddyyyy(date) {
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth() + 1).toString();
            var dd = date.getDate().toString();
            // return (dd[1] ? dd : "0" + dd[0]) + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + yyyy;
            return yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
        }

        function dayFromClass(date, bookedDays) {
            var first = false;
            var last = false;
            var full = false;
            console.log(bookedDays);

            for (var i = 0; i < bookedDays.length; i++) {
                if (mmddyyyy(date) === bookedDays[i].day) {
                    console.log(bookedDays[i].day);
                    if (bookedDays[i].firstDay) {
                        first = true;
                    }
                    else if (bookedDays[i].lastDay) {
                        last = true;
                    }
                    else if (!bookedDays[i].firstDay && !bookedDays[i].lastDay) {
                        full = true;
                    }
                }
            }
            return colorBookedDate(first, last, full)
        }

        function dayToClass(date, bookingDateFrom, bookedDays) {
            if (bookingDateFrom < date) {
                var first = false;
                var last = false;
                var full = false;
                for (var i = 0; i < bookedDays.length; i++) {
                    if (mmddyyyy(date) === bookedDays[i].day) {
                        if (bookedDays[i].firstDay) {
                            first = true;
                        }
                        else if (bookedDays[i].lastDay) {
                            last = true;
                        }
                        else if (!bookedDays[i].firstDay && !bookedDays[i].lastDay) {
                            full = true;
                        }
                    }
                }
                return colorBookedDate(first, last, full)
            }

            return '';
        }

        function dateDisabled(date, bookedDays) {
            var first = false;
            var last = false;
            var full = false;
            for (var i = 0; i < bookedDays.length; i++) {
                if (mmddyyyy(date) === bookedDays[i].day) {
                    if (bookedDays[i].firstDay) {
                        first = true;
                    }
                    else if (bookedDays[i].lastDay) {
                        last = true;
                    }
                    else if (!bookedDays[i].firstDay && !bookedDays[i].lastDay) {
                        full = true;
                    }
                }
            }

            return full || (first && last)
        }

        function colorBookedDate(first, last, full) {
            if (full || (first && last)) {
                return "full"
            }
            if (first) {
                return "first"
            }
            if (last) {
                return "last"
            }
        }

        return {
            sendBooking: function (payload) {
                return createSendBooking(payload);
            },
            getBookedDays: function (apartmentId) {
                return createGetBookedDays(apartmentId);
            },
            calculateDateFromStyle: function (date, bookedDays) {
                return dayFromClass(date, bookedDays);
            },
            calculateDateToStyle: function (date, bookingDateFrom, bookedDays) {
                return dayToClass(date, bookingDateFrom, bookedDays);
            },
            calculateDateDisabledStyle: function (date, bookedDays) {
                return dateDisabled(date, bookedDays);
            }
        };
    }]);

