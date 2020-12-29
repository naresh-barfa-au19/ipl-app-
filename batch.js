var objArr = [
    {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
    {
        name: "naresh1",
        lName: "barfa1"
    }, {
        name: "naresh2",
        lName: "barfa2"
    }, {
        name: "naresh3",
        lName: "barfa3"
    }, {
        name: "naresh4",
        lName: "barfa4"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    }, {
        name: "naresh",
        lName: "barfa"
    },
]

console.log(objArr.length)

for (let i = 1; i < objArr.length + 1; i = i + 10) {
    let k = i - 1
    var newArr = objArr.slice(k, k + 10);
    console.log(newArr)
}

//var newArr = objArr.filter((data, index) => {
 //   data.slice(index, index + 10)

//})

//console.log(newArr)
