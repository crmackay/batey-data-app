WebApp Ideas:

- use [taffydb](http://www.taffydb.com/) for local storage of form values...using localstorage (which should be supported on every browser)

- use a custom modernizr 
	- to check for localstorage support
	- "target" support, etc: and then raise an alert - you can not to offline-surveying with this browser...

- screen selection - different interfaces for tablet vs phone...

- add to home screen pop-up: [here](http://cubiq.org/add-to-home-screen)
- icons: [here](http://mathiasbynens.be/notes/touch-icons)

- alert "all data will be stored in your bowser un-encrypted until you upload it to a server - we are working on security, but his webapp is a work in progress

- start a clinic: (date, location, GPS coordinates, team, team contact email) - to Table:bp\_clinic
		- GPS locations: [here](http://www.w3schools.com/html/html5_geolocation.asp)
	- enter a record: bp\_data
	- save a record: stores data to Table:bp\_data
	- add a number to 'saved records' notification tag in nav menu([example](http://blog.thinkingstiff.com/2012/01/21/iphone-notification-badge-in-css/)
		- check for connection: ask to upload records
		- when notifications are clicked:
			- buttons for:
				- view records
				- upload records to server
					- checks for connections
						- if no: alert
						- if yes: continue
					- uploads records to server: progress bar
					- checks that records are on server
					- clears local storage
					
- responsive html template:
	- off-canvas menu: [here](http://css-tricks.com/off-canvas-menu-with-css-target/)
		- of here: [here](http://www.vinceallen.com/offcanvas/index.html)
	- 

- python on server side:
	- http://raspberrywebserver.com/cgiscripting/web-forms-with-python.html