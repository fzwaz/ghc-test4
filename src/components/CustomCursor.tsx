import { useEffect, useRef } from "react";

interface CustomCursorProps {
  /** Dot fill — original: #20B2AA */
  dotColor?: string;
  /** Ring border — original: rgba(32,178,170,0.35) */
  ringColor?: string;
  /** Ring idle size — original: 34 */
  ringSize?: number;
  /** Ring size over links/buttons — original: 52 */
  ringHoverSize?: number;
  /** Dot size — original: 7 */
  dotSize?: number;
  /** Ring follow lerp — original: 0.11 */
  lerp?: number;
  /** z-indexes — original: dot 9999, ring 9998 */
  zIndex?: number;
}

const CURSOR_CSS = `
  .cc-dot {
    position: fixed; top: 0; left: 0;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.08s;
  }
  .cc-ring {
    position: fixed; top: 0; left: 0;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                height 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.25s,
                background-color 0.25s;
  }
  @media (hover: none), (pointer: coarse) {
    .cc-dot, .cc-ring { display: none !important; }
  }
  @media (hover: hover) and (pointer: fine) {
    body.cc-cursor-on,
    body.cc-cursor-on a,
    body.cc-cursor-on button,
    body.cc-cursor-on [role="button"] {
      cursor: none !important;
    }
  }
`;

/**
 * CustomCursor — exact extraction from GHC-mar / Maroon Advisors index.html.
 *
 * Original CSS:
 *   .c-dot  { 7px,  background #20B2AA, round, fixed, z 9999, translate(-50%,-50%) }
 *   .c-ring { 34px, border 1px solid rgba(32,178,170,0.35), round, fixed, z 9998 }
 *   hover on a/button -> ring grows to 52px
 *   hidden on touch, native cursor hidden on hover-capable devices.
 *
 * Original JS:
 *   dot follows instantly, ring lerps with factor 0.11 via requestAnimationFrame.
 *
 * Usage (Next.js / React + TS):
 *   import CustomCursor from "./CustomCursor";
 *   export default function Page() {
 *     return (<><CustomCursor /><main>...</main></>);
 *   }
 */
export default function CustomCursor({
  dotColor = "#20B2AA",
  ringColor = "rgba(32,178,170,0.35)",
  ringSize = 34,
  ringHoverSize = 52,
  dotSize = 7,
  lerp = 0.11,
  zIndex = 9999,
}: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop / fine-pointer only — matches original matchMedia('(hover: hover)')
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("cc-cursor-on");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot) {
        dot.style.left = `${mx}px`;
        dot.style.top = `${my}px`;
      }
      if (ring) {
        rx += (mx - rx) * lerp;
        ry += (my - ry) * lerp;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    // Grow ring over interactive elements.
    // Original used querySelectorAll('a,button') once; delegation also covers
    // dynamically added nodes and matches the same 52px / 34px behaviour.
    const isInteractive = (t: EventTarget | null) =>
      t instanceof HTMLElement && !!t.closest("a,button,[role='button'],[data-cursor-hover]");

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target) && ringRef.current) {
        ringRef.current.style.width = `${ringHoverSize}px`;
        ringRef.current.style.height = `${ringHoverSize}px`;
      }
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target) && ringRef.current) {
        ringRef.current.style.width = `${ringSize}px`;
        ringRef.current.style.height = `${ringSize}px`;
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("cc-cursor-on");
    };
  }, [lerp, ringHoverSize, ringSize]);

  return (
    <>
      <style>{CURSOR_CSS}</style>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          width: dotSize,
          height: dotSize,
          background: dotColor,
          zIndex,
        }}
        className="cc-dot"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          width: ringSize,
          height: ringSize,
          border: `1px solid ${ringColor}`,
          zIndex: zIndex - 1,
        }}
        className="cc-ring"
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   Vanilla-TS alternative (no React needed).
   Copy-paste into any .ts file if you don't use React:

   export function initCustomCursor(opts?: {
     dotColor?: string; ringColor?: string;
   }): () => void {
     const dot = document.createElement("div");
     const ring = document.createElement("div");
     const dotColor = opts?.dotColor ?? "#20B2AA";
     const ringColor = opts?.ringColor ?? "rgba(32,178,170,0.35)";
     const style = document.createElement("style");
     style.textContent = `
       .cc-dot{position:fixed;top:0;left:0;width:7px;height:7px;background:${dotColor};
         border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);}
       .cc-ring{position:fixed;top:0;left:0;width:34px;height:34px;border:1px solid ${ringColor};
         border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);
         transition:width .25s cubic-bezier(0.16,1,0.3,1),height .25s cubic-bezier(0.16,1,0.3,1);}
       @media(hover:none){.cc-dot,.cc-ring{display:none;}}
       @media(hover:hover){body{cursor:none;}}`;
     document.head.appendChild(style);
     dot.className = "cc-dot"; ring.className = "cc-ring";
     document.body.append(dot, ring);
     let mx=0,my=0,rx=0,ry=0,raf=0;
     const move=(e:MouseEvent)=>{mx=e.clientX;my=e.clientY;};
     const tick=()=>{
       dot.style.left=mx+"px"; dot.style.top=my+"px";
       rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
       ring.style.left=rx+"px"; ring.style.top=ry+"px";
       raf=requestAnimationFrame(tick);
     };
     if(matchMedia("(hover: hover)").matches){
       addEventListener("mousemove",move);
       tick();
       document.querySelectorAll("a,button").forEach(el=>{
         el.addEventListener("mouseenter",()=>{ring.style.width=ring.style.height="52px";});
         el.addEventListener("mouseleave",()=>{ring.style.width=ring.style.height="34px";});
       });
     }
     return ()=>{cancelAnimationFrame(raf);removeEventListener("mousemove",move);
       style.remove();dot.remove();ring.remove();};
   }
   ───────────────────────────────────────────── */
