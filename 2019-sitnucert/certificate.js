import PropTypes from "prop-types";
import {
    SIT_CERT_SEAL,
    NU_CERT_LOGO,
    NU_CERT_SEAL
} from "../common/images";
import {
    helvetica12Pt,
    bgImgStyle,
    borderImgStyle,
    nuLogoImgStyle,
    sitSealImgStyle,
    nuSealImgStyle,
    sitPresidentStyle,
    sitDepPresidentStyle,
    vicePresidentStyle,
    clerkSenteStyle
} from "../common/style";
import {
    renderSITJointLogo,
    renderAdditionalData
} from "../common/certificate";

const Template = ({ certificate }) => (
    <div className="container" style={borderImgStyle}>
        <div style={bgImgStyle}>
            {renderSITJointLogo(NU_CERT_LOGO, nuLogoImgStyle)}
            {renderAdditionalData(certificate)}
            <div className="row d-flex justify-content-center" style={{ marginTop: "1rem", marginBottom: "-2rem" }}>
                <div className="col-md-2 text-left">
                    <img src={SIT_CERT_SEAL} style={sitSealImgStyle} />
                </div>
                <div className="col-md-4 text-center">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img
                                src={certificate.additionalData.sign1}
                                style={sitPresidentStyle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span style={helvetica12Pt}>President</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img
                                src={certificate.additionalData.sign2}
                                style={sitDepPresidentStyle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span style={helvetica12Pt}>
                                Deputy President (Academic) & Provost
              </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img
                                src={certificate.additionalData.sign3}
                                style={vicePresidentStyle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span style={helvetica12Pt}>Vice Chancellor & President</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img
                                src={certificate.additionalData.sign4}
                                style={clerkSenteStyle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span style={helvetica12Pt}>
                                Clerk of Senate
              </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-right">
                    <img src={NU_CERT_SEAL} style={nuSealImgStyle} />
                </div>
            </div>
        </div>
    </div>
);

export default Template;
Template.propTypes = {
    certificate: PropTypes.object.isRequired
};