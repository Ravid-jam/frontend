import Heading from "@/src/common/Heading";
type Props = {
  category: string;
};

export default function FilterProducts({ category }: Props) {
  console.log(category);
  return (
    <div className="flex flex-col gap-2 px-3">
      <Heading
        title="Releted Products"
        description="Explore this products and buy products"
      />
      {/* <div className="grid gap-3 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {products
          .filter((item) => item.category._id === category)
          .map((row: Product, index: number) => (
            <div key={index}>
              <ProductItem row={row} />
            </div>
          ))}
      </div> */}
    </div>
  );
}
