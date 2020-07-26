# Assignment 4

* *Date Created*: 20 JULY 2020
* *Last Modification Date*: 25 JULY 2020

## Authors
[Shubham Suri](sh385209@dal.ca) - Maintainer

## Framework
The webiste uses ReactJS for the frontend.
Backend utilizes Expressjs, Sequalize on top of Nodejs. 
Project uses MySQL for structured and related data.

### Files
1. "./server/routes/products.js" - handles routes for product API calls
2. "./server/controllers/products.js" - contains core methods for api calls.
3. "./server/models/product.js" - contains Object Relational Mapping for product table.
4. "./server/utils/database.js" - database connection details and configuration.
5. "./src/services/ProductServices.js" - Conduct and handle Product related API calls using fetch.
6. "./src/pages/ProductCompnent.jsx" - UI for the frontend.

## APIs utilised

1. Request : GET ProductDetails
	URL: https://web-team-22.herokuapp.com/productdetails?id=4
	Description: This GET request will fetch the details for product by product ID.

2. Request : GET SimilarProducts
	URL: https://web-team-22.herokuapp.com/similarproducts?id=4
	Description: This request has parm product id, it gets category for product id and then fetch top 4 products in that product category.


### Clone repository
 git clone https://github.com/Ssuri013/Group22-Assignments-And-Project.git

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following software / libraries / plug-ins:
1. Node - install  nodejs from https://nodejs.org/en/download/
2. create-react-app - "npm install -g create-react-app.

See the following section for detailed step-by-step instructions on how to run this project

### Installing and running locally

1. Clone the repository as stated above.
2. Install prerequisites.
3. Open command line interface inside project folder.
4. Run "npm install" to install required librayries and dev dependencies included in package.json file.
5. Modify database configuration in "./server/util/database.js".
6. Run "npm run dev" to start both frontend and backend.
7. Once the compilation is complete, URL will be provided on which webpage is hosted locally.
8. Open URL to visit the website.

## Deployment on Heroku

Deployment is done using Heroku.
steps to deploy:
1. Make account on heroku
2. Install [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
3. Open CLI in project folder.
4. Login in heroku.
5. Run following commands
   ```
   heroku create $APP_NAME --buildpack heroku/nodejs
   git push heroku master
   heroku open
   ```


## Sources Used
1. [Sequelize](https://sequelize.org/)
2. [Express](https://expressjs.com/)
3. Assignment 2 by Shubham Suri


## Acknowledgments
* Hat tip to developers of expressjs
* Guided by course Teaching Assistants.
  

## Pages
1. [Products](https://web-team-22.herokuapp.com/product/4)

## W3c compliant
[medium article](https://medium.com/@matwankarmalay/create-react-app-ie11-script1002-syntax-error-how-to-get-rid-of-it-d70000c53ddf) for adding pollyfill to deliver intended experience in all browsers.

## Images
1. [Background](https://www.pexels.com/photo/background-blade-blur-bokeh-352096/)
2. [Plant in cards](https://www.pinterest.ca/pin/352125264596695635/)
3. [Plant](https://photos.imageevent.com/livingartreptiles/livingartreptilesballpythonsmorphs/No%20image%20available%20Living%20Art%20Reptiles_34.jpeg)
