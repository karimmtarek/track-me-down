var blocmetrics = {};

//blocmetrics.track("eventName-123", [{key: "prop_1", value: "value_1"}, {key: "prop_2", value: "value_2"}])

(function(){
    blocmetrics.xtrack = function(eventName, eventProperties){
        var api_url = "http://127.0.0.1:3000/events";
        var eventData = {
            event: {
                name: eventName,
                source_url: window.location.hostname
            },
            properties: eventProperties
        };
        var r = new XMLHttpRequest();
        r.open("POST", api_url, true);
        r.setRequestHeader('Content-Type', 'application/json');
        r.onreadystatechange = function () {
            // I'm not sure what should go in here?!
        };
        r.send(JSON.stringify(eventData));

    };
    //--------------------------------------------------------
    blocmetrics.track = function(eventName, eventProperties){
        var api_url = "http://127.0.0.1:3000/events";
        var eventData = {
            event: {
                name: eventName,
                source_url: window.location.hostname
            },
            properties: eventProperties
        };
        $.ajax({
            method: 'POST',
            url: api_url,
            data: eventData,
            error: function(e){console.log('Error: ' + e);}
        });
    };
}());