

const FunctionReturnTypes = () => {
    const add = (n1: number, n2: number) => {
        return n1 + n2;
    }

    const printResult = (num: number) => {
        console.log('Result: ' + num)
    }

    printResult(add(5, 12));

    return (
        <div>
            
        </div>
    )
}

export default FunctionReturnTypes
