const tempLoad = () => {
    const temp = document.getElementById("temp");
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#2196f3";
    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "#FFD700";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "#f8b627";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "#d63031";
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#DC143C";
    }, 4000);
}

tempLoad();
setInterval(tempLoad, 5000);