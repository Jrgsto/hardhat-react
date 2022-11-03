import { ProviderServiceAbstract } from "services/providers/abstracts";
import { OrderServiceAbstractEVM } from "services/adapters/evm/abstracts/OrderServiceAbstractEVM";

export type TProviderTypes = "evm";

export type EVMProvider = ProviderServiceAbstract<OrderServiceAbstractEVM>;
