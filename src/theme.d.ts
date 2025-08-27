import '@mui/material/styles';

type BrandColors = {
  100: '#220c00';
  90: '#4e260f';
  80: '#7a3f1e';
  70: '#a7592d';
  60: '#d3723c';
  50: '#ff8c4b';
  40: '#ffa36f';
  30: '#ffd1b7';
  20: '#ffe8db';
  10: '#fff3ed';
};

type SuccessColors = {
  50: '#2d6d20';
};

type ErrorColors = {
  80: '#762322';
  70: '#9e2f2e';
  50: '#c53b39';
  20: '#eec4c4';
  10: '#f9ebeb';
};

type NeutralColors = {
  100: '#0b0b10';
  90: '#1e1e2c';
  80: '#494955';
  70: '#74747e';
  60: '#a3a4ab';
  50: '#c6c7cf';
  40: '#d1d2d9';
  30: '#dddde2';
  20: '#eeeef1';
  10: '#f9f9fa';
  0: '#ffffff';
};

declare module '@mui/material/styles' {
  interface Palette {
    primitives: {
      brand: BrandColors;
      neutral: NeutralColors;
      error: ErrorColors;
      success: SuccessColors;
    };
  }

  interface PaletteOptions {
    primitives: {
      brand?: BrandColors;
      neutral?: NeutralColors;
      error?: ErrorColors;
      success?: SuccessColors;
    };
  }
}
