angular.module('home')
  .value('query', {
    ad: '', // address
    bd: 3, // min beds
    ba: 2, // min baths
    pr: { // price range
      min: 100000,
      max: 250000
    },
    yr: 1980, // min year
    ft: 1000 // min sq feet
  })
  .value('sort', {
    predicate: 'pr', // sort by price
    reverse: true // sort in descending order
  })
