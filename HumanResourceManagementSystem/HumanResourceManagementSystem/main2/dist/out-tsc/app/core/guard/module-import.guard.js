"use strict";
exports.__esModule = true;
exports.throwIfAlreadyLoaded = void 0;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import " + moduleName + " modules in the AppModule only.");
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
//# sourceMappingURL=module-import.guard.js.map