Template.adminBodyTemplate.rendered = function(){
    if(Meteor.userId() === Houston._admins.find({user_id:Meteor.userId()}).fetch()[0].user_id){
        Session.set("isAdmin",true);
    }else{
        return Session.set("isAdmin",false);
    }
}