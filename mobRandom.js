const mobs = require('./mobRandom.json')

const getMob = () => {
    let i = Math.floor(Math.random() * hostileMobs.length)
    return hostileMobs[i]
}

const getRarestMob = (num, rarest) => {
    if (num == 0 || rarest == 0) {
        return mobs[rarest]
    }
    let attempt = Math.random() * 100;
    console.log(attempt)
    for (let i = 0; i < (rarest || mobs.length); i++) {
        if (attempt < mobs[i].rate) {
            return getRarestMob(num - 1, i)
        }
    }
    return getRarestMob(num - 1, rarest || mobs.length)
}

return     console.log(getRarestMob(10))

const randMob = (player, num) => {
    console.log(num)
    let location = player.getLocation()
    let X = location.getX()
    let Z = location.getZ() 
    let Y = location.getY()
    let mob = eval(`core.type('org.bukkit.entity.EntityType').${getMob()}`)
    for (let i = 0; i < num; i++) {
        location.setX(X + (((Math.random() - 0.5) * 2) * 10))
        location.setZ(Z + (((Math.random() - 0.5) * 2) * 10))
        location.setY(Y + 3)
        player.getWorld().spawnEntity(location, mob)
    }
}