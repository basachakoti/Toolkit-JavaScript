function phoneNumberDirectory(phoneNumbers) {
    let directory = new Map();
    phoneNumbers.forEach(entry => {
        // let slitPhoneNumber = phoneNumber.split(":");
        // map.set(slitPhoneNumber[0], slitPhoneNumber[1]);

        const [name, phoneNumber] = entry.split(":");
        directory.set(name, phoneNumber);
    });
    return directory;
}

const phoneNumbers = [
    "John:123-456-7890",
    "Jane:987-654-3210",
    "Joe:555-555-5555"
];

const result = phoneNumberDirectory(phoneNumbers);
console.log(result);