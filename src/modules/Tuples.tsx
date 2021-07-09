const Tuples = () => {

    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string];
    } = {
        name: "Maximilian",
        age: 30,
        hobbies: ['Sports', "Cooking"],
        role: [2, 'author']
    };

    // person.role.push('admin');
    // person.role[1] = 10;

    // person.role = [0, 'admin', 'user']

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

export default Tuples
