({
	onClick : function(cmp, event, helper) {
        const name = cmp.get("v.id");
        const on = true;
        const myEvent = cmp.getEvent("change");
        myEvent.setParams({name, on}).fire();
	}
})