function Bill() {
    let total = parseFloat(document.getElementById("total").value);
    console.log(typeof total);
    let rate = parseFloat(document.getElementById("rate").value);
    document.getElementById("tip").innerHTML = "$" + total * rate / 100;
    document.getElementById("tax").innerHTML = "$" + total * 5.50 / 100;
    document.getElementById("grandtotal").innerHTML = "$" + (total + (total * rate / 100) + (total * 5.50 / 100));
    return false;
}
if ('serviceWorker' in navigator) { window.addEventListener('load', () => { 
<<<<<<< HEAD
    navigator.serviceWorker.register('./service-worker.js') }) }
=======
    navigator.serviceWorker.register('./service-worker.js') }) }
>>>>>>> ae47c975f866188e96527554db1e9f1fa2c6ffde
