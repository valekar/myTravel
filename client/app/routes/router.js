Router.route('/',{

    onWait:function(){


        },

        action:function(){

            this.render('homeHeaderTemplate',{to:'headerSection'});
            this.render('homeBodyTemplate',{to:'bodySection'});
            this.render('homeFootTemplate',{to:'footerSection'});
            this.layout('ApplicationLayout');
        }
});