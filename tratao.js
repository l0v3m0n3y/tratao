class tratao{
    constructor(){
        this.api = "https://xcr.tratao.com/api/ver2/exchange"
        this.headers={"Accept-Encoding":"gzip","Connection":"Keep-Alive","countryCode":"RU","Host":"xcr.tratao.com","language":"ru","User-Agent":"okhttp/3.3.0"}
    }
    async yahoo_latest(){
        let req=await fetch(`${this.api}/yahoo/latest`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async coin_history(day,currency){
        let req=await fetch(`${this.api}/coin/history?range=${day}&currency=${currency}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async get_crypto(from,to){
        let req=await fetch(`${this.api}/crypto/special/latest?from=${from}&to=${to}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {tratao};