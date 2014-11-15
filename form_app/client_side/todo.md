#Client-Side TO DO:


## Immediate:

- [ ] set up webhook to auto update dev.chrismackay.org/batey-data-app/demo
- [ ] fix page layout so its more semantic
    - menubar
    - pages - which will be scollable...
    	- forms- wtform objects in Flask that come to client as html
    		- a view for each form
    	- data - stored as JSON objects
    		- data put into pages by views
    - modals---which are also scrollable
- [ ] set up views with handlebars.js
- [ ] draft out data models (different client-side vs server-side?)
    - batey info
        - id
        - name
        - division
        - GPS coordinates
        - GPS inclusive polygon
    - form info
        - formid
        - versionid
        - name
        - version
    - questions
        - formid
        - formverid
        - type
        - label
        - hint
        - required (boolean)
    - data
        - dataid
        - formid
        - formverid
        - questionid
        - response
    - sessionInfo
        - usercode
        - page\_history
        - current\_page
        - selected batey
        - currentPageInfo(fill form info, slected bateys, etc...)
    - 
- [ ] add batey form (as a modal)
- [ ] add pages to a 'history' list for a running back buton
    - [ ] make a array/list of visible pages
- [ ] fix transitions so that it is simpler:

## 
1. [ ] - add localStorageDB to save the batey info
    [ ] define data model...with a version number etc...how how to manage it in future versions
1. [ ] - add JS and JSON that puts prior batey info into the database, fields: status (from server, uploaded, ( )
1. [ ] - update all the CSS
3. [ ] - add 'app-state' storage into localStorage so that on crashes/closes app can restart from where left off
    - page, current batey, current form, page history.
3. [ ] - add iOS standalone app elements (icon, startup page, no UI feature, etc.)
    - see webpage: http://blog.teamtreehouse.com/optimizing-mobile-web-apps-ios
4. [ ] - add andoid standalone app elements
    - see webpage: http://www.mobilexweb.com/blog/home-screen-web-apps-android-chrome-31



## future:
1. [ ] - add capture GPS coordinate info for a new batey
    - fix `enableHighAccuracy` on iPhone setting: http://code.tutsplus.com/tutorials/an-introduction-to-the-geolocation-api--cms-20071
1. [ ] - add warning for back button
2. [ ] - add HTN form information and saving functionality
3. [ ] - add CSS badge that alerts the menu button and inside the menu of un-uploaded records
    - http://kaliko.com/blog/circled-number-with-pure-css/


## way down the road
1. [ ] - add manifest/offline support
1. [ ] - add "add to homescreen" popup (iOS and Android)
1. [ ] - add icon for iOS and Android
2. [ ] - add walkthoutgh / tutorial

## adding server-side commnuication
1. [ ] - add upload functionality
    - via an `XMLHttpRequest` object with JSON

1. [ ] - add check registered user functionality (on download of app, and on upload of data) 


##way way way down the road (WITH Harvest)
1. [ ] - make a admin/backend platform:
    1. [ ] - browse the data
    1. [ ] - make/edit forms
    2. [ ] - deploy forms
