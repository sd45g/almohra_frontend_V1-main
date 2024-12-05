import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'; // تعيين رابط افتراضي في حال غياب المتغير

export const api = axios.create({
  baseURL,
  withCredentials: true, // تفعيل الكوكيز والجلسات
});
// إضافة Interceptor لتحديث الهيدر تلقائيًا قبل كل طلب
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // جلب التوكن من التخزين المحلي
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // تعيين التوكن في الهيدر
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error); // في حالة حدوث خطأ أثناء الإعداد
  },
);
