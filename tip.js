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
                to: "0x6EA26E1a72FB21334eC532B476b4a04F713Fc118",
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