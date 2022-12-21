class FizzBuzz {

    writeFizz(aNumber){
        if(aNumber%3 === 0){

            return "Fizz";
        }
    }
}
describe("FizzBuzz", () => {
    it("Writes Fizz when the number is three", () => {
        //Arrange
        const fizzBuzz = new FizzBuzz();
        const aNumber = 3;
        //Act
        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumber);
        //Assert
        expect("Fizz").toBe(numberDivisibleByThree);
    });

    
});