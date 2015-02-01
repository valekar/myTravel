Template.loginTemplate.helpers({
    'myTemplate':function(){
        return Session.get('myTemplate');
    }
});


Template.customPasswordTemplate.events({
    'click #newRegistration':function(e,templ){
        Session.set('myTemplate','registerTemplate')
    },
    'click #forgotPasswordLink':function(e,templ){
        Session.set('myTemplate','forgotTemplate')
    }
});


Template.registerTemplate.events({
    'click #registerBackButton':function(e,templ){
        e.preventDefault();
        Session.set('myTemplate','customPasswordTemplate');
    }
});

Template.forgotTemplate.events({
    'click #forgotBackButton':function(e,templ){
        e.preventDefault();
        Session.set('myTemplate','customPasswordTemplate');
    }
});


