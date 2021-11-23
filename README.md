<h1 align="center">Object Relational Mapping</h1>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-orange" />
    <img src="https://img.shields.io/badge/express-blue" />
    <img src="https://img.shields.io/badge/Sequelize-yellow"  />
    <img src="https://img.shields.io/badge/mySQL-green"  />
    <img src="https://img.shields.io/badge/dotenv-blue" />
</p>
   
## Description

🔍 A mysql database and application backend for an e-commerce site.

💻 Below is the gif showing the functionality of the application:

![Start, Setup and GET all](./Video/Start%Setup%and%GET%all.mp4)

![GET by ID](./Video/GET%20by%20ID.mp4)

![PUT, POST and DELETE](./Video/PUT%POST%and%DELETE.mp4)

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

💾

`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

## Usage

💻

Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

`npm run seed`

`npm start`

## Testing

✏️

No testing is currently set up

## Contributing

[Aaron Sando](https://github.com/Sandoman19)

## Questions

✉️ Contact me with any questions: [email](mailto:Aaron@charactergroup.com.au) , [GitHub](https://github.com/Sandoman19)<br />
