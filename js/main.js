/* jquery 方式实现全屏滚动 */

// $('.navbar a').on('click', function (e) {
//     if (this.hash !== '') {
//         e.preventDefault(); // 阻止默认事件发生
//         const hash = this.hash;

//         $('html,body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// })


/* 插件方式实现全屏滚动 */

const scroll = new SmoothScroll(".navbar a[href*='#']", {
    speed: 500
})