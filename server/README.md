# Tutorial 6

* *Date Created*: 28 JUN 2020
* *Last Modification Date*: 30 JUN 2020
This project utilizes mongodb and expressjs to maintain user data. In this project we have CRUD APIs to get, create and updated the user information. Application has robust structure, includings CORS requests and handling malformed urls.

## Authors
[Shubham Suri](sh385209@dal.ca) - Maintainer
[Aman Vishnani](aman.vishnani@dal.ca) - Maintainer
[Hirenkumar Khant](hr266981@dal.ca) - Maintainer
[Jatin Rana](jt655878@dal.ca) - Maintainer
[Mihir Patel](mh547507@dal.ca) - Maintainer

## Contributions

Jatin Partap Rana - B00841521 : Implemented the PUT API to update the data for the existing
users.

Aman Vishani - B00840115 : Made the project structure and implemented the api to get 
information of all user.

HirenKumar Jayantilal Khant - B00841427: Handled the error validations in all the APIs

Mihir Patel - B00847033 : Implemented the router code in the project

Shubham Suri - B00840085: Implemented the POST API to add new users.
   
## API's exposed

1. Get API URL: http://ec2-3-227-74-206.compute-1.amazonaws.com/users

2. GET API With Params URL: http://ec2-3-227-74-206.compute-1.amazonaws.com/users:id

3. POST API URL: http://ec2-3-227-74-206.compute-1.amazonaws.com/users
{
	"username": "user6",
	"email":"user6@example.com"
}

4. PUT API URL: http://ec2-3-227-74-206.compute-1.amazonaws.com/users:id

PUT Request:
{
	"username":"userNameUpdated"
}

## Getting Started

### Links

Link for Repository: https://github.com/jatinPartapRana/Group22-Tutorials.git
Link for Deployed node-app: http://ec2-3-227-74-206.compute-1.amazonaws.com/

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / accounts:
1. Node - install  nodejs from https://nodejs.org/en/download/
2. Postman - install from https://www.postman.com/downloads/
3. MongoDB Atlass - create account on https://www.mongodb.com/cloud/atlas

See the following section for detailed step-by-step instructions on how to run this project

### Installing and running locally

1. Clone the repository from link provided link.
2. Install prerequisites.
3. Open command line interface inside project folder.
4. Run "npm install" to install required libraries and dev dependencies included in package.json file.
5. Run "npm start" to start  project.
6. Once the compilation is complete, project can be accessed locally on "localhost:3000".
7. Open URL to visit the website with valid request parameters using browser or postman.

## Sources Used

1. ExpressJS - https://github.com/expressjs/express
2. mongoose - https://github.com/Automattic/mongoose
3. bodyparser - https://github.com/expressjs/body-parser


# References:

[1]: shah, a., Tutorial 6: Node and express, Dalhousie University: 2020
[2]: "Express 5.x - API Reference", Expressjs.com, 2020. [Online]. Available: https://expressjs.com/en/5x/api.html. [Accessed: 29- Jun- 2020].
[3]: Mongoosejs.com. 2020. Mongoose V5.9.20: Getting Started. [online] 
Available at: <https://mongoosejs.com/docs/> [Accessed 1 July 2020].
[4]: npm. 2020. Joi. [online] Available at: <https://www.npmjs.com/package/joi> 
[Accessed 23 June 2020].
 