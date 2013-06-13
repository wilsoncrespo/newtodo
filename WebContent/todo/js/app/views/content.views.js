define([
    'text!app/templates/content.views.html',
    'app/views/content.view',
    'marionette'
], function(ContentViewsTemplate, ContentView){
    var ContentViews = Backbone.Marionette.CompositeView.extend({
        template: _.template(ContentViewsTemplate),
        itemView: ContentView,
        itemViewContainer: '#todo-list',
        
        initialize: function(){
            _.bindAll(this,"createOnEnter");
        },
        
        events: {
            "keypress #new-todo": "createOnEnter",
        },
        
        ui: {
            title: '#new-todo',
        },
        
        createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            
            var title = $.trim(this.ui.title.val());
            this.collection.addNewModel(title);
            this.ui.title.val("");
        },
        
    });
    
    return ContentViews;
});