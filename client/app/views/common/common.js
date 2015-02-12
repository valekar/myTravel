
Template.commonHeaderTemplate.helpers({
    'alertTemplate':function(){
        return Session.get('alertTemplate');
    }

});

Template.alertTemplateNotice.helpers({
    'alertMessage':function(){
        return Session.get('alertMessage');
    }
});


/*function validateEmail(email) {
 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(email);
 }*/

Template.loggedOutTemplate.events({
    'click #gmailLogin':function(e,templ){
        Meteor.loginWithGoogle({
            requestPermission:['user']
        },function(err){
            if(err){

            }else{

            }
        });
    },
    'click #facebookLogin':function(e,templ){
        Meteor.loginWithFacebook({
            requestPermission:['user','email']
        },function(err){
            if(err){

            }else{

            }
        });
    },
    'click #twitterLogin':function(e,templ){
        Meteor.loginWithTwitter({
            requestPermission:['user','email']
        },function(err){
            if(err){

            }else{

            }
        });
    }

});


Template.loggedInTemplate.events({
    'click #loggedOut':function(e,templ){
        //alert("loggeg ouy");
        Meteor.logout(function(err){
            if(err){

            }else{
                Session.set("isAdmin",null);
            }
        })

    }
});


Template.loggedInTemplate.helpers({


});