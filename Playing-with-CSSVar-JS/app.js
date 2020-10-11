// querySelectorAll gives you nodeList. it is not same as array
//  array has all kinds of methods like map, reduce,...
const inputs = document.querySelectorAll('input');


function handleUpdate() {
    // dataset is an object, that contains all data attributes from specific ele
    // In our case it is styling 
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || "";
    // Updating css variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))