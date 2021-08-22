import styled from 'styled-components'

const VideoPlayerWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`

const VideoPlayer = styled.video`
  display: block;
`

const DeviceTitle = styled.h2`
  padding: 31px 0 0 49px;
  margin-bottom: 0 !important;
`

const DevicePanel = styled.div`
  padding: 31px 49px;
`

export {
  VideoPlayerWrapper,
  VideoPlayer,
  DeviceTitle,
  DevicePanel,
}