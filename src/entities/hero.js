class Hero {
    constructor(id, name, age, power){
        this.id = Math.floor(Math.random() * 100) + Date.now();
        this.name = name;
        this.age = age; 
        this.power = power; 
    }

    isValidId() {
        const propertyNames = Object.getOwnPropertyNames(this);
        const amountInvalid = propertyNames
            .map(property => (!!!this[property]) ? null : `${property} is missing`)
            .filter(item => !! item)

        return {
            valid: amountInvalid.length ===0,
            arror: amountInvalid
        }
    }
}

module.exports = Hero 

// const hero = new Hero({name: 'Robson', age: 100, power:"SuperForça"})
// console.log('valid', hero.isValidId())
// console.log('valid', hero)