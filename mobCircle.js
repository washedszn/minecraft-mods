const mobCircle = (player) => {
    let location = player.getLocation()
    let steps = 20;
    let X = location.getX()
    let Z = location.getZ() 
    let Y = location.getY()
    for (var i = 0; i < steps; i++) {
        let x = X + (5 * Math.cos(2 * Math.PI * (i / steps)));
        let z = Z + (5 * Math.sin(2 * Math.PI * (i / steps)));
        location.setX(x)
        location.setZ(z)
        location.setY(Y + 5)
        player.getWorld().spawnEntity(location, core.type('org.bukkit.entity.EntityType').CREEPER)
    }
}