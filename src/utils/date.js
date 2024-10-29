function getCurrentDay() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return currentDate;
}

function getFirstDayOfWeek() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const currentDay = currentDate.getDay();
  const firstDayOfWeek = new Date(
    currentDate.setDate(currentDate.getDate() - currentDay - 1)
  );
  return firstDayOfWeek;
}

function getFirstDayOfMonth() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  return firstDayOfMonth;
}

export function getPeriodByName(name) {
  if (name === "today") {
    return getCurrentDay();
  } else if (name === "week") {
    return getFirstDayOfWeek();
  } else if (name === "month") {
    return getFirstDayOfMonth();
  }
}
