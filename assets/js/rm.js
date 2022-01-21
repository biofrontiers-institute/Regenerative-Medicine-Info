// For animating/fading focus areas section

let focus_areas = document.querySelector('section#focus-areas').getBoundingClientRect();

let biof_focus = document.querySelectorAll('.biof-focus');

document.addEventListener('scroll', function() {
    focus_areas = document.querySelector('section#focus-areas').getBoundingClientRect();

    let focus_whole = Math.abs(focus_areas.bottom-focus_areas.top);
    let focus_p = 1+((focus_areas.top/focus_whole)*2);

    biof_focus.forEach(focus => {
        if(focus.classList != 'biof-focus main-focus') {
            focus.style.setProperty('opacity', focus_p);
        }
    });
});