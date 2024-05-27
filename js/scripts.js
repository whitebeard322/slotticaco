
    let faqs = document.querySelectorAll('[data-ques]');
    faqs.forEach(function(element) {
        element.addEventListener('click', function () {
            this.closest('[data-faq]').classList.toggle('open');
        });
    });
	document.querySelector('[href="#pll_switcher"]').addEventListener("click", function(e) {
	  e.preventDefault();
	  this.classList.toggle('open_pll');
	});
	
	const swiper = new Swiper('.swiper', {
		  // Optional parameters
		  direction: 'horizontal',
		  loop: true,

		  autoplay: {
		   delay: 5000,
		 },
		  pagination: {
			el: '.slider-dots',
		  },
		});
