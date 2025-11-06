import jwt from 'jsonwebtoken'
export function authRequired(req,res,next){
    const header = req.header.authorization || ''
    const token = header.startWith('Bearer') ? header.slice(7) : null
    if(!token) return res.status(401).json({message: 'unauthorized'})
    try{
const decoded = jwt.verify(token, process.env.JWT_SECRET || 'devsecret')
req.user = decoded
next()
}
catch{
    return res.status(401).json({message:'invalid token'})
}
}
export function adminOnly(req,res,next){
    if (req.user?.role !=='admin') return res.status(403).json({message:'forbidden access'})
 next()
}