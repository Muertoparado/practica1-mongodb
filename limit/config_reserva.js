import rateLimit from 'express-rate-limit';
export let limitReserva = () =>{
    return rateLimit({
        windowMs:30* 1000,
        max: 6,
        standardHeaders: true,
        legalcyHeaders: false,
        skip: (req,res)=>{
            if(req.headers["content-length"]>250){
                res.status(413).send({
                    status:413,
                    message: "el tamano es incorrecto"
                });
                return true;
            }
        },
        message:(req,res)=>{
            res.status(429).send({
                status:429,
                message:"limite error "
            })
        }
    })
}