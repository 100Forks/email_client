Email.Inbox = DS.Model.extend({
    sender: DS.attr(),
    receiver: DS.attr(),
    subject: DS.attr(),
    date: DS.attr(),
    body: DS.attr()
})