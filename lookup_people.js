const pg = require("pg");
const settings = require("./settings"); // settings.json
const myName = process.argv.slice(2)[0];

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

function formatDate(myDate) {
  return (myDate.toISOString().substr(0, 10));
}

function foundOutput(myObj, name) {
  let foundStr = `Found ${myObj.length} person(s) by the name '${name}':`
  myObj.forEach((person, ind) => {
    foundStr += `\n- ${ind + 1}: ${myObj[ind].first_name} ${myObj[ind].last_name}, born '${formatDate(myObj[ind].birthdate)}'`

  });
  return foundStr;
};

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people where first_name = $1::text;`, [myName], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching...")
    console.log(foundOutput(result.rows, myName));
    client.end();
  });
});