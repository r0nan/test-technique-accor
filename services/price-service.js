const PRICES = require('./data/prices.json').prices;

const getPrices = () => {
	return PRICES;
}

const getHotelPriceForADate = (ridCode, date) => {
	const priceForADate = getPrices().filter( price => 
		price.ridCode === ridCode && 
		price.offers.some( offer => offer.date === date)
	);

	return priceForADate[0];
}

const getBestHotelStandardPriceForADate = (ridCode, date) => {
	const standardPriceForADate = getHotelPriceForADate(ridCode, date)
		.offers.find( offer => offer.date === date && offer.fare === "STANDARD");
	return standardPriceForADate;
}

const getBestHotelPriceForADate = (ridCode, date) => {
	const bestPriceForADate = getHotelPriceForADate(ridCode, date)
		.offers.find( offer => offer.date === date && offer.fare === "SPECIAL_OFFER");
	return bestPriceForADate;
}

module.exports = {
	getPrices,
	getHotelPriceForADate,
	getBestHotelStandardPriceForADate,
	getBestHotelPriceForADate
}