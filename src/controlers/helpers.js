// Validations
const numberValidation =  async function (req, res, next){
    
    if (!req.params.id.match(/^\d+$/)){
        res.status(400).send({ERROR: `The id can only be an whole number.`})
    }
    next();
}

module.exports = { numberValidation };