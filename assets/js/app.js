let pizzaMenu = document.querySelectorAll('.menu-catalog__item');
// let currentLocation = location.href;
let pizzaSize = document.querySelectorAll('.menu__link');
// let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

pizzaMenu.forEach(function(item) {

	item.addEventListener('click', function () {
		let currentPizzaMenu = item;

		if (!currentPizzaMenu.classList.contains('active') ) {
			pizzaMenu.forEach(nav => nav.classList.remove('active'));
			this.classList.add('active');
		};
	});

});

pizzaSize.forEach(function(item) {

	item.addEventListener('click', function () {
		let currentPizzSize = item;

		if (!currentPizzSize.classList.contains('active') ) {
			pizzaSize.forEach(nav => nav.classList.remove('active'));
			this.classList.add('active');
		};
	});

});

// Для многостраничной страницы

// for (let i = 0; i < menuLength; i++) {
// 	if (menu[i].href === currentLocation) {
// 		menu[i].classList.add("active");
// 	}
// }
const forms = document.querySelectorAll('.form-send');

let formSend = function(form) {
	let xhr = new XMLHttpRequest();
	let url = '../../php/mail.php';

	xhr.open("POST", url);

	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onload = function() {
		console.log(xhr.response)
	};

	xhr.send();
};

for (let i = 0; i < forms.length; i++) {

	forms[i].addEventListener('submit', function(e) {
		e.preventDefault()
		let form = e.target;
		
		
		formSend(form)
	});
	
};
let burger = document.querySelector('.menu__icon')
let iconMenu = document.querySelector('.menu__body')

if (burger) {
	burger.addEventListener('click', function(e) {
		document.body.classList.toggle('lock')
		burger.classList.toggle('active')
		iconMenu.classList.toggle('active')
	})
}


// let box = document.querySelectorAll(".pizza__column")
// let navFilter = document.querySelector(".menu-catalog__nav")

// navFilter.addEventListener('click', (e) => {
// 	if (e.target.tagName !== 'LI') {
// 		return false
// 	};
	
// 	let filterClass = e.target.dataset["filter"];
	
// 	box.forEach(elem => {
// 		elem.classList.remove('hide')
// 		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
// 			elem.classList.add("hide")

// 		}
// 	})
// });


let catalogSection = document.querySelector(".section-catalog");

let removeChildren = function(item) {
	while(item.firstChild) {
		item.removeChild(item.firstChild);
	}
}

let pushChild = function(item, children) {
	removeChildren(item)
	for (let i = 0; i < children.length; i++) {
		item.appendChild(children[i]);
	}
}

let catalogRow = catalogSection.querySelector('.pizza__row');
let catalogItem = catalogSection.querySelectorAll('.pizza__column');
let catalogNav = catalogSection.querySelector('.menu-catalog__nav');

catalogNav.addEventListener('click', function(e) {
	let target = e.target;
	let catalogBtn = target.closest('.menu-catalog__item')

	if(catalogBtn === null || catalogBtn.classList.contains('.menu-catalog__item.active')) {
		return;
	}

	let btnValue = catalogBtn.getAttribute('data-filter')

	if(btnValue === 'all') {
		pushChild(catalogRow, catalogItem);
		return;
	}

	let filterValue = [];
	for (let i = 0; i < catalogItem.length; i++) {
		const curent = catalogItem[i];
		if(curent.getAttribute('data-category') == btnValue) {
			filterValue.push(curent);
		}
	}

	pushChild(catalogRow, filterValue)

})
let modalBtn = document.querySelectorAll('[data-modal]');
let madalCLose = document.querySelectorAll('.popup__exit');
let madalArea = document.querySelectorAll('.popup');
let madalAreaSecond = document.querySelectorAll('.popup-thanks');
let madalAreaCallback = document.querySelectorAll('.popup-callback');




modalBtn.forEach(i => {
	i.addEventListener('click', e => {
		let current = e.currentTarget;
		let modalId = current.getAttribute('data-modal');
		let modal = document.getElementById(modalId);

		let modalContent = document.querySelector('.popup__content')
		let modalBtnOrder = document.querySelector('.popup__btn')

		modalContent.addEventListener('click', e => {
			e.stopPropagation()
		})

		modal.classList.add('open');
		document.body.classList.add('lock');
	})
})



