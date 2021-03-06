// Union Type Module

const UnionTypes = () => {

    const combine = (input1: number | string, input2: number | string) => {
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number') {
            result = input1 + input2;
        } else {
            result = input1.toString() + input2.toString();
        }   
        return result;
    } 

    const combineAges = combine(30, 36);
    console.log(combineAges)

    const combinedNames = combine('max', 'anna')
    console.log(combinedNames)

    return (
        <div>
            
        </div>
    )
}

export default UnionTypes
