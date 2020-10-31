const express = require('express');
const server = express();

const dataBase = [
    {
        "structure":{
            "tables": {
                "Filmes":"([Id] PRIMARY KEY, [Nome] TEXT)"
            }
        }
    }
]
server.get('/',function(res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    return res.json({data: dataBase});
})

server.listen({ port: process.env.PORT || 4000})