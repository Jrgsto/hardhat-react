export type OrderServiceAbstract<P> = P;

export abstract class ProviderServiceAbstract<O> {
  abstract OrderService: OrderServiceAbstract<O>;
}
