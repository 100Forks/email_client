Email.NewEmailController = Ember.ArrayController.extend({
    showSuccess: false,
    actions: {
        sendEmail: function() {
            var date = new Date().toLocaleDateString();
            inbox.addObject({
                sender: this.sender,
                receiver: this.receiver,
                subject: this.subject,
                date: date,
                body: this.body
            });
            this.set('sender', null);
            this.set('receiver', null);
            this.set('subject', null);
            this.set('date', null);
            this.set('body', null);
            this.set('showSuccess', true);
        }
    }
});