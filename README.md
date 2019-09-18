# Build Week: Corporate Event Planner 


URL DEPLOYMENT 
https://corporate-event-planner-build.herokuapp.com/



AUTHENTICATION ENDPOINTS 


USER REGISTERING 
ENDPOINT: api/auth/register
REQ BODY: "username", "password"
RESPONSE: 201 Created

USER LOGIN
ENDPOINT: api/auth/login
REQ HEADERS: "username", "password"
RESPONSE: 200 Ok

User should receive a 'message": ` Hi ${username}`, and a "token" with a 1 hour time limit for user data access. 

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




USER ENDPOINTS

GET USERS
ENDPOINT: api/users
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user. 
RESPONSE: 200 Ok 

GET USER BY ID
ENDPOINT: api/users/:id 
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 

GET USER EVENTS BY ID
ENDPOINT: api/users/:id/events
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok

GET USER EVENTS(TOTAL)
ENDPOINT: api/users/:id/events/total
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok

GET USER EVENTS TODO LIST
ENDPOINT: api/users/2/events/todolist
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPOINSE: 200 Ok

GET USER EVENTS VENDORS
ENDPOINT: api/users/2/events/vendors
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 


XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


EVENTS ENDPOINTS

POST EVENT
ENDPOINT: api/events
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
REQ BODY: "description", "budget", budget is a integer, not string. 
RESPONSE: 201 Created

GET EVENTS
ENDPOINT: api/events
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user. 
RESPONSE: 200 Ok 

GET EVENTS BY ID
ENDPOINT: api/events/:id
REQ HEADERS:  "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok

DELETE EVENTS BY ID
ENDPOINT: api/events/:id
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok, "message": "The event has been removed"

UPDATE EVENTS BY ID
ENDPOINT: api/events/:id
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


TODOLIST ENDPOINTS 

GET TODOLIST
ENDPOINT: api/todolist
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 

POST TODOLIST
ENDPOINT: api/todolist
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
REQ BODY: "ToDO item", BOOLEAN("completed"), ToDo item is a string, boolean is also requied. 
RESPONSE: 201 Created

PUT TODOLIST
ENDPOINT: api/todolist/:id
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 

DELETE TODOLIST
ENDPOINT: api/todolist/:id
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 


XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



VENDORS ENDPOINTS 

GET VENDORS
ENDPOINT: api/vendors
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok

POST VENDORS
ENDPOINT: api/vendors
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
REQ BODY: "name" , "phone number", both are strings. 
RESPONSE: 201 Created

PUT VENDORS 
ENDPOINT: api/vendors/:id
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 

DELETE VENDORS
ENDPOINT: api/vendors
REQ HEADERS: "username", "password", "Authorization", Authorication value is the token received on login for user.
RESPONSE: 200 Ok 

