// ref :: https://www.discovermeteor.com/blog/template-level-subscriptions/
/*Show the list all the articles*/
Template.articleTemplate.helpers({
    articles: function () {
        //this articles() function is idefined in homeInit.js
        var articles  = Template.instance().articles().fetch();

        for(var i=0;i<articles.length;i++){
            var arPhArray =ArticlePhoto.find({articleId:articles[i]._id}).fetch();
            var photoUrl =arPhArray[arPhArray.length-1].photoUrl;
            //  console.log(articles[i]);
            articles[i].photoUrl = photoUrl;

        }

        return articles;
    },
    // the subscription handle
    isReady: function () {
        return Template.instance().ready.get();
    },
    // are there more posts to show?
    hasMorePosts: function () {
        return Template.instance().articles().count() >= Template.instance().limit.get();
    }


});


Template.articleTemplate.events({

    'click .load-more':function(event,instance){
        event.preventDefault();

        // get current value for limit, i.e. how many posts are currently displayed
        var limit = instance.limit.get();

        // increase limit by 5 and update it
        limit += 5;
        instance.limit.set(limit);
    }
});
