import useClient from ".";

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
  const token = "54|xLFT8Rve8Nk0aBGlHNwyF8cvJalDgQNzc1v8AkIe1da597c7";
  try {
    const res = await useClient.post("/produk", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      data: res.status,
    };
  } catch (error) {
    return error.response.status;
  }
};

export const ProdukUpdate = async (id, formData) => {
  const token = "54|xLFT8Rve8Nk0aBGlHNwyF8cvJalDgQNzc1v8AkIe1da597c7";
  try {
    const res = await useClient.post(`/produk/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
