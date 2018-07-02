let BaseRepository = require("./BaseRepository");

class UserRepository extends BaseRepository {
    constructor() {
        super('users');
    }

    // async updateById(id, newUser){
    //     return await this._model.findById(id)
    //         .then(info => {
    //             if(info){
    //                 info.updateAttributes(newUser);
    //             }
    //             else throw Error("Can't find this id");
    //         })
    //         .catch(err => err);
    // }
}

module.exports = UserRepository;