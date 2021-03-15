class CatalogApi {
  static mountCatalog(categories, products) {
    return categories.map(category => (
      {
        ...category,
        products: products.filter(product => product.category === category.id)
      }
    ));
  }

  static formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }
}

export default CatalogApi;
