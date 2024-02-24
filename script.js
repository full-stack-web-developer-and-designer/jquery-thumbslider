$(document).ready(function(){
	// Declare vars
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
	});
	
	// Set width
	$('#slides').width(totalWidth);
	
	// Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll){
		// Remove active class and add inactive
		$('li.product').removeClass('active').addClass('inactive');
		// Add active class to parent
		$(this).parent().addClass('active');
		
		var pos  = $(this).parent().prevAll('.product').length;
		
		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
		
		// Prevent default
		e.preventDefault();
		
		// Stop autoscroll
		if(!autoScroll) clearInterval(itvl);
	});
	
	// Make first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
	// Duration for auto scroll
	var duration = 5;
	var itvl = setInterval(function(){autoScroll()},duration*1000);
});
// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});