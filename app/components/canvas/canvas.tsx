import style from './canvas.module.scss';
import { Application } from '@splinetool/runtime';

export const Canvas = () => {
  try {
    return (
      <>
        <canvas id="canvas3d" className={style.canvas}></canvas>
        <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
        <>
          {(() => {
            const canvas3d = document.getElementById('canvas3d');
            if (canvas3d) {
              const app = new Application(canvas3d as HTMLCanvasElement);
              app.load('https://prod.spline.design/A85mA0XZpZVnB9ai/scene.splinecode');
            }
          })()}
        </>
      </>
    );
  } catch (error) {
    console.error('An error occurred while loading the 3D scene:', error);
    // You can log the error or handle it in a way that suits your application
  }
};