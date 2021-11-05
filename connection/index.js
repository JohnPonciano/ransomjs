"use strict";

const axios = require ('axios')
const {remoteServer} = require('../config/index');


class Connection {

    constructor(){

        this.http = axios.create({
                baseURL: remoteServer
        })
    }

    async registerMachine(machineInfo){
        return new Promise((resolve, reject)=>{
            this.http.post('/', machineInfo).then(({data})=>{
                resolve(data)
            }).catch(e => reject(e));

        })
    }


    async checkMachineStatus (uuid){
        return new Promise((resolve,reject)=>{
            this.http.get(`/?uuid=${uuid}`).then(({data:{privateKey,passPhrase}})=>{
                resolve({privateKey,passPhrase})
            }).catch(e => reject(e));
        })
    }

}



module.exports= Connection;