madalCLose.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget.closest('.popup');

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})


madalArea.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget;

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})

madalAreaSecond.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget;

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})

madalAreaCallback.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget;

		let modalContentCallback = document.querySelector('.popup-callback__content')

		modalContentCallback.addEventListener('click', e => {
			e.stopPropagation()
		})

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})
// let autoresize = document.querySelectorAll('[data-autoresize]');

// autoresize.forEach(i => {
// 	let autoresizeH = i.offsetHeight;

// 	i.addEventListener('input', e => {
// 		let current = e.target;

// 		current.style.height = autoresizeH + 'px';
// 		current.style.height = current.scrollHeight + 'px';
// 	})
// })
let catalog = document.querySelector('.pizza');


let thisSizeChoosen = function(target) {
	let parent = target.closest('.pizza__item');

	target.classList.add('active');
}


let changeProductPopup = function(target) {
	let parent = target.closest('.pizza__item');
	let popupOrder = document.querySelector('.popup')



	let pizzaTitle = parent.querySelector('.pizza__title').textContent;
	let pizzaImg = parent.querySelector('.pizza__img-item').getAttribute('src');
	let pizzaPrice = parent.querySelector('.pizza__price').textContent;

	popupOrder.querySelector('.popup__info-title').setAttribute('value', pizzaTitle);
	popupOrder.querySelector('.popup__info-price').setAttribute('value', pizzaPrice);

	popupOrder.querySelector('.popup__name').textContent = pizzaTitle
	popupOrder.querySelector('.popup__price').textContent = pizzaPrice
	popupOrder.querySelector('.popup__img-item').setAttribute('src', pizzaImg)
}

catalog.addEventListener('click', function(e) {
	let target = e.target;

	if(target.classList.contains('pizza__btn')) {
		e.preventDefault();
		changeProductPopup(target);
	}
});
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
(function () {
	var sectionContacts = document.querySelector('.section-contact');

	var ymapInit = function () {
		if (typeof ymaps === 'undefined') {
			return;
		}

		ymaps.ready(function () {
			const myMap = new ymaps.Map('ymap', {
				center: [40.530206, 72.804061],
				zoom: 18
			}, {
				searchControlProvider: 'yandex#search'
			}),

				// Создаём макет содержимого.
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
				),

				myPlacemarkWithContent = new ymaps.Placemark([40.530206, 72.804061], {
					balloonContent: 'ИСКА-ТВОЙ ДОМ?',
					iconContent: '12'
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'assets/img/contact/running.svg',
					// Размеры метки.
					iconImageSize: [48, 48],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
				});

			myMap.behaviors.disable('scrollZoom');

			myMap.geoObjects
				.add(myPlacemarkWithContent);
		});
	};

	var ymapLoad = function () {
		var script = document.createElement('script');
		script.src = 'https://api-maps.yandex.ru/2.1/?apikey=b1bf2182-fcb0-42f6-8d37-c196fb54a377&lang=ru_RU';
		document.body.appendChild(script);
		script.addEventListener('load', ymapInit);
	};

	var checkYmapInit = function () {
		var sectionContactsTop = sectionContacts.getBoundingClientRect().top;
		var scrollTop = window.pageYOffset;
		var sectionContactsOffsetTop = scrollTop + sectionContactsTop;

		if (scrollTop + window.innerHeight > sectionContactsOffsetTop) {
			ymapLoad();
			window.removeEventListener('scroll', checkYmapInit);
		}
	};

	window.addEventListener('scroll', checkYmapInit);
	checkYmapInit();
})();
function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();
const headerHeight = document.querySelector('.header__inner');
const body = document.querySelector('body');

body.addEventListener('click', function (e) {
	
	let target = e.target;


	let scrollToItemClass = target.closest('[data-scroll-to]');

	if(scrollToItemClass === null) {
		return;
	}

	let scrollToItemAtr = scrollToItemClass.getAttribute('data-scroll-to');
	
	

	let scrollToItem = document.querySelector('.' + scrollToItemAtr)

	if (scrollToItem) {
		scrollToSection(scrollToItem);
	}
})

