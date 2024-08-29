import Jwt from 'jsonwebtoken'



const auth = (req, res, next) => {
    let { token } = req.headers
    Jwt.verify(token, "app", (err, decoded) => {
        if (err) {
            res.json({ message: "invalid token" })
        }else{
            req.user = decoded
            next()
        }
    })
}

export default auth ; 