function Main() {
    /* Called once. Put your one-time initializing here. */
    this.setup = function() {
    }
    
    /* Called each gametick. Put your gamelogic here. */
    this.update = function() {
    }

    /* Called each gametick after update(). Put your drawing here. */
    this.draw = function() {
    }
}

window.onload = function() {
    jaws.start(Main)
}