var app = require("express")();
var http = require("http").Server(app);

//GPIO
var Gpio = require('pigpio').Gpio,
led = new Gpio(18, {mode: Gpio.OUTPUT});
led.digitalWrite(0);

app.get("/light/:status", function(req, res){
    var status = (req.params.status).toLowerCase();
    console.log("light " + status);
    if(status == "on"){
        led.digitalWrite(1);
    } else if (status == "off"){
        led.digitalWrite(0);
    }
    res.send("<h1>Light " + status + "</h1>");
});

http.listen(8080, function(){
    console.log("listening on *:8080");
});