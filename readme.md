# Project 
Greenkart is an e-commerce platform for Gardening Enthusiasts. The goal of this website is to provide this niche market a platform to buy and sell gardening products such as seeds, saplings, tools (like shovel), etc.

* *Date Created*: 07 Aug 2020
* *Last Modification Date*: 07 AUG 2020

## Authors
[Shubham Suri](sh385209@dal.ca) - Maintainer
[Aman Vishnani](aman.vishnani@dal.ca)
[Jatin Partap Rana][jt655878@dal.ca]
[Hirenkumar Khant](hr266981@dal.ca)

## Framework
The webiste uses ReactJS for the frontend.
Backend utilizes Expressjs, Sequalize on top of Nodejs. 
Project uses MySQL for structured and related data.


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
   heroku create $APP_NAME --buildpack heroku/nodejs
   git push heroku master
   heroku open
   ```

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

## Sources Used
1. [Sequelize](https://sequelize.org/)
2. [Express](https://expressjs.com/)
3. Assignment 2 by Shubham Suri
4. Assignment 4 by Shubham Suri
5. [Create-react-app](https://create-react-app.dev/) - Boilerplate code for react application.
6. [Materi-UI](https://material-ui.com/)
7. [React-router-dom](https://github.com/ReactTraining/react-router#readme)
   
### SearchLandingPage.js

Lines 46 - 94
---------------

```
    if (sortValue === "Ascending by Name") {
      let sortedProducts = this.state.products.sort((a, b) => {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    } else if (sortValue === "Descending by Name") {
      let sortedProducts = this.state.products.sort((a, b) => {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    } else if (sortValue === "Price low to high") {
      let sortedProducts = this.state.products.sort((a, b) => {
        return parseInt(a.salePrice) - parseInt(b.salePrice);
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    } else if (sortValue === "Price high to low") {
      let sortedProducts = this.state.products.sort((a, b) => {
        return parseInt(b.salePrice) - parseInt(a.salePrice);
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    }

```

The code above was created by adapting the code in [W3schools](https://www.w3schools.com/js/js_array_sort.asp) as shown below:

```
cars.sort(function(a, b){return a.year - b.year});

cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

```

- [How] The code in [W3schools](https://www.w3schools.com/js/js_array_sort.asp) was implemented by W3Schools
- [Why] [W3schools](https://www.w3schools.com/js/js_array_sort.asp) Code was used for sorting
- [How] [W3schools](https://www.w3schools.com/js/js_array_sort.asp) Code was modified by Hirenkumar Khant



### ProductListing.js

Lines 50 - 54
---------------

```
        return rating > i ? (
                <span className="fa fa-star checked"></span>
              ) : (
                <span className="fa fa-star"></span>
              );
```

The code above was created by adapting the code in [W3schools](https://www.w3schools.com/howto/howto_css_star_rating.asp) as shown below:

```

<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

```

- [How] The code in [W3schools](https://www.w3schools.com/howto/howto_css_star_rating.asp) was implemented by W3Schools
- [Why] [W3schools](https://www.w3schools.com/howto/howto_css_star_rating.asp) Code was used for star rating
- [How] [W3schools](https://www.w3schools.com/howto/howto_css_star_rating.asp) Code was modified by Hirenkumar Khant


### Navbar.js

Lines 38 - 161
---------------

```
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ width: 170 }} alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item listItem" href="/search/plant">
                    Plants
                  </a>
                  <a className="dropdown-item listItem" href="/search/seed">
                    Seeds
                  </a>
                  <a className="dropdown-item listItem" href="/search/tool">
                    Tools
                  </a>
                  <a className="dropdown-item listItem" href="/search/soil">
                    Soil
                  </a>
                  <a className="dropdown-item listItem" href="/search/hose">
                    Hose
                  </a>
                  <a className="dropdown-item listItem" href="/search/pest">
                    Pest Control
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="input"
              name="search"
              id="search"
              onChange={this.valueChanged}
              placeholder="search"
              aria-label="Search"
            />
            <Link to={searchString}>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "flex-end", marginTop: "-6px" }}
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                {this.props.isLoggedIn === true &&
                this.props.isAdmin === false ? (
                  <Link className="navbar-brand  ml-5 mt-2" to="/cart">
                    <ShoppingBasket color="primary" fontSize="large" />
                  </Link>
                ) : null}
              </li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown ml-4 mt-3">
                <span
                  className="nav-link dropdown-toggle text-white"
                  style={{ marginTop: "-5px" }}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.props.isLoggedIn === true ? (
                    <div
                      className="dropdown-item ponter"
                      onClick={this.logoutApi}
                    >
                      Logout
                    </div>
                  ) : (
                    <Link className="dropdown-item" to="/signin">
                      Login
                    </Link>
                  )}
                  {this.props.isLoggedIn === true &&
                  this.props.isAdmin === false ? (
                    <Link className="dropdown-item" to="/user">
                      User Management
                    </Link>
                  ) : null}
                  <Link className="dropdown-item " to="/contact">
                    Contact us
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) as shown below:

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

```

- [How] The code in [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) was implemented by Bootstrap
- [Why] [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) Code was used to develop navigation bar due to features such as responsiveness and hamburger
- [How] [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) Code was modified by Hirenkumar Khant

Repeat as needed

### ProductListing.js

Lines 42 - 69
---------------

```
    <div className="col mb-4 productlisting">
      <div className="card h-100">
        <Link to={productPage} style={{ textDecoration: "none" }}>
          <img src={props.productImage} className="card-img-top" alt="..." />
          <div className="card-body product-card-body">
            <h5 className="card-title cardTitle">{props.productName}</h5>
            <h6 className="cardCategory">{props.category}</h6>
            {[0, 1, 2, 3, 4].map((i) => {
              return rating > i ? (
                <span className="fa fa-star checked"></span>
              ) : (
                <span className="fa fa-star"></span>
              );
            })}
            <br />
            <h3>${props.productPrice}</h3>

            <div className="hiddenCheckout" style={{ textAlign: "center" }}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={onBuy}>
                  Quick Checkout
                </Button>
              </Grid>
            </div>
          </div>
        </Link>
      </div>
    </div>

```

The code above was created by adapting the code in [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) as shown below: 

```
<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

```

- [How] The code in [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) was implemented by Bootstrap
- [Why] [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) Code was used because it allowed efficient and rapid development of pages that required card views
- [How] [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) Code was modified by Hirenkumar Khant

Repeat as needed

// Below references are from Hirenkumar's A2 assignment, which were initially added to the project.

### LoginForm.js

Lines 9 - 52
---------------

```
<Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
          }
           else if ((values.password.length<8)
          ) {
            errors.password = 'Password must have at least 8 letters';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
          <Form  style={{}}>
            <Field type="email" placeholder="Email" name="email" style={{width:300}}/>
            <br/>
            <ErrorMessage name="email" component="span" style={{color:"red"}} />
            <br/>
            <Field type="password" placeholder="Password"name="password" style={{width:300, marginTop:8}}/>
            <br/>
            <ErrorMessage name="password" component="span" style={{color:"red"}} />
            <br/>
            <button type="submit" disabled={isSubmitting} style={{ margin:'10px auto 0px auto', color:"white", backgroundColor:"grey", width:100}} >
              Login
            </button>
          </Form>
      )}
    </Formik>

