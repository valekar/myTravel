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

       // alert("asdas");
        e.preventDefault();

        var attrs = {
            email:$('#new_email').val(),
            password:$('#new_password').val(),
            profile:{
                username: $('#new_name').val()
            }
        };

        console.log(attrs);


        //
          Meteor.call('addUser',attrs,function(err,result){
         if(err){
         alert(err.reason);

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
            Session.set('alertTemplate','alertTemplateNotice');
            Accounts.forgotPassword({email:email},function(err){

                if(err){
                    alert(err);

                }else{
                    //alert("sent");

                    Session.set('alertTemplate',null);
                    Session.set('alertTemplate',null);
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
    },
    'emailSuccess':function(){
        return Session.get('emailSuccess');
    }
})


