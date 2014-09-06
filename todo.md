# To Do:

1. Client-side:
  - [ ] make a working javascript/html page
  - [ ] develop a webform
  - [ ] have form data save to taffydb (local storage)
  - [ ] set up AES encryption on the data via a password
      - password is only stored in RAM and if undefined it is requested again
      - password is also used to verify upload (if available) otherwise ots requested again
  - [ ] develop a system by which user is notified of how many records remain in 
  - [ ] develop an upload button that will take each entry and 
    - for every record:
      - submit a HTTP POST request
      - wait to reply of completion
      - delete the record
  - [ ] add [i18next](http://i18next.com/]), translation support
1. Server-side:
  - [ ] set up Tornado?? or Flask?? to handle HTTP POST requests
  - [ ] set up user signin/registration and authentication when uploads are initiatied
  - [ ] set up a static IP
