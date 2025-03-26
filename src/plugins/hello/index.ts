import type { Plugin } from "@elizaos/core";
import { helloAction } from "./actions/hello.js";
import { helloEvaluator } from "./evaluators/hello.js";
import { helloProvider } from "./providers/hello.js";

const helloPlugin: Plugin = {
    name: "hello",
    description: "Agent hello plugin",
    actions: [
        helloAction,
    ],
    evaluators: [helloEvaluator],
    providers: [helloProvider],
};

export { helloPlugin };
