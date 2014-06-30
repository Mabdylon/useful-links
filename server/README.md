# Server NodeJS with CRUD API

## Installing :

Install nodeJS : http://nodejs.org/
(add "bin" dir to PATH)

Install mongoDB : http://www.mongodb.org/
(add "bin" dir to PATH)

Install dependencies :
```sh
$ npm install
```


## Launching :

Launch MongoDb :
```sh
$ mongod --dbpath path_to_store_data
```

Launching server with auto-reboot on sources change :
Install :
```sh
$ npm install -g nodemon
```
Execute :
```sh
$ nodemon server.js
```

then visit [http://localhost:3000](http://localhost:3000)

## Testing :

Install Mocha and execute tests :
Install :
```sh
$ npm install -g mocha
```
Execute :
```sh
$ mocha
```



Infos :

- Ref project to get skeleton and examples :
https://github.com/madhums/node-express-mongoose-demo