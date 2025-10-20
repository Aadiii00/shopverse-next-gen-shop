import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/mockData";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {discount > 0 && (
              <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                -{discount}%
              </Badge>
            )}
            {product.featured && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
            
            {/* Quick Add Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Button className="w-full" size="sm" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground text-sm">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.inStock ? (
                <Badge variant="outline" className="text-success border-success">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="outline" className="text-muted-foreground">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
