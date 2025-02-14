export const setLocalStorage = (key) => {
  const uniqueKey = key !== null ? key : new Date().getTime().toString();
  const date = document.getElementById("input_date");
  const price = document.getElementById("input_price");
  const isPositive = document.getElementById("price_toggle");
  const content = document.getElementById("input_content");
  const payment = document.getElementById("payment_value");
  const category_select = document.getElementById("category_value");

  const obj = {
    uniqueKey: uniqueKey,
    date: date.value,
    price: Number(price.value.replaceAll(",", "")),
    isPositive: isPositive.checked,
    content: content.value,
    payment: payment.value,
    category_select: category_select.value,
  };

  localStorage.setItem(uniqueKey, JSON.stringify(obj));
};
