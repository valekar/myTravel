
Router.map(function(){
    /*Article mapping /article/123*/
    this.route("/article/:_id",{

        data:function(){
            var articleId = this.params._id;
           // console.log(article);
           // article = {};
            var article = Article.find({_id:articleId}).fetch()[0];
            article= $.extend(article,article);
            if(article){
                var photoUrl = ArticlePhoto.find({articleId:article._id}).fetch()[0].photoUrl;
                article.photoUrl = photoUrl;
            }

            tempData = {article:article};
            Session.set("showArticle",true);
            return tempData;
        },

        action:function(){

            this.render('commonHeaderTemplate',{to:'headerSection'});
            this.render('homeBodyTemplate',{to:'bodySection'});
            this.render('homeFootTemplate',{to:'footerSection'});
            this.layout('ApplicationLayout');
        }
    }),
        /*Home page routing / */
    this.route('/',{

        onWait:function(){


        },
        onBeforeAction: function () {

            if(Meteor.user()){
                if(Meteor.userId() ===  Houston._admins.find().fetch()[0].user_id)
                    this.redirect('/custom_admin/photos');
                else
                    this.next();
            }else{
                this.next();
            }
        },

        data:function(){
            Session.set("showArticle",false);
            var article =  Article.find({featured:true}).fetch()[0];
            console.log(article);
            headerArticles = {};
            headerArticles= $.extend(headerArticles,article);
            if(article){
                var photoUrl = ArticlePhoto.find({articleId:article._id}).fetch()[0].photoUrl;
                headerArticles.photoUrl = photoUrl;
            }

            tempData = {headerArticle:headerArticles};
            return tempData;
        },

        action:function(){

            this.render('commonHeaderTemplate',{to:'headerSection'});
            this.render('homeBodyTemplate',{to:'bodySection'});
            this.render('homeFootTemplate',{to:'footerSection'});
            this.layout('ApplicationLayout');
        }
    }),
        /*custom admin mapping /custom_admin/photos*/
    this.route('/custom_admin/photos',{

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

});


/*Router.route('/',{

    onWait:function(){


        },
    onBeforeAction: function () {

        if(Meteor.user()){
            if(Meteor.userId() ===  Houston._admins.find().fetch()[0].user_id)
                this.redirect('/custom_admin/photos');
            else
                this.next();
        }else{
            this.next();
        }
    },

    data:function(){
        var article =  Article.find({featured:true}).fetch()[0];
        console.log(article);
        headerArticles = {};
        headerArticles= $.extend(headerArticles,article);
        if(article){
            var photoUrl = ArticlePhoto.find({articleId:article._id}).fetch()[0].photoUrl;
            headerArticles.photoUrl = photoUrl;
        }

        tempData = {headerArticle:headerArticles};
        return tempData;
    },

    action:function(){

            this.render('commonHeaderTemplate',{to:'headerSection'});
            this.render('homeBodyTemplate',{to:'bodySection'});
            this.render('homeFootTemplate',{to:'footerSection'});
            this.layout('ApplicationLayout');
    }
});*/


/*Router.route('/custom_admin/photos',{

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
});*/

/*
Router.route("/artcile/:articleId",{

    data:function(){
      var articleId = this.params.articleId;
        tempData = {article:Article.find({_id:articleId}).fetch()[0]};

        return tempData;
    },

    action:function(){

        this.render('commonHeaderTemplate',{to:'headerSection'});
        this.render('homeBodyTemplate',{to:'bodySection'});
        this.render('homeFootTemplate',{to:'footerSection'});
        this.layout('ApplicationLayout');
    }
});*/


