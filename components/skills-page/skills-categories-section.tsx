import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { SkillCategoryItem, SkillItem } from "@/types/skills.types";
import { containerVariants, getCategoryIcon, itemVariants } from "./constants";

type SkillsCategoriesSectionProps = {
  skillCategories: Record<string, SkillCategoryItem>;
};

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.experience}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{skill.level}%</div>
            </div>
          </div>
          <Progress value={skill.level} className="h-2" />
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

  return (
    <div className="space-y-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r ${category.color} text-white mb-4`}
        >
          <CategoryIcon className="h-5 w-5" />
          <h2 className="text-lg font-semibold">{category.title}</h2>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsCategoriesSection({
  skillCategories,
}: SkillsCategoriesSectionProps) {
  return (
    <section className="py-20">
      <div className="container">
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-4xl grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <CategorySection category={category} skills={category.skills} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
