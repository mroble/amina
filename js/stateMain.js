var StateMain={    
    
   preload:function()
    {
    	game.load.sprite("blanktile", "images/tiles/aminaletter.png");
       
    },
    
    create:function()
    {
    var blanktile = game.add.sprite(50,50, "blanktile");
       var blanktile = game.add.sprite(50,62,"blanktile");
        var blanktile = game.add.sprite(50,74,"blanktile");
        
        //this.tileGroup = game.add.group();
        //this.tileGroup.add("blanktile");
        //this.tileGroup.add("blanktile");
        //this.tileGroup.add("blanktile");

        //this.tileGroup.x = game.world.centerX - this.tileGroup.width/2;
        //this.tileGroup.y = game.height - 300;


    },
    
    update:function()
    {       
        //constant running loop
    }    
    
}