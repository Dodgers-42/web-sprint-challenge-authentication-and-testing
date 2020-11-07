const bcrypt = require("bcrypt");

exports.seed = async function(knex) {
	await knex("jokes").insert([
		// { id: 1, username: "janedoe", password: await bcrypt.hash("abc12345", 14), department: "docGen" },
		// { id: 2, username: "johndoe", password: await bcrypt.hash("abc1234", 14), department: "docProc" },
	])
}

//brought over from assignment