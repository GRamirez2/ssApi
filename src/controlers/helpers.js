// Validations
export const numberValidation =  async function (req, res, next){
    
    if (!req.params.id.match(/^\d+$/)){
        res.status(400).send({msg: `The id can only be a whole number.`})
    }
    next();
}
