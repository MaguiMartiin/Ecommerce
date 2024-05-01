import axios from "axios";
import { notFound } from "next/navigation";

export const fetchProducts = async () => {
  try { return (await axios.get('http://localhost:3001/products')).data;
  } catch (error) { throw new Error(error.message)}
};

export const fetchProductCategory = async (id) => {
  try {
    return (await axios.get(`http://localhost:3001/categories/?categoryId=${id}`)).data;
  } catch (error) {
    console.error('Error en fetchProductCategory:', error);
    throw new Error(error.message);
  }
}; 

export const fetchProductId = async (id) => {
  try { return (await axios.get(`http://localhost:3001/products/${id}`)).data;
  } catch (error) {notFound()}
};

export const fetchCategories = async () => {
  try {
    return (await axios.get('http://localhost:3001/categories')).data;
  } catch (error) {
    console.error('Error en fetchCategories:', error);
    throw new Error(error.message);
  }
};

export const fetchProductSearch = async (name) => {
  try {
      return (await axios.get(`http://localhost:3001/products/?name=${name}`)).data
  } catch (error) { throw new Error(error.message)}
};

export const fetchProductSearchCategory = async (id, name) => {
  try {
      return (await axios.get(`http://localhost:3001/categories/?categoryId=${id}&name=${name}`)).data
  } catch (error) { throw new Error(error.message)}
};
