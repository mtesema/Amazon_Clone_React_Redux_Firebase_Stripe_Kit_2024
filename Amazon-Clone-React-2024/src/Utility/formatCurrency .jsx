// utils/formatCurrency.js
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
};

// Function to split the price into whole number and decimal parts
 const formatPrice = (price) => {
  const [wholeNumber, decimalPart] = price.toString().split(".");
  return (
    <span>
      <sup className="price_superscript">$</sup>
      {wholeNumber}
      <sup className="price_superscript">{decimalPart}</sup>
    </span>
  );
};

export { formatCurrency, formatPrice };