'use strict';

// model

function User(name, bio){
  this.name = name;
  this.bio = bio;
  this.created = new Date();
  this.status = 'online';
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
}
User.all = [];
User.prototype.logIn = function () {
  this.status = 'online';
  app.userListView.render();
};
User.prototype.logOut = function () {
  this.status = 'offline';
  app.userListView.render();
};
User.prototype.checkStatus = function () {
  return this.status;
};