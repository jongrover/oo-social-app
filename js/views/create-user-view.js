function CreateUserView() {
  this.listen();
}
CreateUserView.prototype.create = function (){
  var name = $('#username').val(),
      bio = $('#user-bio').val(),
      user = new User(name, bio);
  $('#username').val('');
  $('#user-bio').val('');
  app.userListView.displayUser(user);
};
CreateUserView.prototype.listen = function () {
  $('#create-user').click(this.create);
};