import {https, config} from 'firebase-functions';
import * as admin from 'firebase-admin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const streamChat = require('stream-chat').StreamChat;
import {StreamChat} from 'stream-chat';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')({origin: true});

const conf = config();
const corsFunc = cors;

const serverStream = StreamChat.getInstance(
  conf.stream.key,
  conf.stream.secret
);

admin.initializeApp();

export const createStreamUser = https.onRequest((request, response) => {
  corsFunc(request, response, async () => {
    const {user} = request.body;
    if (!user) {
      throw new https.HttpsError('failed-precondition', 'Bad request');
    }
    try {
      await serverStream.upsertUser({
        id: user.uid,
        name: user.displayName,
        email: user.email,
      });
      response.status(200).send({message: 'User created'});
    } catch (error) {
      throw new https.HttpsError('aborted', 'Could not create user');
    }
  });
});

export const createStreamToken = https.onRequest((request, response) => {
  corsFunc(request, response, async () => {
    const {user} = request.body;
    if (!user) {
      throw new https.HttpsError('failed-precondition', 'Bad request');
    }
    try {
      const token = serverStream.createToken(user.uid);
      response.status(200).send({token});
    } catch (error) {
      throw new https.HttpsError('aborted', 'Could not create user');
    }
  });
});
