"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const worldCups_js_1 = require("./data/worldCups.js");
const handler = async () => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(worldCups_js_1.worldCups),
    };
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map