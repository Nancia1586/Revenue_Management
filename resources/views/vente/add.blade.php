<html>
<head>
<script type="text/javascript">

var retour = [];
var newElement = {};
var amount = 0;

function loadItems(){
    var tableBody = document.getElementById("list");
    tableBody.innerHTML = "";
    var rowsHTML = "";
    retour.forEach(function(item, index) {
        rowsHTML += "<tr>";
        rowsHTML += "<td>" + item.nom + "</td>";
        rowsHTML += "<td>" + item.prixUnitaire + "</td>";
        rowsHTML += "<td>" + item.quantite + "</td>";
        rowsHTML += "<td>" + item.montant + "</td>";
        rowsHTML += "<td><input type='button' onclick='deleteItem(" + index + "," + item.montant + ")' value='Delete'></td>";
        rowsHTML += "</tr>";
    });
    tableBody.innerHTML += rowsHTML;
}

function getProduct(id, quantity){
    var xhr;
    try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
    catch (e)
    {
        try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
        catch (e2)
        {
           try {  xhr = new XMLHttpRequest();  }
           catch (e3) {  xhr = false;   }
         }
    }

    xhr.onreadystatechange  = function()
    {
       if(xhr.readyState  == 4){
        if(xhr.status  == 200) {
            var retour = JSON.parse(xhr.responseText);
            newElement = retour;
        } else {
            document.dyn="Error code " + xhr.status;
        }
		}
    };
    xhr.open("GET", "/admin/find_item/"+id+"/"+quantity,  false);
    xhr.send(null);
}

function addForm(){
    var product = document.getElementById("product");
    var quantity = document.getElementById("quantity");
    getProduct(product.value, quantity.value);
    retour.push(newElement);
    loadItems();
    var totalAmount = document.getElementById("total");
    amount += newElement.montant;
    totalAmount.innerHTML = amount + " Ar";
}

function deleteItem(index, itemAmount){
	delete retour[index];
    loadItems();
    var totalAmount = document.getElementById("total");
    amount = amount - itemAmount;
    totalAmount.innerHTML = amount + " Ar";
}

function saveAll(){
    var customer = document.getElementById("customer");
    var date = document.getElementById("date");
    console.log("Client: " + customer.value);
    console.log("Date: " + date.value);
    console.log("Commande: " + retour);
}

</script>
</head>

<body>
    <input type="text" name="customer" id="customer" placeholder="Client">
    <input type="date" name="date" id="date" placeholder="Date">
    <br/><br/>
    <table border="1" width="600">
        <tr>
            <th>
                <select name="product" id="product">
                    <option value="1">Produit 1</option>
                    <option value="2">Produit 2</option>
                    <option value="3">Produit 3</option>
                </select>
            </th>
            <th>
                <input type="text" name="quantity" id="quantity" placeholder="Quantite">
            </th>
            <th>
                <input type="button" onclick="addForm()" value="OK">
            </th>
        </tr>

        <tr>
            <th>Nom</th>
            <th>Prix unitaire</th>
            <th>Quantite</th>
            <th>Montant</th>
            <th></th>
        </tr>
        <tbody id="list"></tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td id="total"></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
    <br/>
    <input type="button" onclick="saveAll()" value="VALIDER">
</body>
</html>
