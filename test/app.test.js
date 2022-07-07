const assert = require('chai').assert
const { greet,
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
} = require('../app')


const { itemList, itemsOver20Answer, itemList2, findItemsAnswer, salesData, salesData2 } = require('../data/data')

// GREET TESTS
describe('Greet Function', () => {
    it('should not be empty, name.', () => {
        const result = greet('')
        assert.equal('Name should not be empty!', result)
    })
    it('should be a valid string.', () => {
        const result = greet(545121)
        assert.equal('Please enter valid name!, error entry!', result)
    })
    it('should be valid.', () => {
        const result = greet('Yonela')
        assert.equal('Hello Yonela', result)
    })
})

// FROM BELLVILLE TESTS
describe('Is From Bellville', () => {
    it('should return all that start with CY', () => {
        const result = isFromBellville('CY 900, CY 678 543, CY 34567, CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')
        assert.deepEqual(result, ['CJ 678 543', 'CJ 67890'])
    });
    it('should return false if input not equal to string', () => {
        const result = isFromBellville(0)
        assert.equal(result, false)
    })
})

// REGISTRATION NUMBER CHECK TESTS
describe('Registration Check', () => {
    it('should not be empty', () => {
        const result = regCheck('')
        assert.equal('enter registration number!', result)
    });
    it('should be aphanumerics', () => {
        const result = regCheck(54233)
        assert.equal('enter in alphanumerics', result)
    });
    it('should return true if registration ends with location', () => {
        const result = regCheck('15236 CY', 'CY')
        assert.equal(true, result)
    });
    it('should return false if registration do not end with location', () => {
        const result = regCheck('15236 CA', 'CY')
        assert.equal(false, result)
    });
})

// COUNT REGISTRATION NUMBERS
describe('Count Registration Numbers', () => {
    it('should be a string', () => {
        const result = countRegNumber(123)
        assert.equal("invalid input", result)
    });
    it('should return total length', () => {
        const result = countRegNumber('CA 123 540')
        assert.equal(1, result)
    });
    it('should return total length when multiple is entered', () => {
        const result = countRegNumber('CY 900, CY 678 543, CY 34567, CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')
        assert.equal(8, result)
    });
})

// IS WEEK DAY
describe('Is Weekday', () => {
    it('should not be empty', () => {
        const result = isWeekday('')
        assert.equal("Please enter weekday!", result)
    });
    it('should not be numbers', () => {
        const result = isWeekday(2531)
        assert.equal('Please enter a valid weekday!', result)
    });
    it('should not be weekend', () => {
        const result = isWeekday('Saturday')
        assert.equal(false, result)
    });
    it('should be any weekday', () => {
        const result = isWeekday('Wednesday')
        assert.equal(true, result)
    });
    it('should be any weekday', () => {
        const result = isWeekday('MONDAY')
        assert.equal(true, result)
    });
})

// Years ago function
describe('Years Ago', () => {
    it('should take four numbers', () => {
        const result = yearsAgo(20144)
        assert.equal(result, 'enter four numbers')
    });
    it('should return accurate years ago', () => {
        const result = yearsAgo(2015)
        assert.equal(result, yearsAgo(2015))
    });
})

// Allpaarl function
describe('All From Paarl', () => {
    // Should return true if answer are right
    it('should return all that start with CJ', () => {
        const result = allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')
        assert.deepEqual(['CJ 678 543', 'CJ 67890'], result)
    });
    it('should return false if input not equal to string', () => {
        const result = allPaarl(0)
        assert.equal(false, result)
    })
    it('should return false if input not equal to string', () => {
        const result = allPaarl('')
        assert.equal('No registration number!', result)
    })
})

// Count all From Town test function
describe('Count All From Town', () => {
    // check if it's empty
    it('should not accept empty registration number input', () => {
        const result = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', '')
        assert.equal("enter valid input!", result)
    });
    it('should only take string as input data type', () => {
        const result = countAllFromTown(144)
        assert.equal('enter valid number plate!', result)
    });

});

// Transport Fee test function
describe('Transport Fee', () => {
    it('should return R20 for morning', () => {
        const result = transportFee('morning')
        assert.equal('R20', result)
    });
    it('should return R10 for afternoon', () => {
        const result = transportFee('afternoon')
        assert.equal('R10', result)
    })
    it('should be free for nightshift', () => {
        const result = transportFee('nightshift')
        assert.equal('free', result)
    });
    // invalid
    it('should return invalid for non-string data types', () => {
        const result = transportFee(50)
        assert.equal('invalid input!', result)
    })
})

// Total Phone Bill Test Function
describe("Total Phone Bill", () => {
    // invalid input
    it("should not be empty", () => {
        const result = totalPhoneBill('')
        assert.equal(result, 'invalid input!')
    });
    // should be a number
    it('should be a number', () => {
        const result = totalPhoneBill(70)
        assert.equal(result, true)
    });
    it('should be a float', () => {
        const result = totalPhoneBill(1.99)
        assert.equal(result, true)
    });
    it('should not be letters', () => {
        const result = totalPhoneBill('Yonela')
        assert.equal(result, 'not a valid input!')
    })
})

// From where function
describe('From Where', () => {
    it('should return corresponding registration name', () => {
        const result = fromWhere('CA')
        assert.equal('Cape Town', result,)
    })
    it('should be a string', () => {
        const result = fromWhere(10);
        assert.equal("invalid input!", result)
    });
    it('should not be less than 2 or greater than 3', () => {
        const result = fromWhere('C');
        assert.equal('should not be less than 2 or greater than 3', result)
    });

})

// Items over 20 test 
describe('Over Twenty', () => {
    it('should return items over 20', () => {
        const result = findItemsOver20(itemList);
        assert.deepEqual(result, itemsOver20Answer)
    });
    it('should not accept string', () => {
        const result = findItemsOver20('This is a string!')
        assert.equal(result, "Input should be a list not a string")
    })
    it('should not accept a number', () => {
        const result = findItemsOver20(20)
        assert.equal(result, 'Input should not be a number, enter list')
    })
});

//Find items over function
describe('Find Items Over', () => {
    it('should return items greater than given price', () => {
        let result = findItemsOver(itemList2, 15)
        assert.deepEqual(result, findItemsAnswer)
    });
    it('should be a number; limit', () => {
        const result = findItemsOver(itemList2, 'Testing')
        assert.equal(result, 'invalid data, error!')
    })
    it('should not be an emty string', () => {
        const result = findItemsOver('', 20)
        assert.equal('No items!', result)
    })
});

// Most Profitable Department Function
describe('Most Profitable Department', () => {
    it('should return the most protable environment', () => {
        const result = mostProfitableDepartment(salesData)
        assert.equal(result, 'outdoor')
    })
    it('should return the most profitable department', () => {
        const result = mostProfitableDepartment(salesData2)
        assert.equal(result, 'electronics')
    })
    it('should return the most profitable day', () => {
        const result = mostProfitableDay(salesData2)
        assert.equal(result, 'Wednesday')
    })

})