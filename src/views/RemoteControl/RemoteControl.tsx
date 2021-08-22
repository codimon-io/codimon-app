import { useState, useEffect } from 'react';
import { initSocket, startStreaming, stopStreaming, moveCamera, sendCommand } from './socketClient';

import RemoteControlTemplate from './RemoteControlTemplate'

const user = {
  userId: "245254bc-0a2a-4c0e-8c08-ee36ebc3cd46",
  name: "Bruce",
  deviceIds: ["daeb2ef9-2cd0-4d7a-9927-4c252bcadb9b"],
};

const RemoteControl = () => {
  const [command, setCommand] = useState('')

  useEffect(() => {
    initSocket(user)

    setTimeout(() => {
      startStreaming(user);
    }, 2000)

    return () => {
      stopStreaming(user);
    }
  }, []);

  const handleMoveCamera = (render, handle, value, un, percent) => {
    debugger
    console.log(value[0])

    moveCamera(user, value[0]);
  }

  const onChangeCommand = (event) => {
    setCommand(event.target.value)
  }

  const handleSendCommand = () => {
    sendCommand(user, command);

    setCommand('')
  }

  return (
    <RemoteControlTemplate
      command={command}
      handleMoveCamera={handleMoveCamera}
      onChangeCommand={onChangeCommand}
      handleSendCommand={handleSendCommand}/>
  )
}

export default RemoteControl