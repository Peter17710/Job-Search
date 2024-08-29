import Jwt from 'jsonwebtoken'


export const authUser = (req, res, next) => {
    let { token } = req.headers
    
    Jwt.verify(token, "app", (err, decoded) => {
        if (err || req.body.role != "User") {
            res.json({ message: "invalid token" })
        }else{
            req.user = decoded
            next()
        }
    })
}

export default authUser;