function mapToNegativize(arr) {
    const results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * -1)
    }
    return results
}

function mapToNoChange(arr) {
    const results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i])
    }
    return results
}

function mapToDouble(arr) {
    const results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * 2)
    }
    return results
}

function mapToSquare(arr) {
    const results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] ** 2)
    }
    return results
}

function reduceToTotal(arr, start=0) {
    let total = start
    for (let i = 0; i < arr.length; i ++) {
        total += arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true
        }
    }
    return false
}