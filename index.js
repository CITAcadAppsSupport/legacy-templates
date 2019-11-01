import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";


const SITCert2018 = dynamic(() =>
  import("./2018-certificate" /* webpackChunkName: "SITTemplates" */)
);

const SITCert2019 = dynamic(
  import("./2019-sitcert" /* webpackChunkName: "SITTemplates" */)
); 

const SITDPCert2019 = dynamic(
  import("./2019-sitdpcert" /* webpackChunkName: "SITDPTemplates" */)
); 

const SITMUCert2019 = dynamic(
  import("./2019-sitmucert" /* webpackChunkName: "SITMUTemplates" */)
); 

const SITNUCert2019 = dynamic(
  import("./2019-sitnucert" /* webpackChunkName: "SITNUTemplates" */)
);   

const SITUOGCert2019 = dynamic(
  import("./2019-situogcert" /* webpackChunkName: "SITUOGTemplates" */)
);   
 
const templates = {
  "2018-certificate": SITCert2018,
  "2019-sitcert": SITCert2019,
  "2019-sitdpcert": SITDPCert2019,
  "2019-sitmucert": SITMUCert2019,
  "2019-sitnucert": SITNUCert2019,
  "2019-situogcert": SITUOGCert2019
}; 

export default addDirToTemplatePath("singaporetech", templates);
