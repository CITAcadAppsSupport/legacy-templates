import {
    SIT_CERT_LOGO 
} from "../common/images";

import {
    arial18PtRed,
    arial18PtRedBold,
    garamondItalic18Pt,
    helvetica12Pt,
    timesNewRoman18Pt,
    timesNewRoman18PtRed,
    sitLogoImgStyle
} from "../common/style";

export const renderSITJointLogo = (logo, logoStyle) => (
    <div className="row" style={{ marginTop: "-1rem" }}>
        <div className="col-md-4 text-left"  style={{ top: "0", bottom: "5", margin: "auto"}} >
            <img src={SIT_CERT_LOGO} style={sitLogoImgStyle} />
        </div>
        <div className="col-md-8 text-right">
            <img src={logo} style={logoStyle} />
        </div>
    </div >
);

export const renderAdditionalData = (certificate) => (
    <div>
        <div className="row d-flex justify-content-center" style={{ marginTop: "1rem" }}>
            <span style={garamondItalic18Pt}>{certificate.additionalData.cert}</span>
        </div>
        <div className="row d-flex justify-content-center">
            <span style={timesNewRoman18Pt}>{certificate.recipient.name}</span>
        </div>
        <div className="row d-flex justify-content-center">
            <span style={garamondItalic18Pt}>{certificate.additionalData.univ}</span>
        </div>
        <div className="row d-flex justify-content-center">
            <span style={garamondItalic18Pt}>{certificate.additionalData.joinUniv}</span>
        </div>
        <div className="row d-flex justify-content-center">
            <span style={arial18PtRedBold}>{certificate.additionalData.degree}</span>
        </div>
        <div className="row d-flex justify-content-center">
            {certificate.additionalData.program.length > 0 && (
                <span style={arial18PtRed}>{certificate.additionalData.program}</span>
            )}
        </div>
        <div className="row d-flex justify-content-center">
            {certificate.additionalData.major.length > 0 && (
                <span style={garamondItalic18Pt}>{certificate.additionalData.major}</span>
            )}
        </div>
        <div className="row d-flex justify-content-center">
            <p style={garamondItalic18Pt}>{certificate.additionalData.confDate}</p>
        </div>
        <div className="row d-flex justify-content-center">
            {certificate.additionalData.program.length === 0 && (
                <span style={timesNewRoman18PtRed}>&nbsp;</span>
            )}
        </div>
        <div className="row d-flex justify-content-center">
            {certificate.additionalData.major.length === 0 && (
                <span style={timesNewRoman18PtRed}>&nbsp;</span>
            )}
        </div>
    </div>
);

 


