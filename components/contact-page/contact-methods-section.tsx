import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ContactMethodItem } from "@/types/contact.types";
import {
  containerVariants,
  contactMethodIconMap,
  itemVariants,
} from "./constants";

type ContactMethodsSectionProps = {
  contactMethods: ContactMethodItem[];
};

export default function ContactMethodsSection({
  contactMethods,
}: ContactMethodsSectionProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {contactMethods.map((method) => {
        const Icon = contactMethodIconMap[method.title.toLowerCase()] ?? Mail;
        const gradientClass =
          method.colorClass ?? method.color ?? "from-blue-500 to-cyan-500";

        return (
          <motion.div key={method.title} variants={itemVariants}>
            <Link href={method.href}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardHeader>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r ${gradientClass} text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
