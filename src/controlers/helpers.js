// Validations
export const numberValidation =  async function (req, res, next){
    
    if (!req.params.id.match(/^\d+$/)){
        res.status(400).send({msg: `The id can only be a whole number.`})
    }
    next();
}

export const primary_techValidation =  async function (req, res, next){
    
    if (!req.body.primary_tech){
        res.status(400).send({ERROR: {msg: 'You are missing an employee primary_tech'}, Location: 'Error inserting new record to Skills Table.'})
        return
    }
    next();
}
