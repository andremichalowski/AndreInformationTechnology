//Demo dogpark rules

//1. Create a dog class constructor (name, breed, email)
class Dog {
    constructor(name, breed, email) {
        this.name = name;
        this.breed = breed;
        this.email = email;
    }
}

//2. Create a Dog Park class constructor (name, location, dogs (that holds dogs))
class DogPark {
    constructor(name, location, dogs = []) {
        this.name = name;
        this.location = location;
        this.dogs = dogs;
    }
    //3. Register Dog fxn
        //3.a Validation: Name + email check
        //3.b Validation: Email already registered?
        //3.c Update dogs: Add dog to array
    registerDog(dogToRegister) {
        if ( !dogToRegister.name || !dogToRegister.email ) {
            console.error('Name or email invalid!');
            return false;
        }
        for (const d of this.dogs) {
            if (d.email === dogToRegister.email) {
                console.log(`The email ${dogToRegister.email} doesn't exist!`);
            }
            return false;
        }
        this.dogs.push(dogToRegister);
        console.log(`Registered ${dogToRegister.name}`);
        return true;
    }
    
    listDogs() {
        if (this.dogs.length === 0) {
            console.log(`No dogs registered to ${this.name}`);
        }
        for (const d of this.dogs) {
            console.log(`Name: ${d.name}, Email: ${d.email}`);
        }
        return true;
    }
    //4. List Dogs fxn
        //4.a If no dogs...
        //4.b Loop and print dogs

}