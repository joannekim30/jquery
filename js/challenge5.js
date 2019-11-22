


$("img").each(function() {
	$(this).mouseover(function() {
		$("#image").css("backgroundImage", "url('"+this.src+"')");
		$("#image").html(this.alt);
	})
	$(this).focus(function() {
		$("#image").css("backgroundImage", "url('"+this.src+"')");
		$("#image").html(this.alt);

	})
	$(this).mouseleave(function() {
		$("#image").css("backgroundImage", "url('')");
		$("#image").html("Hover over an image below");
	})

	$(this).blur(function() {
		$("#image").css("backgroundImage", "url('')");
		$("#image").html("Hover over an image below");

	})

})





