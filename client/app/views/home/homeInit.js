/**
 *
 * This js file is only for initialization of all jquery, application based functions that are required
 *
 *
 */




Template.homeHeaderTemplate.rendered = function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });



};


Template.loginTemplate.rendered = function(){
    $('#modalPassword').on('shown.bs.modal', function () {
        $('#loginEmail').focus();
    });


    /*Set the customPasswordTemplate as visible in #modalPassword on click of login with password button on home page*/
    Session.set('myTemplate','customPasswordTemplate');



};

Template.homeHeaderTemplate.rendered=function(){
    Session.set('alertMessage','');
    Session.set('alertTemplate','');



};


Template.homeHeaderTemplate.created = function(){
    if(Accounts.onResetPasswordLink){
        Router.go('/profile');
    }
};

Template.registerTemplate.rendered=function(){
    $("#new_email").focus();
};

Template.recoveryTemplate.rendered = function(){
    $("#recoveryEmail").focus();
};




