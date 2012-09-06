var showMessage = function(message) {
	alert(message);
};

var Search = (function() {
	var self = {
		doSearch: function() {
			$("#loading").dialog("open");
			if(!$("#location").val()) {
				showMessage("Location cannot be blank.");
				return false;
			}
			if($("#checkin").val() && !$("#checkin").val()) {
				showMessage("Cannot submit a checkin without checkout.");
				return false;
			}
			$.ajax("http://assets.airbnb.com/frontend/search_results.js", {
				dataType: "jsonp",
				jsonp: false,
				jsonpCallback: "search_results",
				success: function(data) {
					render($(data).map(function(k, v) {
						v.seq = k + 1;
						return v;
					}).get());
					$("#loading").dialog("close");
				},
				error: function() {
					showMessage("Something went wrong :(");
					$("#loading").dialog("close");
				}
			});
			return false;
		},
	};
	var templateString = $("#result-item-template").text();
	
	var render = function(data) {
		$("#search-result").show();
		$("#result-count-number").text(data.length);
		$("#result-items").html(Mustache.render(templateString, {items: data}));
	};
	return self;
})();

$(function() {
	$("#checkin, #checkout").datepicker();
	$("#search-form").submit(Search.doSearch);
	$("#loading").dialog({
		height: 140,
		modal: true,
		autoOpen: false
	});	
});