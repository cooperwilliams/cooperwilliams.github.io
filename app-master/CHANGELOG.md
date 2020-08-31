# Changelog

### [v3.0.5](https://github.com/kikinteractive/app/releases/tag/3.0.5)

- Android L transitions are supported by default
- Topbar UI uses the material design theme
- app-icon is no longer supported
- Dialogs have a new unified theme across OS's, no longer support custom choice responses
- App.queue, built-in animation queue
- Bugfixes

### [v2.1.3](https://github.com/kikinteractive/app/releases/tag/2.1.3)

- Fix for iOS 8 page styles
- Hack to fix Android L touch event propagation bug
- Update Clickable.js, fixes Android L button bugs

### [v2.0.12](https://github.com/kikinteractive/app/releases/tag/2.0.12)

- Button downstate fix for Samsung devices
- App.noConflict, allow for other global dependencies named "App"
- iOS 7+ drag transitions for fixed topbars
- Hack to fix opacity transitions on Android 4.4.4

### [v2.0.2](https://github.com/kikinteractive/app/releases/tag/2.0.2)

- Major rewrite of system
- iOS 7 styles, transitions
- iOS 7 swipe back gesture
- Infinite scroll
- New dialogs
- New theme and colour-schemes
- Performance improvements
- Bugfixes

### [v1.9.5](https://github.com/kikinteractive/app/releases/tag/v1.9.5)

- Update Scrollable.js
- New glide transition

### [v1.8.4](https://github.com/kikinteractive/app/releases/tag/v1.8.4)

- App.getDefaultTransition, get default transition used for page navigation
- App.getReverseTransition, find reciprocal of default transition
- Bugfix for reverse transition setting
- appLayout event to allow for custom code on required re-renders
- Bugfix for content sizing on keyboard actions

### [v1.7.10](https://github.com/kikinteractive/app/releases/tag/v1.7.10)

- Restore scroll position of all elements on back navigations
- Nicer fade transition for fallback devices
- Better default transitions per OS version
- Close dialog (if open) on App.back
- Bugfix for restoring scroll position
- Bugfix for content sizing on orientation changes
- Bugfix for touch interaction during page navigation
- Bugfix for navigation queue processing

### [v1.6.9](https://github.com/kikinteractive/app/releases/tag/v1.6.9)

- appBack/appForward events for page navigation
- App.getStack, fetch current navigation stack of pages
- Stability fix for App.restore
