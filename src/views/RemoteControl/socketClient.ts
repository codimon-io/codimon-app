import { io } from 'socket.io-client';
import arrayBufferToBase64 from './arrayBufferToBase64';

let socket;

let videoScreen: HTMLImageElement|null;

export const initSocket = (user: any) => {
  socket = io("http://localhost:3003");

  console.log('Connecting socket...');

  if (socket) {
    videoScreen = document.getElementById("video-screen") as HTMLImageElement;

    socket.on("device:streaming", (data) => {
      const { imageBuffer } = data;

      console.log("Received", imageBuffer);

      if (videoScreen) {
        videoScreen.src = `data:image/jpg;base64, ${arrayBufferToBase64(imageBuffer)}`;
      }
    });

    socket.emit("user:identify", {
      clientType: "user",
      userId: user.userId,
      deviceIds: user.deviceIds,
    });
  }
}

export const startStreaming = (user: any) => {
  socket.emit("device:start-streaming", {
    deviceId: user.deviceIds[0],
  });
}

export const stopStreaming = (user: any) => {
  socket.emit("device:stop-streaming", {
    deviceId: user.deviceIds[0],
  });
}

export const moveCamera = (user: any, angle: number) => {
  socket.emit("device:move-camera", {
    deviceId: user.deviceIds[0],
    angle,
  });
}

export const sendCommand = (user: any, command: string) => {
  socket.emit("device:remote-control", {
    deviceId: user.deviceIds[0],
    content: command,
  });
}

window.startStreaming = startStreaming

window.stopStreaming = stopStreaming
