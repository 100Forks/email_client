Email.Router.map(function() {
    this.resource('inbox', {path: '/'}, function(){
        this.resource('read-email');
    });
});