/*
Accounts.onCreateUser(function(option,user){
    var accessToken = user.services.github.accessToken,
        result,
        profile;

    result =Meteor.get("https://api.github.com/user",{
        params:{
            access_token:accessToken
        }
    });

    if(result.error)
        throw result.error;

    profile= _.pick(result.data,
    "login",
    "name",
    "avatar_url",
    "url",
    "company",
    "blog",
    "location",
    "email",
    "bio",
    "html_url")

    user.profile = profile;
    return user;

});*/

//facebook

/*
Accounts.onCreateUser(function(options, user) {
    if (options.profile) {

        console.log(user);
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
});
*/


//google
Accounts.onCreateUser(function(options, user) {
    if (options.profile) {

        console.log(user);
       // options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
});