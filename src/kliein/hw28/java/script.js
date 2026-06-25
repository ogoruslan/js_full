 const track = document.querySelector('.slider-track');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');

            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const playPauseBtn = document.getElementById('playPauseBtn');

            let currentIndex = 0;
            let timer;
            let isPlaying = true;

            function updateSlider() {

                track.style.transform =
                    `translateX(-${currentIndex * 100}%)`;

                dots.forEach(dot =>
                    dot.classList.remove('active')
                );

                dots[currentIndex].classList.add('active');
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            }

            function prevSlide() {
                currentIndex =
                    (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            }

            function startAutoPlay() {
                timer = setInterval(nextSlide, 3000);
            }

            function stopAutoPlay() {
                clearInterval(timer);
            }

            function resetTimer() {
                if (isPlaying) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            }

            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetTimer();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetTimer();
            });

            playPauseBtn.addEventListener('click', () => {

                if (isPlaying) {
                    stopAutoPlay();
                    playPauseBtn.textContent = '►';
                } else {
                    startAutoPlay();
                    playPauseBtn.textContent = '❚❚';
                }

                isPlaying = !isPlaying;
            });

            dots.forEach(dot => {

                dot.addEventListener('click', (e) => {

                    currentIndex =
                        Number(e.target.dataset.index);

                    updateSlider();
                    resetTimer();
                });

            });

            updateSlider();
            startAutoPlay();
