import {Svg, Path, Circle} from 'react-native-svg';
import React from 'react';
export function TheIconEyeOpened() {
  return (
    <Svg width="20" height="20" className="ionicon" viewBox="0 0 512 512">
      <Path
        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
        fill="#212121"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <Circle
        cx="256"
        cy="256"
        r="80"
        fill="#FDFDFD"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
      />
    </Svg>
  );
}
