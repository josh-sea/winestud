import React from 'react';
import Webcam from "react-webcam";
import { Button, Modal, Image, Header } from 'semantic-ui-react'


const QRScanner = () => {
    const webcamRef = React.useRef(null);
    const qrcode = window.qrcode;
    const [open, setOpen] = React.useState(false);
    const [ scanContent,updateScanContent ] = React.useState("");
    const [ wine, setWine ] = React.useState(null);

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      decodeImageFromBase64(imageSrc,function(decodedInformation){
        console.log(decodedInformation);
        (async ()=> {
            const response = await fetch(`https://d52bdf6a7379.ngrok.io/scan/${decodedInformation}`);
            const wine = await response.json();
            setWine(wine);
        })()
        updateScanContent(decodedInformation);
    });

    }, [webcamRef]);

    const decodeImageFromBase64 = (data, callback) => {
        // set callback
        qrcode.callback = callback;
        // Start decoding
        qrcode.decode(data)
    }

    return (
        <>
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>QR Scan</Button>}
            >
                <Modal.Header>Scan QR</Modal.Header>
                <Modal.Content>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                    <Modal.Description>
                        {scanContent}
                    </Modal.Description>
                    <Modal.Description>
                        {wine && wine.wine.name}
                    </Modal.Description>
                    <Modal.Description>
                        {wine && <a href={wine.wine.foods[0].recipe_link} target="_blank"  alt="recipe link">{wine.wine.foods[0].recipe_link}</a>}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>Close</Button>
                    <Button
                    content="Capture"
                    labelPosition='right'
                    icon='camera'
                    onClick={() => {
                        capture()
                        // setOpen(false)
                    }}
                    positive
                    />
                </Modal.Actions>
            </Modal>
        </>
    );
}

export default QRScanner;  