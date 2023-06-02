"use strict";
exports.__esModule = true;
exports.TableExportUtil = void 0;
var XLSX = require("xlsx");
var getFileName = function (name) {
    var timeSpan = new Date().toISOString();
    var sheetName = name || 'ExportResult';
    var fileName = sheetName + "-" + timeSpan;
    return {
        sheetName: sheetName,
        fileName: fileName
    };
};
var TableExportUtil = /** @class */ (function () {
    function TableExportUtil() {
    }
    TableExportUtil.exportToExcel = function (arr, name) {
        var _a = getFileName(name), sheetName = _a.sheetName, fileName = _a.fileName;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.json_to_sheet(arr);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.writeFile(wb, fileName + ".xlsx");
    };
    return TableExportUtil;
}());
exports.TableExportUtil = TableExportUtil;
//# sourceMappingURL=tableExportUtil.js.map