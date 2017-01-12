var StateTitle={    
    
   preload:function()
    {
       game.load.image("logo","images/aminalogo.png");
    },
    
    create:function()
    {
        this.logo=game.add.sprite(game.world.centerX,180, "logo");
        this.logo.anchor.set(0.5, 0.5);
    },
    
    update:function()
    {       
        
    }    
    
}