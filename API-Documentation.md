# API Documentation

## Overview

This section provides an overview of all API endpoints, inclduing their purpose and functionality.

## Endpoints

### Events Endpoints

#### POST /createEvent

Create a new event for a user based on given eventData.

##### Headers:

- **Content-Type**: `application/json`

##### Body Parameters

- `user_id` (integer, required) - The id of the user with which the event is associated.
- `title` (string, required) - The title of the event.
- `description` (string, optional) - A brief description of the event.
- `start` (string, required) - The start time and date for the event in ISO 8601 format.
- `end` (string, required) - The end time and date for the event in ISO 8601 format.
- `organizer` (string, required) - The name or identifier of the organizer of the event.
- `allDay` (boolean, optional) - A boolean indicating whether the event lasts all day. Defaults to `false`.
- `color` (string, optional) - A string representing the color associated with the event, typically used for display purposes.
- `location` (string, optional) - A string representation of the location of the event.

##### Example Request Body

```json
{
  "user_id": 1,
  "title": "Board Meeting",
  "description": "Monthly executive board meeting.",
  "start": "2023-10-01T09:00:00Z",
  "end": "2023-10-01T11:00:00Z",
  "organizer": "HR Department",
  "allDay": false,
  "color": "#FF5733",
  "location": "1234 Maple Avenue, Springfield, IL, 62704"
}
```

#### PUT /editEvent/:eventId

Edit an already existing event.

##### URL Parameters:

- eventId (required): The unique identifier of the event.

##### Headers:

- **Content-Type**: `application/json`

##### Body Parameters

All parameters are optional. Only fields with passed parameters will be changed.

- `title` (string, optional) - The title of the event.
- `description` (string, optional) - A brief description of the event.
- `start` (string, required) - The start time and date for the event in ISO 8601 format.
- `end` (string, required) - The end time and date for the event in ISO 8601 format.
- `organizer` (string, required) - The name or identifier of the organizer of the event.
- `allDay` (boolean, optional) - A boolean indicating whether the event lasts all day. Defaults to `false`.
- `color` (string, optional) - A string representing the color associated with the event, typically used for display purposes.
- `location` (string, optional) - A string representation of the location of the event.

##### Example Request Body

```json
{
  "title": "New Board Meeting",
  "start": "2023-10-01T10:00:00Z"
}
```

#### GET /events/:userId

Retrieve all event ids associated with a user.

##### URL Parameters:

- userId (required): The unique identifier of the user.

##### Success Response

- **Code**: `200 OK`
- **Content Example**:
  ```json
  [ 0: 1, 1: 2, 2: 3 ]
  ```

#### GET /event/:eventId

Retrieve all details about an event.

##### URL Parameters:

- eventId (required): The unique identifier of the event.

##### Success Response

- **Code**: `200 OK`
- **Content Example**:
  ```json
  {
    "event_id": 1,
    "title": "Tech Conference 2024",
    "description": "Annual technology conference focusing on the latest trends in software development.",
    "start": "2024-05-15T14:00:00.000Z",
    "end": "2024-05-17T22:00:00.000Z",
    "organizer": "Tech Innovators Inc.",
    "allDay": false,
    "color": "#FF5733",
    "location": "1234 Maple Avenue, Springfield, IL, 62704"
  }
  ```

### Groups Endpoints

#### GET /groups/:userId

Retrieve group IDs associated with a specific user.

##### URL Parameters:

- `userId` (integer, required): The ID of the user.

##### Success Response

- **Code**: 200 OK
- **Content Example**:
  ```json
  [1, 2, 3]
  ```

#### GET /group/:groupId

Retrieve details of a group by its ID.

##### URL Parameters:

- `groupId` (integer, required): The ID of the group.

##### Success Response

- **Code**: 200 OK
- **Content Example**:
  ```json
  {
    "group_id": 1,
    "group_name": "Group 1",
    "group_description": "Description of Group 1",
    "group_owner": 123,
    "group_color": "#FFFFFF",
    "image": "image.png",
    "isPrivate": false
  }
  ```

#### GET /group/members/:groupId

Retrieve user IDs of members in a group by its ID.

##### URL Parameters:

- `groupId` (integer, required): The ID of the group.

##### Success Response

- **Code**: 200 OK
- **Content Example**:

  ```json
  [123, 456, 789]
  ```

#### POST /createGroup

Create a new group based on given group data.

##### Headers:

- **Content-Type**: `application/json`

##### Body Parameters

- `group_name` (string, required): The name of the group.
- `group_description` (string, required): A brief description of the group.
- `group_owner` (integer, required): The ID of the group owner.
- `group_color` (string, optional): The color associated with the group.
- `image` (string, optional): The image URL for the group.
- `isPrivate` (boolean, optional): Indicates if the group is private.

##### Example Request Body

```json
{
  "group_name": "Tech Enthusiasts",
  "group_description": "A group for discussing technology trends and innovations.",
  "group_owner": 123,
  "group_color": "#336699",
  "image": "tech.jpg",
  "isPrivate": false
}
```
