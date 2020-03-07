const alertMessage = {
    callAlert() {
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000)
    }
};

export default alertMessage;