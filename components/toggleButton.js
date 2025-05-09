// import React, { useState } from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import styles from "@/components/toggleButton.module.css";

// export default function ToggleButtonn() {
//   const [mode, setMode] = useState('light');

//   const handleChange = (event, newMode) => {
//     if (newMode !== null) {
//       setMode(newMode);
//     }
//   };

//   return (
//     <div className={styles.toggleBtn}>
//       <ToggleButtonGroup
//         value={mode}
//         exclusive
//         onChange={handleChange}
//         className={styles.btnGrp}
//       >
//         <ToggleButton value="light"  className={styles.btnLight}>
//           Light Mode
//         </ToggleButton>
//         <ToggleButton value="dark" className={styles.btnDark}>
//           Dark Mode
//         </ToggleButton>
//       </ToggleButtonGroup>
//     </div>
//   );
// }

import React, { useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from "@/components/toggleButton.module.css";
import { DarkTheme } from "@/context/darkTheme";

export default function ToggleButtonn() {
  const { mode, toggleTheme } = useContext(DarkTheme);

  return (
    <div className={styles.toggleBtn}>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={(_, newMode) => {
          if (newMode) toggleTheme();
        }}
        className={styles.btnGrp}
      >
        <ToggleButton value="light" className={styles.btnLight}>
          Light Mode
        </ToggleButton>
        <ToggleButton value="dark" className={styles.btnDark}>
          Dark Mode
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
