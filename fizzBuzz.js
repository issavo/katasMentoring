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
        const aNumberIsThree = 3;
        //Act
        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumberIsThree);
        //Assert
        expect("Fizz").toBe(numberDivisibleByThree);
    });

    it("Writes Fizz when the number is six", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumberIsSix = 6;

        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumberIsSix);

        expect("Fizz").toBe(numberDivisibleByThree);
    });
});