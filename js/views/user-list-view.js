// view of all users in a list

function UserListView() {
  this.listen();
}
UserListView.prototype.displayUser = function (user) {
  var $li = $('<li><a href="#" data-id="'+user.id+'">'+user.name+'</a><span class="'+user.checkStatus()+'">⬤</span></li>');
  $li.appendTo('#user-list');
};
UserListView.prototype.render = function () {
  var self = this;
  $('#user-list').empty();
  $.each(User.all, function (i, user) {
    self.displayUser(user);
  });
};
UserListView.prototype.listen = function() {
  $('#user-list').on('click', 'a', function (event) {
    var id = $(this).data('id'),
        user = User.all[id];
    app.userDetailsView.displayUser(user);
    event.preventDefault();
  });
};