Meteor.methods({
    addUser:function(attrs){

        console.log(attrs);


        check(attrs,{
            email:String,
            username:String



        });
        var password = Fake.word();
        console.log(password);

        attrs.password = password;

        //attrs = _extend(attrs,{password:password});

        var user_id = Accounts.createUser(
            attrs
        );

        console.log(user_id);
        this.unblock();

        Accounts.sendResetPasswordEmail(user_id,attrs.email);



      /*  Meteor.Mailgun.send({
            to:attrs.email,
            from: "myTravelEx@mytravelex.com",
            subject: "Your password",
            text: "Your password is ::--> "+password+"",
            html: 'With Best wishes it&apos;s  <span style="color:red">change your password plz</span> too.'+password
        });*/
        console.log("email sent!");

        //Accounts.setPassword(user_id,password)

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