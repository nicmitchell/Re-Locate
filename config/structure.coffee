# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Contact"
      id: "contact"
      location: "example#contact"
    }
    {
      title: "Homes"
      id: "homes"
      location: "home#index"
    }
    {
      title: "Homes"
      id: "listing"
      location: "listing#listing-multiple-view"
    }
    {
      title: "Account"
      id: "account"
      location: "user#show-user"
    }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "listing"
      location: "listing#listing-multiple-view"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
