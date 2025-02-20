export function formatPrice(amount) {
    if (isNaN(amount)) return amount;
    return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(amount);
  }
  