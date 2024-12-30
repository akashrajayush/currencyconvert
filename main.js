console.log("Main.js working");

const populate = async (value, currency) => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=${currency}`;
    const response = await fetch(url);
    const rJson = await response.json();
    document.querySelector(".output").style.display = "block";

    let tableContent = "";
    for (const [key, data] of Object.entries(rJson.data)) {
        tableContent += `
            <tr>
                <td>${key}</td>
                <td>${data.code}</td>
                <td>${Math.round(data.value * value)}</td>
            </tr>
        `;
    }

    document.querySelector("tbody").innerHTML = tableContent;
};

document.querySelector("#converter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});
