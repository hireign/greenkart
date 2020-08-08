# Project 
Greenkart is an e-commerce platform for Gardening Enthusiasts. The goal of this website is to provide this niche market a platform to buy and sell gardening products such as seeds, saplings, tools (like shovel), etc.

* *Date Created*: 07 Aug 2020
* *Last Modification Date*: 07 AUG 2020

## Authors
[Shubham Suri](sh385209@dal.ca) - Maintainer
[Aman Vishnani](aman.vishnani@dal.ca)

## Getting Started

### Color Schemes

1. Primary - Green (#00CC66) - Representing Green in Greenkart
2. Secondary - Orange (#F75C03) - Complimenting color

### Clone repository
 git clone https://github.com/Ssuri013/Group22-Assignments-And-Project.git
 chekout origin/development branch
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following software / libraries / plug-ins:
1. Node - install  nodejs from https://nodejs.org/en/download/
2. create-react-app - "npm install -g create-react-app

See the following section for detailed step-by-step instructions on how to run this project

### Installing and running locally

1. Clone the repository as stated above.
2. Install prerequisites.
3. Open command line interface inside project folder.
4. checkout development "git checkout origin/development"
5. Run "npm install" to install required libraries and dev dependencies included in package.json file.
6. Run "npm start" to start compilation of project.
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
   heroku create $APP_NAME --buildpack mars/create-react-app
   git push heroku master
   heroku open
   ```

## Built With

1. [Create-react-app](https://create-react-app.dev/) - Boilerplate code for react application.
2. [Materi-UI](https://material-ui.com/)
3. [React-router-dom](https://github.com/ReactTraining/react-router#readme)
   
## Sources Used

### [Materi-UI](https://material-ui.com/)
Material UI provide us with UI components for fast and manageable development. 
Each component's example page was refered to for syntax, attributes and common practices.
Components usage and attributes have a standard way.
UI components are used throughout the application(almost all files in src folder), there are css customizations for some components and are done through classes attribute.
* Hirarchy and combination of these components has been done independently.
* Author attributes not available
  
Following snippets of code was used from material-ui documentaion, these snippets are basic working of components and have been modified according to need in application, along with these there are other material components also used.
```
        <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="inherit" />
                                </InputAdornment>
                            ),
                        }}
                    />
``` 

```
 <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Product is added to cart! next page is currently unavailable!
        </MuiAlert>
      </Snackbar>
```

```
      const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = (event, reason) => {
  
      setOpen(false);
    };

    <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Next page is currently unavailable!
        </MuiAlert>
      </Snackbar>
```

### https://reacttraining.com/react-router/web/guides/quick-start
This website has refered to implement router routes in "App.js" file.
```
  <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/rating">
            <Review />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
```
## Acknowledgments

* Hat tip to developers of react-create-app
* Inspiration taken from Materia-UI examples
* Guided by course Teaching Assistants. 

## Pages
1. [Login](https://greenkart-assignment2.herokuapp.com/)
2. [Home](https://greenkart-assignment2.herokuapp.com/) - same URl after login is complete
3. [Products](https://greenkart-assignment2.herokuapp.com/product)
4. [Review](https://greenkart-assignment2.herokuapp.com/rating)

## User Experience

### Audience 
1. Gardners
2. seasonal hobbist
3. small scale farmers
4. large scale farmers

### Principles followed
Website is will be accessed by largely non-technical people.
1. Minimalist approach to clearly and simplicity
2. visual focus is on main components by assigning primary color and less attention on other buttons by assigning secondary color.
3. Maximun 3 level of depth on webpage to find a product.
4. color and background images are styles to engage with users.
5. webistes are scanned and not read so everything has an appropiate heading and information is provided clearly.
6. Website flow follows convention of other e-commerce websites so users have an intuitive behavior.
follows conventions.
7. Typography plays a powerfull role, "Roboto" by google is used as font due to its clarity.
8. Invalid routes are taken to HomePage.
9. Whole website can be navigated using only keyboard (tab to shift focus).

## W3c compliant
[medium article](https://medium.com/@matwankarmalay/create-react-app-ie11-script1002-syntax-error-how-to-get-rid-of-it-d70000c53ddf) for adding pollyfill to deliver intended experience in all browsers.

## Images
