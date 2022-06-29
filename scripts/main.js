// var widths = [0, 500, 850];

// function resizeFn() {
// if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
// red();
// } else if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
// orange();
// } else {
// green();
// }
// }
// window.onresize = resizeFn;
// resizeFn();



// window.onresize = function(){ location.reload(); }




//stop css carett animation on scroll

function stop() {
  let carrot = document.querySelector(".carrot_icon");
	carrot.classList.add("stop_animation");
}
	window.addEventListener("scroll", stop);

//expanding cards
const panels = document.querySelectorAll(".carousel_shell");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClass()	
		panel.classList.add("active")
		})
})

function removeActiveClass() {
	panels.forEach((panel) =>{
		panel.classList.remove("active")
	})
}


// caret open
const openMenu = document.getElementById("carrot");
openMenu.addEventListener("click", showLinks);

function showLinks () {
	document.querySelector(".nav_links").classList.toggle("nav_links_show");

	if(document.getElementById("carrot").className == "caret_down")
		document.getElementById("carrot").className = "caret_up";
	else
		document.getElementById("carrot").className = "caret_down";
}


const openMenuCaret = document.getElementById("carrot2");
openMenuCaret.addEventListener("click", showLinks);







// fade out image gallery links---- DESKTOP---------

const fade = document.getElementById("revenueStrategy");
fade.addEventListener("click", fadeOutOthers);

function fadeOutOthers () {
  document.getElementById("visualMedia").classList.add("fade_out");
  document.getElementById("experienceDesign").classList.add("fade_out");
  document.getElementById("architecture").classList.add("fade_out");
  document.getElementById("development").classList.add("fade_out");
  document.getElementById("systemsDesign").classList.add("fade_out");
  document.getElementById("revenueStrategy").classList.remove("fade_out");

  const fadethumbnails = document.querySelectorAll(".visual-media, .architecture, .experience-design, .systems-design, .development");
  for (const fadethumbnail of fadethumbnails) {
    fadethumbnail.classList.add("black_and_white");
  }

  const colorthumbnails = document.querySelectorAll(".revenue-strategy");
  for (const colorthumbnail of colorthumbnails) {
    colorthumbnail.classList.remove("black_and_white");
  }
}

const fade1 = document.getElementById("visualMedia");
fade1.addEventListener("click", fadeOutOthers1);

function fadeOutOthers1 () {
  document.getElementById("revenueStrategy").classList.add("fade_out");
  document.getElementById("experienceDesign").classList.add("fade_out");
  document.getElementById("architecture").classList.add("fade_out");
  document.getElementById("development").classList.add("fade_out");
  document.getElementById("systemsDesign").classList.add("fade_out");
  document.getElementById("visualMedia").classList.remove("fade_out");

  const fadethumbnails1 = document.querySelectorAll(".revenue-strategy, .architecture, .experience-design, .systems-design, .development");
  for (const fadethumbnail1 of fadethumbnails1) {
    fadethumbnail1.classList.add("black_and_white");
  }
  const colorthumbnails1 = document.querySelectorAll(".visual-media");
  for (const colorthumbnail1 of colorthumbnails1) {
    colorthumbnail1.classList.remove("black_and_white");
  }
}

const fade2 = document.getElementById("experienceDesign");
fade2.addEventListener("click", fadeOutOthers2);

function fadeOutOthers2 () {
  document.getElementById("visualMedia").classList.add("fade_out");
  document.getElementById("architecture").classList.add("fade_out");
  document.getElementById("development").classList.add("fade_out");
  document.getElementById("systemsDesign").classList.add("fade_out");
  document.getElementById("revenueStrategy").classList.add("fade_out");
  document.getElementById("experienceDesign").classList.remove("fade_out");

  const fadethumbnails2 = document.querySelectorAll(".visual-media, .architecture, .revenue-strategy, .systems-design, .development");
  for (const fadethumbnail2 of fadethumbnails2) {
    fadethumbnail2.classList.add("black_and_white");
  }
  const colorthumbnails2 = document.querySelectorAll(".experience-design");
  for (const colorthumbnail2 of colorthumbnails2) {
    colorthumbnail2.classList.remove("black_and_white");
  }
}

const fade3 = document.getElementById("architecture");
fade3.addEventListener("click", fadeOutOthers3);

function fadeOutOthers3 () {
  document.getElementById("visualMedia").classList.add("fade_out");
  document.getElementById("experienceDesign").classList.add("fade_out");
  document.getElementById("development").classList.add("fade_out");
  document.getElementById("systemsDesign").classList.add("fade_out");
  document.getElementById("revenueStrategy").classList.add("fade_out");
  document.getElementById("architecture").classList.remove("fade_out");

  const fadethumbnails3 = document.querySelectorAll(".visual-media, .revenue-strategy, .experience-design, .systems-design, .development");
  for (const fadethumbnail3 of fadethumbnails3) {
    fadethumbnail3.classList.add("black_and_white");
  }
  const colorthumbnails3 = document.querySelectorAll(".architecture");
  for (const colorthumbnail3 of colorthumbnails3) {
    colorthumbnail3.classList.remove("black_and_white");
  }
}

const fade4 = document.getElementById("development");
fade4.addEventListener("click", fadeOutOthers4);

