const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

// Variant 1 Стрелочные функции и метод forEach() для перебора всех элементов массива. 

const userArray = []
let i = 0
const searchUsers = (arrayUsers) => 
        arrayUsers.forEach(element => {
    if(element.registrationDate === '09.10.2021' || element.registrationDate === '10.10.2021') {
                    userArray[i++] = element
                }
});

searchUsers(users)
console.log(userArray)

// Variant 2  метод forEach() обходит каждый элемент в массиве и сравнивает дату регистрации при нахождении юзера выводит информацию о нём в строку

users.forEach(user => { 
    if(user.registrationDate == '10.10.2021') 
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' телефон ' + user.phone + ' зарегистрирован 10.10.2021')
    else if (user.registrationDate == '09.10.2021')
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' телефон ' + user.phone + ' зарегистрирован 09.10.2021')
})

// Variant 3 через метод filter, который фильтрует массив по дате регистрации

const userDate = users.filter((user) => { 
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        return user;
    }
})

console.log(userDate)

// Variant 4 классическая стрелочная функция с методом filter, но в консоль выводим нужных юзеров в строку 

const userDate1 = users.filter((user) => {
    if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
        console.log(user.firstName + '/' + user.lastName + '/' + user.phone + '/' + user.registrationDate)   
    }
})

// Variant 5 стрелочная функция методом forEach в одну строку

users.forEach(user => {
    if(user.registrationDate == '10.10.2021' || user.registrationDate == '09.10.2021') 
    console.log('Пользователь ' + user.firstName + ' ' + user.lastName + ' телефон ' + user.phone + ` зарегистрирован ${user.registrationDate}`)
})

// variant 6 цикл forEach через оператор If, с выводом данных пользователя 

function Users(item, index) {
    if (item["registrationDate"] == "09.10.2021" || item["registrationDate"] == "10.10.2021")
        console.log(item["firstName"], item["lastName"], item["phone"], item["registrationDate"])
}
users.forEach(Users)
