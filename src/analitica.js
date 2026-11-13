
function valorVenta(venta) {
    if (typeof venta.precio !== "number" || !Number.isFinite(venta.precio)) {
        return null;
    }

    return venta.cantidad * venta.precio;
}


function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        const valor = valorVenta(venta);

        if (venta.cantidad > 0 && valor !== null) {
            total += valor;
        }
    }

    return total;
}


function unidadesVendidas(ventas) {
    let unidades = 0;

    for (const venta of ventas) {
        const valor = valorVenta(venta);

        if (venta.cantidad > 0 && valor !== null) {
            unidades += venta.cantidad;
        }
    }

    return unidades;
}

function ventaMayor(ventas) {
    let mayor = null;

    for (const venta of ventas) {
        const valor = valorVenta(venta);

        if (venta.cantidad > 0 && valor !== null) {
            if (mayor === null || valor > valorVenta(mayor)) {
                mayor = venta;
            }
        }
    }

    return mayor;
}


function ticketPromedio(ventas) {
    let total = 0;
    let cantidadVentas = 0;

    for (const venta of ventas) {
        const valor = valorVenta(venta);

        if (venta.cantidad > 0 && valor !== null) {
            total += valor;
            cantidadVentas++;
        }
    }

    if (cantidadVentas === 0) {
        return 0;
    }

    return total / cantidadVentas;
}


function ventasPorCiudad(ventas, ciudad) {
    let total = 0;

    for (const venta of ventas) {
        const valor = valorVenta(venta);

        const ciudadVenta = venta.ciudad.trim().toLowerCase();
        const ciudadBuscada = ciudad.trim().toLowerCase();

        if (
            ciudadVenta === ciudadBuscada &&
            venta.cantidad > 0 &&
            valor !== null
        ) {
            total += valor;
        }
    }

    return total;
}

module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
};
