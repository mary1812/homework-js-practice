//1

function sumElem(number) {
  let result = number;
  if (number > 0) {
    result += sumElem(number - 1);
  }
  return result;
}

// 2
const university = {
  faculty: "Economics",
  department: "Banking",
};

const student = {
  name: "Masha",
  lastName: "Prostokvasha",
  isMale: false,
  contacts: {
    phoneNumber: 380931112233,
    email: "prostokvashino@gmail.com",
    address: "Lobanovsky, 10",
  },
  faculty: university.faculty,
  department: university.department,
};

function allInfoAboutStudent(student) {
  console.log(
    `\n student name: ${student.name}, \n student lastName: ${student.lastName}, \n student isMale: ${student.isMale}, \n student contacts: ${student.contacts.phoneNumber}, ${student.contacts.email}, ${student.contacts.address}, \n student faculty and department: ${student.faculty}, ${student.department}`
  );
}

//3
const arr = [];

for (let i = 0; i < 25; i++) {
  arr.push(i);
}

function getChetnoeIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function getChetnoeElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

function getNullElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(arr[i]);
    }
  }
}

function getNull(arr) {
  for (let i = 0; i < arr.length; i++) {
    let result = 0;
    if (arr[i] === 0) {
      console.log(result++);
    }
  }
}

//4

class Book {
  constructor(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
  }
}

class eBook extends Book {
  constructor(author, title, year, publisher, format, number) {
    super(author, title, year, publisher);
    this.format = format;
    this.number = number;
  }
}

const firstBook = new eBook('Antoine de Saint-Exupery', 'The Little Prince', '1943', 'Rainal and Hitchcock', 'EPUB', 612)


// 5

function numbers (n) {

}















// class eBook extends Book {
//   constructor(format, number) {
//     this.format = format;
//     this.number = number
//   }
// }

// const eBook = new Book(
//   "Antoine de Saint-Exupery",
//   "The Little Prince",
//   "1943",
//   "Rainal and Hitchcock", 
// );
