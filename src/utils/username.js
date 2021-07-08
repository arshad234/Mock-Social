const ADJECTIVE=[
    'boundless',
    'plausible',
    'sleepy',
    'electronics',
    'dangerous',
    'slim',
    'purple'

]

const OBJECTS=[
   'puddle',
   'piano',
   'window',
   'bowl',
   'socks',
   'brocolli',
   'chalk'


]


function getRandomUsername(){
    const adj=ADJECTIVE[Math.floor(Math.random() * 7)]
    const obj=ADJECTIVE[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}`
    
}


module.exports={
    getRandomUsername
}
