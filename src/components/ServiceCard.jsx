import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, duration, price, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="space-y-3">
        <h3 className="font-heading text-2xl lg:text-3xl font-medium text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4">
            {duration && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground tracking-wide">
                <Clock className="h-3.5 w-3.5" />
                {duration}
              </span>
            )}
            {price && (
              <span className="text-sm font-medium text-primary">
                {price}
              </span>
            )}
          </div>
          <Link
            to="/booking"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-primary hover:gap-3 transition-all duration-300"
          >
            Book <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}