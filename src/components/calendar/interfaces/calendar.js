/**
 * @typedef {Object} IUser
 * @property {string} id - Unique identifier for the user
 * @property {string} name - Display name of the user
 * @property {string} [picturePath] - Optional avatar image path
 */

/**
 * @typedef {Object} IEvent
 * @property {string} id - Unique identifier for the event
 * @property {string} title - Event title
 * @property {string} description - Event description
 * @property {string} startDate - ISO string for start date
 * @property {string} endDate - ISO string for end date
 * @property {('blue'|'green'|'red'|'yellow'|'purple'|'orange')} color - Event color theme
 * @property {Object} user - User associated with the event
 * @property {string} user.id - User ID
 * @property {string} user.name - User name
 */

/**
 * @typedef {('dot'|'colored'|'mixed')} BadgeVariant
 */

/**
 * @typedef {('day'|'week'|'month'|'year'|'agenda')} CalendarView
 */

// Export objects to maintain module structure
export const CalendarTypes = {
  /**
   * Badge variant options
   */
  BadgeVariant: {
    DOT: 'dot',
    COLORED: 'colored', 
    MIXED: 'mixed'
  },

  /**
   * Calendar view options
   */
  CalendarView: {
    DAY: 'day',
    WEEK: 'week', 
    MONTH: 'month',
    YEAR: 'year',
    AGENDA: 'agenda'
  },

  /**
   * Event color options
   */
  EventColors: {
    BLUE: 'blue',
    GREEN: 'green',
    RED: 'red',
    YELLOW: 'yellow',
    PURPLE: 'purple',
    ORANGE: 'orange'
  }
};