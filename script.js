const beforeColor = '#24809E';
const afterColor = '#C4C4C4';

document.getElementById("duration").oninput = function () {
  const value = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(to right, ${beforeColor} 0%, ${beforeColor} ${value}%, ${afterColor} ${value}%, ${afterColor} 100%)`;
};

document.getElementById("volume").oninput = function () {
  const value = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(to right, ${beforeColor} 0%, ${beforeColor} ${value}%, ${afterColor} ${value}%, ${afterColor} 100%)`;
};