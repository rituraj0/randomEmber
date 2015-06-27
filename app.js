MyApp = Ember.Application.create();

MyApp.Router.map( function() {

	this.route('first-route' ,{path: 'first'})

 });

MyApp.FirstRouteRoute = Ember.Route.extend( {

	actions: {
		 headerClicked: function(){

		 	lastname: 'done'
		 	alert("headerClicked");
		 }
	}
});

MyApp.FirstRouteController = Ember.Controller.extend( {

	firstname: 'hello'
});

MyApp.IndexRoute = Ember.Route.extend( {
     model: function() {
        return [ 'abc' , 'def' ];
     }
 });