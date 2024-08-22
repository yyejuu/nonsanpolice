$(function () {
    const chart1 = document.querySelector('.doughnut1');
    const chart2 = document.querySelector('.doughnut2');
    const chart3 = document.querySelector('.doughnut3');

    const makeChart = (percent, classname, color) => {
        let i = 1;
        let chartFn = setInterval(function () {
            if (i < percent) {
                colorFn(i, classname, color);
                i++;
            } else {
                clearInterval(chartFn);
            }
        }, 20);
    }

    const colorFn = (i, classname, color) => {
        classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
    }

    makeChart(47, chart1, '#082A5E');
    makeChart(94, chart2, '#082A5E');
    makeChart(9, chart3, '#082A5E');

    /* 영상 */
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 60,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".fa-solid fa-circle-chevron-left",
            prevEl: ".fa-solid fa-circle-chevron-right",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});