"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var rezise_1 = require("../routes/rezise");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var req = (0, supertest_1.default)(index_1.default);
describe("Testing endpoints", function () {
    it("test the display of image palmtunnel", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.get("/images_api?image=palmtunnel").expect(200)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test the display of image fjord", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.get("/images_api?image=fjord").expect(200)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test the display of non existing image ", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.get("/images_api?image=kfhks").expect(404)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test the display of non existing image name start with exisitng ", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.get("/images_api?image=fjorddjs").expect(404)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing resize of images", function () {
    it("test successful resizing", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req
                        .get("/images_api?image=palmtunnel&width=400&height=400")
                        .expect(200)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test the display of non existing image ", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req
                        .get("/images_api?image=palmtunnell&width=400&height=400")
                        .expect(404)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test if the image have been processed", function () { return __awaiter(void 0, void 0, void 0, function () {
        var imagePath, resized_folder, imagePath_new, rezise_function;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imagePath = path_1.default.join(__dirname, "../../assets/images", "fjord.jpg");
                    resized_folder = path_1.default.join(__dirname, "../../assets/resized");
                    if (!!fs_1.default.existsSync(resized_folder)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fs_1.default.mkdirSync(resized_folder)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    imagePath_new = path_1.default.join(resized_folder, "fjord-200x200.jpg");
                    rezise_function = (0, rezise_1.resize_image)(imagePath, "200", "200", "fjord");
                    rezise_function.then(function () {
                        expect(fs_1.default.existsSync(imagePath_new)).toBeTrue;
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing validatior", function () {
    it("test the incorrect passing of link", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.get("/images_api?").expect(404)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test the incorrect passing of negitve value to height and width ", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req
                        .get("/images_api?image=palmtunnell&width=-100&height=-100")
                        .expect(404)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("test the incorrect passing of zero value to height and width ", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.get("/images_api?image=palmtunnell&width=0&height=0").expect(404)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
exports.default = req;
