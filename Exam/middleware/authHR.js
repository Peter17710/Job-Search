import Jwt from 'jsonwebtoken'


export const authHr = (req, res, next) => {
    let { token } = req.headers
    
    Jwt.verify(token, "app", (err, decoded) => {
        if (err || req.body.role != "Company_Hr") {
            res.json({ message: "invalid token" })
        }else{
            req.user = decoded
            next()
        }
    })
}

export default authHr;