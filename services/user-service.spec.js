const userService = require('./user-service');

describe('UserService', () => {
  test('getUsers() returns all users', () => {
    expect(userService.getUsers()).toBeDefined();
    expect(userService.getUsers().length).toBe(10);
  })
  test('getUser() return 1 user', () => {
    expect(userService.getUser(1).name).toBe("Leanne Graham");
  })
  test('isUserSubscribed() test if a user subscribe', () => {
    const user1 = userService.isUserSubscribed(1);
    const user2 = userService.isUserSubscribed(2);
    expect(user1).toBeFalsy();
    expect(user2).toBeTruthy();
  })
});