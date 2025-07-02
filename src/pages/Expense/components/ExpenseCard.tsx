import { Edit } from "lucide-react";
import StyledLink from "../../../components/StyledLink";
import type { IExpense } from "../../../types/expense";

interface IExpenseCard {
  data: IExpense;
}

function ExpenseCard(props: IExpenseCard) {
  const { id, title, amount, description, image_url, profile } = props.data;
  return (
    <div className="my-2 flex gap-4 p-4 border border-gray-400 sm:rounded-md bg-gray-200 ">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={image_url || `https://picsum.photos/seed/${id}/200`}
          alt={title}
          className="w-full h-full object-cover rounded"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-900">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-3 text-sm">
          <div className="flex items-center gap-2">
            <img
              src={profile?.avatar_url || "/default-avatar.png"}
              alt={profile?.full_name || "User"}
              className="w-6 h-6 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-gray-700">
              {profile?.full_name || "Unknown"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <StyledLink
          variant="secondary"
          className="w-fit"
          to={`/expenses/${id}/edit`}
        >
          <Edit />
        </StyledLink>
        <div className="text-gray-900 font-medium text-2xl">
          ₹{amount.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;
