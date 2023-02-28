// it("Возводит x в степень n", function() {
//     let x = 5;
  
//     let result = x;
//     assert.equal(pow(x, 1), result);
  
//     result *= x;
//     assert.equal(pow(x, 2), result);
  
//     result *= x;
//     assert.equal(pow(x, 3), result);
// });

describe("pow", function() {
    it("5 в 1 степени должно равняться 5", function() {
        assert.equal(pow(5, 1), result);
    });

    it("5 во 2 степени должно равняться 25", function() {
        assert.equal(pow(5, 2), result);
    });

    it("5 в 3 степени должно равняться 125", function() {
        assert.equal(pow(5, 3), result);
    });
});