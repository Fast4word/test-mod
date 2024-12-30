player.onChat("mode-creative", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("mode-survival", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("mode-adventure", function () {
    gameplay.setGameMode(
    ADVENTURE,
    mobs.target(LOCAL_PLAYER)
    )
})
