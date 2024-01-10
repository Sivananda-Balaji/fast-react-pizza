import axios from "axios";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  try {
    const response = await axios(`${API_URL}/menu`);
    const { data } = response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export async function getOrder(id) {
  try {
    const response = await axios.get(`${API_URL}/order/${id}`);
    const { data } = response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
