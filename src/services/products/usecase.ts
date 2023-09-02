import { Products } from 'src/entities/Products';

export class ProductsUsecase {
  public async fetchAll(): Promise<Record<string, Products[]>> {
    const allProducts = await Products.find();
    return { products: allProducts };
  }

  public async fetchById(productId: string): Promise<Record<string, Products | null>> {
    const product = await Products.findOneBy({ productId });
    return { product };
  }
}
