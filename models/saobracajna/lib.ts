import ffi from "ffi-napi";
import API_TYPES, { refTypeOf } from "./types";
import { SAOBRACAJNAAPI_DLL_PATH } from "../../util/get-saobracajnaApi-path";

export const createSaobracajnaApiLib = () =>
  ffi.Library(SAOBRACAJNAAPI_DLL_PATH, {
    sdStartup: ["longlong", ["int"]],
    sdCleanup: ["longlong", []],
    GetReaderName: ["longlong", ["long", API_TYPES.LPCSTR, "long*"]],
    SelectReader: ["longlong", [API_TYPES.LPCSTR]],
    sdProcessNewCard: ["longlong", []],
    sdReadDocumentData: ["longlong", [refTypeOf(API_TYPES.SD_DOCUMENT_DATA)]],
    sdReadVehicleData: ["longlong", [refTypeOf(API_TYPES.SD_VEHICLE_DATA)]],
    sdReadPersonalData: ["longlong", [refTypeOf(API_TYPES.SD_PERSONAL_DATA)]],
    sdReadRegistration: [
      "longlong",
      [refTypeOf(API_TYPES.SD_REGISTRATION_DATA), "long"],
    ],

    // long sdStartup(long version);
    // long sdCleanup();
    // long GetReaderName(long index, char* readerName, long* nameSize);
    // long SelectReader(char* reader);
    // long sdProcessNewCard();
    // long sdReadDocumentData(SD_DOCUMENT_DATA* data);
    // long sdReadVehicleData(SD_VEHICLE_DATA* data);
    // long sdReadPersonalData(SD_PERSONAL_DATA* data);
    // long sdReadRegistration(SD_REGISTRATION_DATA* data, long index);
  });
