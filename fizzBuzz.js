class FizzBuzz {

    writeFizz(){
        return "Fizz";
    }
}
describe("FizzBuzz", () => {
    it("Writes Fizz when the number is three", () => {
        //Arrange
        const aNumber = 3;
        const fizzBuzz = new FizzBuzz();
        //Act
        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumber);
        //Assert
        expect("Fizz").toBe(numberDivisibleByThree);
    });
});