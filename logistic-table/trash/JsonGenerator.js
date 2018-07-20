var obj = [
    '{{repeat(3, 5)}}',
    {
      
      _id: '{{objectId()}}',
      bodyType: '{{random("covered", "open", "tank", "pasanger")}}',
      status: 'active',
      dates : {
        dateCreate: '{{date(new Date(2018, 0, 1), new Date()).getTime()}}',
        dateRepeat: '{{date(new Date(2018, 0, 1), new Date()).getTime()}}',
        dateRepeatAvailable: '{{date(new Date(2018, 0, 1), new Date()).getTime()}}',
        dateEdit: '{{date(new Date(2018, 0, 1), new Date()).getTime()}}',
        dateFrom: '{{date(new Date(2018, 0, 1), new Date()).getTime()}}',
        dateTo: '{{date(new Date(2018, 0, 1), new Date()).getTime()}}'
      },
      loadTypes: [
        '{{random("side", null)}}',
        '{{random("up", null)}}',
        '{{random("back", null)}}'
      ],
      cargoName: '{{lorem(1, "words")}}',
      cargoInfo: {
        cargoMass1: '{{floating(0.0, 30, "0.0")}}',
        cargoMass2: '{{floating(0.0, 30, "0.0")}}',
        cargoVolume1: '{{floating(0.0, 30, "0.0")}}',
        cargoVolume2: '{{floating(0.0, 30, "0.0")}}',
        cargoLength: '{{floating(0.0, 30, "0.0")}}',
        cargoWidth: '{{floating(0.0, 30, "0.0")}}',
        cargoHeight: '{{floating(0.0, 30, "0.0")}}',
        tempRegime: '{{random(true, false)}}',
        tempRegime1: '{{floating(-40.0, 100.0, "0.0")}}',
        tempRegime2: '{{floating(-40.0, 100.0, "0.0")}}'
      },
      pointFrom: [
        '{{repeat(1, 4)}}',
        {
          countrySign: "{{country(true)}}",
          townName: '{{city()}}',
          areaName: '{{state()}}',
          countryName: '{{country()}}',
          lon: 0,
          lat: 0
        }
      ],
      pointTo: [
        '{{repeat(1, 3)}}',
        {
          countrySign: "{{country(true)}}",
          townName: '{{city()}}',
          areaName: '{{state()}}',
          countryName: '{{country()}}',
          lon: 0,
          lat: 0
        }
      ],
      payment: {
        paymentStavka: '{{integer(0, 9999)}}',
        paymentCurrency: '{{random("$", "uan")}}',
        paymentUnit: '{{random("km", "mil")}}',
        paymentForm: '{{random("cash", "debit")}}',
        paymentVat: '{{random(true, false)}}',
        paymentPrepay: '{{integer(0, 100)}}',
        paymentMoment: '{{random("on arrival", "at depatrure")}}',
        paymentDelay: '{{integer(0, 100)}}'
      },
      premisions: {
        adr: '{{integer(0, 10)}}',
        cmr: '{{random(true, false)}}',
        t1: '{{random(true, false)}}',
        tir: '{{random(true, false)}}',
        medBook: '{{random(true, false)}}'
      },
      proposalUser: {
        contactId: '{{random(0, integer(1000, 9999))}}',
        name: '{{company()}}',
        face: '{{firstName()}}',
        phones: [
         '{{repeat(1, 3)}}',
         '+380{{phone("(xx)xxx-xxxx")}}'
        ]
      },
    
      
      
      index: '{{index()}}',
      guid: '{{guid()}}',
      isActive: '{{bool()}}',
      balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      picture: 'http://placehold.it/32x32',
      age: '{{integer(20, 40)}}',
      eyeColor: '{{random("blue", "brown", "green")}}',
      name: '{{firstName()}} {{surname()}}',
      gender: '{{gender()}}',
      company: '{{company().toUpperCase()}}',
      email: '{{email()}}',
      phone: '+1 {{phone()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      about: '{{lorem(1, "paragraphs")}}',
      registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      latitude: '{{floating(-90.000001, 90)}}',
      longitude: '{{floating(-180.000001, 180)}}',
      tags: [
        '{{repeat(7)}}',
        '{{lorem(1, "words")}}'
      ],
      friends: [
        '{{repeat(3)}}',
        {
          id: '{{index()}}',
          name: '{{firstName()}} {{surname()}}'
        }
      ],
      greeting: function (tags) {
        return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
      },
      favoriteFruit: function (tags) {
        var fruits = ['apple', 'banana', 'strawberry'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  ]