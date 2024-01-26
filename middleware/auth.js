

const auth = (req,res,next) => {
    try{

    }catch(err){
        console.log(err.message);
        res.status(403).json({
            success: false,
            message: "Auth Failed"
        })
    }
}