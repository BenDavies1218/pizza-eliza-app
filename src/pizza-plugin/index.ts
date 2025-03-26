import type { Plugin } from "@elizaos/core";
import { cancelOrder } from "./actions/cancel-order";
import { startOrder } from "./actions/start-order";
import { updateCustomer } from "./actions/update-customer";
import { updateOrder } from "./actions/update-order";
import { pizzaEvaluator } from "./evaluators/pizza-evaluator";
import { pizzaProvider } from "./providers/pizza-provider";

const pizzaPlugin: Plugin = {
    name: "pizza",
    description: "Agent pizza plugin",
    actions: [
        startOrder,
        cancelOrder,
        updateCustomer,
        updateOrder,
    ],
    evaluators: [pizzaEvaluator],
    providers: [pizzaProvider],
};

export { pizzaPlugin };
