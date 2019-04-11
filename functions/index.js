const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.newPrediction = functions.firestore.document('predictions/{userId}')
    .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'characters': [...], 'king': {} ... }
    var prediction = snap.data();
    const userId = context.params.userId;

    return admin.firestore().collection(`predictions`).doc("world").get().then(snapshot => {
        const worldPrediction = snapshot.data();
        console.log(worldPrediction)

        worldPrediction["counter"]++;

        for(var c of prediction.characters) {
          var searchItem = worldPrediction.characters.find(wC => wC.id == c.id);

          if(c.isDead)
            searchItem["deadCounter"]++;

          if(c.isKing)
            searchItem["kingCounter"]++;
        }

        return admin.firestore().collection(`predictions`).doc("world").update(worldPrediction);
    });
});