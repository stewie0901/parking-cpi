async function loadPrices() {
    const response = await fetch("/prices");
    const data = await response.json();

    const keyword = document
        .getElementById("search")
        .value
        .toLowerCase();

    const priceList = document.getElementById("priceList");
    priceList.innerHTML = "";

    data
        .filter(item =>
            item.location.toLowerCase().includes(keyword)
        )
        .forEach(item => {
            priceList.innerHTML += `
                <tr>
                    <td>${item.date}</td>
                    <td>${item.location}</td>
                    <td>${item.price} 元</td>
                </tr>
            `;
        });
}

async function addPrice() {
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const price = document.getElementById("price").value;

    if (!date || !location || !price) {
        alert("請完整輸入日期、地點與價格");
        return;
    }

    await fetch("/prices", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date,
            location,
            price
        })
    });

    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("price").value = "";

    loadPrices();
}

loadPrices();