({
    onChange: function(cmp, event, helper) {
		var name = event.getParam("name");
        var message = {name, on: true, type: "TvShowsOnly"};
                                
		var vfOrigin = "https://" + cmp.get("v.vfHost");

        // TODO send message to Visualforce iframe
		var vfFrame = cmp.find("vfFrame").getElement().contentWindow;
        
        vfFrame.postMessage(message, vfOrigin);
    }
})