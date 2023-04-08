const calculateTemp = () => {
    const temp = document.getElementById("temp").value;
    const resultContainer = document.getElementById("resultContainer");
    const selectOp = document.getElementById('temp_diff').value;
    // const selected = selectOp.options[selectOp.selectedIndex].value

    let result;
    if (selectOp === "cel") {
        result = Math.round((temp * 9 / 5) + 32);
        resultContainer.innerHTML = `= ${result} °Fahrenheit`
    }
    else {
        result = Math.round([(temp - 32) * 5] / 9);
        resultContainer.innerHTML = `= ${result} °Celcius`
    }
}