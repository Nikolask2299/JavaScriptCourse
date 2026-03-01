

function getUnionValue(array1, array1) {
    let res = []

    set1 = new Set(array1)
    set2 = new Set(array2)
    
    set1.forEach(function(value) {
      if (set2.has(value)) {
        res.push(value)
      }
    })

    return res
}

function getCountElem(array) {
    map = new Map()

    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1)
        } else {
            map.set(array[i], 1)
        }
    }

    return map
}

class Student {
    #FirstName
    #LastName
    #Group

    constructor(FirstName, LastName, Group) {
        this.#FirstName = FirstName
        this.#LastName = LastName
        this.#Group = Group
    }

    getFullName() {
        return this.#FirstName + ' ' + this.#LastName
    }

    getGroup() {
        return this.#Group
    }
}
   
function getCountInMaxGroup(array) {
    map = new Map()

    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i].getGroup())) {
            map.set(array[i].getGroup(), map.get(array[i].getGroup()) + 1)
        } else {
            map.set(array[i].getGroup(), 1)
        }
    }

    maxGr = 0
    maxCount = 0

    map.forEach(function(value, key) {
        if (value > maxCount) {
            maxCount = value
            maxGr = key
        }
    })

    return `${maxGr}: ${maxCount}`
}

array1 = [4, 7, 8, 9, 77, 10]
array2 = [1, 2, 7, 8, 9, 10]
array3 = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]

console.log(getUnionValue(array1, array2))
console.log(getCountElem(array3))

stuarray = [
        new Student('Ivan', 'Ivanov', 1),
        new Student('Petr', 'Petrov', 2),
        new Student('Sidor', 'Sidorov', 1),
        new Student('Vasily', 'Vasiliev', 2),
        new Student('Sergey', 'Sergeev', 1),
    ]

console.log(getCountInMaxGroup(stuarray))



    










   
  
