var Myrouter =Backbone.Router.extend({

    routes: {
        "graduation" :  "graduation",
        "play" :  "play",
        "stay" :  "stay",
        "eat" :  "eat",
        "events" : "events",
		"account" : "account",
        "*path" :  "graduation"
    },
    before: {
        // Using inline filter definition
        '*any': function(fragment, args) {
            this.addBars();
        }
    },
    graduation: function(){
        var page = new Page({
            topbar : mytopbar,
            menu : mymenu,
            title : "Fort Benning Graduation Schedule",
            type : "graduation",
        }).render();
    },
    play: function(){
        var page = new Page({
            topbar : mytopbar,
            menu : mymenu,
            title : "Fort Benning Attractions",
            type : "play",
        }).render();
    },
    stay: function(){
        var page = new Page({
            topbar : mytopbar,
            menu : mymenu,
            title : "Fort Benning Hotels",
            type : "stay",
        }).render();
    },
    eat: function(){
        var page = new Page({
            topbar : mytopbar,
            menu : mymenu,
            title : "Fort Benning Restaurants",
            type : "eat",
        }).render();
    },
    events: function(){
        var page = new Page({
            topbar : mytopbar,
            menu : mymenu,
            title : "Fort Benning Events",
            type : "events",
        }).render();
    },
    account: function(){
        var page = new Page({
            topbar : mytopbar,
            menu : mymenu,
            title : "My Account",
            type : "account",
        }).render();
    },
    addBars : function (title) {
        if(!window.mytopbar){
            mymenu = new Menu();
            mytopbar = new Topbar({
                menu : mymenu
            });

            $("#overflower")
                .append(mymenu.render().el)
                .append(mytopbar.render().el);           
        }
     }
});

var thisRouter = new Myrouter();