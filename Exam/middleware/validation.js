const validate = (schema) => {
    return (req, res, next) => {
        let { error } = schema.validate(req.body, { abortEarly: false })
        if (!error) {
            next()
        } else {
            res.json({ message: error.details })
        }
    }
}
export default validate ;