const HeroRepository = require('./../repositories/heroRepository.js')
const HeroService = require('./../services/heroService.js')

const {join} = require('path')
const file = join(__dirname, '../../database', 'data.json');

const generateInstance = () => {
    const heroRepository = new HeroRepository({
        file
    })
    const heroService = new HeroService({
        heroRepository
    })

    return heroService
}

module.exports = {generateInstance}

// generateInstance().find().then(console.log)