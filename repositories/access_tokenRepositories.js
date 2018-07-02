let BaseRepository = require("./BaseRepository");

class AccessTokenRepository extends BaseRepository {
    constructor() {
        super('access_tokens');
    }

}

module.exports = AccessTokenRepository;