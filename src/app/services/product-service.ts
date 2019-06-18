export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>) {
  }
}

const products = [
  {
    id: 0,
    title: 'First Product',
    price: 24.99,
    rating: 4.3,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware']
  },
  {
    id: 1,
    title: 'Second Product',
    price: 64.99,
    rating: 3.5,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books']
  },
  {
    id: 2,
    title: 'Third Product',
    price: 74.99,
    rating: 4.2,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics']
  },
  {
    id: 3,
    title: 'Fourth Product',
    price: 84.99,
    rating: 3.9,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['hardware']
  },
  {
    id: 4,
    title: 'Fifth Product',
    price: 94.99,
    rating: 5,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware']
  },
  {
    id: 5,
    title: 'Sixth Product',
    price: 54.99,
    rating: 4.6,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books']
  }
];

export interface ParamsProduct {
  id?: number;
  title?: string;
  price?: number;
  categories?: string;
}

export class ProductService {

  getProducts(): Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  private getProductsByOneParam(p: any, type: string, items: Product[]): Product[] | null {
    return items.filter(item => item[type] === p);
  }

  async getProductsByParam(params: ParamsProduct): Promise<Product[] | Product | undefined> {
    let items = await this.getProducts();
    if (params.id) {
      return this.getProductsByOneParam(params.id, 'id', items)[0];
    } else {
      if (params.title) {
        items = this.getProductsByOneParam(params.title, 'title', items);
      }

      if (params.price) {
        items = this.getProductsByOneParam(params.price, 'price', items);
      }

      if (params.categories) {
        items = items.filter( item => {
          return item.categories
                .map(cat => cat.toLocaleLowerCase())
                .indexOf(params.categories.toLocaleLowerCase()) !== -1;
        });
      }
      return items;
    }
  }
}
