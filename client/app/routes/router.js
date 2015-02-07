Router.route('/',{

    onWait:function(){


        },
    onBeforeAction: function () {

        if(Meteor.user()){
            this.redirect('/custom_admin/photos');
        }else{
            this.next();
        }
    },

    action:function(){

            this.render('commonHeaderTemplate',{to:'headerSection'});
            this.render('homeBodyTemplate',{to:'bodySection'});
            this.render('homeFootTemplate',{to:'footerSection'});
            this.layout('ApplicationLayout');
    }
});


Router.route('/custom_admin/photos',{

    action:function(){
        if(Meteor.user()){
            this.render('commonHeaderTemplate',{to:'headerAdminSection'});
            this.render('adminBodyTemplate',{to:'bodyAdminSection'});
            this.render('adminFootTemplate',{to:'footerAdminSection'});
            this.layout('AdminLayout');
        }
        else{
            this.redirect("/");
        }

    }
});
