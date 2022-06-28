import  bd  from "../infra/bd.js";
import Tipsm from "../models/tips_model.js";

export function create(app, bd){
    app.get("/create", (req, res) => {
        res.send({"New Tip":req.body})
    })
    
    
    app.post("/create", (req, res) => {
        const create = new CreateTip(req.body.title, req.body.content)
        bd.push(create)
        res.send({"Tip added" : req.body})
        })
}
