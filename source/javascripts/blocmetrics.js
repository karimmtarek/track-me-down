var blocmetrics = {};

(function(){
    blocmetrics.track = function(eventName, eventProperties){
        //var api_url = "http://127.0.0.1:3000/events";
        var api_url = "http://blocmetricz.herokuapp.com/events"
        var eventData = {
            event: {
                name: eventName,
                source_url: window.location.hostname,
                properties: eventProperties
            }
        };
        var r = new XMLHttpRequest();
        r.open("POST", api_url, true);
        r.setRequestHeader('Content-Type', 'application/json');
        r.send(JSON.stringify(eventData));
    };
}());