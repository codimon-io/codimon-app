import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap'
import Nouislider from 'nouislider-react'
import wNumb from 'wnumb'
import {
  VideoPlayerWrapper,
  VideoPlayer,
  DeviceTitle,
  DevicePanel,
} from './RemoteControlStyle'

import '@styles/react/libs/noui-slider/noui-slider.scss'

const RemoteControlTemplate = ({
  command,
  handleMoveCamera,
  onChangeCommand,
  handleSendCommand,
}) => {
  return (
    <div className="remote-control-template">
      <VideoPlayerWrapper>
        <img
          id="video-screen"
          width="640"
          height="480"/>
      </VideoPlayerWrapper>
      <DeviceTitle>Pikachu</DeviceTitle>
      <DevicePanel>
        <Row>
          <Col md='6' sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle tag='h4'>Tracker</CardTitle>
              </CardHeader>
              <CardBody>
                <div className='d-flex justify-content-between mt-1'>
                  <div className='text-center'>
                    <CardText className='mb-50'>New Tickets</CardText>
                    <span className='font-large-1 font-weight-bold'>0</span>
                  </div>
                  <div className='text-center'>
                    <CardText className='mb-50'>Open Tickets</CardText>
                    <span className='font-large-1 font-weight-bold'>0</span>
                  </div>
                  <div className='text-center'>
                    <CardText className='mb-50'>Response Time</CardText>
                    <span className='font-large-1 font-weight-bold'>0</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md='2' sm='12'>
            <Card>
              <CardHeader>
                <CardTitle tag='h4'>Camera</CardTitle>
              </CardHeader>
              <CardBody className='text-center'>
                <Nouislider
                  start={0}
                  direction={'ltr'}
                  orientation='vertical'
                  tooltips={true}
                  range={{
                    min: -90,
                    max: 90
                  }}
                  style={{
                    height: '100px'
                  }}
                  onSlide={handleMoveCamera}
                />
              </CardBody>
            </Card>
          </Col>

          <Col md='4' sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle tag='h4'>Command</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className='mt-1' sm='12'>
                    <InputGroup>
                      <Input 
                        value={command}
                        onChange={onChangeCommand}
                        placeholder='Send command' />
                      <InputGroupAddon addonType='append'>
                        <Button 
                          color='primary' 
                          onClick={handleSendCommand} 
                          outline>
                          Go
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DevicePanel>
    </div>
  )
}
export default RemoteControlTemplate
