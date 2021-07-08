const{Users}=require('../db/models')
const{getRandomUsername}=require('../utils/username')


async function createAnonUser(){
    const user=await Users.create({
        username:getRandomUsername()
    })

    return user
}

async  function getUserbyId(id){
    return await Users.findOne({where:{id}})
}

async function getUserbyUserName(username){
    return await Users.findOne({where:{username}})
}

module.exports={
    createAnonUser,
    getUserbyId,
    getUserbyUserName
}