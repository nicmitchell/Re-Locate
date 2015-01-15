angular.module('home')
  .value('query', {
    ad: '',
    bd: 3, // min
    ba: 2, // min
    pr: { // range
      min: 100000,
      max: 250000
    },
    yr: 1980, // min
    ft: 1000 // min
  })
