/**
 * Represents an event as described in the database.
 * @class
 * @param {string} title - The title of the event.
 * @param {string} description - The description of the event.
 * @param {string} start_date - The start date of the event.
 * @param {string} end_date - The end date of the event.
 * @param {string} organizer - The organizer of the event.
 */
class Event {
  constructor(title, description, start_date, end_date, status, organizer) {
    this.title = title;
    this.description = description;
    this.start_date = start_date;
    this.end_date = end_date;
    this.organizer = organizer;
  }

  static fromJSON(jsonObj) {
    return new Event(
      jsonObj.title,
      jsonObj.description,
      jsonObj.start_date,
      jsonObj.end_date,
      jsonObj.organizer
    );
  }
}

module.exports = Event;
