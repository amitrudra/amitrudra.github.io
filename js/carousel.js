var	AI = (function()
{
    function initializer()  { AI.carousel.init(); }
    function destroy()      { AI.carousel.destroy(); }
    return                  { init: initializer, destroy: destroy }
})( window );

AI.carousel = (function()
{
	var scrollPos;
	function initializer(){ $("#carousel").imagesLoaded(initScroller); }
	function initScroller()
    {
		var wrapper     = $("#carousel"),
			$ul         = wrapper.find("> ul"),
			imgWidth    = $ul.find("img:eq(0)").width(),
			qtty        = $ul.find("li").length;
		$ul.css({ width: imgWidth*qtty });
		$ul.find("li").find("img").addClass("visible");
		handleScroller();
		$(".mCSB_dragger").hide();
	}

	function handleScroller()
    {
		var wrapper     = $("#carousel"),
			qtty        = wrapper.find("li").length,
			imgWidth    = wrapper.find("img").width(),
			elPos, 
            rest;
		wrapper.mCustomScrollbar({
		      horizontalScroll:true,
		     autoHideScrollbar:true,
		    contentTouchScroll:true,
		             callbacks:
                     {
                         onScroll:function(){ wrapper.find(".mCSB_dragger").show(); }
			         }
		});

		if( !Modernizr.touch ) wrapper.find("figure").each( function() { $(this).hoverdir(); } );

        // handle keyboard
		$("body").keydown(function(e)
        {
			rest = wrapper.find(".mCSB_container").width()-$(window).width();
			if (e.which == 37)
            {
				// previous
				if(scrollPos > 0) scrollPos--;
				else return false;
				elPos = wrapper.find("li:eq(" + scrollPos + ")").position().left;
			}
			if (e.which == 39)
            {
				// next
				elPos = (wrapper.find("li:eq(" + (scrollPos+1) + ")").position().left);
				if(elPos > rest + imgWidth) return false;
				if(scrollPos < qtty) scrollPos++;
				else return false;	
			}
		});

        // prevent img dragging
		$("#carousel img, #carousel a").on("mousedown", function(e){
		    e.preventDefault();
		});
	}

	function destroy()
    {
		$("#carousel").off("imagesLoaded");
		$("#carousel img, #carousel a").off("mousedown");
        $("body").off("keydown");
	}

	return { init: initializer, destroy: destroy };
})();