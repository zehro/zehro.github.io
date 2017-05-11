$.scrollify({
	section:".home,.design",
	interstitialSection : ".about,.photo,.video,.software,.contact",
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
$(document).ready(function() {
		$('#anchor-tag').lightGallery();
});
