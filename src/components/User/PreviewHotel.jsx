import React from 'react';
import './css/PreviewHotel.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
function PreviewHotel(props) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="preview-hotel">
            <div className="preview-hotel-left-big">
                <div className="preview-hotel-left-big-img">
                    <img
                        src="https://tripi.vn/cdn-cgi/image/width=640/https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/19/AxdYDt-cSgOvvq9fENXWvQ-17.jpeg"
                    />
                </div>
            </div>
            <div className="preview-hotel-right-small">
                <div className="preview-hotel-right-small-top">
                    <div className="preview-hotel-right-small-img preview-hotel-right-small-img1">
                        <img
                            src="https://tripi.vn/cdn-cgi/image/width=320/https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/19/AxdYDt-cSgOvvq9fENXWvQ-16.jpeg"
                        />
                    </div>
                    <div className="preview-hotel-right-small-img preview-hotel-right-small-img2">
                        <img
                            src="https://tripi.vn/cdn-cgi/image/width=320/https://storage.googleapis.com/hms_prod/photo/img/1616841433022GE/ladalat-hotel-5.jpg"
                        />
                    </div>
                </div>
                <div className="preview-hotel-right-small-bottom">
                    <div className="preview-hotel-right-small-img preview-hotel-right-small-img1">
                        <img
                            src="https://tripi.vn/cdn-cgi/image/width=320/https://storage.googleapis.com/hms_prod/photo/img/1616841433056Fe/ladalat-hotel-6.jpg"
                        />
                    </div>
                    <div onClick={() => { setOpen(true) }} className="preview-hotel-right-small-img preview-hotel-right-small-img2 preview-hotel-right-small-img4">
                        <img
                            src="https://tripi.vn/cdn-cgi/image/width=1280/https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/19/KRIFBeqNThCxeAuq8GB9GA-36.jpeg"
                        />
                    </div>
                    <Dialog
                        open={open}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title"><i onClick={handleClose} class="fal fa-times"></i></DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default PreviewHotel;