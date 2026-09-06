export function formatCategory(category: string): string {
  if (!category) {
    return "Sin categoría";
  }

  return category.charAt(0).toUpperCase() + category.slice(1);
}
