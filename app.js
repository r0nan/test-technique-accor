const userService = require('./services/user-service');
const hotelService = require('./services/hotel-service');
const priceService = require('./services/price-service');
const helper = require('./services/helper');

function findHotelsNearby(lat, lng, radius) {
    if (arguments.length === 0) {
        return [];
    }
    let hotelsNearby = hotelService.getHotels()
    .filter( hotel => 
        helper.distance(lat, lng, hotel.latitude, hotel.longitude) <= radius
    )

    hotelsNearby.forEach( hotel => 
        hotel.distance = Math.round(helper.distance(lat, lng, hotel.latitude, hotel.longitude))
    )

    return hotelsNearby;
}

function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    if (arguments.length === 0) {
        return null;
    }

    const hotelsNearby = findHotelsNearby(lat, lng, radius);
    return hotelsNearby.map( hotel => ({
        ...hotel,
        offer: priceService.getBestHotelStandardPriceForADate(hotel.ridCode, date)
    }))
    .sort(helper.closestAndCheapestHotel)
    .shift();
}

function findHotelNearbyWithBestOfferForUser(lat, lng, radius, date, userId) {
    if (arguments.length === 0) {
        return null;
    }

    const isUserSubscribed = userService.isUserSubscribed(userId);
    const hotelsNearby = findHotelsNearby(lat, lng, radius);
    return hotelsNearby.map( hotel => ({
        ...hotel,
        offer: isUserSubscribed ? 
            priceService.getBestHotelPriceForADate(hotel.ridCode, date) : priceService.getBestHotelStandardPriceForADate(hotel.ridCode, date)
    }))
    .sort(helper.closestAndCheapestHotel)
    .shift();
}

module.exports = {
	findHotelsNearby,
	findHotelNearbyWithBestOffer,
	findHotelNearbyWithBestOfferForUser
}