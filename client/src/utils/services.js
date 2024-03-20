import axios from "./axios";


const getImages = async () => {
  try {
    const res = await axios.get("/images");
    return res?.data;
  } catch (err) {
    return [];
  }
};




const getImageById = async (id) => {
  try {
    const res = await axios.get("/images/" + id);
    return res?.data;
  } catch (err) {
    return [];
  }
};



const uploadImage = async (image) => {
  try {
    let formData = new FormData();
    formData.append("image", image);
    await axios.post("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { status: true, data: "" };
  } catch (err) {
    return { status: false, data: err?.message };
  }
};



const deleteImage = async (image) => {
  try {
    let formData = new FormData();
    formData.append("image", image);
    await axios.delete("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { status: true, data: "" };
  } catch (err) {
    return { status: false, data: err?.message };
  }
};



export { getImages, getImageById, uploadImage, deleteImage };
