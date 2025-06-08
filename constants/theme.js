const COLORS = {
    primary: "#4a90e2",
    secondary: "#50e3c2",
    muted: "#888888",
    danger: "#e74c3c",
  };
  
const FONTS = {
    regular: "System",
    bold: "System-Bold",
    size: {
      small: 12,
      medium: 16,
      large: 20,
      title: 24,
    },
  };
  
const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  };
  
const RADIUS = {
    sm: 4,
    md: 8,
    lg: 16,
  };


const LIGHT = {
  ...COLORS,
  background: "#ffffff",
  text: "#000000",
};

const DARK = {
  ...COLORS,
  background: "#000000",
  text: "#ffffff",
};

export default { LIGHT, DARK, FONTS, SPACING, RADIUS };
  