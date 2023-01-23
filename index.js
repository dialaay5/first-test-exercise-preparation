const data = [{
    Id: 1,
    Car_name: 'Toyota',
    Year: 2000,
    Km: 3028280,
    Price: 60000
},
{
    Id: 2,
    Car_name: 'Mazda',
    Year: 2020,
    Km: 199028,
    Price: 70000
},
{
    Id: 3,
    Car_name: 'BMW',
    Year: 2001,
    Km: 38273,
    Price: 90000
}]

function tabelsRow() {
    for (let i = 0; i < data.length; i++) {
        $('#table').append(`<tr id="tr${i}"><td>${data[i].Id}</td>
                                 <td>${data[i].Car_name}</td>
                                 <td>${data[i].Year}</td>
                                 <td>${data[i].Km}</td>
                                 <td id="price${i}" >${data[i].Price}</td>
                                 <td><button type="button" class="btn btn-outline-success" id="${i}" onclick="onClick(event)">Select</button></td></tr>`
        )
    }
}

    let totalPrice = 0
    function onClick(event) {
        i = event.target.id
        $(`#tr${i}`).toggleClass("clickedOn")
        if ($(`#${i}`).text() == 'Select') {
            $(`#${i}`).text("Unselect");
            let price = $(`#price${i}`).text()
            totalPrice += (parseFloat(price))
            console.log(totalPrice);
        }
        else {
            $(`#${i}`).text("Select");
            let price1 = $(`#price${i}`).text()
            totalPrice -= (parseFloat(price1))
            console.log(totalPrice);
        }

    }


    document.getElementById("orderbtn").addEventListener("click", orders);
    function orders() {
        Swal.fire({
            title: `You'r order total ${totalPrice} $ , Do you want to save it?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Order Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Order Deleted!', '', 'info')
            }
        })
    }

    tabelsRow()
