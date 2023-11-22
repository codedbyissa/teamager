const defaultTheme = {
    background: {
        light: {
          main: '#e7e8eb',
          contrast: '#f5f6f7',
          text: '#000',
        },
        dark: {
          main: '#0F0F0F',
          contrast: '#383c4a',
          text: '#f0e8cf',
        }
    },
    colors: {
        primary: '#2FAF7C',
        secondary: '#082A44',
    }
};

let customTheme = {
  colors: {
      // primary: '#E3371E',
      // secondary: '#FF7A48',
      primary: "",
      secondary: "",
  }
}

let modeTheme:string = "light";

export function getTheme() {
  return {
    background: defaultTheme.background[modeTheme as keyof typeof defaultTheme.background],
    colors: {
      primary: customTheme.colors.primary? customTheme.colors.primary : defaultTheme.colors.primary,
      secondary: customTheme.colors.secondary? customTheme.colors.secondary : defaultTheme.colors.secondary
    }
  }
}

export function setTheme(primary:string, secondary:string, mode:string){
 customTheme.colors.primary = primary;
 customTheme.colors.secondary = secondary;
 modeTheme = mode;
}


