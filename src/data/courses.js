// data/courses.js

const courses = [
  {
    id: 1,
    title: "آموزش جامع React از مقدماتی تا پیشرفته",
    categoryId: 2,
    price: 350000,
    description:
      "در این دوره، یاد می‌گیرید چگونه با React اپلیکیشن‌های مدرن، سریع و حرفه‌ای بسازید. از پایه شروع می‌کنیم تا ساخت پروژه‌های واقعی همراه با مفاهیم پیشرفته.",
    image: "/images/course/Js.webp",
    level: "متوسط تا پیشرفته",
    duration: "۲۰ ساعت",
    teacherId: 1,
    teacher: {
      name: "محمد محمدی",
      avatar: "/images/teachers/1.png",
      bio: "برنامه‌نویس فرانت‌اند و مدرس React با بیش از ۶ سال تجربه",
    },
    outline: [
      "آشنایی با JSX و کامپوننت‌ها",
      "مدیریت state و props",
      "استفاده از useEffect و lifecycle",
      "مسیریابی با React Router",
      "ساخت پروژه Todo App",
      "اتصال به API و مدیریت درخواست‌ها",
      "مباحث پیشرفته: Context, Custom Hooks, Performance",
      "پروژه نهایی: پنل کاربری حرفه‌ای",
    ],
  },
  {
    id: 2,
    title: "دوره فوق‌ تخصصی PHP MVC",
    categoryId: 1,
    price: 1200000,
    description: "در این دوره از صفر شروع میکنیم و کامل PHP رو یاد میگیریم",
    image: "/images/course/php.webp",
    level: "مقدماتی تا پیشرفته",
    duration: "۳۰ ساعت",
    teacherId: 2,
    teacher: {
      name: "علیرضا حسینی",
      avatar: "/images/teachers/2.webp",
      bio: "برنامه‌نویس بک‌اند با ۸ سال تجربه در توسعه وب و متخصص PHP",
    },
    outline: [
      "مبانی PHP و اصول برنامه‌نویسی",
      "ساختار MVC چیست؟",
      "ساخت یک فریمورک ساده MVC",
      "پیاده‌سازی سیستم احراز هویت",
      "اتصال به دیتابیس و ORM",
      "ساخت پنل مدیریت با PHP MVC",
    ],
  },
  {
    id: 3,
    title: "دوره آموزشی گیت و گیت هاب",
    categoryId: 3,
    price: 850000,
    description: "در این دوره به صورت کامل گیت و گیت هاب رو یاد میگیریم",
    image: "/images/course/Git.webp",
    level: "مقدماتی",
    duration: "۸ ساعت",
    teacherId: 3,
    teacher: {
      name: "سارا محمدی",
      avatar: "/images/teachers/3.png",
      bio: "کارشناس DevOps با تجربه عملی در CI/CD و مدیریت پروژه با Git",
    },
    outline: [
      "مقدمه‌ای بر Git و GitHub",
      "نصب و راه‌اندازی Git",
      "ایجاد مخزن و commit کردن",
      "استفاده از branch ها",
      "Merge و Conflict resolution",
      "کار با GitHub و پروژه‌های تیمی",
    ],
  },
];

export default courses;
