const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'jarnetu1';
var password = 'Qweqwe1q1';
var shared_secret = '';

var games = [730, 35380, 358720, 250820, 765, 221410, 753, 766, 202351, 413856, 413857, 413851, 413852, 570, ];
var status = 1;


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});