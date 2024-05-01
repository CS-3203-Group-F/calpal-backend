# API Documentation

## Overview

This section provides an overview of all API endpoints, inclduing their purpose and functionality.

## Endpoints

### POST /createEvent

Create a new event for a user based on given eventData.

#### Headers:

- **Content-Type**: `application/json`

#### Body Parameters

- `title` (string, required) - The title of the event.
- `description` (string, optional) - A brief description of the event.
- `start` (string, required) - The start time and date for the event in ISO 8601 format.
- `end` (string, required) - The end time and date for the event in ISO 8601 format.
- `organizer` (string, required) - The name or identifier of the organizer of the event.
- `allDay` (boolean, optional) - A boolean indicating whether the event lasts all day. Defaults to `false`.
- `color` (string, optional) - A string representing the color associated with the event, typically used for display purposes.

#### Example Request Body

```json
{
  "user_id": 1,
  "title": "Board Meeting",
  "description": "Monthly executive board meeting.",
  "start": "2023-10-01T09:00:00Z",
  "end": "2023-10-01T11:00:00Z",
  "organizer": "HR Department",
  "allDay": false,
  "color": "#FF5733"
}
```

### PUT /editEvent/:eventId

Edit an already existing event.

#### URL Parameters:

- eventId (required): The unique identifier of the event.

#### Headers:

- **Content-Type**: `application/json`

### GET /events/:userId

Retrieve all event ids associated with a user.

#### URL Parameters:

- userId (required): The unique identifier of the user.

### GET /event/:eventId

Retrieve all details about an event.

#### URL Parameters:

- eventId (required): The unique identifier of the event.
