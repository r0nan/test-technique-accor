const USERS = require('./data/users.json').users;

const getUsers = () => {
	return USERS;
}

const getUser = (idUser) => {
	return USERS.find( user => user.id == idUser);
}

const isUserSubscribed = (idUser) => {
	return getUser(idUser).subscribed;
}

module.exports = {
	getUsers,
	getUser,
	isUserSubscribed
}