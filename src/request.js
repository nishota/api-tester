import request from 'superagent';

class Request 
{
    constructor(url){
        this.url = url;
    }

    /**
     * get リクエスト
     */
    get() {
        return new Promise((resolve, reject)=>{
            request.get(this.url).end((err_,data_)=>{
                if(data_) {
                    console.log(data_);
                    resolve(data_);
                }
                reject(err_);
            });
        });
    }
    
    /**
     * post リクエスト
     * @param {*} data object
     */
    post(data){
        return new Promise((resolve, reject)=>{
            request.post(this.url).send(data).end((err_,data_)=>{
                if(data_){
                    resolve(data_)
                }
                reject(err_);
            });
        });
    }
}

export default Request;