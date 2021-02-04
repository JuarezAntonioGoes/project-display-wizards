export default function getThreeStudents(students, setThreeStudants) {
  const indexStudentOne = Math.floor(Math.random() * students.length);

  const houseOne = students.filter(
    (student) => students[indexStudentOne].house === student.house
  );

  const arrWithoutHouseOne = students.filter(
    (student) => houseOne[0].house !== student.house
  );

  const indexStudentTwo = Math.floor(
    Math.random() * (students.length - houseOne.length)
  );

  const houseTwo = students.filter(
    (student) => arrWithoutHouseOne[indexStudentTwo].house === student.house
  );

  const houseThree = students.filter(
    (student) =>
      student.house !== houseOne[0].house && student.house !== houseTwo[0].house
  );

  const HOUSES = [houseOne, houseTwo, houseThree];
  const arrayInsert = [];

  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * HOUSES[i].length);
    arrayInsert.push(HOUSES[i][index]);
  }

  setThreeStudants([...arrayInsert]);
}
