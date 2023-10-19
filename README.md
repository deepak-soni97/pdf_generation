# PDF Generator
I have developed a Node.js application with MongoDB integration that can generate dynamic PDF reports based on data from 3 to 4 tables.
The application is capable of generating dynamic PDF reports. 

## Development
Before you can build this project, you must install and configure the following dependencies on your machine:

>1.[Node.js](https://nodejs.org/en): We use Node to run a development web server and build the project. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

>2.[npm](https://www.npmjs.com/): We use npm to manage Node dependencies. Depending on your system, you can install npm either from source or as a pre-packaged bundle.
After installing Node, you should be able to run the following command to install development tools. You will only need to run this command when dependencies change in package.json.


## Getting Started
### Prerequisites

* MongoDB
* express
* pdfKit
* nodemon
* jest  

### installation

``` 
git clone https://github.com/deepak-soni97/pdf_generation.git 
```

```
cd pdf_generation
```
```
npm install
```

## configure

> Copy the .env.example file to .env and edit it to configure your application.

## Usage

>Set up your database connection in the src/config.js/db.js file.


* Start the server
```
 npm start
```
* The application will run on
```
 http://localhost:3000
```

## Tests 
```
npm test
```