```

The code above was created by adapting the code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) as shown below: 

```
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

```

- <!---How---> The code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) was implemented by Formik official documentation
- <!---Why---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was used because it simplifies the task of form validation
- <!---How---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was modified by Hirenkumar Khant

### ContactUsForm.js

Lines 9 - 65
---------------

```
<Formik
      initialValues={{ email: '', name: '', topic: '', query: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.topic) {
            errors.topic = 'Required';
        }
        if (!values.query) {
            errors.query = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
          <Form  style={{}}>
            <Field type="name" placeholder="Name" name="name" style={{width:300}}/>
            <br/>
            <ErrorMessage name="name" component="span" style={{color:"red"}} />
            <br/>
            <Field type="email" placeholder="Email" name="email" style={{width:300}}/>
            <br/>
            <ErrorMessage name="email" component="span" style={{color:"red"}} />
            <br/>
            <Field name="topic" as="select" placeholder="Topic of your query" style={{width:300}}>
                <option value="About shopping on GreenKart">About shopping on GreenKart</option>
                <option value="Previous purchase">Previous purchase</option>
                <option value="Bulk purchase">Bulk purchase</option>
            </Field>
            <br/>
            <br/>
            <Field type="query" as="textArea" rows="5" placeholder="Query" name="query" style={{width:300}}/>
            <br/>
            <ErrorMessage name="query" component="span" style={{color:"red"}} />
            <br/>
            <button type="submit" disabled={isSubmitting} style={{ margin:'10px auto 0px auto', color:"white", backgroundColor:"grey", width:100}} >
              Submit
            </button>
          </Form>
      )}
    </Formik>

