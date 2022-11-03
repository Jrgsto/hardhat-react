import { OrderServiceAbstractEVM } from "services/adapters/evm/abstracts/OrderServiceAbstractEVM";
import {
  OrderServiceAbstract
} from "services/providers/abstracts";
import {
  OrderService as EVMOrderService
} from "../adapters/evm";
import { EVMProvider, TProviderTypes } from "./ProviderService.types";

const generateProvider = (providerType: TProviderTypes): EVMProvider => {
  return {
    OrderService: orderService[providerType],
  };
};

const orderService: { evm: OrderServiceAbstract<OrderServiceAbstractEVM> } = {
  evm: EVMOrderService,
};

/* Adjustment required if adding additional providers */
export const getProviderServices = (
  providerType: TProviderTypes
): EVMProvider => {
  return generateProvider(providerType);
};
