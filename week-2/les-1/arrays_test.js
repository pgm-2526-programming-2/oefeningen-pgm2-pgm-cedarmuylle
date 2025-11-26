// questions:
// - Waarom staat er vaak 'index' bij de methode parameters (in de github code), als dit niet nodig lijkt?
// - Welke methodes vervangen de originele array, en welke maken een kopie? 
//      -> Heeft dit te maken met Pass By Value/Reference? 
// - bij subjectMapReduce, waarom wordt het subject als key 'ingesteld'? Ik zie niet waar dit gebeurt.
//      -> volgens de console.log is dit al voor lijn 22

const studentsAlt = [
    { name: "Alice", age: 25, subject: "Math" },
    { name: "Bob", age: 30, subject: "Science" },
    { name: "Charlie", age: 28, subject: "Math" },
];


const subjectMapReduce = studentsAlt.reduce((map, student) => {
    const subject = student.subject;
    map[subject] = map[subject] || [];

    console.log(map[subject]);
    console.log("   -   ");

    //Hier
    console.log(map);
    console.log("   ---   ");

    map[subject].push(student);

    console.log(map[subject]);
    console.log("   -----     ");

    console.log(map);
    console.log("   -----------    ");

    return map;
}, {});

console.log("Subject map (loop):", subjectMapReduce);