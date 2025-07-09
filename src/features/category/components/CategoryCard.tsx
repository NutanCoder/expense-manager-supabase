import StyledLink from "../../../components/StyledLink";
import type { ICategory } from "../../../types/category";

interface ICategoryCard {
  data: ICategory;
  showExpenseButton?: boolean;
}

function CategoryCard(props: ICategoryCard) {
  const { id, name, description, image_url, profile } = props.data;

  const fallbackImage = `https://picsum.photos/seed/${encodeURIComponent(id)}/500/300`;
  const avatar = profile?.avatar_url || "/default-avatar.png";
  const creator = profile?.full_name || "Unknown";

  return (
    <div className="sm:rounded-lg overflow-hidden shadow-md text-white relative bg-gray-50 border-1 border-gray-400">
      {/* Image with Created By Overlay */}
      <div className="relative">
        <img
          src={image_url ?? fallbackImage}
          alt={name || "Category"}
          className="w-full h-40 object-cover"
          loading="lazy"
        />

        {/* Created by overlay (top-left) */}
        <div className="absolute right-2 bottom-2 bg-black bg-opacity-60 pl-1 pr-3 py-1 rounded-full flex items-center gap-2 text-sm">
          <img
            src={avatar}
            alt={creator}
            className="w-6 h-6 rounded-full object-cover"
            loading="lazy"
          />
          <span>{creator}</span>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between gap-2">
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-2 text-black">{name}</h3>
          <p className="text-sm text-gray-800 mb-4">{description}</p>
        </div>
        {props.showExpenseButton && (
          <StyledLink className="shrink-0" to={`/categories/${id}`}>
            See Expense
          </StyledLink>
        )}
        <StyledLink className="shrink-0" to={`/categories/${id}/edit`}>
          Edit Category
        </StyledLink>
      </div>
    </div>
  );
}

export default CategoryCard;
