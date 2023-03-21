const express = require('express');

const { Sequelize } = require('sequelize');
const app = express();




app.get('/', function (req, res) {
  res.send('Hello sidik')
});
console.log('Defining init.....');

const sequelize = new Sequelize('test','root','example',{
    host: 'mysqldb',
    dialect: 'mysql'
}); 


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
		// const User = sequelize.define("user", {
		// 	name: DataTypes.TEXT,
		// 	favoriteColor: {
		// 	  type: DataTypes.TEXT,
		// 	  defaultValue: 'green'
		// 	},
		// 	age: DataTypes.INTEGER,
		// 	cash: DataTypes.INTEGER
		//   });
		  
		//   (async () => {
		// 	await sequelize.sync({ force: true });
		// 	const jane = User.build({ name: "Jane" });
		// 	console.log(jane instanceof User); // true
		// 	console.log(jane.name); // "Jane"
		// 	await jane.save();
		// 	console.log('Jane was saved to the database!');
		//   })();
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
})(); 



//test db 



console.log('About to listen');

app.listen(3000);