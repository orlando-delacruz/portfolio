import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail, IoCall, IoLocation, IoTime } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import {
  FiCode,
  FiLayout,
  FiMonitor,
  FiTrendingUp,
  FiEye,
  FiZap,
  FiUsers,
} from "react-icons/fi";

// Registry mapping CMS `iconKey` strings to icon components.
// CMS stores only the key; rendering stays in code so icon
// choices remain type-safe and tree-shakeable.
const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  mail: IoMail,
  "mail-ios": IoIosMail,
  phone: FaPhone,
  call: IoCall,
  location: FaLocationDot,
  "location-outline": IoLocation,
  time: IoTime,
  "laptop-code": FaLaptopCode,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  javascript: SiJavascript,
  "file-download": MdOutlineFileDownload,
  code: FiCode,
  layout: FiLayout,
  monitor: FiMonitor,
  "trending-up": FiTrendingUp,
  eye: FiEye,
  zap: FiZap,
  users: FiUsers,
};

const FALLBACK_ICON = FiZap;

/**
 * Resolve a CMS iconKey to a renderable icon component.
 * Unknown keys warn once and fall back — never crash.
 * @param {string} iconKey
 * @returns {React.ElementType}
 */
export const getIcon = (iconKey) => {
  if (iconKey && ICONS[iconKey]) return ICONS[iconKey];
  if (iconKey) {
    console.warn(`[iconMap] Unknown iconKey "${iconKey}", using fallback.`);
  }
  return FALLBACK_ICON;
};

export default ICONS;
