const singleData = {
    userid: "@id()",
    username: "@cname()",
    date: "@date()",
    avatar: "@image('200x200','red','#fff','avatar')",
    description: "@paragraph()",
    ip: "@ip()",
    email: "@email()"
}

const result = [];

for(let i = 0; i < 20; i++) {
    result.push(singleData)
}

module.exports = {
    error: 0,
    data: result
}