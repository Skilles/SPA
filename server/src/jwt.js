import { verify } from 'jsonwebtoken';

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']?.split(' ')[1];
    if (!token) {
        res.json({success: false, error: 'Invalid Token'})
    }
    verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
        if (err) res.json({success: false, error: 'Failed to Authenticate'});
        req.user = {
            id: decoded.id,
            email: decoded.email
        }
        next();
    });
}

export default verifyJWT;