function fadeOutOthers4 () {
  document.getElementById("visualMedia").classList.add("fade_out");
  document.getElementById("experienceDesign").classList.add("fade_out");
  document.getElementById("architecture").classList.add("fade_out");
  document.getElementById("systemsDesign").classList.add("fade_out");
  document.getElementById("revenueStrategy").classList.add("fade_out");
  document.getElementById("development").classList.remove("fade_out");

  const fadethumbnails4 = document.querySelectorAll(".visual-media, .revenue-strategy, .experience-design, .systems-design, .architecture");
  for (const fadethumbnail4 of fadethumbnails4) {
    fadethumbnail4.classList.add("black_and_white");
  }
  const colorthumbnails4 = document.querySelectorAll(".development");
  for (const colorthumbnail4 of colorthumbnails4) {
    colorthumbnail4.classList.remove("black_and_white");
  }
}

const fade5 = document.getElementById("systemsDesign");
fade5.addEventListener("click", fadeOutOthers5);

function fadeOutOthers5 () {
  document.getElementById("visualMedia").classList.add("fade_out");
  document.getElementById("experienceDesign").classList.add("fade_out");
  document.getElementById("architecture").classList.add("fade_out");
  document.getElementById("development").classList.add("fade_out");
  document.getElementById("revenueStrategy").classList.add("fade_out");
  document.getElementById("systemsDesign").classList.remove("fade_out");

  const fadethumbnails5 = document.querySelectorAll(".visual-media, .revenue-strategy, .experience-design, .development, .architecture");
  for (const fadethumbnail5 of fadethumbnails5) {
    fadethumbnail5.classList.add("black_and_white");
  }

  const colorthumbnails5 = document.querySelectorAll(".systems-design");
  for (const colorthumbnail5 of colorthumbnails5) {
    colorthumbnail5.classList.remove("black_and_white");
  }
}

const fade6 = document.getElementById("clearFade");
fade6.addEventListener("click", fadeOutOthers6);

function fadeOutOthers6 () {
  document.getElementById("visualMedia").classList.remove("fade_out");
  document.getElementById("experienceDesign").classList.remove("fade_out");
  document.getElementById("architecture").classList.remove("fade_out");
  document.getElementById("development").classList.remove("fade_out");
  document.getElementById("revenueStrategy").classList.remove("fade_out");
  document.getElementById("systemsDesign").classList.remove("fade_out");

  const colorthumbnails6 = document.querySelectorAll(".visual-media, .revenue-strategy, .experience-design, .development, .architecture, .systems-design");
  for (const colorthumbnail6 of colorthumbnails6) {
    colorthumbnail6.classList.remove("black_and_white");
  }
}



// -------------------------------------------------------------------
// -------------------------------------------------------------------


// -----------------------------work page-----------------------------

// -------------------------------------------------------------------
// -------------------------------------------------------------------





// -------------------------------------------------------------------
// -------------------------------------------------------------------


// ---------------------------SCROLL TRIGGER--------------------------

// -------------------------------------------------------------------
// -------------------------------------------------------------------


// ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({

	//------------------carrot pin_mobile
	//when it pins it, it moves it left about 400px

	"(max-width: 767px)": function() {
				
				let tll = gsap.timeline({
					scrollTrigger: {
					trigger: "#scrollTrigger",
					scrub: 1,
					start: "top 30px",
					end: "+=3800px",
					pin: true
					}
				})

		tll.to("#caretPin", {})
			.to("#caretPin", {});
      
	//------------------lexicon play button_mobile
				let tl = gsap.timeline({
					scrollTrigger: {
					trigger: "#playButton",
					scrub: 1,
					start: "top 70px", 
					end: "+=975px",
					pin: true
					}
				})

		tl.to("#lexiconPlayButton", {})
			.to("#lexiconPlayButton", {})
	},

	"(min-width: 768px)": function() {
		// --------------sticks the left bar landing		
		let lp = gsap.timeline({
			scrollTrigger: {
			trigger: "#landingPage",
			scrub: 1,
			end: "+=600px",
			pin: true
			}
		})

lp.to(".landing", {})
	.to(".landing", {});


	// --------------moves section on the right
		let mf = gsap.timeline({
			scrollTrigger: {
			trigger: "#faceTrigger",
			scrub: 1,
			start: "top 100px",
			// difference between this end and fm end is the difference in timing of scroll
			end: "+=800px",
			pin: true,
			markers: false,
			}
		});

mf.to(".freeze", {})
.to(".freeze", {});


// --------------sticks the white mask
let fm = gsap.timeline({
	scrollTrigger: {
	trigger: "#maskTrigger",
	scrub: 1,
	//match this to the height of the .face and mask
	//move this to adjust the starting top of the white box
	start: "top 250px",
	//sets the distance between the face and the deisgn beliefs
	end: "+=1200px",
	pin: true,
	markers: false,
	}
});

fm.to(".mask_faceonscroll", {})
.to(".mask_faceonscroll", {});


// --------------vertical navigation bar-----------
ScrollTrigger.create({
  trigger: "#navTriggerDesktop",
  start: "0px 470px", 
  end: "770px",
  markers: false,
  pin: "#caretDesktop",
	scrub: .5,
});

// --------------vertical navigation bar-----------
ScrollTrigger.create({
  trigger: "#navbarTrigger",
  start: "top -45px", 
  end: "+=2900px",
  markers: false,
  pin: "#desktopPin",
  pinSpace: false,
	scrub: .5,
});


	//------------------lexicon play button_>768
  let tl = gsap.timeline({
    scrollTrigger: {
    trigger: "#playButton",
    scrub: 1,
    start: "top 30px", 
    end: "+=500px",
    pin: true
    }
  })

tl.to("#lexiconPlayButton", {})
.to("#lexiconPlayButton", {})


// --------------project categories-----------
ScrollTrigger.create({
  trigger: "#workNavShell",
  start: "top 0px", 
  end: "+=8000px",
  markers: false,
  pin: "#workdesktopPin",
  pinSpace: false,
	scrub: .5,
});



},
});