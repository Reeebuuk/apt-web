package com.example.crudapi.db.model

case class Booking(
                    apartmentId: Double,
                    var dateFrom: Long,
                    var dateTo: Long,
                    depositPaid: Boolean,
                    name: String,
                    surname: String,
                    phoneNumber: String,
                    email: String,
                    address: String,
                    city: String,
                    country: String,
                    animals: String,
                    noOfPeople: String,
                    note: String)
