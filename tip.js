const web3 = new Web3(Web3.givenProvider)
const form = document.querySelector("form");

const send = async (tipEth) => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

    const wei = web3.utils.toWei(tipEth);

    if (accounts.length > 0) {
        window.ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: "0xd20860B0ac400Fc8929c1CB91A0D87A35D49006a",
                value: web3.utils.toHex(wei)
            }]
        })
    }
}

if (window.ethereum) {
    form.classList.add("has-eth");
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (window.ethereum) {
        const input = form.querySelector("input");
        send(input.value);

    } else {
        alert("Please install MetaMask Wallet");
    }

})