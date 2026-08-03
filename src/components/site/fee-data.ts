export const DEPARTMENTS = [
  "Computer Science",
  "Chemistry",
  "Physics",
  "Mathematics",
  "English",
  "Economics",
  "Management Sciences",
  "Law",
  "Education",
  "Botany",
  "Zoology",
  "Commerce",
  "Political Science",
  "Pashto",
  "Balochi",
  "Urdu",
  "International Relations",
] as const;

export const SECTIONS = ["Section A", "Section B", "Section C", "Morning", "Evening"] as const;

export const SEMESTERS = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
] as const;

export const PAYMENT_METHODS = [
  { id: "easypaisa", name: "EasyPaisa", type: "Mobile Wallet", initials: "EP" },
  { id: "jazzcash", name: "JazzCash", type: "Mobile Wallet", initials: "JC" },
  { id: "hbl", name: "HBL Bank", type: "Partner Bank", initials: "HBL" },
  { id: "ubl", name: "UBL Bank", type: "Partner Bank", initials: "UBL" },
] as const;