import React from "react";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">🛒 سبد خرید شما</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* سبد خرید */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md">
          <div className="space-y-4">
            {/* آیتم ۱ */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="دوره حرفه‌ای ری‌اکت"
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h2 className="font-semibold">دوره حرفه‌ای ری‌اکت</h2>
                  <p className="text-gray-500">قیمت واحد: 1,200,000 تومان</p>
                  <p className="text-sm mt-1 text-gray-600">تعداد: 1</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-emerald-600">
                  1,200,000 تومان
                </p>
                <button className="flex rounded items-center justify-center gap-2 text-white px-4 mt-3 py-2 text-sm bg-red-500 hover:text-red-700 transition">
                  <FaTrash className="w-3 h-3" />
                  <span>حذف از سبد خرید</span>
                </button>
              </div>
            </div>

            {/* آیتم ۲ */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="دوره امنیت وب"
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h2 className="font-semibold">دوره امنیت وب</h2>
                  <p className="text-gray-500">قیمت واحد: 850,000 تومان</p>
                  <p className="text-sm mt-1 text-gray-600">تعداد: 2</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-emerald-600">
                  1,700,000 تومان
                </p>
                <button className="flex rounded items-center justify-center gap-2 text-white px-4 mt-3 py-2 text-sm bg-red-500 hover:text-red-700 transition">
                  <FaTrash className="w-3 h-3" />
                  <span>حذف از سبد خرید</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* خلاصه سفارش */}
        <div className="bg-white rounded-2xl p-6 shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            خلاصه سفارش
          </h3>

          <div className="flex justify-between py-2 text-gray-600">
            <span>تعداد آیتم‌ها:</span>
            <span>2</span>
          </div>

          <div className="flex justify-between py-2 text-gray-600">
            <span>هزینه ارسال:</span>
            <span className="text-green-600">رایگان</span>
          </div>

          <div className="flex justify-between py-2 text-lg font-bold text-gray-800 border-t mt-4 pt-4">
            <span>مبلغ قابل پرداخت:</span>
            <span>2,900,000 تومان</span>
          </div>

          <button className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
            نهایی‌سازی خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
