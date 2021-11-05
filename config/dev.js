const path = require('path')
const extensions = require ('./extensions')



const devConfig = {

    remoteServer: 'http://localhost:3333' ,
    extensions,

    symetricKeyPath: path.join(__dirname, '..', 'secret.key'),
    privateKeyPath: path.join(__dirname,'..','private.key'),
    passPhrasePath:path.join(__dirname, "..","passPhrase.key")
}

module.exports = devConfigd