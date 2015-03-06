Email.NewEmailController = Ember.ArrayController.extend({
    showSuccess: false,
    actions: {
        sendEmail: function() {
            var date = new Date().toLocaleDateString();
            var newEmail = this.store.createRecord('inbox', {
                sender: this.get('sender'),
                receiver: this.get('receiver'),
                subject: this.get('subject'),
                date: date,
                body: this.get('body')
            });
            this.set('showSuccess', true);
            newEmail.save();
            this.set('sender', null);
            this.set('receiver', null);
            this.set('subject', null);
            this.set('date', null);
            this.set('body', null);
            alert('Email Sent Successfully!');
            this.set('showSuccess', false);
            this.transitionToRoute('inbox');
        }
    }
});