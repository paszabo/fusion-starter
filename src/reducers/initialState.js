// This is the app's initial state. Note that reducers each handle a slice of this state.
// Composing all initial state here gives us a clear spot of reference that displays the shape
// of our entire store.
export default {
  customers: [],
  ajaxCallsInProgress: 0,
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  loadingIndicatorStatus: {
    percent: -1,
    intervalTime: 200
  },
  states: {
    "AU": [
      {
        "value": "australian-capital-territory",
        "label": "Australian Capital Territory",
        "className": "State-ACT"
      },
      {
        "value": "new-south-wales",
        "label": "New South Wales",
        "className": "State-NSW"
      },
      {
        "value": "victoria",
        "label": "Victoria",
        "className": "State-Vic"
      },
      {
        "value": "queensland",
        "label": "Queensland",
        "className": "State-Qld"
      },
      {
        "value": "western-australia",
        "label": "Western Australia",
        "className": "State-WA"
      },
      {
        "value": "south-australia",
        "label": "South Australia",
        "className": "State-SA"
      },
      {
        "value": "tasmania",
        "label": "Tasmania",
        "className": "State-Tas"
      },
      {
        "value": "northern-territory",
        "label": "Northern Territory",
        "className": "State-NT"
      }
    ],
    "US": [
      {
        "value": "AL",
        "label": "Alabama",
        "disabled": true
      },
      {
        "value": "AK",
        "label": "Alaska"
      },
      {
        "value": "AS",
        "label": "American Samoa"
      },
      {
        "value": "AZ",
        "label": "Arizona"
      },
      {
        "value": "AR",
        "label": "Arkansas"
      },
      {
        "value": "CA",
        "label": "California"
      },
      {
        "value": "CO",
        "label": "Colorado"
      },
      {
        "value": "CT",
        "label": "Connecticut"
      },
      {
        "value": "DE",
        "label": "Delaware"
      },
      {
        "value": "DC",
        "label": "District Of Columbia"
      },
      {
        "value": "FM",
        "label": "Federated States Of Micronesia"
      },
      {
        "value": "FL",
        "label": "Florida"
      },
      {
        "value": "GA",
        "label": "Georgia"
      },
      {
        "value": "GU",
        "label": "Guam"
      },
      {
        "value": "HI",
        "label": "Hawaii"
      },
      {
        "value": "ID",
        "label": "Idaho"
      },
      {
        "value": "IL",
        "label": "Illinois"
      },
      {
        "value": "IN",
        "label": "Indiana"
      },
      {
        "value": "IA",
        "label": "Iowa"
      },
      {
        "value": "KS",
        "label": "Kansas"
      },
      {
        "value": "KY",
        "label": "Kentucky"
      },
      {
        "value": "LA",
        "label": "Louisiana"
      },
      {
        "value": "ME",
        "label": "Maine"
      },
      {
        "value": "MH",
        "label": "Marshall Islands"
      },
      {
        "value": "MD",
        "label": "Maryland"
      },
      {
        "value": "MA",
        "label": "Massachusetts"
      },
      {
        "value": "MI",
        "label": "Michigan"
      },
      {
        "value": "MN",
        "label": "Minnesota"
      },
      {
        "value": "MS",
        "label": "Mississippi"
      },
      {
        "value": "MO",
        "label": "Missouri"
      },
      {
        "value": "MT",
        "label": "Montana"
      },
      {
        "value": "NE",
        "label": "Nebraska"
      },
      {
        "value": "NV",
        "label": "Nevada"
      },
      {
        "value": "NH",
        "label": "New Hampshire"
      },
      {
        "value": "NJ",
        "label": "New Jersey"
      },
      {
        "value": "NM",
        "label": "New Mexico"
      },
      {
        "value": "NY",
        "label": "New York"
      },
      {
        "value": "NC",
        "label": "North Carolina"
      },
      {
        "value": "ND",
        "label": "North Dakota"
      },
      {
        "value": "MP",
        "label": "Northern Mariana Islands"
      },
      {
        "value": "OH",
        "label": "Ohio"
      },
      {
        "value": "OK",
        "label": "Oklahoma"
      },
      {
        "value": "OR",
        "label": "Oregon"
      },
      {
        "value": "PW",
        "label": "Palau"
      },
      {
        "value": "PA",
        "label": "Pennsylvania"
      },
      {
        "value": "PR",
        "label": "Puerto Rico"
      },
      {
        "value": "RI",
        "label": "Rhode Island"
      },
      {
        "value": "SC",
        "label": "South Carolina"
      },
      {
        "value": "SD",
        "label": "South Dakota"
      },
      {
        "value": "TN",
        "label": "Tennessee"
      },
      {
        "value": "TX",
        "label": "Texas"
      },
      {
        "value": "UT",
        "label": "Utah"
      },
      {
        "value": "VT",
        "label": "Vermont"
      },
      {
        "value": "VI",
        "label": "Virgin Islands"
      },
      {
        "value": "VA",
        "label": "Virginia"
      },
      {
        "value": "WA",
        "label": "Washington"
      },
      {
        "value": "WV",
        "label": "West Virginia"
      },
      {
        "value": "WI",
        "label": "Wisconsin"
      },
      {
        "value": "WY",
        "label": "Wyoming"
      }
    ]
  },
  "chartData": {
    "lineGraphData": [
      {
        "day": "02-11-2016",
        "count": 180
      },
      {
        "day": "02-12-2016",
        "count": 250
      },
      {
        "day": "02-13-2016",
        "count": 150
      },
      {
        "day": "02-14-2016",
        "count": 496
      },
      {
        "day": "02-15-2016",
        "count": 140
      },
      {
        "day": "02-16-2016",
        "count": 380
      },
      {
        "day": "02-17-2016",
        "count": 100
      },
      {
        "day": "02-18-2016",
        "count": 150
      },
      {
        "day": "02-19-2016",
        "count": 400
      },
      {
        "day": "02-20-2016",
        "count": 345
      },
      {
        "day": "02-21-2016",
        "count": 80
      },
      {
        "day": "02-22-2016",
        "count": 520
      },
      {
        "day": "02-23-2016",
        "count": 471
      },
      {
        "day": "02-24-2016",
        "count": 246
      },
      {
        "day": "02-25-2016",
        "count": 199
      }
    ],
    "lineGraphData2": [
      {
        "type": "A",
        "day": "02-11-2016",
        "count": 246
      },
      {
        "type": "A",
        "day": "02-12-2016",
        "count": 19
      },
      {
        "type": "A",
        "day": "02-13-2016",
        "count": 352
      },
      {
        "type": "A",
        "day": "02-14-2016",
        "count": 495
      },
      {
        "type": "A",
        "day": "02-15-2016",
        "count": 415
      },
      {
        "type": "A",
        "day": "02-16-2016",
        "count": 178
      },
      {
        "type": "A",
        "day": "02-17-2016",
        "count": 40
      },
      {
        "type": "A",
        "day": "02-18-2016",
        "count": 111
      },
      {
        "type": "A",
        "day": "02-19-2016",
        "count": 93
      },
      {
        "type": "A",
        "day": "02-20-2016",
        "count": 36
      },
      {
        "type": "A",
        "day": "02-21-2016",
        "count": 355
      },
      {
        "type": "A",
        "day": "02-22-2016",
        "count": 68
      },
      {
        "type": "A",
        "day": "02-23-2016",
        "count": 176
      },
      {
        "type": "A",
        "day": "02-24-2016",
        "count": 53
      },
      {
        "type": "A",
        "day": "02-25-2016",
        "count": 340
      },
      {
        "type": "B",
        "day": "02-11-2016",
        "count": 360
      },
      {
        "type": "B",
        "day": "02-12-2016",
        "count": 305
      },
      {
        "type": "B",
        "day": "02-13-2016",
        "count": 374
      },
      {
        "type": "B",
        "day": "02-14-2016",
        "count": 104
      },
      {
        "type": "B",
        "day": "02-15-2016",
        "count": 259
      },
      {
        "type": "B",
        "day": "02-16-2016",
        "count": 277
      },
      {
        "type": "B",
        "day": "02-17-2016",
        "count": 202
      },
      {
        "type": "B",
        "day": "02-18-2016",
        "count": 186
      },
      {
        "type": "B",
        "day": "02-19-2016",
        "count": 243
      },
      {
        "type": "B",
        "day": "02-20-2016",
        "count": 498
      },
      {
        "type": "B",
        "day": "02-21-2016",
        "count": 38
      },
      {
        "type": "B",
        "day": "02-22-2016",
        "count": 165
      },
      {
        "type": "B",
        "day": "02-23-2016",
        "count": 40
      },
      {
        "type": "B",
        "day": "02-24-2016",
        "count": 264
      },
      {
        "type": "B",
        "day": "02-25-2016",
        "count": 106
      },
      {
        "type": "C",
        "day": "02-11-2016",
        "count": 213
      },
      {
        "type": "C",
        "day": "02-12-2016",
        "count": 296
      },
      {
        "type": "C",
        "day": "02-13-2016",
        "count": 466
      },
      {
        "type": "C",
        "day": "02-14-2016",
        "count": 409
      },
      {
        "type": "C",
        "day": "02-15-2016",
        "count": 133
      },
      {
        "type": "C",
        "day": "02-16-2016",
        "count": 53
      },
      {
        "type": "C",
        "day": "02-17-2016",
        "count": 200
      },
      {
        "type": "C",
        "day": "02-18-2016",
        "count": 364
      },
      {
        "type": "C",
        "day": "02-19-2016",
        "count": 41
      },
      {
        "type": "C",
        "day": "02-20-2016",
        "count": 414
      },
      {
        "type": "C",
        "day": "02-21-2016",
        "count": 96
      },
      {
        "type": "C",
        "day": "02-22-2016",
        "count": 94
      },
      {
        "type": "C",
        "day": "02-23-2016",
        "count": 282
      },
      {
        "type": "C",
        "day": "02-24-2016",
        "count": 6
      },
      {
        "type": "C",
        "day": "02-25-2016",
        "count": 418
      }
    ],
    "lineGraphData3": [
      {
        "x": 20,
        "y": 180
      },
      {
        "x": 21,
        "y": 250
      },
      {
        "x": 22,
        "y": 150
      },
      {
        "x": 23,
        "y": 496
      },
      {
        "x": 24,
        "y": 140
      },
      {
        "x": 25,
        "y": 380
      },
      {
        "x": 26,
        "y": 100
      },
      {
        "x": 27,
        "y": 150
      },
      {
        "x": 28,
        "y": 400
      },
      {
        "x": 29,
        "y": 345
      },
      {
        "x": 30,
        "y": 80
      },
      {
        "x": 31,
        "y": 532
      },
      {
        "x": 33,
        "y": 471
      },
      {
        "x": 34,
        "y": 246
      },
      {
        "x": 35,
        "y": 199
      }
    ],
    "areaGraphData": [
      {
        "type": "A",
        "day": "02-11-2016",
        "count": 284
      },
      {
        "type": "A",
        "day": "02-12-2016",
        "count": 255
      },
      {
        "type": "A",
        "day": "02-13-2016",
        "count": 210
      },
      {
        "type": "A",
        "day": "02-14-2016",
        "count": 490
      },
      {
        "type": "A",
        "day": "02-15-2016",
        "count": 368
      },
      {
        "type": "A",
        "day": "02-16-2016",
        "count": 1
      },
      {
        "type": "A",
        "day": "02-17-2016",
        "count": 364
      },
      {
        "type": "A",
        "day": "02-18-2016",
        "count": 205
      },
      {
        "type": "A",
        "day": "02-19-2016",
        "count": 371
      },
      {
        "type": "A",
        "day": "02-20-2016",
        "count": 218
      },
      {
        "type": "A",
        "day": "02-21-2016",
        "count": 273
      },
      {
        "type": "A",
        "day": "02-22-2016",
        "count": 84
      },
      {
        "type": "A",
        "day": "02-23-2016",
        "count": 9
      },
      {
        "type": "A",
        "day": "02-24-2016",
        "count": 235
      },
      {
        "type": "A",
        "day": "02-25-2016",
        "count": 332
      }
    ],
    "areaGraphData2": [
      {
        "type": "A",
        "day": "02-11-2016",
        "count": 246
      },
      {
        "type": "A",
        "day": "02-12-2016",
        "count": 19
      },
      {
        "type": "A",
        "day": "02-13-2016",
        "count": 352
      },
      {
        "type": "A",
        "day": "02-14-2016",
        "count": 495
      },
      {
        "type": "A",
        "day": "02-15-2016",
        "count": 415
      },
      {
        "type": "A",
        "day": "02-16-2016",
        "count": 178
      },
      {
        "type": "A",
        "day": "02-17-2016",
        "count": 40
      },
      {
        "type": "A",
        "day": "02-18-2016",
        "count": 111
      },
      {
        "type": "A",
        "day": "02-19-2016",
        "count": 93
      },
      {
        "type": "A",
        "day": "02-20-2016",
        "count": 36
      },
      {
        "type": "A",
        "day": "02-21-2016",
        "count": 355
      },
      {
        "type": "A",
        "day": "02-22-2016",
        "count": 68
      },
      {
        "type": "A",
        "day": "02-23-2016",
        "count": 176
      },
      {
        "type": "A",
        "day": "02-24-2016",
        "count": 53
      },
      {
        "type": "A",
        "day": "02-25-2016",
        "count": 340
      },
      {
        "type": "B",
        "day": "02-11-2016",
        "count": 360
      },
      {
        "type": "B",
        "day": "02-12-2016",
        "count": 305
      },
      {
        "type": "B",
        "day": "02-13-2016",
        "count": 374
      },
      {
        "type": "B",
        "day": "02-14-2016",
        "count": 104
      },
      {
        "type": "B",
        "day": "02-15-2016",
        "count": 259
      },
      {
        "type": "B",
        "day": "02-16-2016",
        "count": 277
      },
      {
        "type": "B",
        "day": "02-17-2016",
        "count": 202
      },
      {
        "type": "B",
        "day": "02-18-2016",
        "count": 186
      },
      {
        "type": "B",
        "day": "02-19-2016",
        "count": 243
      },
      {
        "type": "B",
        "day": "02-20-2016",
        "count": 498
      },
      {
        "type": "B",
        "day": "02-21-2016",
        "count": 38
      },
      {
        "type": "B",
        "day": "02-22-2016",
        "count": 165
      },
      {
        "type": "B",
        "day": "02-23-2016",
        "count": 40
      },
      {
        "type": "B",
        "day": "02-24-2016",
        "count": 264
      },
      {
        "type": "B",
        "day": "02-25-2016",
        "count": 106
      },
      {
        "type": "C",
        "day": "02-11-2016",
        "count": 213
      },
      {
        "type": "C",
        "day": "02-12-2016",
        "count": 296
      },
      {
        "type": "C",
        "day": "02-13-2016",
        "count": 466
      },
      {
        "type": "C",
        "day": "02-14-2016",
        "count": 409
      },
      {
        "type": "C",
        "day": "02-15-2016",
        "count": 133
      },
      {
        "type": "C",
        "day": "02-16-2016",
        "count": 53
      },
      {
        "type": "C",
        "day": "02-17-2016",
        "count": 200
      },
      {
        "type": "C",
        "day": "02-18-2016",
        "count": 364
      },
      {
        "type": "C",
        "day": "02-19-2016",
        "count": 41
      },
      {
        "type": "C",
        "day": "02-20-2016",
        "count": 414
      },
      {
        "type": "C",
        "day": "02-21-2016",
        "count": 96
      },
      {
        "type": "C",
        "day": "02-22-2016",
        "count": 94
      },
      {
        "type": "C",
        "day": "02-23-2016",
        "count": 282
      },
      {
        "type": "C",
        "day": "02-24-2016",
        "count": 6
      },
      {
        "type": "C",
        "day": "02-25-2016",
        "count": 418
      }
    ],
    "scatterPlotData": [
      {
        "type": "A",
        "day": "02-11-2016",
        "count": 310
      },
      {
        "type": "A",
        "day": "02-12-2016",
        "count": 136
      },
      {
        "type": "A",
        "day": "02-13-2016",
        "count": 153
      },
      {
        "type": "A",
        "day": "02-14-2016",
        "count": 441
      },
      {
        "type": "A",
        "day": "02-15-2016",
        "count": 468
      },
      {
        "type": "A",
        "day": "02-16-2016",
        "count": 438
      },
      {
        "type": "A",
        "day": "02-17-2016",
        "count": 381
      },
      {
        "type": "A",
        "day": "02-18-2016",
        "count": 376
      },
      {
        "type": "A",
        "day": "02-19-2016",
        "count": 261
      },
      {
        "type": "A",
        "day": "02-20-2016",
        "count": 491
      },
      {
        "type": "A",
        "day": "02-21-2016",
        "count": 465
      },
      {
        "type": "A",
        "day": "02-22-2016",
        "count": 312
      },
      {
        "type": "A",
        "day": "02-23-2016",
        "count": 223
      },
      {
        "type": "A",
        "day": "02-24-2016",
        "count": 469
      },
      {
        "type": "A",
        "day": "02-25-2016",
        "count": 168
      },
      {
        "type": "B",
        "day": "02-11-2016",
        "count": 466
      },
      {
        "type": "B",
        "day": "02-12-2016",
        "count": 124
      },
      {
        "type": "B",
        "day": "02-13-2016",
        "count": 322
      },
      {
        "type": "B",
        "day": "02-14-2016",
        "count": 157
      },
      {
        "type": "B",
        "day": "02-15-2016",
        "count": 159
      },
      {
        "type": "B",
        "day": "02-16-2016",
        "count": 150
      },
      {
        "type": "B",
        "day": "02-17-2016",
        "count": 147
      },
      {
        "type": "B",
        "day": "02-18-2016",
        "count": 356
      },
      {
        "type": "B",
        "day": "02-19-2016",
        "count": 442
      },
      {
        "type": "B",
        "day": "02-20-2016",
        "count": 133
      },
      {
        "type": "B",
        "day": "02-21-2016",
        "count": 177
      },
      {
        "type": "B",
        "day": "02-22-2016",
        "count": 35
      },
      {
        "type": "B",
        "day": "02-23-2016",
        "count": 88
      },
      {
        "type": "B",
        "day": "02-24-2016",
        "count": 121
      },
      {
        "type": "B",
        "day": "02-25-2016",
        "count": 468
      },
      {
        "type": "C",
        "day": "02-11-2016",
        "count": 329
      },
      {
        "type": "C",
        "day": "02-12-2016",
        "count": 475
      },
      {
        "type": "C",
        "day": "02-13-2016",
        "count": 25
      },
      {
        "type": "C",
        "day": "02-14-2016",
        "count": 307
      },
      {
        "type": "C",
        "day": "02-15-2016",
        "count": 340
      },
      {
        "type": "C",
        "day": "02-16-2016",
        "count": 145
      },
      {
        "type": "C",
        "day": "02-17-2016",
        "count": 293
      },
      {
        "type": "C",
        "day": "02-18-2016",
        "count": 342
      },
      {
        "type": "C",
        "day": "02-19-2016",
        "count": 80
      },
      {
        "type": "C",
        "day": "02-20-2016",
        "count": 3
      },
      {
        "type": "C",
        "day": "02-21-2016",
        "count": 458
      },
      {
        "type": "C",
        "day": "02-22-2016",
        "count": 280
      },
      {
        "type": "C",
        "day": "02-23-2016",
        "count": 483
      },
      {
        "type": "C",
        "day": "02-24-2016",
        "count": 288
      },
      {
        "type": "C",
        "day": "02-25-2016",
        "count": 466
      }
    ],
    "scatterPlotData2": [
      {
        "type": "A",
        "x": 92,
        "y": 310
      },
      {
        "type": "A",
        "x": 39,
        "y": 136
      },
      {
        "type": "A",
        "x": 498,
        "y": 153
      },
      {
        "type": "A",
        "x": 165,
        "y": 441
      },
      {
        "type": "A",
        "x": 284,
        "y": 468
      },
      {
        "type": "A",
        "x": 215,
        "y": 438
      },
      {
        "type": "A",
        "x": 124,
        "y": 381
      },
      {
        "type": "A",
        "x": 2,
        "y": 376
      },
      {
        "type": "A",
        "x": 358,
        "y": 261
      },
      {
        "type": "A",
        "x": 458,
        "y": 491
      },
      {
        "type": "A",
        "x": 181,
        "y": 465
      },
      {
        "type": "A",
        "x": 450,
        "y": 312
      },
      {
        "type": "A",
        "x": 170,
        "y": 223
      },
      {
        "type": "A",
        "x": 322,
        "y": 469
      },
      {
        "type": "A",
        "x": 5,
        "y": 168
      },
      {
        "type": "B",
        "x": 147,
        "y": 466
      },
      {
        "type": "B",
        "x": 164,
        "y": 124
      },
      {
        "type": "B",
        "x": 404,
        "y": 322
      },
      {
        "type": "B",
        "x": 158,
        "y": 157
      },
      {
        "type": "B",
        "x": 258,
        "y": 159
      },
      {
        "type": "B",
        "x": 313,
        "y": 150
      },
      {
        "type": "B",
        "x": 396,
        "y": 147
      },
      {
        "type": "B",
        "x": 220,
        "y": 356
      },
      {
        "type": "B",
        "x": 269,
        "y": 442
      },
      {
        "type": "B",
        "x": 451,
        "y": 133
      },
      {
        "type": "B",
        "x": 95,
        "y": 177
      },
      {
        "type": "B",
        "x": 444,
        "y": 35
      },
      {
        "type": "B",
        "x": 239,
        "y": 88
      },
      {
        "type": "B",
        "x": 463,
        "y": 121
      },
      {
        "type": "B",
        "x": 470,
        "y": 468
      },
      {
        "type": "C",
        "x": 389,
        "y": 329
      },
      {
        "type": "C",
        "x": 400,
        "y": 475
      },
      {
        "type": "C",
        "x": 80,
        "y": 25
      },
      {
        "type": "C",
        "x": 388,
        "y": 307
      },
      {
        "type": "C",
        "x": 96,
        "y": 340
      },
      {
        "type": "C",
        "x": 383,
        "y": 145
      },
      {
        "type": "C",
        "x": 98,
        "y": 293
      },
      {
        "type": "C",
        "x": 468,
        "y": 342
      },
      {
        "type": "C",
        "x": 402,
        "y": 80
      },
      {
        "type": "C",
        "x": 147,
        "y": 3
      },
      {
        "type": "C",
        "x": 432,
        "y": 458
      },
      {
        "type": "C",
        "x": 175,
        "y": 280
      },
      {
        "type": "C",
        "x": 304,
        "y": 483
      },
      {
        "type": "C",
        "x": 315,
        "y": 288
      },
      {
        "type": "C",
        "x": 329,
        "y": 466
      }
    ],
    "barGraphTestData": [
      {
        "month": "Jan",
        "new": 0,
        "old": 50,
        "third": 161,
        "four": 14
      },
      {
        "month": "Feb",
        "new": 181,
        "old": 24,
        "third": 156,
        "four": 59
      },
      {
        "month": "Mar",
        "new": 184,
        "old": 153,
        "third": 177,
        "four": 121
      },
      {
        "month": "Apr",
        "new": 21,
        "old": 180,
        "third": 125,
        "four": 150
      },
      {
        "month": "May",
        "new": 142,
        "old": 1,
        "third": 114,
        "four": 142
      },
      {
        "month": "Jun",
        "new": 171,
        "old": 17,
        "third": 116,
        "four": 153
      },
      {
        "month": "Jul",
        "new": 186,
        "old": 135,
        "third": 120,
        "four": 164
      }
    ],
    "pieTestData": [
      158,
      93,
      20,
      120,
      187,
      45
    ]
  },
  "recentPosts": [
    {
      "postid": 4294,
      "date": "07/11/2016",
      "time": "9:01 AM",
      "category": "Cars"
    },
    {
      "postid": 4293,
      "date": "07/11/2016",
      "time": "9:02 AM",
      "category": "Cars"
    },
    {
      "postid": 4292,
      "date": "07/11/2016",
      "time": "9:06 AM",
      "category": "Cars"
    },
    {
      "postid": 4291,
      "date": "07/11/2016",
      "time": "9:07 AM",
      "category": "Cars"
    },
    {
      "postid": 4290,
      "date": "07/11/2016",
      "time": "9:17 AM",
      "category": "Cars"
    },
    {
      "postid": 4289,
      "date": "07/11/2016",
      "time": "9:52 AM",
      "category": "Cars"
    },
    {
      "postid": 4288,
      "date": "07/11/2016",
      "time": "10:24 AM",
      "category": "Cars"
    },
    {
      "postid": 4287,
      "date": "07/11/2016",
      "time": "10:27 AM",
      "category": "Cars"
    },
    {
      "postid": 4286,
      "date": "07/11/2016",
      "time": "10:41 AM",
      "category": "Cars"
    },
    {
      "postid": 918,
      "date": "07/11/2016",
      "time": "9:29 AM",
      "category": "Auto"
    },
    {
      "postid": 917,
      "date": "07/11/2016",
      "time": "9:40 AM",
      "category": "Auto"
    },
    {
      "postid": 916,
      "date": "07/11/2016",
      "time": "9:51 AM",
      "category": "Auto"
    },
    {
      "postid": 915,
      "date": "07/11/2016",
      "time": "9:59 AM",
      "category": "Auto"
    },
    {
      "postid": 914,
      "date": "07/11/2016",
      "time": "10:17 AM",
      "category": "Auto"
    },
    {
      "postid": 913,
      "date": "07/11/2016",
      "time": "10:23 AM",
      "category": "Auto"
    },
    {
      "postid": 912,
      "date": "07/11/2016",
      "time": "10:28 AM",
      "category": "Auto"
    },
    {
      "postid": 911,
      "date": "07/11/2016",
      "time": "10:44 AM",
      "category": "Auto"
    },
    {
      "postid": 910,
      "date": "07/11/2016",
      "time": "10:46 AM",
      "category": "Auto"
    },
    {
      "postid": 3320,
      "date": "07/11/2016",
      "time": "9:18 AM",
      "category": "Trucks"
    },
    {
      "postid": 3319,
      "date": "07/11/2016",
      "time": "9:34 AM",
      "category": "Trucks"
    },
    {
      "postid": 3318,
      "date": "07/11/2016",
      "time": "9:35 AM",
      "category": "Trucks"
    },
    {
      "postid": 3317,
      "date": "07/11/2016",
      "time": "10:01 AM",
      "category": "Trucks"
    },
    {
      "postid": 3316,
      "date": "07/11/2016",
      "time": "10:02 AM",
      "category": "Trucks"
    },
    {
      "postid": 3315,
      "date": "07/11/2016",
      "time": "10:06 AM",
      "category": "Trucks"
    },
    {
      "postid": 3314,
      "date": "07/11/2016",
      "time": "10:19 AM",
      "category": "Trucks"
    },
    {
      "postid": 3313,
      "date": "07/11/2016",
      "time": "10:32 AM",
      "category": "Trucks"
    },
    {
      "postid": 3312,
      "date": "07/11/2016",
      "time": "10:39 AM",
      "category": "Trucks"
    },
    {
      "postid": 513,
      "date": "07/11/2016",
      "time": "9:06 AM",
      "category": "Advice"
    },
    {
      "postid": 512,
      "date": "07/11/2016",
      "time": "9:45 AM",
      "category": "Advice"
    },
    {
      "postid": 511,
      "date": "07/11/2016",
      "time": "9:47 AM",
      "category": "Advice"
    },
    {
      "postid": 510,
      "date": "07/11/2016",
      "time": "9:49 AM",
      "category": "Advice"
    },
    {
      "postid": 509,
      "date": "07/11/2016",
      "time": "10:08 AM",
      "category": "Advice"
    },
    {
      "postid": 508,
      "date": "07/11/2016",
      "time": "10:13 AM",
      "category": "Advice"
    },
    {
      "postid": 507,
      "date": "07/11/2016",
      "time": "10:15 AM",
      "category": "Advice"
    },
    {
      "postid": 506,
      "date": "07/11/2016",
      "time": "10:26 AM",
      "category": "Advice"
    },
    {
      "postid": 505,
      "date": "07/11/2016",
      "time": "10:40 AM",
      "category": "Advice"
    }
  ],
  "vehicles": [
    {
      "id": 0,
      "Make": "Ford",
      "Model": "Taurus",
      "Year": "2016",
      "Price": "$27,110"
    },
    {
      "id": 1,
      "Make": "Acura",
      "Model": "RDX",
      "Year": "2008",
      "Price": "$17,998"
    },
    {
      "id": 2,
      "Make": "Cadillac",
      "Model": "CTS",
      "Year": "2009",
      "Price": "$17,599"
    },
    {
      "id": 3,
      "Make": "BMW",
      "Model": "335 XI",
      "Year": "2011",
      "Price": "$22,998"
    },
    {
      "id": 4,
      "Make": "Buick",
      "Model": "LaCrosse",
      "Year": "2012",
      "Price": "$16,998"
    },
    {
      "id": 5,
      "Make": "Audi",
      "Model": "Q7 Premium",
      "Year": "2011",
      "Price": "$29,998"
    },
    {
      "id": 6,
      "Make": "Chevrolet",
      "Model": "HHR LT",
      "Year": "2006",
      "Price": "$8,998"
    },
    {
      "id": 7,
      "Make": "Dodge",
      "Model": "Dart Gt",
      "Year": "2014",
      "Price": "$16,998"
    },
    {
      "id": 8,
      "Make": "Dodge",
      "Model": "Durango SXT",
      "Year": "2014",
      "Price": "$24,998"
    },
    {
      "id": 9,
      "Make": "Fiat",
      "Model": "500 Abarth",
      "Year": "2013",
      "Price": "$13,998"
    },
    {
      "id": 10,
      "Make": "GMC",
      "Model": "Terrain SLE",
      "Year": "2013",
      "Price": "$18,998"
    },
    {
      "id": 11,
      "Make": "Hyundai",
      "Model": "Sonata SE",
      "Year": "2013",
      "Price": "$16,998"
    },
    {
      "id": 12,
      "Make": "Hyundai",
      "Model": "Sonata Sport",
      "Year": "2014",
      "Price": "$20,599"
    },
    {
      "id": 13,
      "Make": "Infiniti",
      "Model": "JX35",
      "Year": "2013",
      "Price": "$30,998"
    },
    {
      "id": 14,
      "Make": "Jeep",
      "Model": "Compass Latitude",
      "Year": "2014",
      "Price": "$17,998"
    }
  ]
};
