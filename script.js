document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
        console.error("WebGL not supported");
        return;
    }

    // Add your WebGL or other JS animation code here
    // Example: WebGL setup and animation logic
});
