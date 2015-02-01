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
        $('#myInput').focus()
    });


    /*Set the customPasswordTemplate as visible in #modalPassword on click of login with password button on home page*/
    Session.set('myTemplate','customPasswordTemplate');


}