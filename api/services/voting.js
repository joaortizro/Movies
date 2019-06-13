
import {emailStorage,movieStorage} from '../repositories/storage';

class VotingService {

    constructor (id,email){
        this.id=id;
        this.email=email;
    } 

    vote(){
        return new Promise((resolve,reject)=>{
            if(emailStorage[this.email]) reject(false);
            else if(movieStorage[this.id]){
                emailStorage[this.email]=true;
                movieStorage[this.id]+=1;
            }
            else{
                emailStorage[this.email]=true;
                movieStorage[this.id]=1;
                resolve(true);
            }
        })
    }
    results(){
        return new Promise((resolve,reject)=>{
            resolve(movieStorage);
        })
    }
} 


module.exports = VotingService;


