class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName() {
    return`Hello ${this.firstName} ${this.lastName}`
  }
}

class User extends Person {
  constructor (firstName, lastName, email, password) {
    super(firstName, lastName)
    this.email = email
    this.password = password
  }
  getCreds() {
    return `Creds: ${this.email} ${this.password}`
  }
}

const user = new User('Oleg', 'Kyrpa', 'Oleg@gmail.com', 'qwerty')

console.log(user);
console.log(user.getCreds());
console.log(user.getFullName());

module.exports = {Person: Person};