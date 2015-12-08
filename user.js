"use strict";

// model for users

function User(fname) {
  this.fname = fname;
  this.status = 'offline';
}
// User.prototype.checkStatus = function () {
//   return this.status;
// };
// User.prototype.logIn = function () {
//   this.status = "online";
//   return true;
// };
// User.prototype.logOut = function () {
//   this.status = "offline";
//   return true;
// };