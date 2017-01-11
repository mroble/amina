isMobile=navigator.userAgent.indexOf("Mobile");
console.log("isMobile="+isMobile);

if (isMobile==-1) {
//desktop laptop

game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
} else {
//mobile device
game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
}