import { MarkdownComponents } from "../../../components/blog/MarkdownComponents";
import ReactMarkdown from "react-markdown";
import dedent from "dedent";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import BlogPost from "../../../components/blog/BlogPost";
import { CookMode } from "../../../components/blog/CookMode";
import { IngredientCheckBox } from "../../../components/blog/IngredientCheckBox";

export const metadata = {
  title: "How to Make Banana Bread | Jimmy Quach",
  description: "Baking Banana Bread, NO AI, NO CODE, all natural human instructions.",
  tags: ["baking", "recipe"],
  createdAt: new Date("2026-6-6"),
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
            # How to Make Banana Bread
            You wanna make banana bread my way? Follow the recipe below.
          `}
        />
        <div className="flex flex-col gap-2">
          <CookMode />
          <div className="flex items-center gap-3 w-full my-4">
            <span className="text-2xl font-medium whitespace-nowrap">Ingredients</span>
            <div className="flex-1 border-t border-base-content/20" />
          </div>
          <IngredientCheckBox>2.5 (or more, read instructions) ripe bananas</IngredientCheckBox>
          <IngredientCheckBox>220g All-purpose flour</IngredientCheckBox>
          <IngredientCheckBox>8g baking powder</IngredientCheckBox>
          <IngredientCheckBox>1g baking soda</IngredientCheckBox>
          <IngredientCheckBox>2.5g salt</IngredientCheckBox>
          <IngredientCheckBox>113g (a stick of) butter @ room temp</IngredientCheckBox>
          <IngredientCheckBox>10g browned milk powder</IngredientCheckBox>
          <IngredientCheckBox>30g white sugar</IngredientCheckBox>
          <IngredientCheckBox>30g brown sugar</IngredientCheckBox>
          <IngredientCheckBox>2 eggs room temp</IngredientCheckBox>
          <IngredientCheckBox>A splash of vanilla extract</IngredientCheckBox>
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
              1. Measure dry ingredients (not counting sugars/milk powder) in a seperate bowl<br/><br/>
              2. Cream butter with sugars (add browned milk powder here) in mixing bowl<br/><br/>
              3. If you have 2 and 1/2 bananas, then mash them up in a bowl and set aside, however I
              recommend doing a reduction if you have around 400g+ worth of bananas. <br/><br/>
              I like to use old browned bananas that I saved in the freezer. Add frozen bananas to a
              sauce pan and reduce on med to low heat, stirring often to make sure it doesnt burn and
              stick to the bottom of the sauce pan.<br/><br/>
              4. Add 1/3 of dry ingredients and 1/3 of the banana mixture to mixing bowl and mix in
              until fully mixed.<br/><br/>
              5. Feel free to add a dash or splash of vanilla extract here if you haven't already.
              6. Bake at 350 °F (175 °C) for 35-40 minutes, I use a medium size counter convection oven.<br/><br/>
              7. Take out to cool for an hour or more, then serve!
            `}
          />
        </div>
      </div>
    </BlogPost>
  );
}
