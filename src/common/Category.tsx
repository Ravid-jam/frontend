const category = [
  {
    id: 1,
    title: "Mobiles & Tablets",
    image:
      "https://media.istockphoto.com/id/171324815/photo/frontal-screens-of-tablet-and-mobile.jpg?s=1024x1024&w=is&k=20&c=O3KpjjcQR1zC1DFKKLLDt45oWVYFvytof18dqkpeaBE=",
  },
  {
    id: 2,
    title: "Tvs & Applications",
    image:
      "https://images.unsplash.com/photo-1699898016940-ac6892b79171?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Electronics",
    image:
      "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Fashion",
    image:
      "https://plus.unsplash.com/premium_photo-1708274926468-f3ef322edffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Beauty",
    image:
      "https://img.freepik.com/premium-photo/collection-beauty-products-including-one-products_1161593-3804.jpg?w=740",
  },
  {
    id: 6,
    title: "Home & Kitchen",
    image:
      "https://images.unsplash.com/photo-1520981825232-ece5fae45120?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Furniture",
    image:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 8,
    title: "Travel",
    image:
      "https://plus.unsplash.com/premium_photo-1679830513922-d11c0fedfa99?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 9,
    title: "Grocery",
    image:
      "https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

interface ICategory {
  id: number;
  title: string;
  image: string;
}
export default function Category() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold leading-[1.1] md:text-3xl">
          Category
        </h2>
      </div>
      <div className="bg-white py-6  lg:pb-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {category.map((item: ICategory, index: number) => (
              <div key={index}>
                <a className="group relative flex h-96 cursor-pointer items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                  <img
                    src={item.image}
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-125"
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-[#004AAC]  p-4 text-center">
                    <span className="text-lg font-bold text-white lg:text-xl">
                      {item.title}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
