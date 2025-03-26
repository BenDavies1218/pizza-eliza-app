import type { Plugin } from "@elizaos/core";
import { goodbyeAction } from "./actions/goodbye.js";
import { goodbyeEvaluator } from "./evaluators/goodbye.js";
import { goodbyeProvider } from "./providers/goodbye.js";

const goodbyePlugin: Plugin = {
    name: "goodbye",
    description: "Agent goodbye plugin",
    actions: [
        goodbyeAction,
    ],
    evaluators: [goodbyeEvaluator],
    providers: [goodbyeProvider],
};

export { goodbyePlugin };
