var blocmetrics = {};

//blocmetrics.track("eventName-123", [{key: "prop_1", value: "value_1"}, {key: "prop_2", value: "value_2"}])

(function(){
    blocmetrics.track = function(eventName, eventProperties){
        var eventData = {
            event: {
                name: eventName,
                source_url: window.location.hostname
            },
            properties: eventProperties
        };

        $.ajax({
            method: 'POST',
            url: 'http://127.0.0.1:3000/events',
            data: eventData,
            error: function(e){console.log('Error: ' + e);}
        });
    }
}());