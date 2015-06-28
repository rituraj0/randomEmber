MyApp = Ember.Application.create();

MyApp.Router.map( function() {

	this.route('first-route' ,{path: 'first'})

 });

MyApp.FirstRouteRoute = Ember.Route.extend( {


});

MyApp.FirstRouteController = Ember.Controller.extend( {

	firstname: 'hello',

	dicenum: '10',

	outputs: function() {

		var randnum = [];

		var tp=this.get('dicenum');
		console.log("in controller");
		console.log(tp);

		if( tp == undefined)
			 tp=5;
		for( var x =1;x<=tp;x++)
		{
			randnum.push( Math.random() );
		}

		console.log(tp);

		for( var x =0 ; x< tp ;x++)
		{
			console.log( randnum[x] );
		}

        return randnum;
     }.property('dicenum')//if dicenum is changes , then reclalcuate outputs , watch vedio 18

});

MyApp.IndexRoute = Ember.Route.extend( {
     model: function() {
        return [ 'abc' , 'def' ];
     }
 });