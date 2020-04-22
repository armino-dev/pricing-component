
const setCheckBox = (option) => {
    const checkbox = document.getElementById("pricing-switch-checkbox");
    checkbox.checked = (option == "annually") ? false : true;
}

(() => {        
    let option = "annually";
    setCheckBox(option);
    document.getElementById("pricing-switch-checkbox").addEventListener("click", (e) => {        
        const ma = document.getElementsByClassName("monthly");        
        const ya = document.getElementsByClassName("yearly");
        if (option == "annually") {
            option = "monthly";
            for (let i = 0; i < ma.length; i++) {
                ma[i].style.display = "flex";
                ya[i].style.display = "none";
            }
            
        } else {
            option = "annually";
            for (let i = 0; i < ma.length; i++) {
                ma[i].style.display = "none";
                ya[i].style.display = "flex";
            }
        }
        setCheckBox(option);
    });
})();