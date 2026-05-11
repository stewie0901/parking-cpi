async function loadPrices() {

    const response = await fetch("/prices");

    const data = await response.json();

    const priceList = document.getElementById("priceList");

    priceList.innerHTML = "";

    data.forEach(item => {

        priceList.innerHTML += `
            <tr>
                <td>${item.date}</td>
                <td>${item.location}</td>
                <td>${item.price}</td>
            </tr>
        `;
    });
}

async function addPrice() {

    const date = document.getElementById("date").value;

    const location = document.getElementById("location").value;

    const price = document.getElementById("price").value;

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

    loadPrices();
}

loadPrices();