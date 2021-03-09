const app = require('./app');

describe('App', () => {
  test('findHotelsNearby() returns an empty array when no args are passed', () => {
    expect(app.findHotelsNearby().length).toBe(0);
  });
  test('when user is at the center of Paris, some hotels are found', () => {
    const hotelsNearby = app.findHotelsNearby(48.856564, 2.351711, 2000);
    expect(hotelsNearby.length).toBeGreaterThan(0);
    expect(hotelsNearby.every((hotel) => hotel.distance <= 2000)).toBe(true);
    expect(hotelsNearby.find((hotel) => hotel.address === '20 Rue du Sommerard, 75005 PARIS').distance).toBe(849);
  });
  test('findHotelNearbyWithBestOffer() returns null when no args are passed', () => {
    expect(app.findHotelNearbyWithBestOffer()).toBeNull();
  });
  test('when user is at the center of Paris, and looks for the cheapest offer in hotels around for the date 11/01/2021, an hotel is found', () => {
    const hotelsNearby = app.findHotelNearbyWithBestOffer(48.856564, 2.351711, 2000, '11/01/2021');
    expect(hotelsNearby.ridCode).toBeDefined();
    expect(hotelsNearby.ridCode).toBe("A013");
    // expect(hotelsNearby.offer.price).toBe(60);
    expect(hotelsNearby.offer).toBeDefined();
    expect(hotelsNearby.offer.price).toBe(78);
  });
  test('findHotelNearbyWithBestOfferForUser() returns null when no args are passed', () => {
    expect(app.findHotelNearbyWithBestOfferForUser()).toBeNull();
  });
  test('when a subscribed user is at the center of Paris, and looks for the cheapest offer in hotels around for the date 11/01/2021, an hotel is found', () => {
    const hotelsNearby = app.findHotelNearbyWithBestOfferForUser(48.856564, 2.351711, 2000, '11/01/2021', 2);
    expect(hotelsNearby.ridCode).toBeDefined();
    expect(hotelsNearby.ridCode).toBe("A013");
    expect(hotelsNearby.commercialName).toBeDefined();
    expect(hotelsNearby.distance).toBeDefined();
    expect(hotelsNearby.localRating).toBeDefined();
    expect(hotelsNearby.offer).toBeDefined();
    expect(hotelsNearby.offer.price).toBe(74);
  });
});
