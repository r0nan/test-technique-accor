const priceService = require('./price-service');

describe('PriceService', () => {
  test('getPrices() returns all prices', () => {
    expect(priceService.getPrices()).toBeDefined();
    expect(priceService.getPrices().length).toBe(248);
  })
  test('getHotelPriceForADate() return all hotel price for a date', () => {
    const price = priceService.getHotelPriceForADate("A3C7", "11/01/2021");
    expect(price.ridCode).toBeDefined();
    expect(price.ridCode).toBe("A3C7");
    expect(price.offers.length).toBe(10);
  })
  test('getBestHotelStandardPriceForADate() best standard price for an hotel on a date', () => {
    const price = priceService.getBestHotelStandardPriceForADate("A3C7", "11/01/2021");
    expect(price.fare).toBeDefined();
    expect(price.fare).toBe("STANDARD");
    expect(price.price).toBe(90);
  })
  test('getBestHotelPriceForADate() best price for an hotel on a date', () => {
    const price = priceService.getBestHotelPriceForADate("A3C7", "11/01/2021");
    expect(price.fare).toBeDefined();
    expect(price.fare).toBe("SPECIAL_OFFER");
    expect(price.price).toBe(80);
  })
});