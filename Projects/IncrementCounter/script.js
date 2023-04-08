const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    // console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () => {
        //1st method: +(unary operator) is used to convert string to number
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof targetCount);

        // 2nd Method: to convert string to number
        const startingCount = Number(counter.innerHTML);

        // 3rd Method: to convert string to number
        // const startingCount = parseFloat(counter.innerHTML);

        const incr = targetCount / 100

        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10);
        }
        else {
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();
})