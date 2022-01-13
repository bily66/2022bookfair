$('.plan-carousel').slick({
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				prevArrow: '<button type="button" class="slick-prev"><span class="material-icons-round">arrow_back_ios</span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="material-icons-round">arrow_forward_ios</span></button>',
			}
		}
	]
});
$('.share-carousel').slick({
	slidesToShow: 5,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				prevArrow: '<button type="button" class="slick-prev"><span class="material-icons-round">arrow_back_ios</span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="material-icons-round">arrow_forward_ios</span></button>',
			}
		}
	]
});
$('.book-carousel').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><span class="material-icons-round">arrow_back_ios</span></button>',
	nextArrow: '<button type="button" class="slick-next"><span class="material-icons-round">arrow_forward_ios</span></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true,
				speed: 300,
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				dots: true,
				speed: 300,
				slidesToShow: 1,
			}
		}
	]
});
$('.course-carousel').slick({
	dots: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	prevArrow: '<button type="button" class="slick-prev"><span class="material-icons-round">arrow_back_ios</span></button>',
	nextArrow: '<button type="button" class="slick-next"><span class="material-icons-round">arrow_forward_ios</span></button>'
});
$('.enterprise-carousel').slick({
	dots: false,
	speed: 300,
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"><span class="material-icons-round">arrow_back_ios</span></button>',
	nextArrow: '<button type="button" class="slick-next"><span class="material-icons-round">arrow_forward_ios</span></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true,
			}
		}
	]
});
