var standard = {
  "standardObjKeys": ["main", "address", "extra", "extraPremium", "exclude"],
  "ListPrice": "main",
  "Bedrooms": "main",
  "BathsTotal": "main", //combine with half baths
  "HalfBaths": "main",
  "Age": "main", //4 digit year
  "SqFtRange": "main",
  "StreetNumber": "address",
  "StreetName": "address",
  "City": "address",
  "StateOrProvince": "address",
  "PostalCode": "address", //"other" is also a value
  "PublicRemarks": "extra",
  "Acreage": "extra",
  "County": "extra",
  "Style": "extra",
  "Condition": "extra",
  "Includes": "extra",
  "Appliance": "extra",
  "Fireplace": "extra",
  "InteriorFeatures": "extra",
  "DiningRoom": "extra",
  "Misc": "extra",
  "Garage": "extra",
  "PropertyConstructionMaterial": "extra",
  "SiteDescription": "extra",
  "Miscellaneous": "extra",
  "TypeHeat": "extra",
  "Gas": "extra",
  "Electric": "extra",
  "Sewer": "extra",
  "Water": "extra",
  "Floors": "extra",
  "LotNumber": "extra",
  "Possession": "extra",
  "ContingencyStatus": "extra", //["", "Contingent on closing", "Contingent on sale and closing", "Other See Remarks 2"
  "Zoning": "extra",
  "Units": "extra",
  "OccupancyDescription": "extra",
  "ListingID": "extra",
  "ListDate": "extraPremium",
  "DaysOnMarketContinuous": "extraPremium", // I'm pretty sure this is over multiple listings/agents
  "AddressSubdivisionName": "extraPremium",
  "Area": "extraPremium",
  "ProposedAssessments": "extraPremium",
  "ConfirmedSpcAssessment": "extraPremium",
  "Foreclosure": "extraPremium", //["", "BANK OWNED", "CORPORATE OWNED", "FILED", "HUD OWNED", "VA OWNED"]
  "ShortSaleYN": "extraPremium", //["", "No", "Yes"]
  "DueDiligencePeriod": "extraPremium",
  "ElementarySchool": "extraPremium",
  "MiddleSchool": "extraPremium",
  "HighSchool": "extraPremium",
  "VirtualTourURL": "extraPremium",
  "WoodedAcres": "extraPremium",
  "TaxID": "extraPremium",
  "DeedBookNumber": "extraPremium",
  "DeedPage": "extraPremium",
  "PlatBook": "extraPremium",
  "PlatBookPage": "extraPremium",
  "ClosePrice": "extraPremium",
  "CloseDate": "extraPremium",
  "OwnerName": "extraPremium", //may not be allowed to show
  "HomeWarrantyYN": "extraPremium",
  "ListingStatus": "exclude",
  "IDX": "exclude",
  "PropertyType": "exclude", // this is the only property type we will have
  "OfficeIDX": "exclude",
  "DisplayAddressListing": "exclude", // allowed to show address
  "PhotoCount": "exclude",
  "PhotoModificationTimestamp": "exclude",
  "ModificationTimestamp": "exclude",
  "VirtualTourYN": "exclude",
  "ListingBoardID": "exclude",
  "ListingFirmID": "exclude",
  "ListingOfficeID": "exclude",
  "ListingOfficeUID": "exclude",
  "ListingAgentID": "exclude",
  "ListingAgentUID": "exclude",
  "ListOfficeAffiliation": "exclude",
  "OfficeStatus": "exclude",
  "AgentStatus": "exclude",
  "AgentIDX": "exclude",
  "BuyerBrokerFee": "exclude",
  "DateChange": "exclude", // same as ModificationTimestamp but no time
  "DisplayFlagListing": "exclude", // all "Yes"
  "Rooms": "exclude",
  "HomeWarrantyAmount": "exclude",
  "BlogYN": "exclude",
  "PrivateRemarks": "exclude",
  "RentFee": "exclude",
  "FinancialTerms": "exclude"
};

var convertListing = function(home) {
  var reformatted = {};
  var propLength = standard.standardObjKeys.length;
  for(var i = 0; i < propLength; i++) {
    reformatted[standard.standardObjKeys[i]] = {};
  }

  for(var key in home) {
    reformatted[standard[key]][key] = home[key];
  }
  return reformatted;
};
