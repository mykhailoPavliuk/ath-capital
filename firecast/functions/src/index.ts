import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// import * as firebase from "firebase";

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const scheduledFunction = functions.pubsub.schedule("every 1 minutes")
    .onRun(() => {
      admin.firestore().collection("commissions")
          .get().then((querySnapshot) =>
            querySnapshot.forEach(function(commission) {
              // eslint-disable-next-line guard-for-in
              for (const level in commission.data()) {
                admin.firestore().collection("users")
                    .get().then((querySnapshot) => {
                      querySnapshot.forEach(function(doc) {
                        if (doc.data()[level].length) {
                          doc.data()[level]
                              .forEach((el: { email: string; }) => {
                                admin.firestore().collection("users")
                                    .get().then((querySnapshot) => {
                                      querySnapshot.forEach((user) => {
                                        if (user.data()["email"] === el.email) {
                                          doc.ref.update({
                                            newField: doc.data()["newField"] +
                                                (user.data()["wallet"] *
                                                    commission.data()[level]/
                                                    100),
                                          });
                                        }
                                      });
                                    });
                              });
                        }
                      });
                    });
              }
            }));
      // return admin.firestore().collection("users")
      //     .get().then((querySnapshot) => {
      //       querySnapshot.forEach(function(doc) {
      //         if (doc.data()["level1"].length) {
      //           doc.data()["level1"].forEach((el: { email: string; })=>{
      //             admin.firestore().collection("users")
      //                 .get().then((querySnapshot) => {
      //                   querySnapshot.forEach((user) => {
      //                     if (user.data()["email"] === el.email) {
      //                       doc.ref.update({
      //                         newField: doc.data()["newField"]+
      //                             (user.data()["wallet"]*0.1),
      //                       });
      //                     }
      //                   });
      //                 });
      //           });
      //         }
      //       });
      //     });
    });
// export const findUserByEmail=(email:string) => {
//   let target:any;
//   admin.firestore().collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       if (target&&target["email"] === email) {
//         target = doc.data();
//       }
//     });
//   });
//   // return target?.["wallet"]?target["wallet"]:false;
//   return target?target:false;
// };
