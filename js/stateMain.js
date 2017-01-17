var StateMain={    
    
   preload:function()
    {
    	game.load.image("blanktile", "images/tiles/aminaletter.png");
       
    },
    
    create:function()
    {
        var blanktile = game.add.sprite(0,0, "blanktile");
        var blanktile1 = game.add.sprite(35,0,"blanktile");
        var blanktile2 = game.add.sprite(120,0,"blanktile");
        
        this.tileGroup = game.add.group();
        this.tileGroup.add("blanktile");
        this.tileGroup.add("blanktile1");
        this.tileGroup.add("blanktile2");

        //this.tileGroup.x = game.width/2;
        this.tileGroup.y = game.height - 300;


    },
    
    update:function()
    {       
        //constant running loop
    }    
    
}