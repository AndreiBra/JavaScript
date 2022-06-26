const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

function AllEnterprise(item) {

    let counting_all_employees = 0
    for (let department of item.departments)
        counting_all_employees = counting_all_employees + department["employees_count"]
    if (counting_all_employees)
        console.log(item["name"] + " (" + counting_all_employees + " сотрудников)")
    else 
        console.log(item["name"] + " (нет сотрудников)")
    for (let department of item.departments) 
        if (department["employees_count"])
            console.log("- "+ department["name"] + " (" + department["employees_count"] + " сотрудников)")
        else
            console.log("- "+ department["name"] + " (нет сотрудников)")
}

console.log("Task 1")
console.log("")
console.log("All Enterprises and Departments with the number of Employees")
console.log("")
enterprises.forEach(AllEnterprise)

// Variant 2

const employeesCountHelper = function (number) {
    number = number.toString().split('').pop();
    if (number) {
      if (number == 1) return "сотрудник";
      else if (number > 1 && number < 5) return "сотрудника";
      else return "сотрудников";  
    }else return "(нет сотрудников)";
  }
  
  const getDepartments = function(companies) {
    companies.forEach((company) => {
      let depts = []; //создает пустой массив
      let count = 0; // счетчик сотрудников 0 нуля и выше
      depts.push(company.name); // вносит в массив название компании
      if (company.departments) {
        company.departments.forEach((dept) => {
          count += +dept.employees_count; // суммирует сотрудников отдела
          if (dept.employees_count) {
            depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`);    // добавляет
            //в массив название отдела и количество сотрудников  
          } else depts.push (`- ${dept.name} (нет сотрудников)`); // добавляет отдел без сотрудников
        });
  
        if (count) { // общее количество сотрудников на предприятии
          depts[0] += ` (${count} ${employeesCountHelper(count)})`;
        } else depts[0] += ` (нет сотрудников)`;
      }
      //console.log(depts)
      //console.log(depts.join())
      console.log("")
      console.log("Variant 2")
      console.log("All Enterprises and Departments with the number of Employees")
      console.log("")
      console.log(depts.join(`\n\ `)) // join сливает массив в строку
      // \n спецсимвол переноса строки
    });
  };
   
  getDepartments(enterprises)


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(p) {
    for (let enterprise of enterprises) {
        let c = enterprise.departments
        for (let department of enterprise.departments) 
            if (typeof(p) == "number" && department["id"] == p)
                console.log(enterprise["name"])
            else if (typeof(p) == "string" && department["name"] == p)
                console.log(enterprise["name"])
        
    }
}
console.log("")
console.log("Task 2")
console.log("Название предприятия в зависимости от ID")
getEnterpriseName(6)
console.log("Enterprise Name")
getEnterpriseName("Отдел аналитики")
console.log("")


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

let enterprises_new = enterprises

function getMaxId() {
    let r = 0
    for (let enterprise of enterprises_new) {
        if (enterprise["id"] > r)
            r = enterprise["id"]
        for (let department of enterprise.departments) 
            if (department["id"] > r )
                r = department["id"]
    }
    return r
}

function addEnterprise(enterprise_name) {
    let enterprise_new = {id : getMaxId()+1, name : enterprise_name, departments: []}
    console.log(enterprise_new)
    enterprises_new.push(enterprise_new)
}

console.log("Task 3")
console.log("")
console.log("Add Enterprise")
addEnterprise("Предприятие 4")
addEnterprise("Предприятие 5")
console.log("")


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(enterprise_id, department_name) {
    let enterprise = enterprises_new.find((item) => {if (item.id == enterprise_id) return item})
    let departments = enterprise.departments

    departments.push({id : getMaxId()+1, name : department_name, employees_count : 0})
    console.log(departments)
}

console.log("задание 4")
console.log("")
console.log("Add Department")
addDepartment(1, "Отдел сопровождения")
addDepartment(5, "Отдел продаж")
addDepartment(9, "Отдел развития")
console.log("")


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(enterprise_id, enterprise_name) {
    let enterprise = enterprises_new.find((item) => {if (item.id == enterprise_id) return item})
    console.log("id = " + enterprise.id +  " " + enterprise.name + " ===> " + enterprise_name)
    enterprise.name = enterprise_name
}

console.log("Task 5")
console.log("")
console.log("Rebranding Enterprise")
console.log("")
editEnterprise(1, "Internet without borders")
editEnterprise(9, "Around the world")
console.log("")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(department_id, department_name) {
    for (let enterprise of enterprises_new) {
        department = enterprise.departments.find((item) => {if (item.id == department_id) return item})
        if (department) {
            console.log("id = " + department.id +  " " + department.name + " ===> " + department_name)
            department.name = department_name
        }
    }
}

console.log("Task 6")
console.log("")
console.log("Department name change")
editDepartment(8, "Отдел организации труда")
console.log("")


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterprise(enterprise_id) {
    enterprises_new = enterprises_new.filter((item) => {if (item.id != enterprise_id) return item})
}

console.log("Task 7")
console.log("")
console.log("liquidation of the Enterprise(5)")
deleteEnterprise(12)
console.log(enterprises_new)
console.log("")


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function deleteDepartment(department_id) {
    for (let enterprise of enterprises_new) {
        enterprise.departments = enterprise.departments.filter((item) => {if (!(item.id == department_id && item.employees_count == 0)) return item})
        console.log(enterprise.departments)
    }

}

console.log("Task 8")
console.log("")
console.log("Liquidation of the Department(9)")
deleteDepartment(9)
console.log("")


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function moveEmployees(from_id, to_id) {
    for (let enterprise of enterprises_new) {
        let from_dep = enterprise.departments.find((item) => {if (item.id == from_id) return item})
        let to_dep = enterprise.departments.find((item) => {if (item.id == to_id) return item})
        if (from_dep && to_dep) {
            console.log(enterprise.name, from_dep, to_dep)
            to_dep.employees_count = to_dep.employees_count + from_dep.employees_count
            from_dep.employees_count = 0
            console.log(enterprise.name, from_dep, to_dep)
        }  
    }
}

console.log("Task 9")
console.log("")
console.log("Transferring employees from one department (7) to another (8)")
moveEmployees(7, 8)
console.log("")
