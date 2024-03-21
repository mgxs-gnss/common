export default class SpriteReader {
  constructor(
    image: HTMLImageElement | HTMLImageElement[],
    json: any, // Replace `any` with the actual type if known
    options?: {
      autoplay?: boolean;
      fillColor?: string | null;
      fps?: number;
      from?: number;
      loop?: boolean;
      onComplete?: () => void | null;
      onRepeat?: () => void | null;
      onRepeatComplete?: () => void | null;
      repeat?: number;
      retina?: boolean;
      canvasTarget?: HTMLCanvasElement | null;
      to?: number | null;
    }
  );

  setSize(w: number, h: number): void;
  findPack(): void;
  checkPack(): void;
  getCurrentRelatedToPack(): number;
  drawCache(): void;
  draw(): void;
  update(force?: boolean): void;
  play(): void;
  pause(): void;
  stop(): void;
  reverse(side?: number): void;
  goFromTo(from: number, to: number): void;
  goToAndStop(frame: number): void;

  // Accessors and mutators
  canvasTarget: HTMLCanvasElement;
  fps: number;
  loop: boolean;
  repeat: number;
  onComplete: (() => void) | null;
  onRepeat: (() => void) | null;
  onRepeatComplete: (() => void) | null;
}