```

The code above was created by adapting the code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) as shown below: 

```
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

```
- <!---How---> The code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) was implemented by Formik official documentation
- <!---Why---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was used because it simplifies the task of form validation
- <!---How---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was modified by Hirenkumar Khant

## W3c compliant
[medium article](https://medium.com/@matwankarmalay/create-react-app-ie11-script1002-syntax-error-how-to-get-rid-of-it-d70000c53ddf) for adding pollyfill to deliver intended experience in all browsers.

## Images
[1]2020. [Online]. Available: https://images.unsplash.com/photo-1517481274804-9410aeb7f065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60. [Accessed: 04- Aug- 2020].

[2]2020. [Online]. Available: https://images.unsplash.com/photo-1541926215184-88e15e8748c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60. [Accessed: 04- Aug- 2020].

[3]2020. [Online]. Available: https://images.unsplash.com/photo-1585499805553-84345a2811e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60. [Accessed: 04- Aug- 2020].

[4]2020. [Online]. Available: https://images.unsplash.com/photo-1589475201212-e0c77aa2d670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60. [Accessed: 04- Aug- 2020].

[5]2020. [Online]. Available: https://images.unsplash.com/photo-1588501985886-2a38c5785e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80. [Accessed: 04- Aug- 2020].

[6]2020. [Online]. Available: https://images.pexels.com/photos/1634074/pexels-photo-1634074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[7]2020. [Online]. Available: https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[8]2020. [Online]. Available: https://images.pexels.com/photos/914911/pexels-photo-914911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[9]2020. [Online]. Available: https://images.pexels.com/photos/211856/pexels-photo-211856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[10]2020. [Online]. Available: https://images.pexels.com/photos/1634074/pexels-photo-1634074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[11]2020. [Online]. Available: https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[12]2020. [Online]. Available: https://images.pexels.com/photos/718760/pexels-photo-718760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[13]2020. [Online]. Available: https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].

[14]2020. [Online]. Available: https://images.pexels.com/photos/220911/pexels-photo-220911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. [Accessed: 04- Aug- 2020].


## Acknowledgments
[1]: Gardeners Supply. 2020. Garden Supplies, Planters, Soil, Tools + More | Free Shipping. [online] Available at: <https://www.gardeners.com/buy/gardening/> [Accessed 14 June 2020].

[2]: React-bootstrap.netlify.app. 2020. [online] Available at: <https://react-bootstrap.netlify.app/components/table/#tables> [Accessed 14 June 2020].

[3]: React-bootstrap.netlify.app. 2020. [online] Available at: <https://react-bootstrap.netlify.app/migrating/#navbar> [Accessed 14 June 2020].

[4]: Fontawesome.com. 2020. Font Awesome. [online] Available at: <https://fontawesome.com/icons?d=gallery&q=user> [Accessed 14 June 2020].

[5]: Mark Otto, a., 2020. Buttons. [online] Getbootstrap.com. Available at:<https://getbootstrap.com/docs/4.4/components/buttons/#sizes> [Accessed 14 June 2020].

[6]: Mark Otto, a., 2020. Navbar. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/navbar/> [Accessed 14 June 2020].

[7]: Mark Otto, a., 2020. Cards. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/card/#header-and-footer> [Accessed 14 June 2020].

[8]:  Gandy, D., 2020. Fa-User: Font Awesome Icons. [online] Fontawesome.com. Available at: <https://fontawesome.com/v4.7.0/icon/user> [Accessed 14 June 2020].

[9]: 2020. [online] Available at: <https://www.youtube.com/watch?v=nV7Mf77GiOc> [Accessed 14 June 2020].

[10]: Gandy, D., 2020. Fa-Lock: Font Awesome Icons. [online] Fontawesome.com. Available at: <https://fontawesome.com/v4.7.0/icon/lock> [Accessed 14 June 2020].

[11]: Mark Otto, a., 2020. Forms. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/forms/> [Accessed 14 June 2020].

[12] "express-session", npm, 2020. [Online]. Available: https://www.npmjs.com/package/express-session. [Accessed: 04- Aug- 2020]

[13] "nodemailer-sendgrid-transport", npm, 2020. [Online]. Available: https://www.npmjs.com/package/nodemailer-sendgrid-transport. [Accessed: 04- Aug- 2020]

[14] "Manual | Sequelize", Sequelize.org, 2020. [Online]. Available: https://sequelize.org/master/manual/model-querying-basics.html. [Accessed: 04- Aug- 2020]

[15]"Overview · Formik", Jaredpalmer.com, 2020. [Online]. Available: https://jaredpalmer.com/formik/docs/overview. [Accessed: 16- Jun- 2020].

[16]2020. [Online]. Available: https://www.pexels.com/photo/three-green-assorted-plants-in-white-ceramic-pots-776656/. [Accessed: 16- Jun- 2020].

[17]2020. [Online]. Available: https://www.pexels.com/photo/apple-devices-books-business-coffee-572056/. [Accessed: 16- Jun- 2020].

[18]2020. [Online]. Available: https://www.pexels.com/photo/notebook-with-pen-near-white-magnolia-flower-4210779/. [Accessed: 16- Jun- 2020].

[19]2020. [Online]. Available: https://www.pexels.com/photo/unpeeled-garlic-bulbs-on-white-marble-background-4197484/. [Accessed: 16- Jun- 2020].

[20]2020. [Online]. Available: https://www.pexels.com/photo/green-snake-plant-on-white-ceramic-pot-1445416/. [Accessed: 16- Jun- 2020].

[21]a. Mark Otto, "Cards", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/components/card/. [Accessed: 16- Jun- 2020].

[22]a. Mark Otto, "Navbar", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/components/navbar/. [Accessed: 16- Jun- 2020].

[23]"JavaScript Array Sort", W3schools.com, 2020. [Online]. Available: https://www.w3schools.com/js/js_array_sort.asp. [Accessed: 25- Jul- 2020].

[24]"Manual | Sequelize", Sequelize.org, 2020. [Online]. Available: https://sequelize.org/v5/manual/querying.html. [Accessed: 25- Jul- 2020].

[25]"Manual | Sequelize", Sequelize.org, 2020. [Online]. Available: https://sequelize.org/master/. [Accessed: 25- Jul- 2020]

[26]"How To Create a Simple Star Rating with CSS", W3schools.com, 2020. [Online]. Available: https://www.w3schools.com/howto/howto_css_star_rating.asp. [Accessed: 25- Jul- 2020]

[27]Russell Heimlich, 2020. [Online]. Available: https://dummyimage.com/. [Accessed: 04- Aug- 2020].

[28]2020. [Online]. Available: https://www.mockaroo.com/. [Accessed: 04- Aug- 2020].
