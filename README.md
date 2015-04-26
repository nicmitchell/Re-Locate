RE-locate
======
A white label real estate mobile app originally designed to pull listings directly from the MLS. Currently wired to work with a Parse.com backend for demo data. Built using Angular and the AppGyver stack. 

##Getting Started
- [Create an AppGyver account](http://www.appgyver.com/steroids/getting_started)
- [Follow the instructions for your OS for getting AppGyver set up](https://academy.appgyver.com/installwizard/steps#/choose-os).
- `npm install`
- `bower install`

##If Using Parse.com:
**Data**
- Create the application in Parse.com
- Add a class called 'home'
- Upload sample data from `app > common > assets > home.json`
- Get the keys for your Parse.com application from `Settings > Keys`
- Follow the instructions in `app > common > assets > parse-example.js`
- Rename `parse-example.js` to `parse.js`

**Images**
- [Follow instructions for setting up hosting](https://www.parse.com/docs/hosting_guide)
- Upload images from `app > common > assets > img > listing-images` to your new host
- Update URLs in `app > home > views > index.html` and `app > home > views > show.html` to your host

##Todo:
- Thin out the controllers and abstract more logic into services
- Pass off user creation to Parse or backend
- Lazy load images
- Swipe left / right to fave / trash listings
- Reintegrate tests