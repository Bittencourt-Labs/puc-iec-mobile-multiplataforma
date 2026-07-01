// src/screens/OfflineScreen.tsx

export function OfflineScreen() {
  return (
    <div style={styles.center}>
      <p style={styles.icon}>📵</p>
      <h2 style={styles.title}>Você está offline</h2>
      <p style={styles.msg}>Nenhum dado em cache ainda. Volte online para carregar os filmes.</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  center: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 40px', textAlign: 'center' },
  icon: { fontSize: 48, margin: '0 0 12px' },
  title: { color: '#90a4ae', margin: '0 0 8px' },
  msg: { color: '#546e7a', fontSize: 14, maxWidth: 300 },
};
