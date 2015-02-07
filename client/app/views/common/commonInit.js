/**
 *
 * This js file is only for initialization of all jquery, application based functions that are required
 *
 *
 */




Template.commonHeaderTemplate.rendered = function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });



};



Template.commonHeaderTemplate.rendered=function(){
    Session.set('alertMessage','');
    Session.set('alertTemplate','');

};






