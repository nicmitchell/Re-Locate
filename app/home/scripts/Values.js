angular.module('home')
  .value('query', {
    ad: '', // address
    bd: 3, // min beds
    ba: 2, // min baths
    pr: { // price range
      min: 100000,
      max: 250000,
      limit: 599000 // the max slider value to include searches above this amount
    },
    yr: 1985, // min year
    ft: 1250, // min sq feet
    currYr: new Date().getFullYear()
  })
  .value('sort', {
    property: 'pr', // sort by price
    order: 'descending' // sort in descending order
  })
  // .value('listingImage', { // location of listing images
  //   url: 'http://reapp-demo.parseapp.com/homes/'
  // })
