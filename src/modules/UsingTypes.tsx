// Using Types Module

const UsingTypes = () => {
    const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
        // console.log(typeof number1)
        // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        //     throw new Error('Incorrect Input')
        // }
        const result = n1 + n2;
        if (showResult) {
            console.log(phrase + result)
        } else {
        return result;}
    } 

    const number1 = 5; // 5.0
    const number2 = 2.8;
    const printResult = true;
    const resultPhrase = 'Result is: '

    add(number1, number2, printResult, resultPhrase);
    // const result = add(number1, number2, printResult, resultPhrase);
    // console.log(result)

    return (
        <div>
            {/* {result} */}
        </div>
    )
}

export default UsingTypes
