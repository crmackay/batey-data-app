#Ideas
##steps
1. Write an image processor as proof of concept 
2. update form to be more useful
3. Set up manner of upload 
3. Port data into the OpenMRS data model
4. Add HL7 support / switch to using openMRS backend

##workflow
- at clinic staff images all new cards- how do you know which ones are new???
- images and extracted data are uploaded to goodly spreadsheet
- health promoter has smart phone
	- regularly administers forms via web app (being proof of concept a for HTN project)
	- uploads info to google docs via 3G, when a clinic comes, or when they visit hospital
	- when forms are uploaded batey and promoter specific messages are relayed to health promoter 


- Client-side?
	- javascript? - Are there libraries? How long would it take
		- start a session 
			- user
		- select a form type and version
		- html5 to access phone camera
		- take picture
		- verify image quality?
			- all four corners clean
			- in focus
			- enough resolution
			- enough contrast
		- process the image immediately
			- javascript application to 
				- perform OCR on the letter boxes
				- perform OMR on the check boxes
			- save data to taffyDB
			- display data to user for verification
				- ability to edit it or delete and try again
	
		- Server side
		 	- raspberrypi & python
		 		- html webapp that uploads and return info for verification
		 - form v2
			 - demographic info
			 - no ID info aside from unique number
			 	- algorithm to generate unique numbers
			 	- 9 digits
			 		- must have check sequence
			 		- can we use letters?
			 		- does the DOH have PINs? 
			 			- HBS? 
				 		- Would there be value in using them?
			 - encounter info
				 - date
				 - location
				 - provider name
				 - provider institution
			 - vitals
			 - diagnoses
			 - flags
			 - provider institution
		- HL7 message?
		- concept dictionary
