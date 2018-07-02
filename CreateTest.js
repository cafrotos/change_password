let db = require('./models');

//Các pass đã được mã hóa: 1. qwertyuiop  2. asdfghjkl  3. zxcvbnm 
let password1 = 'cXdlcnR5dWlvcA==';
let password2 = 'YXNkZmdoamts';
let password3 = 'enhjdmJubQ==';

db.users.bulkCreate([{
    userid: 1,
    usernames: "cafrotos",
    password: password1
}, {
    userid: 2,
    usernames: 'hotanhiu',
    password: password2
}, {
    userid: 3, 
    usernames: "vylleo",
    password: password3
}]).then(res => console.log("Thành công"));

db.access_tokens.bulkCreate([{
    userid: 1,
    access_token: "abcd", 
    is_revoked: true
}, {
    userid: 2, 
    access_token: "efgh",
    is_revoked: true
}, {
    userid: 3,
    access_token: "ijkl",
    is_revoked: true
}]).then(res => console.log("ôkê"));