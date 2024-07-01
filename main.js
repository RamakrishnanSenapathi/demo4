const exp=require('express');
const { sequelize } = require('./model');
const {Service}=require('./Service/service');
const cors=require('cors')

const app=exp();

app.use(exp.json());
app.use(cors())
const ser=new Service();

app.post('/login',async(req,res)=>{
    await sequelize.sync();
    var body=req['body'];
    var email=body.Email;
    var password=body.Password;
    try{
        var result=await ser.login2(email,password);
        if(result== null){
            res.json({message:"no"})
        }
        else{
            res.json({message:"successfull"})
        }

    }
    catch(e){
        res.status(400);
        res.json({error:"not"})
    }
    
    
})

app.listen(3000,()=>{
    console.log("server is runing");
})