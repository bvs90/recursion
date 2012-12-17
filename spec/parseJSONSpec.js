// test cases are described in fixtures.js
describe("parseJSON", function(){

  it("should match the result of calling JSON.parse", function(){
    validStrings.forEach(function(test){
      var result = parseJSON(test);
      var expected = JSON.parse(test);
      var equality = _.isEqual(result, expected); // why can't we use `===` here?
      expect(equality).toBeTruthy();
    });
  })

  it("should error out sometimes", function(){
    invalidStrings.forEach(function(test){
      // expect(parseJSON(test)).toBe(undefined); // you can use this test if you'd prefer
      expect(function(){
        parseJSON(test);
      }).toThrow();
    });
  })

});
