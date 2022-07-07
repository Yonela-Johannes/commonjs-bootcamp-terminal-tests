const greet = (name) => {
    const check = name == '' ? 'Name should not be empty!' : typeof name === "string" ? `Hello ${name}` : `Please enter valid name!, error entry!`
    return check
}
const isFromBellville = (regNo) => {
    const bellville = []
    if (typeof regNo !== 'string') {
        return false
    } else {
        const regList = regNo.split(',')
        const allRegNo = []
        regList.forEach(regNumbers => {
            if (regNumbers.includes('CJ')) {
                allRegNo.push(regNumbers)
            }
        })
        for (let i = 0; i < allRegNo.length; i++) {
            const list = allRegNo[i].trim()
            bellville.push(list)
        }
        return bellville
    }
}
const regCheck = (regNo, loc) => {
    if (regNo == "") {
        return 'enter registration number!'
    } else if (typeof regNo !== 'string') {
        return 'enter in alphanumerics'
    }
    if (regNo.endsWith(loc)) {
        return true;
    } else {
        return false
    }
}

// registration number function
const countRegNumber = regNo => typeof regNo !== 'string' ? "invalid input" : regNo.split(',').length

const isWeekday = (weekday) => {
    if (typeof weekday == 'number') {
        return 'Please enter a valid weekday!'
    } else {
        if (weekday.toLowerCase() == 'Monday'.toLowerCase() || weekday.toLowerCase() == 'Tuesday'.toLowerCase() || weekday.toLowerCase() === 'Wednesday'.toLowerCase() || weekday.toLowerCase() == 'Thursday'.toLowerCase() || weekday.toLowerCase() == 'Friday'.toLowerCase()) {
            return true
        } else if (weekday.toLowerCase() == '') {
            return "Please enter weekday!"
        } else if (weekday.toLowerCase() == 'Saturday'.toLowerCase() || weekday.toLowerCase() == 'Sunday'.toLowerCase()) {
            return false
        }
    }


}

const yearsAgo = (year) => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const result = year.length == 4 ? currentYear - year : 'enter four numbers'
    return result;
}

// ALL PAARL
const allPaarl = (regNo) => {
    const result = []
    const allRegNo = []
    if (regNo) {
        const regList = regNo.split(',')
        regList.forEach(regNumbers => {
            if (regNumbers.includes('CJ')) {
                allRegNo.push(regNumbers)
            }
        })
        for (let i = 0; i < allRegNo.length; i++) {
            const list = allRegNo[i].trim()
            result.push(list)
        }
    }
    else if (typeof regNo !== 'string') {
        return false
    } else {
        return 'No registration number!'
    }
    return result
}


// ALL FROM TOWN
const countAllFromTown = (regNo, numPlate) => {
    let res = []
    const result = []
    if (numPlate == '') {
        return "enter valid input!"
    } else if (numPlate !== 'string') {
        return 'enter valid number plate!'
    }
    else {
        const regNoList = regNo.split(',')
        for (var index = 0; index < regNoList.length; index++) {
            var list = regNoList[index]
            if (list.includes(numPlate)) {
                res = [...result, list]
            }
        }
    }
    return res.length
}

//TRANSPORT FEE
const transportFee = (shift) => {
    if (shift === '') {
        return 'insert value'
    } else if (typeof shift !== 'string') {
        return 'invalid input!'
    } else {
        if (shift === 'morning') {
            return 'R20'
        } else if (shift === 'afternoon') {
            return 'R10'
        } else {
            return 'free'
        }
    }
}


// total phone bill function
const totalPhoneBill = (data) => {
    let total = 0;
    let call = parseFloat('2.75')
    let smsAmount = parseFloat('0.65')
    if (data == '') {
        return 'invalid input!'
    } else if (typeof data === 'number') {
        return true
    }
    {
        if (typeof call == 'float' || typeof smsAmount == 'float') {
            return true;
        }
        if (typeof call !== 'float' || typeof call !== 'number' || typeof smsAmount !== 'number' || typeof smsAmount || 'float') {
            return 'not a valid input!'
        } else {
            let allData = data.split(',')
            let sortedData = allData
            let listData = sortedData.map(dataList => dataList.trimStart())
            let newList = listData.sort()
            let calls = newList.filter(totalCalls => totalCalls === "call")
            let sms = newList.filter(totalSms => totalSms === "sms")
            for (let i = 0; i < calls.length; i++) {
                total += call
            }
            for (let i = 0; i < sms.length; i++) {
                total += smsAmount
            }
            return `R${total.toFixed(2)}`
        }
    }
}

// FROM WHRERE
const fromWhere = (regNum) => {
    if (typeof regNum !== 'string') {
        return "invalid input!"
    } else if (regNum.length == 2 && typeof regNum == 'string') {
        if (regNum == 'CY') {
            return 'Bellville';
        } else if (regNum == 'CJ') {
            return 'Paarl';
        } else if (regNum === 'CA') {
            return 'Cape Town';
        } else {
            return 'Some other place!'
        }
    } else {
        return 'should not be less than 2 or greater than 3'
    }
}
// ITEMS OVER 20
const findItemsOver20 = (items) => {
    let higherQuantity = 20;
    let overTwentyList = []
    if (typeof items == 'string') {
        return "Input should be a list not a string"
    } else if (typeof items == 'number') {
        return 'Input should not be a number, enter list'
    } else {
        items.map(list => {
            if (list.qty > higherQuantity) {
                overTwentyList = [...overTwentyList, list]
            }
        });
        return overTwentyList
    }
}
// ITEMS OVER
const findItemsOver = (items, limit) => {
    if (typeof limit !== 'number') {
        return 'invalid data, error!'
    }
    else if (items === '') {
        return 'No items!'
    } else {
        let listItems = items
        let overLimit = []
        listItems.map(list => {
            if (list.qty > limit) {
                overLimit = [...overLimit, list]
            }
        });
        return overLimit
    }
}

const mostProfitableDepartment = (department) => {
    let salesResult = '';
    let dataListMaxSales = 0;
    department.map(item => {
        if (item.sales > dataListMaxSales) {
            const departmentName = item.department
            dataListMaxSales = item.sales
            salesResult = departmentName
            return salesResult
        }
    });
    return salesResult
}

const mostProfitableDay = (department) => {
    let profitableDay = '';
    let dataListMaxSales = 0;
    department.map(item => {
        if (item.sales >= dataListMaxSales) {
            dataListMaxSales = item.sales
            let dataListDay = item.day
            if (dataListDay === "Saturday" || dataListDay === "Sunday") {
                dataListMaxSales = ''
            }
            profitableDay = dataListDay
            return profitableDay
        }
    });
    return profitableDay
}

module.exports = {
    greet,
    isFromBellville,
    regCheck,
    countRegNumber,
    isWeekday,
    yearsAgo,
    allPaarl,
    countAllFromTown,
    transportFee,
    totalPhoneBill,
    fromWhere,
    findItemsOver20,
    findItemsOver,
    mostProfitableDepartment,
    mostProfitableDay

}