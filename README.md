
# emailScheduler

- [Introduction](#introduction) 

- [Create Email Schedule](#create-email-schedule) 
  - [Email Schedule API](#email-schedule-api) 
  - [Request Example Json](#email-schedule-request-example-json)  
  - [Response Example Json](#email-schedule-request-response-example-json)

- [Update Email Schedule](#update-email-schedule) 
  - [Update Email Schedule API](#update-email-schedule-api) 
  - [Request Example Json](#update-email-schedule-request-example-json) 
  - [Response Example Json](#update-email-schedule-response-example-json)  
  - [Status Codes](#update-email-schedule-status-codes)
  
- [Delete Email Schedule](#delete-email-schedule) 
  - [Delete Email Schedule API](#delete-email-schedule-api)
  - [Request Example Json](#delete-email-schedule-request-example-json)  
  - [Response Example Json](#delete-email-schedule-response-example-json)  
  - [Status Codes](#delete-email-schedule-status-codes)
  
- [Read Email Schedule](#read-email-schedule) 
  - [Read Email Schedule API](#read-email-schedule-api)
  - [Request Example Json](#read-email-schedule-request-example-json)  
  - [Response Example Json](#read-email-schedule-response-example-json)  
  - [Status Codes](#read-email-schedule-status-codes)
  
- [List non sent Email](#list-non-sent-email) 
  - [List non sent Email API](#list-non-sent-email-api) 
  - [Response Example Json](#list-non-sent-email-response-example-json)
  - [Status Codes](#list-non-sent-email-status-codes)


# Introduction 

Email Scheduler.

# Create Email Schedule

## Email Schedule API 

`GET /add` 

## Request Example Json

```json

{
    "emailId": "abc@gmail.com",
    "scheduleTime":"2021-03-28 23:48"
}

```

## Response Example Json

```json 
{
    "mailDetails": {
        "sent": false,
        "_id": "6060c7f9ffea4a2a3017c08b",
        "emailId": "abc@gmail.com",
        "scheduleTime": "2021-03-28T18:18:00.000Z",
        "counter": 1,
        "__v": 0
    }
}
		

``` 

# Update Email Schedule

## Update Email Schedule API

`PATCH /update` 

## Request Example Json

```json

{
    "emailId": "abc@gmail.com",
    "scheduleTime":"2021-03-28 23:50"
}

```

## Response Example Json

```json 
{
    "mailDetails": {
        "sent": false,
        "_id": "6060c7f9ffea4a2a3017c08b",
        "emailId": "abc@gmail.com",
        "scheduleTime": "2021-03-28T18:20:00.000Z",
        "counter": 1,
        "__v": 0
    }
}

``` 

## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
404        |                    Not found 
500        |                    FAILED 


# Delete Email Schedule

## Delete Email Schedule API

`DELETE /delete` 

## Request Example Json 

```json 
{
        "emailId": "abc@gmail.com"
}

``` 

## Response Example Json 

```json 
{
    "mailDetails": {
        "sent": false,
        "_id": "6060c7f9ffea4a2a3017c08b",
        "emailId": "abc@gmail.com",
        "scheduleTime": "2021-03-28T18:20:00.000Z",
        "counter": 1,
        "__v": 0
    }
}

``` 

## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
500        |                    FAILED 

# Read Email Schedule

## Read Email Schedule API 

`GET /read` 

## Request Example Json 

```json 
{
       "emailId": "abc@gmail.com"
}

``` 

## Response Example Json 

```json 
{
    "mailDetails": {
        "sent": false,
        "_id": "6060c7f9ffea4a2a3017c08b",
        "emailId": "abc@gmail.com",
        "scheduleTime": "2021-03-28T18:20:00.000Z",
        "counter": 1,
        "__v": 0
    }
}

``` 

## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
500        |                    FAILED 



# List non sent Email 

## List non sent Email API

`GET /list` 

## Response Example Json 

```json 
{
    "mailDetails": {
        "sent": false,
        "_id": "6060c7f9ffea4a2a3017c08b",
        "emailId": "abc@gmail.com",
        "scheduleTime": "2021-03-28T18:20:00.000Z",
        "counter": 1,
        "__v": 0
    }
}
		

``` 
## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
500        |                    FAILED 


