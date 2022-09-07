/*                                                                                        *            
 *                                                                                        *
 *   the files in the 'repositories' folder will be responsible for handling the DB data  *
 *   os arquivos da pasta 'repositories' será responsavel em manipular os dados do Bd     *                                                                              *
 *                                                                                        */

const {readFile, writeFile} = require('fs/promises')
class HeroRepository {
    constructor({file}) {
        this.file = file;
    }

    /*  acessando os dados  *
     *  accessing the data  */
     
    async _currentFileContent(){
        return JSON.parse(await readFile(this.file));
    }

    /* lendo os dados   *
     * reading the data */

    async find(itemId){
        const all = await this._currentFileContent()
        if(!itemId) return all
        return all.find(({id}) => itemId === id)
    }

    async create(data){
        const currentFile = await this._currentFileContent()
        currentFile.push(data)

        await writeFile(this.file, JSON.stringify(currentFile))

        return data.id
    }
}

module.exports = HeroRepository;

// const heroRepository = new HeroRepository({
//     file: './../../database/data.json'
// })

// heroRepository.find(1).then(console.log).catch(error => console.log('error', error))

// heroRepository.create({id:2 , name: 'Rapaz'})
//     .then(console.log).catch(error => console.log('error', error))