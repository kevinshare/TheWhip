import mongoose from 'mongoose';
import User from './User';

const users = [

	{
		name: 'Kevin Share',
		username: 'kevinshare',
		password: 'testtest'


	},
	{
		name: 'Tyrion',
		username: 'tyrionlanister',
		password: 'thrones'

	}
];

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://kevinshare:pass@ds151232.mlab.com:51232/whip';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});


users.map(data => {

	const user = new User(data);

	user.save();
});