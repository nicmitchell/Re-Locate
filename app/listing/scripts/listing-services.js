angular.module('listing.services', [])

.factory('Listings', function ($http) {
  // Your code here
  var getListings = function(){ 
    // return $http({
    //   method: 'GET',
    //   url: '/api/links'
    // })
    // .then(function(res){
    //   return res.data;
    // });
    return [{
      "SiteDescription": "PARTIALLY FENCED,CUL DE SAC",
      "Acreage": "LESS THAN 1 ACRE",
      "BuyerBrokerFee": "3",
      "ConfirmedSpcAssessment": "NONE",
      "DisplayAddressListing": "",
      "HighSchool": "DOUGLAS BYRD SENIOR HIGH",
      "Style": "Ranch",
      "Bedrooms": "3",
      "Age": "1995",
      "StateOrProvince": "NC",
      "LotNumber": "163",
      "ListingBoardID": "3268",
      "Condition": "Excellent",
      "TypeHeat": "HEAT PUMP",
      "StreetName": "LIVELY COURT",
      "Possession": "AT CLOSING",
      "VirtualTourYN": "Yes",
      "ShortSaleYN": "No",
      "PostalCode": "28306",
      "Appliance": "RANGE,DISHWASHER,DISPOSAL,REFRIGERATOR,W / D HOOKUPS",
      "DueDiligencePeriod": "",
      "ListingID": "327825",
      "ContingencyStatus": "",
      "PhotoModificationTimestamp": "2009-05-09T14:01:07",
      "Zoning": "",
      "Units": "",
      "PhotoCount": "1",
      "MiddleSchool": "DOUGLAS BYRD MIDDLE SCHOOL",
      "VirtualTourURL": "",
      "SqFtRange": "1501 TO 1600",
      "InteriorFeatures": "SMOKE ALARM(S),CEILING FAN(S),BLINDS,CATHEDRAL/VAULT CEILINGS",
      "Includes": "NONE",
      "ListingAgentID": "61",
      "DeedBookNumber": "",
      "ClosePrice": "",
      "DateChange": "2013-10-28",
      "Fireplace": "Prefab",
      "PlatBookPage": "148",
      "DiningRoom": "FORMAL,BREAKFAST AREA",
      "DeedPage": "",
      "DisplayFlagListing": "Yes",
      "OccupancyDescription": "",
      "PublicRemarks": "-Lovely ranch w/double driveway & single garage.  covered front porch & back patio. Formal dining, breakfast area, fireplace in living room. Master bedroom has vaulted ceiling & walk-in closet.Tenant occupied - appointment only.",
      "ProposedAssessments": "NONE",
      "County": "Cumberland",
      "ListingStatus": "Active",
      "OfficeIDX": "Yes",
      "WoodedAcres": "",
      "TaxID": "0405733521",
      "Rooms": "6",
      "City": "Fayetteville",
      "ListingFirmID": "114",
      "AgentStatus": "- Active",
      "Floors": "CARPET,VINYL",
      "PropertyConstructionMaterial": "Brick Veneer",
      "Gas": "None",
      "OfficeStatus": "- Active",
      "BathsTotal": "2",
      "DaysOnMarketContinuous": "",
      "OwnerName": "NEIL MAXWELL",
      "ListingOfficeID": "0",
      "PropertyType": "Residential",
      "HomeWarrantyAmount": "420",
      "Misc": "GREAT ROOM,WALK-IN CLOSET(S)",
      "ModificationTimestamp": "2013-10-29T00:20:39",
      "Garage": "Single Garage",
      "Sewer": "Public Works",
      "ListPrice": "129950",
      "Electric": "Public Works",
      "AgentIDX": "Yes",
      "Water": "Public Works",
      "AddressSubdivisionName": "MEADOWBROOK",
      "BlogYN": "",
      "StreetNumber": "5915",
      "PrivateRemarks": "-Directions: Off Raeford Road, left onto Bingham Drive, Bingham Dr becomes NC-162 E/George Owen Rd, right onto Rosemeade Dr, right onto Lively Ct.",
      "Area": "",
      "HalfBaths": "0",
      "ListingOfficeUID": "32681140",
      "IDX": "",
      "ListingAgentUID": "3268114061",
      "CloseDate": "",
      "ListDate": "2009-04-29",
      "ElementarySchool": "CUMBERLAND MILLS ELEMENTARY",
      "HomeWarrantyYN": "Yes",
      "RentFee": "",
      "PlatBook": "6381",
      "Miscellaneous": "SLAB FOUNDATION,PATIO(S)",
      "FinancialTerms": "ALL NEW LOANS CONSIDERED",
      "ListOfficeAffiliation": "",
      "Foreclosure": ""
    },
    {
      "SiteDescription": "REAR FENCING",
      "Acreage": "LESS THAN 1 ACRE",
      "BuyerBrokerFee": "3",
      "ConfirmedSpcAssessment": "NONE",
      "DisplayAddressListing": "No",
      "HighSchool": "E. E. SMITH HIGH",
      "Style": "Ranch",
      "Bedrooms": "3",
      "Age": "1982",
      "StateOrProvince": "NC",
      "LotNumber": "399",
      "ListingBoardID": "3268",
      "Condition": "Excellent",
      "TypeHeat": "OTHER",
      "StreetName": "RUBY ROAD",
      "Possession": "IMMEDIATE",
      "VirtualTourYN": "",
      "ShortSaleYN": "No",
      "PostalCode": "28311",
      "Appliance": "RANGE,REFRIGERATOR,W / D HOOKUPS",
      "DueDiligencePeriod": "",
      "ListingID": "340758",
      "ContingencyStatus": "",
      "PhotoModificationTimestamp": "2014-01-06T20:24:11",
      "Zoning": "Planned Neighborhood",
      "Units": "",
      "PhotoCount": "6",
      "MiddleSchool": "SPRING LAKE MIDDLE SCHOOL",
      "VirtualTourURL": "",
      "SqFtRange": "1101 TO 1200",
      "InteriorFeatures": "CEILING FAN(S)",
      "Includes": "NONE",
      "ListingAgentID": "2",
      "DeedBookNumber": "4508",
      "ClosePrice": "",
      "DateChange": "2014-09-16",
      "Fireplace": "None",
      "PlatBookPage": "0045",
      "DiningRoom": "KITCHEN/COMBO",
      "DeedPage": "398",
      "DisplayFlagListing": "Yes",
      "OccupancyDescription": "",
      "PublicRemarks": "REDUCED,REDUCED,REDUCED!! AS IS -Great for Investors !!New interior paint and carpet, exterior powered washed.New garage door w/opener.Ceiling fans in every room, fenced backyard (no back neighbors).",
      "ProposedAssessments": "NONE",
      "County": "Cumberland",
      "ListingStatus": "Active",
      "OfficeIDX": "Yes",
      "WoodedAcres": "",
      "TaxID": "0520620050",
      "Rooms": "5",
      "City": "Fayetteville",
      "ListingFirmID": "749",
      "AgentStatus": "- Active",
      "Floors": "CARPET,TILE,VINYL",
      "PropertyConstructionMaterial": "Brick Veneer",
      "Gas": "Piedmont Natural Gas",
      "OfficeStatus": "- Active",
      "BathsTotal": "1",
      "DaysOnMarketContinuous": "",
      "OwnerName": "PURCELL",
      "ListingOfficeID": "0",
      "PropertyType": "Residential",
      "HomeWarrantyAmount": "",
      "Misc": "DEN/FAMILY ROOM,STORM DOOR(S)",
      "ModificationTimestamp": "2014-09-16T17:56:11",
      "Garage": "Single Garage",
      "Sewer": "Public Works",
      "ListPrice": "55000",
      "Electric": "Public Works",
      "AgentIDX": "Yes",
      "Water": "Public Works",
      "AddressSubdivisionName": "TIFFANY PIN",
      "BlogYN": "No",
      "StreetNumber": "4523",
      "PrivateRemarks": "-Please call Melody for combo 910-527-0101",
      "Area": "",
      "HalfBaths": "1",
      "ListingOfficeUID": "32687490",
      "IDX": "",
      "ListingAgentUID": "326874902",
      "CloseDate": "",
      "ListDate": "2010-02-01",
      "ElementarySchool": "COLLEGE LAKES ELEMENTARY",
      "HomeWarrantyYN": "No",
      "RentFee": "",
      "PlatBook": "0049",
      "Miscellaneous": "CRAWLSPACE",
      "FinancialTerms": "ALL NEW LOANS CONSIDERED",
      "ListOfficeAffiliation": "",
      "Foreclosure": ""
    },
    {
      "SiteDescription": "CUL DE SAC",
      "Acreage": "1-2 ACRES",
      "BuyerBrokerFee": "3",
      "ConfirmedSpcAssessment": "NONE",
      "DisplayAddressListing": "No",
      "HighSchool": "GRAYS CREEK SENIOR HIGH",
      "Style": "Two Story",
      "Bedrooms": "4",
      "Age": "2010",
      "StateOrProvince": "NC",
      "LotNumber": "14",
      "ListingBoardID": "3268",
      "Condition": "New",
      "TypeHeat": "TWO-ZONE,HEAT PUMP,CENTRAL ELECTRIC A/C",
      "StreetName": "COLEPARK DRIVE",
      "Possession": "AT CLOSING",
      "VirtualTourYN": "No",
      "ShortSaleYN": "No",
      "PostalCode": "28348",
      "Appliance": "RANGE,DISHWASHER,DISPOSAL,MICROWAVE,W / D HOOKUPS",
      "DueDiligencePeriod": "",
      "ListingID": "341177",
      "ContingencyStatus": "",
      "PhotoModificationTimestamp": "2011-01-06T14:12:03",
      "Zoning": "Residential District",
      "Units": "",
      "PhotoCount": "1",
      "MiddleSchool": "GRAYS CREEK MIDDLE SCHOOL",
      "VirtualTourURL": "",
      "SqFtRange": "2001 TO 2200",
      "InteriorFeatures": "SECURITY SYSTEM,SMOKE ALARM(S),CEILING FAN(S),GARDEN TUB,GAS LOGS,CATHEDRAL/VAULT CEILINGS,SEPARATE SHOWER",
      "Includes": "Bonus Room",
      "ListingAgentID": "53",
      "DeedBookNumber": "7447",
      "ClosePrice": "",
      "DateChange": "2011-11-07",
      "Fireplace": "Prefab",
      "PlatBookPage": "169",
      "DiningRoom": "FORMAL,BREAKFAST AREA",
      "DeedPage": "514",
      "DisplayFlagListing": "Yes",
      "OccupancyDescription": "",
      "PublicRemarks": "GRAYS CREEK SCHOOLS.COLE PARK 1 Acre Lot.Build the home of your dreams.Home pictured is a suggested floor plan.Owner/contractor will build to suit.Minutes to Hope Mills, shopping, recreation and I-95.(Lot alone may be purchased for $33,000)",
      "ProposedAssessments": "NONE",
      "County": "Cumberland",
      "ListingStatus": "Active",
      "OfficeIDX": "Yes",
      "WoodedAcres": "",
      "TaxID": "0421997317",
      "Rooms": "7",
      "City": "Hope Mills",
      "ListingFirmID": "146",
      "AgentStatus": "- Active",
      "Floors": "CARPET,WOOD,CERAMIC",
      "PropertyConstructionMaterial": "Brick Veneer and Siding",
      "Gas": "Propane",
      "OfficeStatus": "- Active",
      "BathsTotal": "2",
      "DaysOnMarketContinuous": "",
      "OwnerName": "DRL ENTERPRISES, INC.",
      "ListingOfficeID": "0",
      "PropertyType": "New Construction",
      "HomeWarrantyAmount": "",
      "Misc": "GREAT ROOM,MBR DOWNSTAIRS,WALK-IN CLOSET(S),GRANITE COUNTERTOP",
      "ModificationTimestamp": "2014-06-13T20:14:01",
      "Garage": "Double Garage",
      "Sewer": "Septic Tank",
      "ListPrice": "223000",
      "Electric": "South River Electric",
      "AgentIDX": "Yes",
      "Water": "Well",
      "AddressSubdivisionName": "COLE PARK",
      "BlogYN": "No",
      "StreetNumber": "6570",
      "PrivateRemarks": "Directions: Hope Mills Rd. to Chicken Foot Rd, left on H. Bullard Rd, right on Cole Park Dr.// Construction has not begun.Contractor would prefer to customize the home for the buyer.Price based on suggested plan.//(Lot alone may be purchased for $33,000).",
      "Area": "",
      "HalfBaths": "1",
      "ListingOfficeUID": "32681460",
      "IDX": "",
      "ListingAgentUID": "3268146053",
      "CloseDate": "",
      "ListDate": "2010-02-10",
      "ElementarySchool": "GALLBERRY FARMS ELEMENTARY",
      "HomeWarrantyYN": "",
      "RentFee": "",
      "PlatBook": "115",
      "Miscellaneous": "CRAWLSPACE,FOYER,PATIO(S),FINISHED BONUS ROOM",
      "FinancialTerms": "ALL NEW LOANS CONSIDERED",
      "ListOfficeAffiliation": "",
      "Foreclosure": ""
    },
    {
      "SiteDescription": "WATERFRONT PROPERTY",
      "Acreage": "LESS THAN 1 ACRE",
      "BuyerBrokerFee": "3",
      "ConfirmedSpcAssessment": "NONE",
      "DisplayAddressListing": "No",
      "HighSchool": "WESTOVER SENIOR HIGH",
      "Style": "Condo",
      "Bedrooms": "2",
      "Age": "1984",
      "StateOrProvince": "NC",
      "LotNumber": "",
      "ListingBoardID": "3268",
      "Condition": "Excellent",
      "TypeHeat": "CENTRAL ELECTRIC A/C",
      "StreetName": "WILLOWBROOK DRIVE",
      "Possession": "AT CLOSING",
      "VirtualTourYN": "",
      "ShortSaleYN": "No",
      "PostalCode": "28303",
      "Appliance": "RANGE,DISHWASHER,DISPOSAL,REFRIGERATOR,WASHER,DRYER,MICROWAVE",
      "DueDiligencePeriod": "",
      "ListingID": "351165",
      "ContingencyStatus": "",
      "PhotoModificationTimestamp": "2013-08-16T13:24:48",
      "Zoning": "",
      "Units": "",
      "PhotoCount": "1",
      "MiddleSchool": "WESTOVER MIDDLE SCHOOL",
      "VirtualTourURL": "",
      "SqFtRange": "901  TO 1000",
      "InteriorFeatures": "CEILING FAN(S),BLINDS,JETTED TUB",
      "Includes": "NONE",
      "ListingAgentID": "4",
      "DeedBookNumber": "5627",
      "ClosePrice": "",
      "DateChange": "2011-02-02",
      "Fireplace": "Prefab",
      "PlatBookPage": "36",
      "DiningRoom": "",
      "DeedPage": "521",
      "DisplayFlagListing": "Yes",
      "OccupancyDescription": "",
      "PublicRemarks": "THIS IS AN INVESTORS DREAM! BELOW APPRAISED VALUE! THIS IS A MUST HAVE, TENANTS ALREADY OCCUPIED!",
      "ProposedAssessments": "NONE",
      "County": "Cumberland",
      "ListingStatus": "Active",
      "OfficeIDX": "Yes",
      "WoodedAcres": "",
      "TaxID": "9498516969205",
      "Rooms": "4",
      "City": "Fayetteville",
      "ListingFirmID": "1092",
      "AgentStatus": "- Active",
      "Floors": "CARPET,HARDWOOD,VINYL",
      "PropertyConstructionMaterial": "Frame",
      "Gas": "None",
      "OfficeStatus": "- Active",
      "BathsTotal": "2",
      "DaysOnMarketContinuous": "",
      "OwnerName": "FIELDS",
      "ListingOfficeID": "0",
      "PropertyType": "Residential",
      "HomeWarrantyAmount": "",
      "Misc": "WALK-IN CLOSET(S)",
      "ModificationTimestamp": "2014-03-27T20:46:43",
      "Garage": "None",
      "Sewer": "Public Works",
      "ListPrice": "38000",
      "Electric": "Progress Energy",
      "AgentIDX": "Yes",
      "Water": "Public Works",
      "AddressSubdivisionName": "STEWARTS CK",
      "BlogYN": "No",
      "StreetNumber": "6736-5",
      "PrivateRemarks": "CLIFFDALE TO REILLY RD, LEFT INTO STEWARTS CREEK.",
      "Area": "",
      "HalfBaths": "0",
      "ListingOfficeUID": "326810920",
      "IDX": "",
      "ListingAgentUID": "3268109204",
      "CloseDate": "",
      "ListDate": "2010-08-11",
      "ElementarySchool": "CLIFFDALE ELEMENTARY",
      "HomeWarrantyYN": "",
      "RentFee": "",
      "PlatBook": "1",
      "Miscellaneous": "WINDOW TREATMENTS,DECK(S)",
      "FinancialTerms": "ALL NEW LOANS CONSIDERED",
      "ListOfficeAffiliation": "",
      "Foreclosure": ""
    },
    {
      "SiteDescription": "WATERFRONT PROPERTY",
      "Acreage": "LESS THAN 1 ACRE",
      "BuyerBrokerFee": "3",
      "ConfirmedSpcAssessment": "NONE",
      "DisplayAddressListing": "No",
      "HighSchool": "WESTOVER SENIOR HIGH",
      "Style": "Condo",
      "Bedrooms": "2",
      "Age": "1986",
      "StateOrProvince": "NC",
      "LotNumber": "",
      "ListingBoardID": "3268",
      "Condition": "Excellent",
      "TypeHeat": "CENTRAL ELECTRIC A/C",
      "StreetName": "WILLOWBROOK DRIVE",
      "Possession": "AT CLOSING",
      "VirtualTourYN": "",
      "ShortSaleYN": "No",
      "PostalCode": "28303",
      "Appliance": "RANGE,DISHWASHER,DISPOSAL,REFRIGERATOR,WASHER,DRYER",
      "DueDiligencePeriod": "",
      "ListingID": "351174",
      "ContingencyStatus": "",
      "PhotoModificationTimestamp": "2013-08-16T13:27:16",
      "Zoning": "",
      "Units": "",
      "PhotoCount": "1",
      "MiddleSchool": "WESTOVER MIDDLE SCHOOL",
      "VirtualTourURL": "",
      "SqFtRange": "1101 TO 1200",
      "InteriorFeatures": "CEILING FAN(S),BLINDS,JETTED TUB",
      "Includes": "NONE",
      "ListingAgentID": "4",
      "DeedBookNumber": "5627",
      "ClosePrice": "",
      "DateChange": "2011-08-31",
      "Fireplace": "Prefab",
      "PlatBookPage": "117",
      "DiningRoom": "",
      "DeedPage": "525",
      "DisplayFlagListing": "Yes",
      "OccupancyDescription": "",
      "PublicRemarks": "INVESTORS DREAM! CONDO IS ALREADY TENANT OCCUPIED. SELLER IS MOTIVATED TO SELL. THIS PROPERTY HAS TENNIS COURTS, SWIMMING POOL AND IS MINUTES AWAY FROM BRAGG! THIS IS A MUST HAVE!",
      "ProposedAssessments": "NONE",
      "County": "Cumberland",
      "ListingStatus": "Active",
      "OfficeIDX": "Yes",
      "WoodedAcres": "",
      "TaxID": "9498521239301",
      "Rooms": "4",
      "City": "Fayetteville",
      "ListingFirmID": "1092",
      "AgentStatus": "- Active",
      "Floors": "HARDWOOD,TILE,VINYL",
      "PropertyConstructionMaterial": "Frame",
      "Gas": "None",
      "OfficeStatus": "- Active",
      "BathsTotal": "2",
      "DaysOnMarketContinuous": "",
      "OwnerName": "FIELDS",
      "ListingOfficeID": "0",
      "PropertyType": "Residential",
      "HomeWarrantyAmount": "",
      "Misc": "",
      "ModificationTimestamp": "2014-03-27T20:46:43",
      "Garage": "None",
      "Sewer": "Public Works",
      "ListPrice": "38000",
      "Electric": "Progress Energy",
      "AgentIDX": "Yes",
      "Water": "Public Works",
      "AddressSubdivisionName": "STEWARTS CK",
      "BlogYN": "No",
      "StreetNumber": "6760-7",
      "PrivateRemarks": "MORGANTON RD TO REILLY RD, LEFT ONTO REILLY, RIGHT INTO STEWARTS CREEK.",
      "Area": "",
      "HalfBaths": "0",
      "ListingOfficeUID": "326810920",
      "IDX": "",
      "ListingAgentUID": "3268109204",
      "CloseDate": "",
      "ListDate": "2010-08-11",
      "ElementarySchool": "CLIFFDALE ELEMENTARY",
      "HomeWarrantyYN": "",
      "RentFee": "",
      "PlatBook": "1",
      "Miscellaneous": "WINDOW TREATMENTS,DECK(S)",
      "FinancialTerms": "ALL NEW LOANS CONSIDERED",
      "ListOfficeAffiliation": "",
      "Foreclosure": ""
    }];
  };
  return { 
    getListings: getListings
  };
});

