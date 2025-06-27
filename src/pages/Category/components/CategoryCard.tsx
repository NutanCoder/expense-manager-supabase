import type { ICategory } from "../../../types/category";

interface ICategoryCard {
  data: ICategory;
}

function CategoryCard(props: ICategoryCard) {
  const category = props.data;
  const fallbackImage = `https://picsum.photos/seed/${encodeURIComponent(
    category.id
  )}/500/300`;

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md text-white"
      style={{ backgroundColor: category.color }}
    >
      {/* Image */}
      <img
        src={category.image_url ?? fallbackImage}
        alt={category.name}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
        <p className="text-sm">{category.description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
