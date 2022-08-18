#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(AddPassModule, NSObject)

RCT_EXTERN_METHOD(canAddPasses:
                  (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                  )

RCT_EXTERN_METHOD(addPass:(NSString)base64Encoded
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                  )

@end
