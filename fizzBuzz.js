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

    writeBuzz(aNumber){
        let returnString = "";
        if(aNumber%5 === 0){
            returnString = "Buzz";
        }
        
        return returnString;
    }
    
    writeFizzBuzz(aNumber){
        let returnString = "";

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
        const aNumberIsNine = 9;

        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumberIsNine);

        expect("Fizz").toBe(numberDivisibleByThree);
    });

    it("Writes Fizz when a number is divisible by three", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumber = 1566;

        const numberDivisibleByThree = fizzBuzz.writeFizz(aNumber);

        expect("Fizz").toBe(numberDivisibleByThree);
    });

    it("Writes Buzz when a number is five", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumberIsFive = 5;

        const numberDivisibleByFive = fizzBuzz.writeBuzz(aNumberIsFive);

        expect("Buzz").toBe(numberDivisibleByFive);
    });

    it("Writes Buzz when a number is ten", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumberIsTen = 10;

        const numberDivisibleByFive = fizzBuzz.writeBuzz(aNumberIsTen);

        expect("Buzz").toBe(numberDivisibleByFive);
    });

    it("Writes Buzz when a number is fiften", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumberIsFifteen = 15;

        const numberDivisibleByFive = fizzBuzz.writeBuzz(aNumberIsFifteen);

        expect("Buzz").toBe(numberDivisibleByFive);
    });

    it("Writes Buzz when a number is divisible by five", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumber = 2145;

        const numberDivisibleByFive = fizzBuzz.writeBuzz(aNumber);

        expect("Buzz").toBe(numberDivisibleByFive);
    });

    it("Writes FizzBuzz when the number is divisible by both three and five", () => {
        const fizzBuzz = new FizzBuzz();
        const aNumber = 2145;

        const numberDivisibleByThreeAndFive = fizzBuzz.writeFizzBuzz(aNumber);

        expect("FizzBuzz").toBe(numberDivisibleByThreeAndFive);
    });
    
});