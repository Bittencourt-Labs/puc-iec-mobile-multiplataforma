// src/components/InstallButton.tsx

import { useInstallPrompt } from '../hooks/useInstallPrompt';

export function InstallButton() {
  const { canInstall, triggerInstall } = useInstallPrompt();

  if (!canInstall) return null;

  return (
    <button onClick={triggerInstall} style={styles.btn}>
      📲 Instalar app
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  btn: {
    background: '#01b4e4',
    color: '#0d253f',
    border: 'none',
    borderRadius: 6,
    padding: '8px 16px',
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: 14,
  },
};
