import { useEffect, useState } from "react";

export const CookMode: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported("wakeLock" in navigator);
  }, []);

  useEffect(() => {
    if (enabled) {
      navigator.wakeLock
        .request("screen")
        .then((lock) => setWakeLock(lock))
        .catch(() => setEnabled(false));
    } else {
      wakeLock?.release();
      setWakeLock(null);
    }
  }, [enabled]);

  if (!supported) return null;

  return (
    <label className="label gap-2 cursor-pointer">
      <input type="checkbox" className="toggle" checked={enabled} onChange={() => setEnabled((e) => !e)} />
      <span className="label-text text-base-content">Cook Mode</span>
      <span className="label-text text-sm">Prevent your screen from going dark</span>
    </label>
  );
};
