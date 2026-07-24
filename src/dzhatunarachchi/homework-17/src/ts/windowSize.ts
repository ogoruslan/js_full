// ==========================================================
// Демонстрація компіляції TypeScript
// ==========================================================

export interface WindowSize {
  width: number;
  height: number;
}

export function getWindowSize(): WindowSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function formatSize(size: WindowSize): string {
  return `${size.width}×${size.height}px`;
}
