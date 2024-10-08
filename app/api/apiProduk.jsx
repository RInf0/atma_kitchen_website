import useClient from ".";
const token = localStorage.getItem("token");

export const GetProduk = async () => {
  try {
    const res = await useClient.get("/produk", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const ProdukCreate = async (formData) => {
  try {
    const res = await useClient.post("/produk", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      data: res.status,
    };
  } catch (error) {
    return error.response.data;
  }
};

export const ProdukUpdate = async (id, formData) => {
  try {
    const res = await useClient.post(`/produk/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      data: res.status,
    };
  } catch (error) {
    return error.response.data;
  }
};

export const ProdukDelete = async (id) => {
  try {
    const res = await useClient.delete(`/produk/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getProdukById = async (id) => {
  try {
    const res = await useClient.get(`/produk/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const searchProduk = async (search) => {
  try {
    const res = await useClient.get(`/produk/search/${search}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};
