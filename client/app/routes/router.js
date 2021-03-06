//this logic is used to load the data
var rootDataFile = function HeaderLogicFunction(){
    //Session.set("showArticle",false);
    Session.set('headerArticle',true);
    // this is for SEO purpose
    document.title = "Guide a tour, Hampi tourism, book rooms, Karnataka, India";
    var article =  Article.find({featured:true},{reactive:false}).fetch()[0];
    //console.log(article);
    headerArticles = {};
    headerArticles= $.extend(headerArticles,article);
    if(article){
        var arPhArray =ArticlePhoto.find({articleId:article._id},{reactive:false}).fetch();
        var photoUrl =arPhArray[arPhArray.length-1].photoUrl;
        headerArticles.photoUrl = photoUrl;
        //console.log(headerArticles);
    }

    tempData = {headerArticle:headerArticles};
    // this is used to load the placeholder in the front page
    Session.set("headerNotSet",false);
    return tempData;


};


var articleDataFile = function(){
    if(this.ready()){


        var articleId = this.params.slug;
        // console.log(article);
        // article = {};
        var article = Article.find({slug:articleId},{reactive:false}).fetch()[0];
        //article= $.extend(article,article);
        //  console.log(article);
        // this is for SEO
        //console.log(article);
        if(article){
           // document.title = article.title;
            var arPhArray =ArticlePhoto.find({articleId:article._id},{reactive:false}).fetch();
            // console.log(arPhArray);
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
        Session.set("articleId",article._id);
        return tempData;
    }
};


var rootArraySubscribe = [
    Meteor.subscribe('articlePhotos'),
    Meteor.subscribe('photos'),
    //Meteor.subscribe('headerArticle'),
    Meteor.subscribe('articles'),
    Meteor.subscribe('adminUser',Meteor.userId())
];







Router.map(function(){


    /*Article mapping /article/123*/
    this.route("/article/:slug",{

        waitOn:function(){
            // used in showArticle for finding the article
                Session.set("slugWord",this.params.slug);
          return [Meteor.subscribe('showArticle',this.params.slug),
                  Meteor.subscribe('articlePhotos'),
                  Meteor.subscribe('photos'),
                  Meteor.subscribe('articleComments'),
              ]

        },
        cache: 5,
        expire:3,
        data:articleDataFile,
        fastRender:true,
        action:function(){
            if(this.ready()){

            //this.render('commonHeaderTemplate',{to:'headerSection'});
            this.render('showArticleTemplate',{to:'bodySection'});
           // this.render('homeFootTemplate',{to:'footerSection'});
            this.layout('ApplicationLayout');
            }
        },
        onAfterAction:function(){
            if(this.ready()){
                var article = this.data().article;
                //console.log("after action!");
                //console.log(article);

                SEO.set({
                    title: article.title,
                    meta: {
                        'description': article.summary,
                        'keywords':article.title
                    },
                    og: {
                        'title': article.title,
                        'description': article.summary
                    }
                });
            }

        }
    }),
        /*Home page routing / */
    this.route('/',{

        waitOn:function(){
           // var limit = Session.set('fromArticleNo',25);
            Session.set("headerNotSet",true);

          //  Session.set('noOfArticles',Article.find().count());
            return rootArraySubscribe;

        },
        cache: 5,
        expire:3,
        fastRender:true,
        onBeforeAction: function () {

            if(Meteor.user()){
                if(Houston._admins.find().fetch().length>0)
                    this.redirect('/custom_admin/photos');
                else
                    this.next();
            }else{

                this.next();
            }
        },

        data:rootDataFile,
        action:function(){
            if(this.ready()){
              //  this.render('commonHeaderTemplate',{to:'headerSection'});
                this.render('allArticlesTemplate',{to:'bodySection'});
                //this.render('homeFootTemplate',{to:'footerSection'});
                this.layout('ApplicationLayout');
            }

        },onAfterAction:function(){
            if(this.ready()){
                var article = this.data().headerArticle;
                //console.log("after action!");
                //console.log(article);

                SEO.set({
                    title: article.title,
                    meta: {
                        'description': article.summary,
                        'keywords':article.title
                    },
                    og: {
                        'title': article.title,
                        'description': article.summary
                    }
                });
            }

        }
    }),
        /*custom admin mapping /custom_admin/photos*/
    this.route('/custom_admin/photos',{

        waitOn:function(){
            return [
                    //Meteor.subscribe('headerArticle'),
                    Meteor.subscribe('articles'),
                    Meteor.subscribe('articlePhotos'),
                    Meteor.subscribe('photos'),
                    Meteor.subscribe('articleComments'),
                    Meteor.subscribe('photoUploads'),
                Meteor.subscribe('adminUser',Meteor.userId())
                    ]
        },
        cache: true,
        action:function(){
            if(Meteor.userId()){
                if(!(Houston._admins.find().fetch().length === 0)){
                    this.render('commonHeaderTemplate',{to:'headerAdminSection'});
                    this.render('adminBodyTemplate',{to:'bodyAdminSection'});
                    //this.render('adminFootTemplate',{to:'footerAdminSection'});
                    this.layout('AdminLayout');
                }
                else{
                    this.redirect("/");
                }

            }
            else{
                this.redirect("/");
            }

        }
    }),
    this.route('/about',{
        action:function() {

           // this.render('commonHeaderTemplate', {to: 'headerSection'});
            this.render('aboutTemplate', {to: 'bodySection'});
            //this.render('homeFootTemplate', {to: 'footerSection'});
            this.layout('ApplicationLayout');
        }
    })

});




