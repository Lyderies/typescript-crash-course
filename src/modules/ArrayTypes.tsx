

const ArrayTypes = () => {

    const person = {
        name: "Maximilian",
        age: 30,
        hobbies: ['Sports', "Cooking"]
    };

    let favoriteActivities: any[];
    favoriteActivities = ['sports', 1, 4, 'Taro'];

    console.log(person.name)

    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
        // console.log(hobby.map()) // ERROR
    }

    return (
        <div>
            
        </div>
    )
}

export default ArrayTypes
