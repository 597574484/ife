;(function(win, doc, undefined){
    function Game(){
        var map = null;
        var ctx = null;
        this.init();
    }
    Game.prototype = {
        init : function(){
            this.drawMap();
            doc.body.appendChild(this.map);
        },
        drawMap : function(){
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width  = win.screen.width;
            canvas.height = win.screen.height;
            this.map = canvas;
            this.ctx = ctx;
        },

    }

    window.Game = Game;
})(window,document);