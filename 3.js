class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  showDepartments() {
    return this.departments;
  }
}

let university = new University("My University");

university.addDepartment("Computer Science");
university.addDepartment("Physics");
university.addDepartment("Mathematics");
university.addDepartment("Chemistry");
university.addDepartment("Biology");

university.removeDepartment("Mathematics");
university.removeDepartment("Physics");

console.log(university.showDepartments()); 
