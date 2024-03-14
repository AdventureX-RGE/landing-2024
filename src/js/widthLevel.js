export let large = false;
export let middle = false;
export let small = false;

function resetWidthLevel() {
    let width = document.body.clientWidth;
    large = middle = small = false;
    if (width > 1024) large = true;
    else if (width > 500) middle = true;
    else small = true;
}

window.addEventListener('resize', resetWidthLevel);

resetWidthLevel();
