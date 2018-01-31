var events = (function() {
    var instance;

    function init() {
        // Variables y metodos privados.
        var topics = {};
        var hOP = topics.hasOwnProperty;
        return {

            // Variables y metodos publicos.			

            subscribe: function(topic, listener) {
                // Create the topic's object if not yet created
                if (!hOP.call(topics, topic)) topics[topic] = [];

                // Add the listener to queue
                // topic is the neme of the event
                var index = topics[topic].push(listener) - 1;

                // Provide handle back for removal of topic
                return {
                    remove: function() {
                        delete topics[topic][index];
                    }
                };
            },
            publish: function(topic, info) {
                // If the topic doesn't exist, or there's no listeners in queue, just leave
                if (!hOP.call(topics, topic)) return;

                // Cycle through topics queue, fire!
                topics[topic].forEach(function(item) {
                    item(info != undefined ? info : {});
                });
            }
        };
    };
    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function() {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };

})();