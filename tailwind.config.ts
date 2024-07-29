import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     screens:{
      xs:"320px",
      sm:"375px",
      sml:"500px",
      md:"667px",
      mdl:"768px",
      lg:"960px",
      lgl:"1024px",
      xl:"1280px"
     },
     colors:{
      amp_blue:"#00264d",
      amp_light:"#00274df1",
      amp_red:"#b3003b",
      lightText:"#ccc",
     },
     fontFamily:{
      bodyFont:["Poppins","sans-serif"]
     },
    },
  },
  plugins: [],
};
export default config;
