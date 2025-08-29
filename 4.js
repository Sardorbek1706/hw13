class Institute {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  createOne(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
    }
  }

  createMany(deps) {
    deps.forEach(dep => {
      if (!this.departments.includes(dep)) {
        this.departments.push(dep);
      }
    });
  }

  findAll() {
    return this.departments;
  }

  findOne(department) {
    return this.departments.includes(department) ? department : null;
  }

  updateOne(oldDep, newDep) {
    const index = this.departments.indexOf(oldDep);
    if (index !== -1) {
      this.departments[index] = newDep;
    }
  }

  updateMany(oldDeps, newDeps) {
    oldDeps.forEach((oldDep, i) => {
      const index = this.departments.indexOf(oldDep);
      if (index !== -1) {
        this.departments[index] = newDeps[i];
      }
    });
  }

  deleteOne(department) {
    this.departments = this.departments.filter(dep => dep !== department);
  }

  deleteMany(deps) {
    this.departments = this.departments.filter(dep => !deps.includes(dep));
  }

  showDepartments() {
    console.log(`${this.name} institutidagi bo'limlar:`);
    this.departments.forEach((dep, index) => {
      console.log(`${index + 1}. ${dep}`);
    });
  }
}

let institute = new Institute("Toshkent Institut");
institute.createOne("Kompyuter fanlari");
institute.createOne("Elektromexanika");
institute.createMany(["Matematika", "Fizika", "Ximiya"]);

console.log("Barcha bo'limlar:", institute.findAll());
console.log("Topilgan bo'lim:", institute.findOne("Kompyuter fanlari"));

institute.updateMany(["Matematika", "Kompyuter fanlari"], ["Matematika va Informatika", "Dasturlash fanlari"]);

institute.deleteOne("Ximiya");
institute.deleteMany(["Fizika", "Elektromexanika"]);

institute.showDepartments();
