export default function useValidationRules() {
  const rules = {
    requiredRules: [(v) => !!v || "This is required"],
    names: [
      (v) => !!v || "This is required",
      (v) => /^[a-zA-Z .]+$/.test(v) || "Must be a valid name",
    ],
    email: [
      (v) => !!v || "This is required",
      (v) => /.+@.+\..+/.test(v) || "Invalid email format",
    ],
    positiveValues: [
      (v) =>
        v === "" ||
        (v > 0 && v % 1 === 0) ||
        "Value must be a positive integer",
    ],
    phoneNumber: [
      (v) => !!v || "This is required",
      (v) =>
        /^09\d{9}$/.test(v) ||
        "Phone number must start with 09 and be 11 digits long",
    ],
    checkInDate: [
      (v) => !!v || "This is required",
      (v) =>
        new Date(v) >= new Date().setHours(0, 0, 0, 0) ||
        "Check-in date cannot be in the past",
    ],
    checkOutDate: [
      (v) => !!v || "This is required",
      (v) =>
        new Date(v) >= new Date().setHours(0, 0, 0, 0) ||
        "Check-out date cannot be in the past",
    ],
  };
  return {
    rules,
  };
}
