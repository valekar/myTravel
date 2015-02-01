Meteor.methods({
    addUser:function(attrs){
        var userObject = {
            'email':attrs.email,
            'password':attrs.password,

            'profile':{
                username:attrs.personalName
            }
        };


        console.log(attrs);


        check(attrs,{
            email:String,
            password:String,
            profile:{
               username:String
            }

        });

        var user_id = Accounts.createUser(
            userObject

        );

        return user_id;


    },
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }

});


Meteor.startup(function(){

    process.env.MAIL_URL = 'smtp://postmaster@sandbox2748950ccf414ca89b9dcc6c9f7d1cde.mailgun.org:20ba369ae1198dfd2eae16a7cacb859a@smtp.mailgun.org:587';
    Accounts.emailTemplates.from = 'myTravel <no-reply@myTravelEx.com>';

    // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
    Accounts.emailTemplates.siteName = 'myTravel Ex[perience]';

    // A Function that takes a user object and returns a String for the subject line of the email.
    Accounts.emailTemplates.verifyEmail.subject = function(user) {
        return 'Confirm Your Email Address';
    };

    // A Function that takes a user object and a url, and returns the body text for the email.
    // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
    Accounts.emailTemplates.verifyEmail.text = function(user, url) {
        return 'click on the following link to verify your email address: ' + url;
    };


    Meteor.Mailgun.config({
        username: 'postmaster@sandbox2748950ccf414ca89b9dcc6c9f7d1cde.mailgun.org',
        password: '20ba369ae1198dfd2eae16a7cacb859a'
    });


});