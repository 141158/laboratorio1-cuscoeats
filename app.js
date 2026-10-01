// CuscoEats - Lógica básica de gestión de pedidos
const pedidos = [];

function agregarPedido(nombre, precio) {
  pedidos.push({ nombre, precio, fecha: new Date().toLocaleTimeString() });
  renderizarPedidos();
}

function renderizarPedidos() {
  const contenedor = document.getElementById('lista-pedidos');
  const totalElem = document.getElementById('monto-total');

  if (pedidos.length === 0) {
    contenedor.innerHTML = '<p class="empty-msg">No hay pedidos registrados todavía. Selecciona un plato arriba para comenzar.</p>';
    totalElem.textContent = 'S/ 0.00';
    return;
  }

  contenedor.innerHTML = '';
  let total = 0;

  pedidos.forEach((item, index) => {
    total += item.precio;
    const div = document.createElement('div');
    div.className = 'order-item';
    div.innerHTML = `
      <span class="order-item-title">${item.nombre} <small style="color: #6b7280;">(${item.fecha})</small></span>
      <span>S/ ${item.precio.toFixed(2)}</span>
    `;
    contenedor.appendChild(div);
  });

  totalElem.textContent = `S/ ${total.toFixed(2)}`;
}

function limpiarPedidos() {
  if (pedidos.length === 0) return;
  pedidos.length = 0;
  renderizarPedidos();
}

function confirmarPedido() {
  if (pedidos.length === 0) {
    alert('Por favor selecciona al menos un plato antes de confirmar.');
    return;
  }
  const total = pedidos.reduce((acc, curr) => acc + curr.precio, 0);
  alert(`¡Pedido registrado exitosamente!\nCantidad de platos: ${pedidos.length}\nTotal a pagar: S/ ${total.toFixed(2)}`);
  limpiarPedidos();
}
