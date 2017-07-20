

let json = '{"age": 30 }'

try {
    
    let user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError('Incomplete data: no name');
    }

    console.log(user.name);

} catch (error) {
    console.log('Json Error: ' + error);
}

