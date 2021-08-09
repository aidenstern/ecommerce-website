# ecommerce-website

This is a mock ecommerce website built using Django Rest Framework for a backend and Vue.js on the frontend. It is not currently being updated and the dependencies are probably far behind. However, if you've come across this on a google search, hopefully the backend schema and organization provide some level of use to you.

## Dependencies

You will need Python 3 and Django for the backend.
Frontend dependencies can all be installed with `npm install`.
## Usage

```
mkdir ecommerce-website
cd ecommerce-website
git clone git@github.com:aidenstern/ecommerce-website.git
cd backend
python manage.py runserver
```
In another window:
```
cd frontend
npm install
npm run serve
```

## Features

### Backend
- token authentication endpoints for regular and social login/registration with [python social auth](https://github.com/python-social-auth) 
- product and category models with appropriate list views and filters for GET requests
- admin management page for accounts, products, categories, and social account associations

### Frontend

- Home, About, Store, Profile page
- Vue-router config including meta tags for auth-required pages (e.g. profile)
- Vuex state management with a shop module (categories, products, brand), account module (user information), and alert module (handles backend request errors)

