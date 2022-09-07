const HeroRepository = require('./../repositories/heroRepository.js')
const HeroService = require('./../services/heroService.js')

const {join} = require('path')
const filename = join(__dirname, '../../database', 'data.json');

const generateInstance = () => {
    const heroRepository = new HeroRepository({
        file: filename
    })
    const heroService = new HeroService({
        heroRepository
    })

    return heroService
}

module.exports = {generateInstance}

// generateInstance().find().then(console.log)