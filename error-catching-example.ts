setTimeout(() => {
  throw new Error("ooops");
}, 300);

process.on("uncaughtException", () => {
  // handle uncaught callback error
});

process.on("unhandledRejection", () => {
  // handle uncaught promise rejection
});
