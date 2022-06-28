let fs = require("fs");
const users = require("./task2.json")
const Name = users.map((item) => item["name"])

function SelectData(item, index) {
    if (index == Name.indexOf(item["name"]))
        return item
}
const UniqueName = users.filter(SelectData)

UniqueName.forEach((item) => console.log("Уникальное Имя-", item["name"]))