// person identitiy objects: name, age, zodiacs,
const person = {
    name: 'barkah',
    age: 18,
    zodiacs: 'pisces'
};

//return love array message based on name length

const getFinanceMessage = () => {
    const financeMessages = [
        "A surprise financial boost is on its way—keep an eye on your inbox and pockets!",
        "Your creativity will open new money-making opportunities soon!",
        "A small investment today could turn into something big in the near future!",
    ];

    if(person.name.length === 3) {
        return financeMessages[0];
    } else if(person.name.length === 4) {
        return financeMessages[1];
    } else if(person.name.length >= 5) {
        return financeMessages[2];
    } else {
        return "your name too short! please change name!";
    }
};


// return friendship message based on age

// return finance message based on zodiacs

// display all the message

const compileMessages = () => {
    console.log(`Hai ${person.name} your Finance condition for this month is: ${getFinanceMessage()}`)
};

compileMessages();