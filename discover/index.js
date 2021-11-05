//os.walk
const path = require('path');
const { config } = require('process');
fs = require('fs')
config = require('../config')



function walk(callback){
    
    fs.readdir(config.startDirectory,function(err,files){
        if (!err){
            files.forEach(function(file){
                var filepath = path.join(config.baseDirectory, file)
                fs.stats(filepath,function(err,stats){
                    if(!err){
                        if(stats.isDirectory,file){
                            walk(callback)
                        }else if (stats.isFile()){
                            let ext = path.extname(filepath).replace('.','')
                            
                            let isWanted = config.extensions.find( (wanted)=>{
                                wanted== ext
                            })

                            if(isWanted) {
                                callback(filepath)
                            }

                        }
                    }
                })
            });
        }
    })
}