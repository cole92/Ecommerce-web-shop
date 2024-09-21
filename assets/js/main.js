const ordersData = async () => {
    const orderUrl = 'https://extendsclass.com/api/json-storage/bin/addcdbf'
    // Hvatamo podatke sa api-ja
    const response = await fetch(orderUrl)
    // Konvertujemo ih u JSON
    const data = await response.json();

    // Kreiram niz order-a
    const arrayOfOrders = data.Results;
    // uzimam vrednost kljuca sesije
    const c = sessionStorage.getItem('keyPassword');
    // isti menjam jer u API-u je 5 karaktera
    const customer = c.substring(0, c.length -1); // BONAPI (BONAP) -Primer

    for(let i = 0; i < arrayOfOrders.length; i ++) {
        if(customer == arrayOfOrders[i].order.customerId) {
            showOrders(arrayOfOrders[i])
        }
    }

};

window.onload = function() {
    ordersData()
};

const showOrders = obj => {
    let resultOrder = obj.order;
    let resultOrderDetails = obj.orderDetails;

    let suma = 0;
    let ukupnaSuma = 0;

    const ordersDiv = document.getElementById('orders');

    const parseJsonDate = jsonString => {
        return new Date(parseInt(jsonString.replace('/Date(', '')));
    };

    let datum = parseJsonDate(resultOrder.orderDate)
    console.log(datum);

    let konacanDatum = datum.toJSON(resultOrder.orderDate)
    console.log(konacanDatum.slice(0, 10));
    
    ordersDiv.innerHTML = `
        <div class="sol-sm-12 mx-auto" id=${resultOrder.id}>
            <div class="img-thumbnail col-md-12 box">
                <p style="font-size: 20px">
                    OrderID ${resultOrder.id}<br/><hr/>
                </p>
                ${resultOrderDetails.map(x => {



                }).join(' ')}
            </div>
        </div>
    `
}