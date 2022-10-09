var paymentBtn = document.getElementById("payment-btn");

paymentBtn.addEventListener("click", function() {
    document.getElementById("payment-panel").hidden = true;
    document.getElementById("message-panel").hidden = false;
});