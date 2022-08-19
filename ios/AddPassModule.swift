import Foundation
import UIKit
import AVFoundation
import PassKit
import React

@objc(AddPassModule)
class AddPassModule: NSObject {
  

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc(canAddPasses:rejecter:)
    func canAddPasses(_ resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) -> Void {
      resolve(PKAddPassesViewController.canAddPasses())
    }
  
  @objc(addPass:resolver:rejecter:)
    func addPass(_ base64Encoded: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
      
        if let decodedData = Data(base64Encoded: base64Encoded) {
          DispatchQueue.main.async(execute: {
            do {
              let pass = try? PKPass(data: decodedData)
              
              if pass != nil {
                if let addPassesVC = PKAddPassesViewController(pass: pass!) {
                  if let rootVC = UIApplication.shared.windows.first!.rootViewController {
                    rootVC.present(addPassesVC, animated: true, completion: {() in
                      resolve(nil)
                    })
                  }
                }
                return
              } else {
                reject("", "Can not create pass, probably wrong parameters", nil)
              }
            }
            
          })
        } else {
          reject("", "Can not decode base64 data", nil)
        }
      
      
      
    }
}
