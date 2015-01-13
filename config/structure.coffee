# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Homes"
      id: "homes"
      location: "home#index"
    }
    {
      title: "Account"
      id: "account"
      location: "user#show-user"
    }
    {
      title: "Contact"
      id: "contact"
      location: "example#contact"
    }
    {
      title: "drawer too"
      id: "settings"
      location: "example#settings"
    }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "homes"
      location: "home#index"
    }
  ]

  drawers:
    left:
      id: "leftDrawer"
      location: "example#settings"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"
      # http://docs.appgyver.com/supersonic/api-reference/stable/supersonic/ui/drawers/updateoptions/
  
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
