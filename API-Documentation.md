# API Documentation

## Overview

This section provides an overview of all API endpoints, inclduing their purpose and functionality.

## Endpoints

### `POST /createEvent`

Create a new event for a user based on given eventData.

### `POST /editEvent/:eventId`

Edit an already existing event.

**URL Parameters:**

- eventId (required): The unique identifier of the event.

### `GET /events/:userId`

Retrieve all event ids associated with a user.

**URL Parameters:**
- userId (required): The unique identifier of the user. 

### `GET /event/:eventId`

Retrieve all details about an event.

**URL Parameters:**

- eventId (required): The unique identifier of the event.
