import Button from "../../../components/Button";
import StyledLink from "../../../components/StyledLink";
import type { ICategory } from "../../../types/category";

interface ICategoryCard {
  data: ICategory;
}

function CategoryCard(props: ICategoryCard) {
  const { id, name, description, color, image_url, profile } = props.data;

  const fallbackImage = `https://picsum.photos/seed/${encodeURIComponent(
    id
  )}/500/300`;
  const avatar = profile?.avatar_url || "/default-avatar.png";
  const creator = profile?.full_name || "Unknown";

  return (
    <div
      className="sm:rounded-lg overflow-hidden shadow-md text-white relative"
      style={{ backgroundColor: color }}
    >
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

      <div className="p-4 flex items-center justify-between">
        <div className="w-full">
          <h3
            className="text-xl font-semibold mb-2"
            style={{
              color: getContrastTextColor(color ?? "#fffff"),
            }}
          >
            {name}
          </h3>
          <p
            className="text-sm text-gray-200 mb-4"
            style={{
              color: getContrastTextColor(color ?? "#fffff"),
            }}
          >
            {description}
          </p>
        </div>
        <StyledLink className="shrink-0" to={`/categories/${id}`}>
          See Expense
        </StyledLink>
      </div>
    </div>
  );
}

export default CategoryCard;

function getContrastTextColor(hex: string): string {
  // Remove leading "#" if present
  const color = hex.replace("#", "");

  // Parse RGB components
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // If luminance is high, use black text; otherwise white
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
