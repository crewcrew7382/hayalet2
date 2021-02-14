namespace SpriteKind {
    export const bina = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    emma,
    assets.animation`myAnim2`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    if (game.runtime() > 10000) {
    	
    }
})
tiles.onMapLoaded(function (tilemap2) {
    emma = sprites.create(assets.image`düz`, SpriteKind.Player)
    scene.cameraFollowSprite(emma)
    controller.moveSprite(emma)
    tiles.placeOnRandomTile(emma, assets.tile`myTile5`)
})
function seviyeAtla () {
    tiles.loadMap(seviyeler[guncelSeviye])
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    emma,
    assets.animation`myAnim0`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    emma,
    assets.animation`myAnim1`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    emma,
    assets.animation`myAnim`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    seviyeGec(1)
    guncelSeviye = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath8, function (sprite, location) {
	
})
function seviyeGec (seviye: number) {
    tiles.loadMap(seviyeler[seviye])
    scene.cameraShake(4, 100)
    if (guncelSeviye == 0) {
        for (let konum of tiles.getTilesByType(assets.tile`myTile8`)) {
            yeni_ev = sprites.create(assets.image`myImage9`, SpriteKind.bina)
            tiles.placeOnTile(yeni_ev, konum)
        }
        for (let konum of tiles.getTilesByType(assets.tile`myTile9`)) {
            yeni_ev = sprites.create(assets.image`myImage7`, SpriteKind.bina)
            tiles.placeOnTile(yeni_ev, konum)
        }
        for (let konum of tiles.getTilesByType(assets.tile`myTile10`)) {
            yeni_ev = sprites.create(assets.image`myImage7`, SpriteKind.bina)
            tiles.placeOnTile(yeni_ev, konum)
        }
        for (let konum of tiles.getTilesByType(assets.tile`myTile11`)) {
            yeni_orman = sprites.create(assets.image`Temporary asset0`, SpriteKind.bina)
            tiles.placeOnTile(yeni_orman, konum)
        }
        for (let konum of tiles.getTilesByType(assets.tile`myTile12`)) {
            yeni_ev = sprites.create(assets.image`myImage11`, SpriteKind.bina)
            tiles.placeOnTile(yeni_ev, konum)
        }
        for (let konum of tiles.getTilesByType(assets.tile`myTile13`)) {
            terminal = sprites.create(assets.image`myImage3`, SpriteKind.bina)
            tiles.placeOnTile(terminal, konum)
        }
    }
}
tiles.onMapUnloaded(function (tilemap2) {
    emma.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
	
})
let hareket = false
let terminal: Sprite = null
let yeni_orman: Sprite = null
let yeni_ev: Sprite = null
let emma: Sprite = null
let guncelSeviye = 0
let seviyeler: tiles.WorldMap[] = []
seviyeler = [tiles.createMap(tilemap`level4`), tiles.createMap(tilemap`level3`), tiles.createMap(tilemap`level5`)]
guncelSeviye = 0
seviyeGec(0)
let hayalet = sprites.createProjectileFromSide(assets.image`SagaGidenA1`, 50, 0)
hayalet.x = 200
hayalet.y = 483
game.onUpdate(function () {
    hareket = controller.up.isPressed() || controller.down.isPressed() || (controller.right.isPressed() || controller.left.isPressed())
    if (!(hareket)) {
        animation.stopAnimation(animation.AnimationTypes.All, emma)
    }
})
