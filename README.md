# Contact Keeper

> Small contact storage web app built with the MERN stack.

Small simple application that demonstrates the basics of buiilding a fullstack web application on the MERN stack and state management via React's Context API. [Try it out](https://contact-keeper-89.herokuapp.com/register) by signing up and adding a few contacts.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a default.js in the config folder with

```
{
  "mongoURI": "YOUR_MONGO_DB_URI",  // URI connection string to your db
  "jwtSecret": "YOUR_JWT_SECRET",   // string used to hash user passwords
  "jwtExpiresIn": 86400             // JSON web token expiration time
}
```

## App Info

### Author

Francisco Arredondo

### Contact

frarredo@gmail.com

### Version

1.0.0

### License

This project is licensed under the MIT License
