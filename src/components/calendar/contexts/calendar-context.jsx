import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CalendarContext = createContext(undefined);

/**
 * Calendar provider component that manages calendar state
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Array} props.events - Array of event objects
 * @param {Array} props.users - Array of user objects
 * @param {Date} [props.initialDate] - Initial date for the calendar
 * @returns {JSX.Element} CalendarProvider component
 */
export function CalendarProvider({
  children,
  events,
  users,
  initialDate,
}) {
  const [selectedDate, setSelectedDate] = useState(
    initialDate || new Date()
  );
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [badgeVariant, setBadgeVariant] = useState("colored");

  // Listen for custom setDate events
  useEffect(() => {
    const handleSetDate = (e) => {
      const customEvent = e;
      if (customEvent.detail && customEvent.detail instanceof Date) {
        setSelectedDate(customEvent.detail);
      }
    };

    // Add event listener
    document.addEventListener("setDate", handleSetDate);

    // Clean up
    return () => {
      document.removeEventListener("setDate", handleSetDate);
    };
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        events,
        users,
        selectedDate,
        setSelectedDate,
        selectedUserId,
        setSelectedUserId,
        badgeVariant,
        setBadgeVariant,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

/**
 * Hook to access calendar context
 * @returns {Object} Calendar context value
 * @throws {Error} If used outside CalendarProvider
 */
export function useCalendar() {
  const context = useContext(CalendarContext);

  if (context === undefined) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }

  return context;
}