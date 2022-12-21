class FizzBuzz {

    constructor(aNumber){
        this.aNumber = aNumber;
    }

    writeFizz(aNumber){
        let returnString = "";
        if(aNumber%3 === 0){
            returnString = "Fizz";
        }
        
        return returnString;
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

    it ("Writes Fizz when the number is nine", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumberisNine = 9;

        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumberisNine);

        expect("Fizz").toBe(numberDivisibleByThree);
    });

    it("Writes Fizz when a number is divisible by three", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumber = 1566;

        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumber);

        expect("Fizz").toBe(numberDivisibleByThree);
    });
});