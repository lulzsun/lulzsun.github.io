import { MarkdownComponents } from "../../../components/blog/MarkdownComponents";
import ReactMarkdown from "react-markdown";
import dedent from "dedent";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import BlogPost from "../../../components/blog/BlogPost";
import { CookMode } from "../../../components/blog/CookMode";
import { IngredientCheckBox } from "../../../components/blog/IngredientCheckBox";

export const metadata = {
  title: "How to Make Durian Mochi Rolls | Jimmy Quach",
  description: "Phoenix Dessert Copycat Recipe.",
  tags: ["baking", "recipe"],
  created: new Date("2026-6-10"),
};

export default function Page() {
  return (
    <BlogPost>
      <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 flex flex-col gap-6">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          children={dedent`
            # How to Make Durian Mochi Rolls
            The inspiration for this recipe is a dessert from [Phoenix Food and Dessert](https://phoenixfood.us).

            Don't like durian or having difficulty obtaining it? Substitute it with mango!

            - Dough recipe from: [https://www.youtube.com/watch?v=dSgHnhMh8TY](https://www.youtube.com/watch?v=dSgHnhMh8TY)
            - Durian filling from: [https://zhangcatherine.com/durian-mochi-recipe/](https://zhangcatherine.com/durian-mochi-recipe/)
          `}
        />
        <div className="flex flex-col gap-2">
          <CookMode />
          <div className="flex items-center gap-3 w-full my-4">
            <span className="text-2xl font-medium whitespace-nowrap">Ingredients</span>
            <div className="flex-1 border-t border-base-content/20" />
          </div>
          <span className="text-xl font-medium whitespace-nowrap">Mochi Dough</span>
          <IngredientCheckBox>100g Glutinous rice flour</IngredientCheckBox>
          <IngredientCheckBox>10g Rice flour</IngredientCheckBox>
          <IngredientCheckBox>10g Corn (or Wheat) starch</IngredientCheckBox>
          <IngredientCheckBox>10g Neutral vegetable oil (Corn/Soybean oil)</IngredientCheckBox>
          <IngredientCheckBox>175g Warm water</IngredientCheckBox>
          <IngredientCheckBox>17.5g White sugar</IngredientCheckBox>
          <IngredientCheckBox>Fine shredded coconut (optional, for coating the roll)</IngredientCheckBox>
          <span className="text-xl font-medium whitespace-nowrap">Durian Cream Filling</span>
          <IngredientCheckBox>200g Fresh/Frozen durian flesh (can sub for mango here)</IngredientCheckBox>
          <IngredientCheckBox>85g (82ml) Heavy Cream</IngredientCheckBox>
          <IngredientCheckBox>10g White sugar</IngredientCheckBox>
          <div className="flex items-center gap-3 w-full my-4">
            <span className="text-2xl font-medium whitespace-nowrap">Instructions</span>
            <div className="flex-1 border-t border-base-content/20" />
          </div>
          <ReactMarkdown
            components={{
              ...MarkdownComponents,
              ol: ({ children }) => (
                <ol className="list-none [counter-reset:list-counter] pl-0 my-4 space-y-3">{children}</ol>
              ),

              li: ({ children }) => (
                <li className="relative pl-9 [counter-increment:list-counter] before:content-[counter(list-counter)] before:absolute before:left-0 before:top-0.5 before:flex before:items-center before:justify-center before:w-6 before:h-6 before:text-xs before:font-bold before:text-base-content before:bg-red-400 before:rounded-full">
                  {children}
                </li>
              ),
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            children={dedent`
              ### Mochi Dough
              1. Transfer glutinous rice flour, normal rice flour, corn starch, and white sugar to a mixing bowl.
              2. Pour warm water (temp around 100-120F) to the dry mix and whisk. Yellow food coloring can optionally be added here.
              3. Add the neutral vegetable oil and whisk evenly.
              4. Prepare a bowl or pan (use a square container preferably) for steaming, brush with corn oil, then pour dough through a strainer.
              5. Steam for 30 minutes on high. After 30 minutes, set aside to cool.
              ### Durian Cream Filling
              1. In another mixing bowl, whip heavy cream and sugar to stiff peaks using electric mixer.
              2. Gently fold in 1/2 mashed durian flesh until fully incorporated.
              3. Put cream filling in freezer for about 30 minutes or until slighty firm enough to handle.
              ### Assembly
              1. Spread out cling wrap onto work surface for rolling. 
              2. Lightly dust work surface with shredded coconut flakes (and/or cornstarch) and spread out the mochi dough onto work surface.
              3. Layer a second sheet of cling wrap on top of the mochi (sandwiching it), and start rolling out the dough to a desired thickness (maybe about 4mm in thickness)
              4. Scoop filling into roll and the saved 1/2 fresh/defrosted durian flesh in the middle of the dough.
              5. Connect one edge of the mochi dough to the other end and form the roll.
            `}
          />
        </div>
      </div>
    </BlogPost>
  );
}
