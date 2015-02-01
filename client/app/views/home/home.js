Template.loginTemplate.helpers({
    'myTemplate':function(){
        return Session.get('myTemplate');
    }
});


Template.customPasswordTemplate.events({
    'click #newRegistrationLink':function(e,templ){
        Session.set('myTemplate','registerTemplate');

    },


    'click #forgotPasswordLink':function(e,templ){
        Session.set('myTemplate','recoveryTemplate')
    }
});


Template.registerTemplate.events({
    'click #registerBackButton':function(e,templ){
        e.preventDefault();
        Session.set('myTemplate','customPasswordTemplate');
    },
    'click #RegisterTheUser':function(e,templ){
        Session.set('alertTemplate',null);
       // alert("asdas");
        e.preventDefault();

        var attrs = {
            email:$('#new_email').val(),
            username:$('#new_name').val()


        };

        console.log(attrs);

        //
          Meteor.call('addUser',attrs,function(err,result){
         if(err){
         alert(err.reason);

             Session.set('alertMessage',err.reason);
             Session.set('alertTemplate','alertTemplateNotice');

         }
         else if(result){
         console.log(result);
         // alert(result);
         //Router.go('/profile');
         }
         });

    }

});

Template.recoveryTemplate.events({
    'click #forgotBackButton':function(e,templ){
        e.preventDefault();
        Session.set('myTemplate','customPasswordTemplate');
    },

    'click #recoveryEmailButton':function(e,templ){
        e.preventDefault();
        var email = $("#recoveryEmail").val();
        if(!email.length<=0){
            $('#modalPassword').modal('hide');
            Session.set('alertMessage',"Hello,Sending Email.");
            Session.set('alertTemplate','alertTemplateNotice');
            Accounts.forgotPassword({email:email},function(err){

                if(err){
                    alert(err);

                }else{
                    //alert("sent");
                    Session.set('alertMessage',"Email has been sent successfully!!!!!!");
                    setTimeout(function(){
                        Session.set('alertTemplate',null);
                    },1000);


                    //Session.set('emailSuccess',true);
                }
            });
        }

/*
        Meteor.call('sendEmail',{
            to: email,
            from: 'no-reply@where-ever.com',
            subject: 'I really like sending emails with Mailgun!',
            text: 'Mailgun is totally awesome for sending emails!',
            html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
        });*/
       // alert("send email");

    }
});

Template.homeHeaderTemplate.helpers({
    'alertTemplate':function(){
        return Session.get('alertTemplate');
    }

});

Template.alertTemplateNotice.helpers({
     'alertMessage':function(){
    return Session.get('alertMessage');
}
});



