# Trombi project

This project is simple demo of building a Web application using Angular 6 and nodejs. 

## libraries intergation

* [suerveyjs](https://surveyjs.io/)

## Server side

- use nodejs, expressjs and nano to access to a couchdb database


## Client side

- Integration of SurveyJS with Angular
  - new component with input and output to simplify surveyjs integration based on https://github.com/surveyjs/surveyjs_angular_cli
- create new widget for SurveyJS
  -  a photocapture widget
  -  a plantuml widget
  


## Starting in prod mod for demo


Start a couchdb database

```bash
docker run -p 5984:5984 -d couchdb
```

Start the backend server

```bash
cd server
npm install
node app.js
```

Start the frontend server

```bash
cd frontend
npm install 
ng serve --proxy-config proxy.conf.json  --prod
```

Do not forget to configure your nginx to really deploy your application.
Do not forget to use let s encrypt


## Starting in dev mod for adding new features


```bash
docker run -p 5984:5984 -d couchdb
```

Start the backend server

```bash
cd server
npm install
node app.js
```

Start the frontend server

```bash
cd frontend
npm install 
ng serve --proxy-config proxy.conf.json 
```


## Results


- http://localhost:4200/ To play with the photo capture widget and send the survey result to couchdb
- http://localhost:4200/photo To query the couchdb using mango and play with the result in Angular
- http://localhost:4200/umlsurvey To play with the uml widget
- http://localhost:4200/photocapture to play with the angular photo capture component
