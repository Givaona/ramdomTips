import app from '../index.js'
import bd from '../infra/bd.js'

export function tips(app, bd){
    app.get('/tips', (req, res)=>{
        const tipp = bd.tip;

        const  sendTip = Math.floor(Math.random()*tipp.length);
        res.send(tipp[sendTip])
        
    })
    
}