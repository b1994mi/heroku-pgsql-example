**Intro**
This is a simple app using node, express, pg, and sequelizer that I have successfully deployed to heroku and the db connection working.

**Tutorials that I followed**

1. [Express Sequelize Heroku Postgres Configuration Success](https://theptrk.com/2018/10/10/express-sequelize-heroku-configuration-success/)

After following No. 1, I had an Error: self signed certificate. It turns out that I need to set the ssl: { rejectUnauthorized: false } on config.json.

2. ['Self signed certificate' error during query the Heroku hosted Postgres database from the Node.js application](https://stackoverflow.com/questions/61097695/self-signed-certificate-error-during-query-the-heroku-hosted-postgres-database)

Just to make sure what rejectUnauthorized: false is, I searched it and found out that Heroku does not support client-side certificate validation to its Postgres.

3. [Is it safe to set rejectUnauthorized to false when using Heroku's Postgres database?](https://security.stackexchange.com/questions/229282/is-it-safe-to-set-rejectunauthorized-to-false-when-using-herokus-postgres-datab)

**Deployed Version**
I have deployed it [here](https://fierce-bastion-46830.herokuapp.com/) per 28 Jan 2021. GET method will return all the contents of table employees and POST method with body JSON as such: `{"name": "Someone"}` is enough to add a new row.
