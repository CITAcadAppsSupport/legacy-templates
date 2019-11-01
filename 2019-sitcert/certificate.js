import PropTypes from "prop-types"; 
import { 
  SIT_CERT_LOGO,
  SIT_CERT_SEAL 
} from "../common/images"; 
import { 
  arial18PtRed,
  arial18PtRedBold,
  garamondItalic18Pt,
  helvetica12Pt,
  timesNewRoman18Pt,
  timesNewRoman18PtRed,
  bgImgStyle,
  borderImgStyle,
  logoImgStyle, 
  sealImgStyle,
  presidentStyle,
  depPresidentStyle 
} from "../common/style";
 
const Template = ({ certificate }) => (
  <div className="container" style={borderImgStyle}>
    <div style={bgImgStyle}>
      <div className="row d-flex justify-content-center" style={{ marginTop: "-2rem" }}>
        <img src={SIT_CERT_LOGO} style={logoImgStyle} />
      </div>
      <div className="row d-flex justify-content-center" style={{ marginTop: "2rem" }}>
        <span style={garamondItalic18Pt}>{certificate.additionalData.cert}</span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={timesNewRoman18Pt}>{certificate.recipient.name}</span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={garamondItalic18Pt}>{certificate.additionalData.univ}</span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={arial18PtRedBold}>{certificate.additionalData.degree}</span>
      </div>
      {certificate.additionalData.program.length > 0 && (
        <div className="row d-flex justify-content-center">
           <span style={arial18PtRed}>{certificate.additionalData.program}</span>
        </div>
      )}
      {certificate.additionalData.major.length > 0 && (
        <div className="row d-flex justify-content-center">
           <span style={garamondItalic18Pt}>{certificate.additionalData.major}</span>
        </div>
      )}
      <div className="row d-flex justify-content-center">
        <p style={garamondItalic18Pt}>{certificate.additionalData.confDate}</p>
      </div>
      {certificate.additionalData.program.length === 0 && (
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman18PtRed}>&nbsp;</span>
        </div>
      )}
      {certificate.additionalData.major.length === 0 && (
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman18PtRed}>&nbsp;</span>
        </div>
      )}
      <div className="row" style={{ marginTop: "1rem", marginBottom: "-2rem" }}>
        <div className="col-md-4 text-left">
          <br />
          <img src={SIT_CERT_SEAL} style={sealImgStyle} />
        </div>
        <div className="col-md-4">&nbsp;</div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                src={certificate.additionalData.sign1}
                style={presidentStyle}
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
                style={depPresidentStyle}
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
      </div>
    </div>
  </div>
);

export default Template;
Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
