const{Router} =require('express')
const{
    createAnonUser,
    getUserbyId,
    getUserbyUserName


}=require('../../controllers/users')




const route=Router()



route.get('/:id',async (req,res)=>{
    let user;

    if(isNaN(parseInt(req.params.id))){
        //When param is username

        user=await getUserbyUserName(req.params.id)
    }
    else{
        user=await getUserbyId(req.params.id)
    }

   if(user){
       res.status(200).send(user)
   }
   else{
       res.status(404).send({
           error:'NO such username or userid is found'
       })
   }
})


route.post('/',async(req,res) =>{
    const user=await createAnonUser()
    res.status(201).send(user)

})
 

module.exports={
     userRoutes:route
}