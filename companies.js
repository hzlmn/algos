const data = [
  {
    streetName: 'South Street',
    buildings: [
      {
        number: '10',
        companies: [
          'Ereka',
          'Test'
        ]
      }
    ]
  },
  {
    streetName: 'South Street',
    buildings: [
      {
        number: '2',
        companies: [
          'Ereka',
          'Test'
        ]
      }
    ]
  },
  {
    streetName: 'Nouth Street',
    buildings: [
      {
        number: '3',
        companies: [
          'Ereka',
          'Test'
        ]
      }
    ]
  },
  {
    streetName: 'West Street',
    buildings: [
      {
        number: '2a',
        companies: [
          'Test',
          'Boo'
        ]
      }
    ]
  },
  {
    streetName: 'South Street',
    buildings: [
      {
        number: '10',
        companies: []
      }
    ]
  }
]

/**
 * Finding company addresses by name
 */
function findCompanybyName(companyName) {
  var addresses = []
  var visited = {}

  for (let i = 0; i < data.length; i++) {
    var currentStreet = data[i]
    var buildings = currentStreet.buildings

    for (let y = 0; y < buildings.length; y++) {
      var currentBuilding = buildings[y]

      if (!visited[currentBuilding.number]) {
        /**
         * Mark current building as visited
         */
        visited[currentBuilding.number] = true

        if (currentBuilding.companies.indexOf(companyName) > -1) {
          addresses.push({
            streetName: currentStreet.streetName,
            build: currentBuilding.number
          })
        }
      }
    }
  }

  return addresses
}


var addresses = []
var visited = {}

function workStreet(companyName, street, cb) {
  var buildings = street.buildings

  buildings.forEach((build) => {
    if (!visited[build.number]) {
      visited[build.number] = true
      if (build.companies.indexOf(companyName) > -1) {
        addresses.push({
          streetName: street.streetName,
          build: build.number
        })
      }
    }
  })

  process.nextTick(function () {})
}

function findCompanyByNameAsync(companyName) {
  var addresses = []
  var visited = {}
  var pendings = []

  data.forEach((street) => {
    process.nextTick(() => {
      pendings.push(workStreet(companyName, street, addresses, visited))
    })
  })

  Promise.all(pendings)
    .then((res) => console.log(res))
}

console.log(findCompanyByNameAsync('Boo'))