let scrollToSection = function (item) {
	let targetTop = item.getBoundingClientRect().top;
	let scrollTop = window.pageYOffset;
	let summTop = scrollTop + targetTop
	// let headerOffset = document.querySelector('.header__inner').clientHeight;

	// window.scrollTo(summTop - headerOffset + 11, behavior: 'smooth');

	if (window.pageYOffset === 0) {
		window.scrollTo({
			top: summTop,
			behavior: "smooth"
		});
	} else {
		window.scrollTo({
			top: summTop,
			behavior: "smooth"
		});
	}

	// components/burger.js
	// let burger = document.querySelector('.menu__icon')
	// let iconMenu = document.querySelector('.menu__body')

	if (window.matchMedia('(max-width:826px)').matches) {
		iconMenu.classList.remove('active');
		burger.classList.remove('active');
		document.body.classList.remove('lock');
	}
}
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper(".swiper-container", {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {		
		el: '.swiper-pagination',

		// type: 'fraction',
		// renderFraction: function (currentclass, totalclass){
		// 	return 'Photo <span class="' + currentclass + '"></span>' + ' from ' + ' <span class="' + totalclass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		type: 'bullets',
		clickable: true,
		dynamicBullets: false, 


		// scss: swiper-pagination-bullets
	},



	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true
	// },


	simulateTouch: true,
	// градус при котором поворот
	touchAngle: 90,
	grabcursor: true,


	slideToclickedSlide: true,


	// hashNavigation: {
	// 	watchState: true,
	// },

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	// mousewheel: {
	// 	sensiitivity: 1,
	// },


	// autoHeight: true,

	// сколько элементов в 1ой странице свайпера
	// slidesPerView: 2,

	watchOverflow: true,

	spaceBetween: 30,

	// сколько элементов при прокрутке пропустит
	// slidesPerGroup: 2,

	// centeredSlides: false,

	// с какой начнет
	// initialSlide: 0,

	// колонка(нужна высота+вычесть spaceBetween)
	// slidesPercolumn: 2,

	// бесконечность
	loop: true,
	// loopedSlides: 0,


	// freeMode: true,


	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		disableOnInteraction: false,
	},

	speed: 800,

	// direction: 'vertical',

	effect: 'slide',

	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },

	// плохой режим
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// 	shadow: true,
	// 	shadowOffset: 0,
	// 	shadowScale: 0.5,
	// },

	// effect: 'coverflow',
	// flipEffect: {
	// 	slideShadows: false,
	// 	rotate: 10,
	// 	stretch: 50,
	// },

	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		centeredSlides: true,
	// 		autoHeight: true,
	// 		slidesPerGroup: 1,
	// 	},
	// 	772: {
	// 		slidesPerView: 2,
	// 		centeredSlides: false,
	// 		autoHeight: true,
	// 		slidesPerGroup: 2,
	// 	},
	// },

	// миниатюра
	// thumbs: {
	// 	swiper: {
	// 		el: '.mini-swiper',
	// 		slidesPerView: 4,
	// 	}
	// },


// 	preloadImages: false,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: false,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	nested: true,
});


// Swiper in swiper
// new Swiper(".image-in", {
// 	pagination: {		
// 		el: '.swiper-pagination',

		// type: 'fraction',
		// renderFraction: function (currentclass, totalclass){
		// 	return 'Photo <span class="' + currentclass + '"></span>' + ' from ' + ' <span class="' + totalclass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true,


		// scss: swiper-pagination-bullets
	// },
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	initialSlide: 0,
// 	nested: true,
// });
var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy",
});
const sectionAbout = document.querySelector('.section-about');
const arrow = document.querySelector('.to-top');

var checkYAbout = function () {
	var sectionAboutTop = sectionAbout.getBoundingClientRect().top;
	var scrollTop = window.pageYOffset;
	var sectionAboutOffsetTop = scrollTop + sectionAboutTop;

	if (scrollTop + window.innerHeight > sectionAboutOffsetTop) {
		arrow.classList.add('show')
	} else {
		arrow.classList.remove('show')
	}
};

window.addEventListener('scroll', checkYAbout);
checkYAbout();