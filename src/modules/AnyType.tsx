const AnyType = () => {

    // const ADMIN = 0;
    // const READ_ONLY = 1;
    // const AUTHOR = 2;

    enum Role { ADMIN = "admin", READ_ONLY = 100, AUTHOR = 200};

    const person = {
        name: "Maximilian",
        age: 30,
        hobbies: ['Sports', "Cooking"],
        role: Role.ADMIN
    }
    // const person: {
    //     name: string;
    //     age: number;
    //     hobbies: string[];
    //     role: [number, string];
    // } = {
    //     name: "Maximilian",
    //     age: 30,
    //     hobbies: ['Sports', "Cooking"],
    //     role: [2, 'author']
    // };

    // person.role.push('admin');
    // person.role[1] = 10;

    // person.role = [0, 'admin', 'user']

    let favoriteActivities: string[]; // avoid any!
    favoriteActivities = ['sports'];

    console.log(person.name)

    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
        // console.log(hobby.map()) // ERROR
    }

    if (person.role === Role.AUTHOR) {
        console.log("Is read only")
    }

    return (
        <div>
            
        </div>
    )
}

export default AnyType