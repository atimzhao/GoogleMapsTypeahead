class State {
    constructor(name, lat, lng) {
      this.name = name
      this.lat = lat
      this.lng = lng
    }
  }
  
// Source: https://developers.google.com/public-data/docs/canonical/states_csv + Wikipedia
// Not the prettiest, but it works. Saving the coordinates in FE could have worked too...
var statesDict = [
  new State("Alaska",63.588753,-154.493062),
  new State("Alabama",32.318231,-86.902298),
  new State("American Samoa",-14.31453,-170.741581),
  new State("Arkansas",35.20105,-91.831833),
  new State("Arizona",34.048928,-111.093731),
  new State("California",36.778261,-119.417932),
  new State("Colorado",39.550051,-105.782067),
  new State("Connecticut",41.603221,-73.087749),
  new State("District of Columbia",38.905985,-77.033418),
  new State("Delaware",38.910832,-75.52767),
  new State("Florida",27.664827,-81.515754),
  new State("Georgia",32.157435,-82.907123),
  new State("Guam",13.465201,144.784711),
  new State("Hawaii",19.898682,-155.665857),
  new State("Iowa",41.878003,-93.097702),
  new State("Idaho",44.068202,-114.742041),
  new State("Illinois",40.633125,-89.398528),
  new State("Indiana",40.551217,-85.602364),
  new State("Kansas",39.011902,-98.484246),
  new State("Kentucky",37.839333,-84.270018),
  new State("Louisiana",31.244823,-92.145024),
  new State("Massachusetts",42.407211,-71.382437),
  new State("Maryland",39.045755,-76.641271),
  new State("Maine",45.253783,-69.445469),
  new State("Michigan",44.314844,-85.602364),
  new State("Minnesota",46.729553,-94.6859),
  new State("Missouri",37.964253,-91.831833),
  new State("Mississippi",32.354668,-89.398528),
  new State("Montana",46.879682,-110.362566),
  new State("North Carolina",35.759573,-79.0193),
  new State("North Dakota",47.551493,-101.002012),
  new State("Nebraska",41.492537,-99.901813),
  new State("New Hampshire",43.193852,-71.572395),
  new State("New Jersey",40.058324,-74.405661),
  new State("New Mexico",34.97273,-105.032363),
  new State("Nevada",38.80261,-116.419389),
  new State("New York",43.299428,-74.217933),
  new State("Northern Mariana Islands",15.203742,145.75644),
  new State("Ohio",40.417287,-82.907123),
  new State("Oklahoma",35.007752,-97.092877),
  new State("Oregon",43.804133,-120.554201),
  new State("Pennsylvania",41.203322,-77.194525),
  new State("Puerto Rico",18.220833,-66.590149),
  new State("Rhode Island",41.580095,-71.477429),
  new State("South Carolina",33.836081,-81.163725),
  new State("South Dakota",43.969515,-99.901813),
  new State("Tennessee",35.517491,-86.580447),
  new State("Texas",31.968599,-99.901813),
  new State("U.S. Virigin Islands",17.734884,-64.781415),
  new State("Utah",39.32098,-111.093731),
  new State("Virginia",37.431573,-78.656894),
  new State("Vermont",44.558803,-72.577841),
  new State("Washington",47.751074,-120.740139),
  new State("Wisconsin",43.78444,-88.787868),
  new State("West Virginia",38.597626,-80.454903),
  new State("Wyoming",43.075968,107.290284)
]

module.exports = {State, statesDict}