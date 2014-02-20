#HBS Grupos Data Collection App

##Summary

An offline app built for the collection of *anonymous* patient data from bateys of La Romana, Dominican Republic

##Plan

A fully-cached and internet-independent webapp capable of displaying various pages of forms, saving form data locally (on the device), and uploading collected data to a mysql server once a 3G or WiFi connection is established.

##Technologies to be employed:
- [TaffyDB](taffydb.com)
- off canvas menus (css, js)
- javascript on the client for all of the data manipulation and HTTP POST messages
- python on the server to recieved HTTP POST requests and insert them into a mySQL database
- Harvest? for database visualization?

#Wireframes

These will be uploaded soon

##HTN Questions

Taken from the WHO Stepwise Tool

- Interviewer ID
- Device ID for blood pressure
- Cuff size used
- Reading 1
- Reading 2
- Reading 3
- During the past two weeks, have you been treated for raised blood pressure with drugs (medication) prescribed by a doctor or other health worker?

---

- Have you ever had your blood pressure measured by a doctor or other health worker?
	- if no, stop
- Have you ever been told by a doctor or other health worker that you have raised blood pressure or hypertension?
	- if no, stop
- Have you been told in the past 12 months?
- In the past two weeks, have you taken any drugs (medication) for raised blood pressure prescribed by a doctor or other health worker?
- Have you ever seen a traditional healer for raised blood pressure or hypertension?
- Are you currently taking any herbal or traditional remedy for your raised blood pressure?


