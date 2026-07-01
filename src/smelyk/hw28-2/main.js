const ACTIVE_SLIDE_CLASS = "displaySlide";
const INDICATOR_DEFAULT_WIDTH = "8px";
const INDICATOR_ACTIVE_WIDTH = "18px";
const AUTO_SCROLL_INTERVAL_MS = 3000;

class Slider {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.indicators = document.querySelectorAll(".slider-indicators span");
    this.sliderName = document.createTextNode("");
    this.slideNames = new Map([
      [0, "Lia"],
      [1, "Tom"],
      [2, "Sam"],
      [3, "Fluffy"],
      [4, "Mona"],
    ]);
    this.startX = 0;

    this.bindEvents();
    this.initializeSlider();
  }

  bindEvents() {
    document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowRight") {
        this.nextSlide();
      } else if (event.key === "ArrowLeft") {
        this.previousSlide();
      }
    });

    document.addEventListener("mousedown", (event) => {
      this.startX = event.clientX;
    });

    document.addEventListener("mouseup", (event) => {
      const deltaX = this.startX - event.clientX;

      if (deltaX > 0) {
        this.previousSlide();
      } else if (deltaX < 0) {
        this.nextSlide();
      }
    });
  }

  initializeSlider() {
    if (this.slides.length > 0) {
      this.slides[this.currentSlideIndex].classList.add(ACTIVE_SLIDE_CLASS);

      for (let indicator of this.indicators) {
        indicator.style.width = INDICATOR_DEFAULT_WIDTH;
      }

      this.createSlideNameElement(this.currentSlideIndex);
    }
  }

  showSlide(index) {
    this.currentSlideIndex = index;

    this.slides.forEach((slide) => slide.classList.remove(ACTIVE_SLIDE_CLASS));
    this.slides[index].classList.add(ACTIVE_SLIDE_CLASS);

    this.indicators.forEach((indicator) => (indicator.style.width = INDICATOR_DEFAULT_WIDTH));
    this.indicators[index].style.width = INDICATOR_ACTIVE_WIDTH;

    this.changeSlideName(index);
  }

  previousSlide() {
    const prevIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }

  nextSlide() {
    const nextIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  createSlideNameElement(sliderIndex) {
    const paragraph = document.createElement("h2");
    paragraph.style.textAlign = "center";
    this.sliderName.textContent = this.slideNames.get(sliderIndex);

    paragraph.appendChild(this.sliderName);

    document.body.insertBefore(paragraph, document.getElementById("slider"));
  }

  changeSlideName(sliderIndex) {
    this.sliderName.textContent = this.slideNames.get(sliderIndex);
  }
}

class AutoSlider extends Slider {
  constructor(slides) {
    super(slides);
    this.intervalId = null;
    this.playBtn = document.querySelector(".play-btn");
    this.pauseBtn = document.querySelector(".pause-btn");

    this.autoScroll();
    this.playBtn.style.display = "none";
  }

  autoScroll() {
    this.intervalId = setInterval(() => this.nextSlide(), AUTO_SCROLL_INTERVAL_MS);
  }

  pauseSlides() {
    clearInterval(this.intervalId);
    this.pauseBtn.style.display = "none";
    this.playBtn.style.display = "block";
  }

  playSlides() {
    this.autoScroll();
    this.pauseBtn.style.display = "block";
    this.playBtn.style.display = "none";
  }
}

const slides = document.querySelectorAll(".slide-items img");
const sliderA = new AutoSlider(slides);
