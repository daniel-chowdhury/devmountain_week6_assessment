const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let test_array = [45, 66, 12, 34, 123, 56]
    test("check to see if shuffleArray returns an array", () => {
        
        let shuffled_array = shuffleArray(test_array)
        //console.log(shuffled_array + "is it working is it working")
        expect(Array.isArray(shuffled_array)).toBe(true)
    })
    test('check to see if array is shuffled or not')
    let first_value = test_array[0]
    let shuffled_array = shuffleArray(test_array)
    expect(shuffled_array[0]).not.toEqual(first_value)
})