Email.InboxController = Ember.ArrayController.extend({
    itemController: 'inboxs'
});

Email.InboxsController = Ember.ObjectController.extend({
    isShowing: false,
    actions: {
        showHide: function(){
            if (this.isShowing) {
                this.set('isShowing', false);
            } else {
                this.set('isShowing', true);
            }
        }
    }
});