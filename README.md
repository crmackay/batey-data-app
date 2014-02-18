#HBS Grupos Data Collection App
>My attempt at a django app for creating and deploying patient data forms

##Ideas

Collect Data either at 'point-of-contact' or afterward on a form
	
1. point-of-contact
	1. offline form workflow:
		- a webapp form
		- provider enters form data and *submits* form
		- form data is saved to the phone, and provider is sent back to home or form page
		- at the top of the screen is a *alert* number that displays how many saved forms are saved on the phone, but not submitted
		- clicking on this alert reveals a screen of saves forms (with ability to edit?)
			- ability to hit submit 
			- app checks for connectivity then submits each form, showing progress for each
		- app reguarly checks for connectivity and automatically pops-up a submit buttom when online
	1. simple online form

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


