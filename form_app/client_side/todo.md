#Client-Side TO DO:


## Immediate:

- [ ] fix page layout so its more semantic
    - menubar
    - pages - which will be scollable
    - modals---which are also scrollable
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
    - question info
    - 
- [ ] add batey form (as a modal)
- [ ] add pages to a 'history' list for a running back buton
- [ ] fix transitions so that it is simpler:
    - class='visible'
        ```css
        .hidden {
            visibility:hidden;
        }
        .hidden.page {
            left:125%;
            opacity:1;
        }
        .hidden.modal {
            left:0;
            opacity:0;
        }
        .visible{
            visibility: visible;
            opacity:1;
            left:0;
        }
        ```

## 
1. [ ] - add localStorageDB to save the batey info
    [ ] define data model...with a version number etc...how how to manage it in future versions
1. [ ] - add JS and JSON that puts prior batey info into the database
1. [ ] - add handlebars templating to load the entire batey list
1. [ ] - update all the CSS
2. [ ] - fix the page transitions to use <a> elements, with event listeners on the '#' in the url
    - https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers.onhashchange
3. [ ] - add 'app-state' storage into localStorage so that on crashes/closes app can restart from where left off
3. [ ] - add iOS standalone app elements (icon, startup page, no UI feature, etc.)
    - see webpage: http://blog.teamtreehouse.com/optimizing-mobile-web-apps-ios
4. [ ] - add andoid stanalone app elements
    - see webpage: http://www.mobilexweb.com/blog/home-screen-web-apps-android-chrome-31



## future:
1. [ ] - add capture GPS coordinate info for a new batey
    - use `enableHighAccuracy` setting: http://code.tutsplus.com/tutorials/an-introduction-to-the-geolocation-api--cms-20071
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


##way way way down the roa
1. [ ] - make a admin/backend platform:
    1. [ ] - browse the data
    1. [ ] - make/edit forms
    2. [ ] - deploy forms
