// user details view display information about a particular user.

function UserDetailsView() {
  this.listen();
}
UserDetailsView.prototype.displayUser = function (user) {
  var $userDetails = $('<h1>'+user.name+'</h1><p>'+user.bio+'</p><p>'+
moment(user.created).calendar()+'</p><p><a class="login" href="#" data-id="'+user.id+'">login</a> <a class="logout" href="#" data-id="'+user.id+'">logout</a></p>');
  $('#user-details').empty();
  $userDetails.appendTo('#user-details');
}
UserDetailsView.prototype.listen = function () {
  $('#user-details').on('click', '.logout', function (event) {
    var id = $(this).data('id'),
        user = User.all[id];
    user.logOut();
    event.preventDefault();
  });
  $('#user-details').on('click', '.login', function (event) {
    var id = $(this).data('id'),
        user = User.all[id];
    user.logIn();
    event.preventDefault();
  });
}

