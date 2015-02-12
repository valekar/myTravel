
Router.map(function(){
    /*Article mapping /article/123*/
    this.route("/article/:_id",{

        data:function(){
            var articleId = this.params._id;
           // console.log(article);
           // article = {};
            var article = Article.find({_id:articleId}).fetch()[0];
            //article= $.extend(article,article);
            //  console.log(article);
            if(article){
                var arPhArray =ArticlePhoto.find({articleId:article._id}).fetch();
                console.log(arPhArray);
                var photoUrl =arPhArray[arPhArray.length-1].photoUrl;
                article.photoUrl = photoUrl;
            }

            tempData = {article:article};
            //hide the home page articles
            Session.set("headerArticle",false);
            //show the single page article
            Session.set("showArticle",true);
            //this is used for comments
            Session.set("articleId",null);
            Session.set("articleId",articleId);
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
            //Session.set("showArticle",false);
            //Session.set('headerArticle',true);
            var article =  Article.find({featured:true}).fetch()[0];
            //console.log(article);
            headerArticles = {};
            headerArticles= $.extend(headerArticles,article);
            if(article){
                var arPhArray =ArticlePhoto.find({articleId:article._id}).fetch();
                var photoUrl =arPhArray[arPhArray.length-1].photoUrl;
                headerArticles.photoUrl = photoUrl;
                //console.log(headerArticles);
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
                this.redirect("/",{replace:true});
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


