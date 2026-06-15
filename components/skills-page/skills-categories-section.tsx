import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { SkillCategoryItem, SkillItem } from "@/types/skills.types";
import { containerVariants, getCategoryIcon, itemVariants } from "./constants";

type SkillsCategoriesSectionProps = {
  skillCategories: Record<string, SkillCategoryItem>;
};

function SkillCard({
  skill,
  index,
  colorGradient,
}: {
  skill: SkillItem;
  index: number;
  colorGradient: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="hover:shadow-2xl transition-all duration-300 group border-border/40 hover:border-violet-500/40 bg-card/35 backdrop-blur-md relative overflow-hidden">
        
        {/* Glow effect on card hover */}
        <div className="absolute -inset-px bg-linear-to-r from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3.5">
              <div className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-bold tracking-tight text-foreground/90 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground">
                  {skill.experience}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-black tabular-nums text-foreground/85">
                {skill.level}%
              </div>
            </div>
          </div>

          {/* Smooth spring gradient progress bar */}
          <div className="w-full bg-muted/40 dark:bg-muted/10 border border-border/10 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className={`bg-linear-to-r ${colorGradient} h-full rounded-full shadow-xs`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CategorySection({
  category,
  skills,
}: {
  category: SkillCategoryItem;
  skills: SkillItem[];
}) {
  const CategoryIcon = getCategoryIcon(category.iconKey);
  const colorGradient = category.color || "from-violet-500 to-indigo-500";

  return (
    <div className="space-y-10 relative">
      
      {/* Dynamic tech net background lines */}
      <div className="absolute inset-x-0 top-12 bottom-0 pointer-events-none opacity-30 dark:opacity-20 z-0">
        <svg className="w-full h-full stroke-violet-500/30 dark:stroke-violet-400/15 fill-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <motion.path
            d="M 100,50 Q 250,150 400,50 T 700,50 T 900,150"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M 50,250 C 300,100 600,350 950,200"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className={`inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-linear-to-r ${colorGradient} text-white shadow-lg`}
        >
          <CategoryIcon className="h-5 w-5" />
          <h2 className="text-base font-bold tracking-wide uppercase">{category.title}</h2>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            colorGradient={colorGradient}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsCategoriesSection({
  skillCategories,
}: SkillsCategoriesSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="grid w-full max-w-3xl grid-cols-3 lg:grid-cols-6 p-1 bg-muted/40 dark:bg-muted/10 border border-border/40 rounded-2xl">
              <TabsTrigger value="frontend" className="rounded-xl font-semibold cursor-none">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="rounded-xl font-semibold cursor-none">Backend</TabsTrigger>
              <TabsTrigger value="database" className="rounded-xl font-semibold cursor-none">Database</TabsTrigger>
              <TabsTrigger value="tools" className="rounded-xl font-semibold cursor-none">Tools</TabsTrigger>
              <TabsTrigger value="mobile" className="rounded-xl font-semibold cursor-none">Mobile</TabsTrigger>
              <TabsTrigger value="design" className="rounded-xl font-semibold cursor-none">Design</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="focus-visible:outline-hidden">
              <CategorySection category={category} skills={category.skills} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
