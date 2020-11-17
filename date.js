
    
    exports.getDate = function() {
        
        let options = {
            weekday: "long",
            month: "long",
            day: "2-digit",
        };
    
        let today = new Date();
        
        return today.toLocaleDateString("en-US", options);
    }

